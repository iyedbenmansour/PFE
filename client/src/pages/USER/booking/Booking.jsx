// Booking.jsx
import React, { useState } from "react";
import "./booking.css";
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import QRCodeDisplay from "../../../components/QRCodeDisplay/QRCodeDisplay"; // Import QRCodeDisplay

const Booking = () => {
  // State for form inputs
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [carModel, setCarModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [bookingStartDate, setBookingStartDate] = useState("");
  const [bookingEndDate, setBookingEndDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  // Function to generate a string representation of the booking information
  const generateBookingInfoString = () => {
    return `Full Name: ${fullName}, Phone Number: ${phoneNumber}, Email: ${email}, Car Model: ${carModel}, License Plate: ${licensePlate}, Booking Start Date: ${bookingStartDate}, Booking End Date: ${bookingEndDate}`;
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate that the end date is not before the start date
    if (new Date(bookingEndDate) < new Date(bookingStartDate)) {
      alert("The end date cannot be before the start date.");
      return;
    }
    // Set the isSubmitted state to true
    setIsSubmitted(true);
    // Handle booking logic here
    console.log(generateBookingInfoString());
  };

  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="mainContentArea">
          <form className="bookingForm" onSubmit={handleSubmit}>
            <h2>Fill this form to book </h2>

            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="carModel">Car Model:</label>
            <input
              type="text"
              id="carModel"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              required
            />

            <label htmlFor="licensePlate">License Plate:</label>
            <input
              type="text"
              id="licensePlate"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
              required
            />

            <label htmlFor="bookingStartDate">Booking Start Date:</label>
            <input
              type="date"
              id="bookingStartDate"
              value={bookingStartDate}
              onChange={(e) => setBookingStartDate(e.target.value)}
              required
            />

            <label htmlFor="bookingEndDate">Booking End Date:</label>
            <input
              type="date"
              id="bookingEndDate"
              value={bookingEndDate}
              onChange={(e) => setBookingEndDate(e.target.value)}
              min={bookingStartDate} // Set the minimum date to the start date
              required
            />

            <button type="submit">Book Now!</button>
          </form>
          {isSubmitted && (
            <QRCodeDisplay bookingInfo={generateBookingInfoString()} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
