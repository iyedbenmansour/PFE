import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './removecar.css';

const RemoveCar = () => {
  const [licensePlateToRemove, setLicensePlateToRemove] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleLicensePlateChange = (event) => {
    setLicensePlateToRemove(event.target.value);
    setIsConfirmed(false); // Reset confirmation when the license plate changes
  };

  const handleConfirmRemoveCar = async () => {
    if (!licensePlateToRemove || !isConfirmed) {
      alert('Please fill in the license plate and check the box to confirm.');
      return;
    }
    // Replace with your actual API call or data submission logic
    const response = await fetch(`/api/cars/${licensePlateToRemove}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // Redirect back to the admin page or show a success message
      navigate('/admin');
    }
  };

  const handleCloseModal = () => {
    navigate('/admin');
  };

  const handleConfirmCheck = (event) => {
    setIsConfirmed(event.target.checked);
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>Remove Car</h2>
        <label htmlFor="licensePlate">License Plate:</label>
        <input
          type="text"
          id="licensePlate"
          value={licensePlateToRemove}
          onChange={handleLicensePlateChange}
          required
        />
        <div className="confirmCheck">
          <input
            type="checkbox"
            id="confirmCheck"
            checked={isConfirmed}
            onChange={handleConfirmCheck}
          />
          <label htmlFor="confirmCheck">Remove.</label>
        </div>
        <div className="buttons">
          <button onClick={handleConfirmRemoveCar} disabled={!licensePlateToRemove || !isConfirmed}>
            Confirm
          </button>
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveCar;
