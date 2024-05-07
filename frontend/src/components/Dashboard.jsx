import { Box } from '@mui/material'
import React from 'react'
import Container from './common/Container'
import Contact from './common/Contact'
import MessageContainer from './common/MessageContainer'

const Dashboard = () => {
  return (
    <Box>
        <Container>
            <Box sx={{
                display: 'flex',
                // alignItems: 'center',
                height: '100%',
                justifyContent: 'space-between',
                width: 'clamp(30rem, 40vw, 40rem)',
            }}>
                <Box sx={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: "column",
                  gap: '1rem',
                  maxHeight: '30rem',
                  overflowY: 'scroll',
                  pr: '0.8rem'
                }}>
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                </Box>
               
               <Box sx={{width: '50%'}}>
                <MessageContainer />
               </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default Dashboard