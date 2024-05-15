import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/Authentication/Login";
import Registration from "./Components/Authentication/Registration";
import Home from "./Components/Home/Home";
import Welcome from "./Components/WelcomeMsg/Welcome";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
 
  useEffect(() => {
    // Check if user is logged in when component mounts
    const userLoggedIn = localStorage.getItem("loggedIn");
   
    if (userLoggedIn) {
      setLoggedIn(true);
     
    }
  }, []);

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
    alert("Registration successful! Please login.");
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    // Store login status in local storage
    localStorage.setItem("loggedIn", true);
   
  };

  const handleLogout = () => {
    // Clear logged-in status from local storage
    localStorage.removeItem("loggedIn");
   // Update logged-in state
    setLoggedIn(false);

  };

  return (
    // <div className="App">
    //   {!loggedIn && (
    //     <>
    //       <h1 className='heading'>Welcome to Dev connect!</h1>
    //       <h3 className='subheading'>Empowering Developers Globally: Learn, Connect, and Grow with Our Platform</h3>
    //       {!showLogin && !showRegistration && (
    //         <div>
    //           <button className="btns" onClick={handleLoginButtonClick}>Login</button>
    //           <button className="btns" onClick={handleRegistrationButtonClick}>Register</button>
    //         </div>
    //       )}
    //       {showLogin && <Login setShowLogin={setShowLogin} setShowRegistration={setShowRegistration} onLoginSuccess={handleLoginSuccess}/>}
    //       {showRegistration && <Registration setShowLogin={setShowLogin} setShowRegistration={setShowRegistration} onRegistrationSuccess={handleRegistrationSuccess} />}
    //     </>
    //   )}
    //   {loggedIn && <Home />}
    // </div>

    <div className="App">

      
    
      {!loggedIn && <Welcome />}
      {loggedIn ? (
        <Home onLogout={handleLogout}/>
      ) : (
        <>
          {!showLogin &&
            !showRegistration && ( // If neither showLogin nor showRegistration is true, display the following buttons
              <div >
                <button className="btns" onClick={handleLoginButtonClick}>
                  Login
                </button>
                <button
                  className="btns"
                  onClick={handleRegistrationButtonClick}
                >
                  Register
                </button>
              </div>
            )}
          {showLogin && (
            <Login
              setShowLogin={setShowLogin}
              setShowRegistration={setShowRegistration}
              onLoginSuccess={handleLoginSuccess}
            />
          )}{" "}
          {/* If showLogin is true, display the Login component */}
          {showRegistration && (
            <Registration
              setShowLogin={setShowLogin}
              setShowRegistration={setShowRegistration}
              onRegistrationSuccess={handleRegistrationSuccess}
            />
          )}{" "}
          {/* If showRegistration is true, display the Registration component */}
        </>
      )}
      

    </div>
  );
}

export default App;

//  {showLogin && <Login setShowLogin={setShowLogin} setShowRegistration={setShowRegistration} onLoginSuccess={handleLoginSuccess}/>}
