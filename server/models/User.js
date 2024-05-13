import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({   // Define a new Mongoose schema for the User model with three fields: name, email, and password 
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { collection: 'Dev' });

const User = mongoose.model('User', userSchema); // Create a new Mongoose model for the User schema and export it

export default User;
