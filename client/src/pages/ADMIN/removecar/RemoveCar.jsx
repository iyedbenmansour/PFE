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

  const checkCarExists = async (licensePlate) => {
    const response = await fetch(`http://localhost:5000/api/booking/${licensePlate}`);
    return response.ok;
  };

  const handleConfirmRemoveCar = async () => {
    if (!licensePlateToRemove || !isConfirmed) {
      alert('Please fill in the license plate and check the box to confirm.');
      return;
    }

    const carExists = await checkCarExists(licensePlateToRemove);
    if (!carExists) {
      alert('Car with the given license plate does not exist.');
      return;
    }

    // Proceed with deletion if the car exists
    const response = await fetch(`http://localhost:5000/api/booking/${licensePlateToRemove}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // Redirect back to the admin page or show a success message
      navigate('/admin');
    } else {
      alert('Failed to remove the car. Please try again.');
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
