import User from "../models/User.model.js"
import bcrypt from 'bcryptjs';
import { configDotenv } from "dotenv";
import { generateToken } from "../utils/GenerateJWT.js";
import jwt from "jsonwebtoken";

configDotenv()

export const SignupController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const userExist = await User.findOne({ email })

    if (userExist) {
      return res.status(400).json({ message: "User already exists!" })
    }

    console.log(password)

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        throw err;
      }

      const newUser = new User({
        username: username,
        email: email,
        password: hash
      })

      generateToken(newUser._id, res)
      newUser.save();

      return res.status(201).json(newUser)

    });

  } catch (error) {
    res.status(400).json({ message: "Internal server error" })
    console.log("Error in Signup controller:", error.message)
  }
}

export const LoginController = async(req, res, next) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email})

    if(!user) {
      return res.status(404).json({message: "account doesn't exists! Please create your account"})
    }


    const passwordValid = await bcrypt.compare(password, user.password)

    if(!passwordValid) {
      return res.status(401).json({message: `Invalid password for the user: ${email}`})
    }

    generateToken(user._id, res)

    return res.status(201).json({message: "User logged in successfully!"})

  } catch (error) {
    console.log("Error in the login controller:", error.message)
    res.status(400).json({message: "Internal server error"})
  }
}

export const LogoutController = (req, res, next) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0
    })

    res.status(200).json({message: "Logged out successfully"})
  } catch (error) {
    console.log("Error in logout controller:", error.message)
    res.status(400).json({message: "Internal server error"})
  }

}
