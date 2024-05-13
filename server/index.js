import express from 'express';
import { PORT , mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import User from './models/User.js';
import cors from 'cors';

const app = express(); // Create an Express application

// MIDDLEWARE - code that runs between the request and the response of the server 
// Middleware to parse JSON bodies in requests
app.use(express.json()); 
// CORS middleware to allow cross-origin requests from any domain 
app.use(cors());   // Enable CORS for all requests 

// Define route to handle user registration 
app.post('/register', async (req, res) => {  // Define a new route to handle POST requests to /register 
    try {
      const { name, email, password } = req.body; // Extract name, email, and password from the request body 
      
      // Create a new user document using the Mongoose model
      const newUser = new User({ 
        name,
        email,
        password,
      });
  
      // Save the new user to the database 
      await newUser.save();
 
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  
// Define route to handle user login
app.post('/login', async (req, res) => {  
  // try { 
  //   const { username, password } = req.body;  //destructuring the request body to get username and password
  //   // Find the user with the provided username and password
  //   const user = await User.findOne({ username, password });
  //   if (!user) {
  //     // If user is not found, send error response
  //     res.status(401).json({ message: 'Invalid username or password' });
  //     return;
  //   }
  //   // If user is found, send success response
  //   res.status(200).json({ message: 'Login successful', user });
  // } 
  // catch (error) {
  //   console.error('Error logging in user:', error);
  //   res.status(500).json({ message: 'Internal server error' });
  // }
  try { 
    const { username, password } = req.body;  // Extract username and password from the request body
    // Find the user with the provided username and password
    const user = await User.findOne({ name: username, password }); // Compare username with 'name' field in database
    if (!user) {
      // If user is not found, send error response
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // If user is found, send success response
    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


// Default route
app.get('/', (request, response) => {
    console.log(request);
    response.status(234).send('Welcome to DevConnect');
    });

mongoose.connect(mongoDBURL,{ dbName: 'DevConnectDb' })
.then(() => {
  console.log('App connected to Cluster0 MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
})
.catch((error) => {
    console.log('Error connecting to MongoDB Atlas: Cluster0');
    console.log(error);
    });
