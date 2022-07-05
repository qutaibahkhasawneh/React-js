import {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { userContext } from './userContext';
import { useContext } from 'react';

 const useAuth = (useremail, userpassword)=>{
   const { user, message, setMessage, isLoggedIn,  setIsLoggedIn } = useContext(userContext);
   // console.log(isLoggedIn)
   const handelLogout = (e) => {
      e.preventDefault();
      setIsLoggedIn(false);
      setMessage('you logged out');
  }

  const handelSubmit = (e) => {
      e.preventDefault();
      if (useremail === user.username && userpassword === user.password) {
         //  alert('Login Success');
          setIsLoggedIn(true);
          setMessage('you are Login Success');
      } else {
         setMessage('fail') ;
      }
  }
   return [message,handelSubmit,handelLogout]
}
export default useAuth ;