import jwt from "jsonwebtoken"
import User from "../model/user.model.js";

const authmiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token) {
            return res.status(400).json({error: "Unauthorised! - no token provided."})
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        if(!decoded) {
            return res.status(400).json({error: "Unautorised! - Invalid JWT Token."})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return res.status(400).json({error: "User not found!"})
        }

        req.user = user

        next()
    } catch (error) {
        console.log("Error in authentication middleware", error.message);
        return res.status(400).json({error: "Internal server error"})
    }
}


export default authmiddleware