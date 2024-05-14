import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import axios from "axios";
import Home from '../Home/Home'; 

const Login = ({ setShowLogin, setShowRegistration, onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   // const [loggedIn, setLoggedIn] = useState(false); // New state variable to track login status

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make a POST request to your server for user authentication
            const response = await axios.post('http://localhost:5555/login', { username, password });
            // Handle successful login (e.g., set user state or redirect)
            console.log('Login successful:', response.data);
            alert('Login successful!');
          //setLoggedIn(true); // Redirect to home page after successful login
            onLoginSuccess();
        } catch (error) {
            // Handle login error (e.g., display error message)
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.'); // Display login failed alert
        }
    };
    const handleRegistrationClick = () => {
        setShowLogin(false);
        setShowRegistration(true);
      };
    
   
    // // If user is logged in, redirect to Home component
    // if (loggedIn) {
    //     return <Home />;
    // }
 
    return (
        <div className="Login-container">
            <h1>Login</h1>
            <div className="social-container">
                <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} style={{ color: 'white', fontSize: '20px' }}/></a>
                <a href="#" className="social"><FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '20px' }} /></a>
            </div>
            <p>or use your account</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  />
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button id="login-btn" type="submit" >Login</button>
            </form>
            <p>Don't have an account? </p>
                {/* <Link to="/registration">Register</Link> */}
              <p>  <button className="link" onClick={handleRegistrationClick}>Register</button></p>
   
        </div>
    );
};

export default Login;
