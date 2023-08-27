import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='homePage'>
      <h1>Enter into Student Info System</h1>
      <Link to="/enroll" className="enroll-button">Enroll Now!</Link>
    </div>
  );
};

export default HomePage;
