import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);

  const navigate = useNavigate();

const forNavigation =()=>{
    navigate('/');
}
  
  return (
    <>
    
      <h2>Your name {name} aged {age} has been added to the student system.</h2>
      
      <div className='confirmPage'>
      <button onClick={forNavigation}>You may now exit.</button>
      </div>
      </> 
    
  );
};

export default ConfirmationPage;
