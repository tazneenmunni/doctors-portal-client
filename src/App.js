import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home';

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
