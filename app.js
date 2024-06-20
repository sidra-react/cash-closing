//server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('./mongo');
const User = require('./Model');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const sgMail = require('@sendgrid/mail');



sgMail.setApiKey(process.env.SENDGRID_API_KEY);



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
        const { username, email, password, action } = req.body;

        if (action === "signup") {
            const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });

            if (existingUser) {
                return res.json("exist");
            } else {
                const newUser = new User({
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


app.post('/sendemail', (req, res) => {
  const { email, subject, text } = req.body;
  const msg = {
    to: email,
    from: 'sidranoor2802@gmail.com',
    subject,
    text,
  };
  sgMail.send(msg).then(() => {
    res.json({ success: true, message: 'Email sent successfully' });
  }).catch((error) => {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  });
});
app.listen(8000, () => {
    console.log("Server listening on port 8000");
});
