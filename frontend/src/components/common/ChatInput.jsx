import { Box, Button, IconButton, ListItemText, TextField } from '@mui/material'
import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import InputEmoji from "react-input-emoji";
const ChatInput = () => {

    const [text, setText] = useState("");

    function handleOnEnter(text) {
      console.log("enter", text);
    }

  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        pt: '10px'
    }}>
         <InputEmoji
        
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
      background='transparent'
      color='white'
      borderColor='#606060'
    />
    <IconButton sx={{pr: {md:'1rem'}}}>
      <BsSendFill />
    </IconButton>
    </Box>
  )
}

export default ChatInput