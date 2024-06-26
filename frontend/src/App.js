import logo from './logo.svg';
import './App.css';
import { Box, Button, Container, TextField } from '@mui/material';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Chatbot from './components/Chat-bot';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/ai-bot' element={<Chatbot />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
