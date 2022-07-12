import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Homepage from "./Pages/Homepage";
import Coinpage from './Pages/Coinpage';
import { Box } from '@mui/material';

function App() {

  return (
    <BrowserRouter>
      <Box sx={{          
          bgcolor: '#1e1c1f',
          color:'white',
          minHeight: '100vh'
          }}>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/coins/:id' element={<Coinpage/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
