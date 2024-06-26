import { Box, Button, Container, TextField } from '@mui/material'
import React from 'react'

const Settings = () => {
  return (
    <div>
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent:  'center',
      minHeight: '100vh',

    }}>
      <Box sx={{
        borderRadius: '10px',
        width: '50rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        p: '3rem',
        background: 'linear-gradient(to top right, #020202, #090909)',
        boxShadow: '0px 10px 20px 2px black'
      }}>
        <header>Settings</header>
        <TextField label="Change your Username" variant="outlined" />
        <TextField label="Change your Email" variant="outlined" />
        <TextField label="Enter your Password
        " variant="outlined" />
        <Button variant='contained'>Change</Button>
      </Box>
    </Container>
  </div>
  )
}

export default Settings