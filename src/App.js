import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
