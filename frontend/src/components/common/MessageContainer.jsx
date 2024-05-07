import { Box, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import MessageBox from "./MessageBox";
import EmojiPicker from 'emoji-picker-react';
import { MdEmojiEmotions, MdSend } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import MessageInputField from "./MessageInputField";
import InputEmoji from "react-input-emoji";


const MessageContainer = () => {

  const [inputMessage, setInputMessage] = useState("");
  const [text, setText] = useState("");
  
  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const [sentMsg, setSentMsg] = useState(false)

  return (
    <>
      <Box
        sx={{
          bgcolor: "#060606",
          boxShadow: "0px 0px 20px 5px black inset",
          height: "100%",
          overflowY: "scroll",
          height: "30rem",
          overflowY: "scroll",
          width: "100%",
          position: "relative",
          padding: "1rem",
        }}
      >
        <MessageBox sent={sentMsg} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: "10px 0" }}>
        
      <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
        <MdSend style={{fontSize: '2rem'}}/>
       
      </Box>
      
    </>
  );
};

export default MessageContainer;
