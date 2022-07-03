import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Login from './components/login';
// import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Videocall from './components/Videocall';
import About from './components/About';
import Chatting from './components/Chatting';
import Contactus from './components/Contactus';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Videocall' element={<Videocall />} />
          {/* <Route path='/Chatting' element={<Chatting />} /> */}
          {/* <Route path='/Contactus' element={<Contactus />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;