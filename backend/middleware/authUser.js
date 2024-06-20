import jwt from "jsonwebtoken"

const authUser = (req, res, next) => {
    try {
        const token = req.cookies.jwt;

    if(!token) {
        console.log("Error in authUser middleware. No token provided.")
        return res.status(404).json({message: "Error! Please log in before proceeding."})

    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decodedToken) => {
        if(error)  res.status(403).send("Forbidden! Invalid Token.")

        else {
            req.senderId = decodedToken.userId;
            next()
        }
    })
    } catch (error) {
      console.log("Error in protected authUser middleware:", error.message)  
      res.status(500).json({error: "Internal server error"})
    }
}

export default authUser