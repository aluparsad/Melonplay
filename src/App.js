import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import userContext from './components/UserContext';
import { authState } from './utils/auth';
import {ThemeProvider} from '@mui/material'
import theme from "./utils/Theme"


function App() {
  const [user, setUser] = useState(null);
  const [mainStream, setMainStream] = useState(null);
  const [showNav, setNavVisible] = useState(true);



  authState((user) => setUser(user))



  return (
    <>
      <userContext.Provider value={{ user, setUser, setNavVisible }}>
        <ThemeProvider theme={theme}>
          {showNav ? <Navbar /> : null}
          <AppRouter />
        </ThemeProvider>
      </userContext.Provider>
    </>
  );
}

export default App;