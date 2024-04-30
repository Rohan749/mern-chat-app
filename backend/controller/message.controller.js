export const sendMessages = (req, res, next) => {
    try {
        
    } catch (error) {
       console.log("Error in sendMessages controller:", error.message);
       res.status(400).json({error: "Internal server error"}) 
    }
}


export const getMessages = (req, res, next) => {
    try {

    }catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(400).json({error: "Internal server error"}) 
     }
}