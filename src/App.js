import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }>

        </Route>

        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
