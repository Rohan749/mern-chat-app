import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res, next) => {
    try {
        const {id: receiverId} = req.params;

        const {senderId} = req;
        
        const {message} = req.body

        let conversationExist = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]}
        })

        if(!conversationExist) {
            conversationExist = await Conversation.create({
                participants: [senderId, receiverId],

            })
        }

        const newMessage = new Message({
            senderId, receiverId, message
        })

        if(newMessage) {
            conversationExist.messages.push(newMessage._id)
        }

        await conversationExist.save()
        await newMessage.save()

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in the send message controller:", error.message)
        res.status(500).json({error: "Internal server error."})     
    }
}


export const getMessage = async (req, res, next) => {
    try {
        const {senderId} = req;
        const {id: receiverId} = req.params;

        const conversation = await Message.find({senderId, receiverId})

        res.status(201).json(conversation)
    } catch (error) {
        console.log("Error in getMessage controller:", error.message)
        res.status(500).json({error: "Internal server error."})
    }
}