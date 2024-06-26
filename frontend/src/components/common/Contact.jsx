import { Box } from '@mui/material'
import React from 'react'


const Contact = () => {
  return (
    <Box sx={{
      backgroundColor: '#3e404c',
      p: '10px',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      m: '10px',
      borderRadius: '25px', 
      height: '5rem'
    }}>
      <Box sx={{
        borderRadius: '50%',
        border: '1px solid white',
        height: '3rem',
        width: '3rem',
      }}>
        <Box sx={{}}></Box>
      </Box>

      <Box>Rohan Kumar Pandey</Box>
    </Box>
  )
}

export default Contact