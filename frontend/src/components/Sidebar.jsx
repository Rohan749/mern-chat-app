import { Box } from '@mui/material'
import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { RiRobot3Fill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <Box sx={{
        height: '100vh',
        width:{xs: "3rem", md:"4rem"},
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        gap: '2rem',
        fontSize: {xs: '1.5rem', md:"2rem"},
        pt: '1rem',
        background: 'linear-gradient( #030303, #151515)',
        position: 'absolute'
    }}>
      <a href='/'>
        <IoMdHome />
      </a>
      <a href='/ai-bot'>
        <RiRobot3Fill />
      </a>
      <a href='/settings'>
        <IoSettings/>
      </a>
      <a href='logout'>
        <FaPowerOff/>
      </a>

    </Box>
  )
}

export default Sidebar