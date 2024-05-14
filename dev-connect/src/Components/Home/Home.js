import React, { useState } from "react";
import './Home.css';
import UserProfile from "../Profile/userProfile";
import Dashboard from "../Dashboard/Dashboard";
import Jobs from "../JobSearch/Jobs";
import UserRecommendation from "../Recomendation/UserRecommendation";
import Chat from "../Chat/Chat";


const Home = ({ onLogout }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <h1>Hello !!</h1>
      <button id = "logout" onClick={onLogout}>Logout</button>
      <div>
            <h2>Explore more...</h2>
            {/* <a href="/profile">Profile</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/jobs">Job Search</a>
            <a href="/userRecommendation">User Recommendation</a>
            <a href="/chat">Chat</a> */}

<button id = "explore-btns" onClick={() => handleButtonClick("Profile")}>Profile</button>
        <button id = "explore-btns" onClick={() => handleButtonClick("Dashboard")}>Dashboard</button>
        <button id = "explore-btns" onClick={() => handleButtonClick("Jobs")}>Job Search</button>
        <button id = "explore-btns" onClick={() => handleButtonClick("UserRecommendation")}>User Recommendation</button>
        <button id = "explore-btns" onClick={() => handleButtonClick("Chat")}>Chat</button>
          </div>
          
      <div className="component-container">
        {activeComponent === "Profile" && <UserProfile />}
        {activeComponent === "Dashboard" && <Dashboard />}
        {activeComponent === "Jobs" && <Jobs />}
        {activeComponent === "UserRecommendation" && <UserRecommendation />}
        {activeComponent === "Chat" && <Chat />}
      </div>

    </div>
  );
};

export default Home;
