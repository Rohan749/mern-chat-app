import { Box } from '@mui/material'
import React from 'react'
import Contact from './Contact'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';



const ContactList = () => {


  return (
    <> 
    <Box sx={{
      p: '25px 0'
    }}>
      <header>Vibe</header>
    </Box>
       <Box sx={{
        // border: '2px solid red'
        height: '85vh',
        overflow: 'scroll'
        }}>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
    </Box>
    </>
  )
}

export default ContactList