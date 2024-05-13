import React,{useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Registration.css';
import axios from 'axios';

const Registration = ({  setShowLogin, setShowRegistration }) => {

        const [name,setName] = useState('');
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
       

    const handleSubmit = (event) => {  // Function to handle form submission 
        event.preventDefault();        // Prevent default form submission
        axios.post('http://localhost:5555/register',{name,email,password}) // Make a POST request to the server
            .then(result => { 
                console.log(result);
                alert('Registration successful! Please login.'); // Display alert
                setShowLogin(true);
                setShowRegistration(false);
            })  // If the request is successful, log the result
            .catch(err => { 
                console.error('Registration failed:',err) 
            })  // If the request fails, log the error
    };

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegistration(false); 
      };
    

    return (
        <div className="Register-container">
        <h1>Register</h1> 
        <div className="social-container">
            <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} style={{ color: 'white', fontSize: '20px' }}/></a>
            <a href="#" className="social"><FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '20px' }} /></a>
        </div>
        <p>or use your account</p>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="Username" name ="name" onChange={(e)=>setName(e.target.value)}/>
            <br />
            <input type="email" placeholder="Email-Id" name = "email"  onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder="Password" name = "password" onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button type="submit" id="Register-btn">Register</button>
        </form>
        <p>Already have an account? </p>
        {/* <Link to="/login">Login</Link> */}
        {/* <Link to="/login" onClick={() => { setShowLoginPage(true); setShowRegistrationPage(false); }}>Login</Link> */}
      <p> <button className="link" onClick={handleLoginClick}>Login</button></p> 
    
    </div>
   
    );
  
};

export default Registration;
