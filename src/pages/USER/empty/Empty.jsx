import React, { useState, useEffect } from "react";
import "./empty.css";
import Navbar from "../../../components/navbar/Navbar";
import Header from "../../../components/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import SearchItem from "../../../components/searchItem/SearchItem";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Empty = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(location.state?.destination ?? '');
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options ?? {});
  const [parkingSpaces, setParkingSpaces] = useState([]); // State to hold the parking spaces
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  // Function to fetch parking spaces based on the selected state
  const fetchParkingSpaces = async () => {
    // Replace with your actual API call or data fetching logic
    const response = await fetch(`/api/parking-spaces?destination=${destination}&startDate=${dateRange[0].startDate.toISOString()}&endDate=${dateRange[0].endDate.toISOString()}`);
    const data = await response.json();
    setParkingSpaces(data);
  };

  // Fetch parking spaces when the component mounts or when the destination or date range changes
  useEffect(() => {
    fetchParkingSpaces();
  }, [destination, dateRange]);

  // Function to handle booking
  const handleBooking = () => {
    // Check if user is signed in
    // This is a placeholder, replace with your actual authentication logic
    const isSignedIn = false; // Replace with actual check

    if (isSignedIn) {
      // Redirect to booking page
      navigate('/booking');
    } else {
      // Redirect to login page
      navigate('/login');
    }
  };

  // Function to handle date range change
  const handleDateRangeChange = (ranges) => {
    setDateRange(ranges);
    // Trigger a re-fetch of parking spaces with the new date range
    fetchParkingSpaces();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="parkingListContainer">
        {/* ... (rest of the JSX) ... */}
        <div className="parkingSpacesList"> {/* Updated class name */}
          {parkingSpaces.map((space) => (
            <SearchItem key={space.id} space={space} />
          ))}
        </div>
        <div className="buttonsContainer">
          <button onClick={handleBooking}>Book Now</button>
          <button onClick={() => setOpenDate(!openDate)}>Change Date Range</button>
        </div>
        {openDate && (
          <DateRangePicker
            ranges={dateRange}
            onChange={handleDateRangeChange}
          />
        )}
      </div>
    </div>
  );
};

export default Empty;
