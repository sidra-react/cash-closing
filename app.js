//server.js
const bcrypt = require('bcrypt');
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('./mongo');
const User = require('./Model');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const Mailjet = require('node-mailjet');


const sendEmail = async (to, pin) => {
  try {
    const validatedTo = validateInput(to);
    const validatedPin = validateInput(pin);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: validatedTo,
      subject: 'Your PIN',
      text: `Your PIN is: ${validatedPin}`,
      html: `<p>Your PIN is: ${validatedPin}</p>`
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
    // Send error message to user or monitoring system
  }
};
app.post('/send-pin', (req, res) => {
  const { to, pin } = req.body;
  sendEmail(to, pin)
    .then(() => {
      res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error sending email', error });
    });
});
app.get('/getByEmail', async (req, res) => {
    const { username } = req.query;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log("hey, I am email");
        res.json({ email: user.email });
        console.log("Name:", user.username); 
        console.log("Email:", user.email); 

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


app.get('/profile/:username', async (req, res) => {
    const { usernamee, editedPhone, editedProfession } = req.body;

    try {
        const user = await User.findOneAndUpdate(
            { $set: { username: usernamee }},
            { $set: { phone: editedPhone, profession: editedProfession } },
            { new: true } // This option returns the updated user
        );

        res.json(user); // Return the updated user as response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route handler for user sign up and login
app.post("/sig", async (req, res) => {
  try {
    const { username, email, password, name, action } = req.body;

    if (action === "signup") {
      const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });

      if (existingUser) {
        return res.json("exist");
      } else {
        const newUser = new User({
          name: name,
          username: username,
          email: email,
          password: password
        });

        await newUser.save();
        
        return res.json("success");
      }
    } else if (action === "login") {
      try {
        const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
       
        if (user) {
          // Compare password using user.password field (ensure you hash passwords before saving)
          if (user.password === password) {
            res.json("exist"); 
          } else {
            res.json("invalid"); 
          }
        } else {
          res.json("notexist");             
        }
      } catch (e) {
        res.json("fail");
      }
      console.log("hey, I am called2");
    } else {
      return res.json("invalidaction");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("fail");
  }
});
app.post('/check-email', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ success: true, message: 'Email found' });
  } else {
     
    return res.json({ success: false, message: 'Email not found' });
  }
});

app.post('/api/reset-password', async (req, res) => {
  const { email, password2, confirmPassword2 } = req.body;
     console.log( email, password2, confirmPassword2);
  // Validate input
  if (!email || !password2 || !confirmPassword2) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  // Check if email exists in database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ success: false, message: 'Email not found' });
  }

  // Check if passwords match
  if (password2 !== confirmPassword2) {
    return res.status(400).json({ success: false, message: 'Passwords do not match' });
  }

  // Hash and update password

await User.updateOne({ _id: user._id }, { password: password2 });
  // Return success response
  res.json({ success: true, message: 'Password reset successfully' });
});


app.listen(8000, () => {
    console.log("Server listening on port 8000");
});
