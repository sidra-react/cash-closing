import React from 'react';
import '../Styles/Contact.css';
import Navbar from '../Components/Navbar';
const Contact = () => {
  return (
    <div className='bodycontact'>
      <Navbar/>
      <h2 className='lerntouseposit'>Contact us</h2>
      <h7 className='lerntousetxt2'>Contact us</h7>

      <h7 className='dashboardtext'>Dashboard</h7>
      <span className="triangle-right"></span>

      <div className='contactbox'>
        <form>
          <div className="form-row">
            <label className="full-width">Why are you contacting us today?</label>
            <input type="text" className="full-width" placeholder="Please Select.." />
          </div>

         <div className="form-row">
  <label className="full-width">Name</label>
  <input type="text" className="full-width" placeholder="Name" />
</div>

<div className="form-row">
  <label className="full-width">Email</label>
  <input type="email" className="full-width" placeholder="Email" />
</div>
          <div className="form-row">
            <label className="full-width" >Phone</label>
            <input type="tel" className="full-width" placeholder="Phone"/>
          </div>

          <div className="form-row formroww">
            <label className="full-width">Write message here</label>
            <textarea className="full-width" placeholder="Message..."/>
          </div>

          <div className="button-container">
            <button className="cancel-button">Cancel</button>
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;