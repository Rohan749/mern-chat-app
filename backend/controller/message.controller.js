import Conversation from '../model/conversation.model.js';
import Message from '../model/message.model.js';

export const sendMessages = async (req, res, next) => {
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }
        
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        
        conversation.messages.push(newMessage._id);

        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)


    } catch (error) {
       console.log("Error in sendMessages controller:", error.message);
       res.status(400).json({error: "Internal server error"}) 
    }
}


export const getMessages = async (req, res, next) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;
        // const {message} = req.body

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("message");

        res.status(200).json(conversation.message)

    }catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(400).json({error: "Internal server error"}) 
     }
}