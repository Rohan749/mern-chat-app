import User from "../model/user.model.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const loggedUser = req.user._id;

        const allUsers = await User.find({_id: { $ne: loggedUser }})

        res.status(200).json(allUsers)
    } catch (error) {
        console.log("Error in getAllUsers controller", error.message);
        res.status(400).json({error: "Internal server error"})
    }
}