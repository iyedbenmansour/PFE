import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";

const Admin = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const fetchData = async () => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const reservationResponse = await fetch(`http://localhost:5000/api/booking?date=${formattedDate}`);
    const reservationData = await reservationResponse.json();
    setReservations(reservationData);
  };

  const handleAddCar = () => {
    navigate('/booking');
  };

  const handleRemoveCar = () => {
    navigate('/removecar');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar />
      <div className="adminContainer">
        <button className="toggleSidebarButton" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        {isSidebarOpen && <Sidebar onAddCar={handleAddCar} onRemoveCar={handleRemoveCar} />}
        <div className="datePicker">
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(event) => setSelectedDate(new Date(event.target.value))}
          />
        </div>
        <div className="reservationsList">
          {reservations.map((reservation) => (
            <div key={reservation._id} className="reservationItem">
              <h3>Booking Details</h3>
              <p>Full Name: {reservation.fullName}</p>
              <p>Email: {reservation.email}</p>
              <p>Car Model: {reservation.carModel}</p>
              <p>License Plate: {reservation.licensePlate}</p>
              <p>Phone Number: {reservation.phoneNumber}</p>
              <p>Booking Start Date: {new Date(reservation.bookingStartDate).toLocaleDateString()}</p>
              <p>Booking End Date: {new Date(reservation.bookingEndDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
