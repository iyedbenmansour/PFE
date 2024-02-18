import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css"; // Import the updated CSS file for admin display
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar"; // Import the Sidebar component

const Admin = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    const reservationResponse = await fetch(`/api/reservations?date=${selectedDate.toISOString()}`);
    const reservationData = await reservationResponse.json();
    setReservations(reservationData);
  };

  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
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
            onChange={handleDateChange}
          />
        </div>
        <div className="reservationsList">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="reservationItem">
              {/* ... (reservation details) */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Admin;
