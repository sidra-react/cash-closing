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
const Signup = () => {
  const history = useNavigate();
  const [resetToken, setResetToken] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState("sign-up"); // Default tab
  const [code, setCode] = useState(''); // 4-digit code
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [codeValue, setCodeValue] = useState('');
  const { t } = useTranslation();

  const handleConfirmEmail = (e) => {
    e.preventDefault();
    setTab("reset-password"); // Set the tab to "reset-password"
    // TO DO: Send a request to your backend to send the code to the user's email
    console.log('Confirm email code:', code);
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
      alert("Wrong details");
      console.error(error);
    }
  }

  return (
    <div className="containerr">
        <div className="side">            <img src={sidepic} className="side-image" /> 
</div>

    <div className="container">
    
     <img src={logo} className="heading-image" /> 
       <h1>{t('WelcometoSaveNum')}SaveNum</h1>
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
      
      <form onSubmit={submit}>
        {tab === "sign-in" ? (
          <div className="form-content">
            <h2>{t('LOGIN')}</h2>
            <div className="group">
              <label htmlFor="user" className="label">
                {t('Username')}
              </label>
              <input id="user" type="text" className="input" onChange={(e) => setName(e.target.value)} />
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
            <h2>{t('Sign Up')}</h2>
            <div className="group">
              <label htmlFor="user" className="label">
                {t('Username')}
              </label>
              <input id="user" type="text" className="input" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="group">
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
              <input id="email" type="text" className="input" onChange={(e) => setEmail(e.target.value)} />
            </div>
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
  </div>
) : tab === "reset-password" ? (
  <div className="form-content">
    <h2>Reset Password</h2>
    <p>Enter a new password for your account.</p>
    <div className="group">
      <label htmlFor="password" className="label">
        New Password
      </label>
      <input id="password" type="password" className="input" onChange={(e) => setPassword(e.target.value)} />
    </div>
    <div className="group">
      <label htmlFor="confirm-password" className="label">
        Confirm Password
      </label>
      <input id="confirm-password" type="password" className="input" onChange={(e) => setConfirmPassword(e.target.value)} />
    </div>
    <div className="group">
      <button type="submit" className="button">
        Reset Password
      </button>
    </div>
  </div>
) : null}
      </form>
    </div>
    </div>
  );
};

export default Signup;