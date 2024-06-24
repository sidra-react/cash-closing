import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import '../Styles/Com.css';
import LanguageOption from './LanguageOption';
import 'font-awesome/css/font-awesome.min.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logo from '../Styles/head2.png';
import sidepic from '../Styles/sidepic.JPG';
///


const Signup = () => {

  const history = useNavigate();
  const [password2, setPassword2] = useState('');
const [confirmPassword2, setConfirmPassword2] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
   const [name, setName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState("sign-up"); // Default tab
  const [code, setCode] = useState(''); // 4-digit code
    const [flag, setflag] = useState('false'); // 4-digit code

  const [confirmationSent, setConfirmationSent] = useState(false);
  const [codeValue, setCodeValue] = useState('');
  const { t } = useTranslation();
const handleConfirmEmail = async (e) => {
  e.preventDefault();
  console.log(email)
  try {
    const response = await axios.post('http://localhost:8000/check-email', {
      email
    });
    const { data } = response;

     console.log(data.message)
    const { success, message, error } = response.data;
    if (success) {
      if (message === 'Email found') {
        setflag(true)
  
      } else {
      
        console.log('Email not found');
      }
    } else {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
if(flag===true){
alert("Email found")
   setflag(false)

      setTab("reset-password")
}
else{
  alert("Email not found")
}
  // const code = Math.floor(Math.random() * 9000) + 1000;

  // const emaill = 'sidra.noor.2802002@gmail.com'; // Assuming 'email' is the user's email address

  // try {
  //   const response = await axios.post('http://localhost:8000/send-pin', {
  //     to: emaill,
  //     pin: code
  //   });
  //   const { success, message, error } = response.data;
  //   if (success) {
  //     console.log(message);
  //   } else {
  //     console.error(error);
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
};
const handleResetPassword = async () => {
  console.log(password2,confirmPassword2)
  try {
    const response = await axios.post('http://localhost:8000/api/reset-password', {
      email,
      password2,
      confirmPassword2
    });

    if (response.data.success) {
      setSuccess(true);
      setError('');
    } else {
      setError(response.data.message);
    }
  } catch (error) {
    setError(error.message);
  }
};

  async function submit(e) {
    e.preventDefault();
    try {
      let action = "login"; 
      if (tab === "sign-up") {
        action = "signup"; 
      }

      const response = await axios.post("http://localhost:8000/sig", {
        username, 
        email,
        password,
        name,
        action
      });

      console.log("Response data:", response.data);
      console.log("Tab:", tab);
      if (response.data === "exist" && tab === "sign-in") {
        console.log("data has logged", username);
        alert("data has logged", username)
        history("/home/" + username, { state: { id: username } });
      } else if (response.data === "notexist" && tab === "sign-in") {
        alert("User has not signed up");
      } else if (response.data === "exist" && tab === "sign-up") {
        alert("User already exists");
      } else if (response.data === "success" && tab === "sign-up") {
        alert("User created");
        history("/home", { state: { id: username, email1: email } });
      }
    } catch (error) {
      alert("Data not found");
      console.error(error);
    }
  }

  return (
    <div className="containerr">
          <a href='/guide'>{t('home')}</a>
        <div className="side">     
                 <img src={sidepic} className="side-image" /> 
</div>

    <div className="containerc1">
    
          
      <form onSubmit={submit}>
        {tab === "sign-in" ? (
          
          <div className=" signbox">
             <img src={logo} className="heading-image" /> 
       <h1>&nbsp;&nbsp;&nbsp;&nbsp;Welcome Back!</h1>
      <p>&nbsp;&nbsp;Welcome back, please enter your details.</p>
        <button className="bbutton">
   
  <FcGoogle /> &nbsp;&nbsp;Register with Google
</button>
<br />
<br />
<button className="bbutton">
<FaFacebook /> &nbsp;Register with Facebook
</button>
      <br />
      <br />
      <div className="line-container">
        <span className="line"></span>
        <span className="or">or</span>
        <span className="line"></span>
      </div>

            <h2>{t('LOGIN')}</h2>
            <div className="group">
              <label htmlFor="user" className="label">
                {t('Username')}
              </label>
              <input id="user" type="text" className="input" onChange={(e) => setusername(e.target.value)} />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                {t('password')}
                <span className="forgot-password" onClick={() => setTab("forgot-password")}>{t('Forgot Password?')}</span>
              </label>
              <input id="pass-sign-in" type="password" className="input" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="group">
              <button type="submit" className="button">{t('LOGIN')}</button>
            </div>
            <p className="foot-lnk">{t('Dont have an account?')} <span onClick={() => setTab("sign-up")}>{t('Sign Up')}</span></p>
          </div>
        ) : tab === "sign-up" ? (
          <div className="form-content">
              <img src={logo} className="heading-image" /> 
       <h1>{t('WelcometoSaveNum')}</h1>
      <p>&nbsp;&nbsp;{t('Registernowandstartyouradventure')}</p>
        <button className="bbutton">
   
  <FcGoogle /> &nbsp;&nbsp;Register with Google
</button>
<br />
<br />
<button className="bbutton">
<FaFacebook /> &nbsp;Register with Facebook
</button>
      <br />
      <br />
      <div className="line-container">
        <span className="line"></span>
        <span className="or">or</span>
        <span className="line"></span>
      </div>
            <h2>{t('Sign Up')}</h2>
            <div className="group">
  
  <div className="input-container">
    <div>
      <label htmlFor="user" className="label">{t('Username')}</label>
      <input id="user" type="text" className="input" style={{ width: '100%' }} onChange={(e) => setusername(e.target.value)} />
    </div>
    <div>
      <label htmlFor="name" className="label">{t('Name')}</label>
      <input id="name" type="text" className="input" style={{ width: '110%' }} onChange={(e) => setName(e.target.value)} />
    </div>
  </div>
</div>         <div className="group">
              <label htmlFor="pass-sign-up" className="label">
                {t('password')}
              </label>
              <input id="pass-sign-up" type="password" className="input" data-type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="group">
              <label htmlFor="pass-repeat" className="label">
                {t('Repeat password')}
              </label>
              <input id="pass-repeat" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
              <label htmlFor="email" className="label">
                {t('Email')}
              </label>
            <input id="email" type="email" className="input" 
         pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
         onChange={(e) => setEmail(e.target.value)} 
         required />    </div>
            <div className="group">
              <button type="submit" className="button">{t('Sign Up')}</button>
            </div>
            <p className="foot-lnk">{t('Already a member?')} <span onClick={() => setTab("sign-in")}>{t('LOGIN')}</span></p>
          </div>
          ) : tab === "forgot-password" ? (
  <div className="form-content">
    <h2>Forgot Password</h2>
    <p>Enter the email address you used when joined and we’ll send reset instructions to reset your password.</p>
    <div className="group">
      <label htmlFor="email" className="label">
        Email
      </label>
      <input id="email" type="text" className="input" onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="group">
      <button type="submit" className="button" onClick={handleConfirmEmail}>
        Reset Password
      </button>
    </div>
                <p className="foot-lnk">Back to log in page? <span onClick={() => setTab("sign-in")}>{t('LOGIN')}</span></p>
    
   
  </div>
) : tab === "reset-password" ? (
  <div className="form-content">
    <h2>Reset Password</h2>
    <p>Enter a new password for your account.</p>
    <div className="group">
      <label htmlFor="password" className="label">
        New Password
      </label>
      <input id="password" type="password" className="input" onChange={(e) => setPassword2(e.target.value)} />
    </div>
    <div className="group">
      <label htmlFor="confirm-password" className="label">
        Confirm Password
      </label>
      <input id="confirm-password" type="password" className="input" onChange={(e) => setConfirmPassword2(e.target.value)} />
    </div>
    <div className="group">
      <button type="submit" className="button" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
    <p className="foot-lnk">{t('Dont have an account?')} <span onClick={() => setTab("sign-up")}>Register</span></p>
   
  </div>
) : null}
      </form>
    </div>
    </div>
  );
};

export default Signup;