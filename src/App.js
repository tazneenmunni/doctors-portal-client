import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './Pages/About/About';

import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='appointment' element={<Appointment />}></Route>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
