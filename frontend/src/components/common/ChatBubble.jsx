import { Box } from '@mui/material'
import React from 'react'

const ChatBubble = () => {
  return (
    <Box sx={{
        m: '10px 10px 15px 10px',
        display: 'flex',
        flexDirection: 'column',
       width: '100',
       alignItems: 'end'
    }}>
        <Box sx={{  maxWidth: '70%',}}>
        <Box sx={{
            textAlign: 'left',
            p: '10px',
            borderRadius: '25px 25px 25px 0',
            background: '#1b90fe',
            boxShadow: '0px 0px 20px 5px #000000'
        }}>chat area kjhhk kjkjkkjh kjh kj kj  ;egoijr oiejrgs joergi kjlafsk jklsdf jklsdf  jklsdf sajkl sdjklsdfjkl jklss djklsdfkl jklsdf kls dfjdsdfjkl klsdfj
        </Box>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', pb: '10px', color: '#909090', fontSize: '12px'}}>
        <Box>12:00AM</Box>
        <Box>Seen</Box>
        </Box>
        </Box>
    </Box>
  )
}

export default ChatBubble