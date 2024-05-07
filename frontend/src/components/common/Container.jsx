import { Box } from '@mui/material'
import React from 'react'

const Container = ({children}) => {
  return (
    <Box sx={{
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column',
        gap: "1rem",
        minWidth: 'clamp(20rem, 30vw, 30rem)',
        border: "2px solid #23a7f2",
        borderRadius: '10px',
        minHeight: "20rem",
        padding: '1rem'
    }}>
        {children}
    </Box>
  )
}

export default Container