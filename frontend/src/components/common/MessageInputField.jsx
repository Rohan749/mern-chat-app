import { Box, InputBase } from '@mui/material'
import EmojiPicker from 'emoji-picker-react'
import React, {useState} from 'react'
import { IoMdSend } from 'react-icons/io'
import { MdEmojiEmotions } from 'react-icons/md'

const MessageInputField = () => {


  const [emojiOpen, setEmojiOpen] = useState(false);

  return (
    <Box sx={{position: "absolute", display: 'flex', right: '0',}}>
        <InputBase />
    <MdEmojiEmotions />
    <EmojiPicker
      open={emojiOpen}
      theme="dark"
      style={{}}
    />
    <IoMdSend style={{ width: '2rem'}}/>
  </Box>
  )
}

export default MessageInputField