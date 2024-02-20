import React from 'react';
import './ContactUs.css';
import Navbar from "../../../components/navbar/Navbar"; // Import Navbar
import Footer from "../../../components/footer/Footer"; // Import Footer

const ContactUs = () => {
  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <div className="mainContentArea">
        <form className="contactForm">
          <h2>Contact Us</h2>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer/>

    </>
  );
};

export default ContactUs;
