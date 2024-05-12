import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Box} from "@mui/material";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Exercise from './pages/ExerciseDetail';
function App() {
  return (
    <Box width="400px" sx={{width :{ xl:'1488px' }}} m="auto" >
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:name' element={<Exercise/>}/>
     </Routes>
     <Footer/>
    </Box>
  );
}

export default App;
