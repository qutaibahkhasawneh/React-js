import React, { useState } from 'react';

import useAuth from './useAuth';
const Login = ()=> {
  
const [email ,setEmail]=useState('');

const [password ,setPassword]=useState('');

const [message,handelSubmit,handelLogout] = useAuth(email , password);
// Handlechange();
console.log(message);
// console.log(userPassword);

  return (
<div className="container" >
  <h2>Login</h2>
  <form action="" onSubmit={handelSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={e =>setEmail(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" value={password} onChange={e =>setPassword(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
  <h3>{message}</h3>

</div>
  );
}
export default Login;