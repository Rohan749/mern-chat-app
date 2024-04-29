import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Add validation for email format
    },
    password: {
      type: String,
      required: true
    }
  });
  
  
  const User = mongoose.model('User', userSchema);

  export default User;