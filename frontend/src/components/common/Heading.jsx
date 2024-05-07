import { Box } from '@mui/material'
import React from 'react'

const Heading = ({children}) => {
  return (
    <Box sx={{
        fontSize: '48px',
        fontWeight: 'bold'
    }}>
        {children}
    </Box>
  )
}

export default Heading