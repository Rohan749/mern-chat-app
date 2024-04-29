import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";

const hashingfunction = async (password) => {
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    if (err) console.log("Error while hashing the password", err.message);

    console.log("HAshing:", hash);
    return hash;
  });
};

export const signup = async (req, res, next) => {
  try {
    const { username, name, email, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      res
        .status(400)
        .json({ error: "User with this username already exists!" });
    }

    const emailpresent = await User.findOne({ email });

    if (emailpresent) {
      res.status(400).json({ error: "User with this email already exists!" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username, name, email, password: hashedPassword
    })

    newUser
      .save()
      .then(() => {
        res.status(201).json({ message: "New user is created!" });
      })
      .catch((error) => {
        console.log("Error creating the user in mongodb:", error.message);
      });

      generateToken(res._id,res)
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ error: "User doesn't exists!" });
    }

   const passwordValid = await bcrypt.compare(password, user.password)

    if (!passwordValid) {
      res.status(400).json({ error: "Invalid password" });
      return;
    }

    res.status(200).json({ error: "User Authenticated!" });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Error while logging in!" });
  }
};

export const logout = (req, res, next) => {
  try {
    console.log("logout controller");
  } catch (error) {
    console.log(("Error in login controller", error.message));
    res.status(400).json({ message: "Error while logging out!" });
  }
};
