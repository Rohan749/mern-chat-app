import { Box, Input, TextField } from '@mui/material'
import React from 'react'

const InputField = ({ ...otherprops}) => {
  return (
    <Box>
        <TextField {...otherprops}/>
    </Box>
  )
}

export default InputField