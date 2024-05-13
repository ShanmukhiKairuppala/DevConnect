import React, { useState } from 'react';
import './App.css';
import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
import Home from './Components/Home/Home';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
    setShowRegistration(false);
  };

  const handleRegistrationButtonClick = () => {
    setShowLogin(false);
    setShowRegistration(true);
  };

  const handleRegistrationSuccess = () => {
    setShowLogin(true);
    setShowRegistration(false);
    alert('Registration successful! Please login.');
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <h1 className='heading'>Welcome to Dev connect!</h1>
      
      <h3 className='subheading'>Empowering Developers Globally: Learn, Connect, and Grow with Our Platform</h3>
      
      {loggedIn ? (
        <Home />
      ) : (
        <>
      {!showLogin && !showRegistration && (   // If neither showLogin nor showRegistration is true, display the following buttons
        <div>
          <button className="btns" onClick={handleLoginButtonClick}>Login</button>
          <button className="btns" onClick={handleRegistrationButtonClick}>Register</button>
        </div>
      )}
      {showLogin && <Login setShowLogin={setShowLogin} setShowRegistration={setShowRegistration}  onLoginSuccess={handleLoginSuccess}/>} {/* If showLogin is true, display the Login component */}
      {showRegistration && <Registration setShowLogin={setShowLogin} setShowRegistration={setShowRegistration} onRegistrationSuccess={handleRegistrationSuccess} />} {/* If showRegistration is true, display the Registration component */}
      
      </>
      )}
    </div>
 
  );





}

export default App;
