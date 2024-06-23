import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbaroutflow from '../Components/Navbaroutflow'

const Aboutus = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  if (location.pathname === '/sign') {
    return null; // don't render navbar on sign up page
  }

  return (
    <div>
     
        {!isSignedIn && (
                <li class="nav-item">
                  <a class="nav-link" href='/sign' onClick={handleSignIn}>Sign</a>
                </li>
              )}

Aboutus


    </div>
  )
}

export default Aboutus