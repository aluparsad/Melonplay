import './App.css';
import React, { useState } from 'react';
// import Signup from './components/Signup';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import userContext from './components/UserContext';
import { authState , updateUserInfo} from './utils/auth';

function App() {
  const [user, setUser] = useState(null);

  authState((user) => {
    if(user) {
      if(! user.displayName) updateUserInfo({displayName:"yogesh"})
    }
    setUser(user)
  })


  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <Navbar />
        <AppRouter />
      </userContext.Provider>
    </>
  );
}

export default App;