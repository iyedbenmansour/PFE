// ProfilePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import "./profile.css"; // Adjust the path as necessary

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    cin: ''
  });

  useEffect(() => {
    // Assuming the user is already logged in and you have their ID
    const userId = 'user-id-from-session-or-cookie'; // Replace this with actual user ID
    axios.get(`http://localhost:5000/api/users/${userId}`)
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      phoneNumber: userInfo.phoneNumber,
      cin: userInfo.cin
    };
    axios.put(`http://localhost:5000/api/users/${userInfo.id}`, updatedUser)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="profileArea">
        <form className="profileForm" onSubmit={handleUpdate}>
          <h2>Profile Information</h2>
          {/* Add form fields for each piece of user info */}
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            required
          />
          {/* Repeat for other fields */}
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
