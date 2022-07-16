import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import userContext from './components/UserContext';
import { authState } from './utils/auth';

function App() {
  const [user, setUser] = useState(null);
  const [showNav, setNavVisible] = useState(true);

  authState((user) => setUser(user))

  return (
    <>
      <userContext.Provider value={{ user, setUser , setNavVisible }}>
        { showNav ? <Navbar /> : null}
        <AppRouter />
      </userContext.Provider>
    </>
  );
}

export default App;