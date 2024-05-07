import './App.css';
import Login from './components/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { IoMdLogIn } from 'react-icons/io';
import { Box } from '@mui/material';


function App() {
  return (
    <>
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <h2>Rohan kumar Pandey</h2>
      <IoMdLogIn style={{fontSize: "2rem"}} />
    </Box>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   
    </BrowserRouter>
    </>
  );
}

export default App;
