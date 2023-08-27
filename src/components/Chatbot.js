import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { setName, setAge } from '../actions/enrollmentActions';
import { setName, setAge} from "../actions/enrollmentAction"


const Chatbot = () => {
  const [name, setNameValue] = useState('');
  const [age, setAgeValue] = useState('');
  const [countdown, setCountdown] = useState(5);
  const dispatch = useDispatch();
//   const history = useHistory();
const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAgeValue(event.target.value);
  };

  const handleEnroll = () => {
    dispatch(setName(name));
    dispatch(setAge(age));

    setTimeout(() => {
    //   history.push('/confirmation');
    navigate('/confirmation');
    }, 5000);
  };

  return (
    <div className='InfoSystem'>
      <h2>Hello, Welcome to student info system!</h2>
      <div className='centerDiv'>
      <button onClick={handleEnroll}>Got it!</button>
      <p>Enter your Name</p>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Enter your Age</p>
     
      <select value={age} onChange={handleAgeChange}>
        <option value="">Select Age</option>
        {Array.from({ length: 23 }, (_, i) => 18 + i).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
          
        ))}
      </select>
      
      <p>Thank you. In {countdown} seconds, bot will exit.</p>
      </div>
    </div>
  );
};

export default Chatbot;
