import { Box } from '@mui/material'
import React from 'react'
import ChatArea from './ChatArea'
import ChatInput from './common/ChatInput'

const Chatbot = () => {
  return (
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    <Box sx={{width: {xs: '85%', md:'60vw'}, position: 'relative',  ml: {xs:'2rem'} }}> 
          <ChatArea />
          <ChatInput />
        </Box>
        </Box>
  )
}

export default Chatbot