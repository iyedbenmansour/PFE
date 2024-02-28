import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="mainContentArea">
        <form className="contactForm" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required onChange={(e) => setMessage(e.target.value)} />

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
