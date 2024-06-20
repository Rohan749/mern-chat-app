import User from "../models/User.model.js"

export const getAllUsers = async (req, res, next) => {
    try {

        const getAllUsers = await User.find({_id: {$ne: req.senderId}})


        res.status(201).json(getAllUsers)
        
    } catch (error) {
        console.log("Internal server error")
        res.status(400).json("Error in getAllUsers controller:", error.message)
    }
}