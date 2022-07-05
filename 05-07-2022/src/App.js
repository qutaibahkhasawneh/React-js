import './App.css';
import Nav from "./component/Nav";
import Home from "./component/Home";
import Login from "./component/Login";

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { userContext } from "./component/userContext";
import { useState, useEffect } from 'react'

function App() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [user] = useState({ username: 'qutaiba@gmail.com', password: 'qutaiba123' });
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <userContext.Provider value={{user, isLoggedIn, setIsLoggedIn, message, setMessage}}>
       {/* <UserContext2.Provider value={user2}> */}
   <div>
   <Nav />

   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Login" element={<Login  />} />
   </Routes>
   </div>
   {/* </UserContext2.Provider> */}
       
      
   </userContext.Provider>
   </BrowserRouter>
  );
}

export default App;
