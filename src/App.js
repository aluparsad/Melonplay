import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Login from './components/login';
import Navbar from './components/Navbar';
// import Signup from './components/Signup';
import Home from './components/Home';
import Videocall from './components/Videocall';
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
          <Route path='' element={<Home />} />
          {/* <Route path='' element={<About/>} /> */}
          <Route path='/Videocall' element={<Videocall />} />
          {/* <Route path = '/Chatting' element = {</>} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;