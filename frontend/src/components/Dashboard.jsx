import { Box, IconButton } from '@mui/material'
import React from 'react'
import ContactList from './common/ContactList'
import ChatArea from './ChatArea'
import ChatInput from './common/ChatInput'
import { CiLogout } from "react-icons/ci";
import Sidebar from './Sidebar'

const Dashboard = () => {

  

  return (
    <Box sx={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ml: {xs: '1.5rem', md:'1rem'}
    }}>
      <Box sx={{
        display: 'flex',
        width: '90%',
        // p: '2rem',
      }}>
       
        <Box sx={{width: {xs: '100%', lg:'30%'}}}>
        <ContactList />
        </Box>

        <Box sx={{width: { lg:'70%'}, position: 'relative', display: {xs: 'none', lg: 'block'}}}> 
          <ChatArea />
          <ChatInput />
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard