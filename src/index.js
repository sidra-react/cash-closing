import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store'; 
import Aboutus from './Pages/Aboutus';
import './i18n';
import Contact from './Pages/Contact';
import Learntouse from './Pages/Learntouse';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Homee from './Components/Homee';
import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Provider store={store}> 
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<Aboutus />} />
                <Route path="/contact" element={<Contact />} />
          <Route path="/guide" element={<Learntouse />} />
          <Route path="/home" element={<Homee />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/profile/:username" element={<Profile />}  />
          

        </Routes>
      </BrowserRouter>
      <App/>
    </Provider>
  
  </React.StrictMode>
);

reportWebVitals();
