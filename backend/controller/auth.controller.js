import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";

export const signup = async (req, res, next) => {
  try {
    const { username, name, email, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ error: "User with this username already exists!" });
    }

    const emailpresent = await User.findOne({ email });

    if (emailpresent) {
      return res.status(400).json({ error: "User with this email already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      name,
      email,
      password: hashedPassword,
    });

    generateToken(newUser._id, res);

    newUser
      .save()
      .then(() => {
        return res.status(201).json(newUser);
      })
      .catch((error) => {
        console.log("Error creating the user in mongodb:", error.message);
      });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User doesn't exists!" });
    }

    const passwordValid = await bcrypt.compare(password, user?.password || "");

    if (!passwordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    generateToken(user._id, res);

    return res.status(200).json({ error: "User Authenticated!" });

    

  } catch (error) {
    console.log("Internal server error");
    return res.status(500).json({ error: "Error while logging in!" });
  }
};

export const logout = (req, res, next) => {
  try {
    res.cookie("jwt", ""), { maxAge: 0 };

    return res.status(200).json({ message: "Logged out successfully!" });

  } catch (error) {
    console.log(("Error in login controller", error.message));
    return res.status(400).json({ error: "Internal Server error." });
  }
};
