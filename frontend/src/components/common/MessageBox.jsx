import { Box } from '@mui/material'
import React from 'react'

const MessageBox = ({sent}) => {
  return (
    <Box sx={{
        backgroundColor: `${sent ? '#22a5f1' : '#0074ca'}`,
        position: "absolute",
        right: `${sent ? '10px' : ''}`,
        left: `${!sent ? '10px' : ''}`,
        borderRadius: `${sent ? '10px 10px 0 10px' : '10px 10px 10px 0'}`,
        width: 'fit-content',
        maxWidth: "13rem",
        p: '10px',
        wordWrap: 'break-word'
    }}>
        
    </Box>
  )
}

export default MessageBox