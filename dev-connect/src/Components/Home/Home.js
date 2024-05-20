import React, { useState } from "react";
import styles from "./Home.module.css";

import Dashboard from "../Dashboard/Dashboard";
import Jobs from "../JobSearch/Jobs";
import UserRecommendation from "../Recomendation/UserRecommendation";
import Chat from "../Chat/Chat";

import User_Profile from "../Profile/User_Profile";

const Home = ({ onLogout }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <h3 className={styles.hello}>Hello and Welcome to DevConnect!</h3>
        <button  className={styles.logout} onClick={onLogout}>Logout </button>
      </div>
      <div className={styles.exploreSection}>

      <div className={styles.leftSection}>
 
        <h3  className={styles.exp}>Explore more...</h3>
      
        <div className={styles.buttonContainer}>
          <button  className={styles.exploreBtns} onClick={() => handleButtonClick("Profile")}> Profile</button>
          <button  className={styles.exploreBtns} onClick={() => handleButtonClick("Dashboard")}>Dashboard</button>
          <button  className={styles.exploreBtns} onClick={() => handleButtonClick("Jobs")}>Job Search</button>
          <button  className={styles.exploreBtns} onClick={() => handleButtonClick("UserRecommendation")}>User Recommendation </button>
          <button  className={styles.exploreBtns} onClick={() => handleButtonClick("Chat")}>Chat</button>
        </div>
        </div>
        <div className={styles.rightSection}>
      <div className={styles.componentContainer}>
        {activeComponent === "Profile" && <User_Profile />}
        {activeComponent === "Dashboard" && <Dashboard />}
        {activeComponent === "Jobs" && <Jobs />}
        {activeComponent === "UserRecommendation" && <UserRecommendation />}
        {activeComponent === "Chat" && <Chat />}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
