import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Chatbot from './components/Chatbot';
import ConfirmationPage from './components/ConfirmationPage';
import "../src/App.css"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path="/" element={<HomePage/>} exact />
          <Route path="/enroll" element={<Chatbot/>} />
          <Route path="/confirmation" element={<ConfirmationPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
