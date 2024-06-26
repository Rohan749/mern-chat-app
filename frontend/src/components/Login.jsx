import { Box, Button, Container, TextField } from '@mui/material';
import { useState } from 'react';
import useLogin from '../hooks/useLogin';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const {loading, login} = useLogin()


  const formsubmitHandler = async (e) => {
    e.preventDefault();

    await login({email, password})
  }

  return (
    <form onSubmit={formsubmitHandler}>
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
          <header>LogIn</header>
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Enter your Email" variant="outlined" />
          <TextField value={password} onChange={((e) => setPassword(e.target.value))} label="Enter your Password
          " variant="outlined" />
          <Button type='submit' variant='contained'>Login</Button>
        </Box>
      </Container>
    </form>
  );
}

export default Login;
