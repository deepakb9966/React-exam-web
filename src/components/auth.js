import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import ButtonAppBar from "./header"
import Index from './index'

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleLogin = async () => {
    try {
      // const response = await axios.post('/login', { email, password });
      // localStorage.setItem('token', response.data.token);
      console.log(email);
      localStorage.setItem('token', "19k61a0419")
      // navigate("/header")
      navigate("/")
      

    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    // console.log(token && token.length >= 10)
    return token && token.length >= 10; // check if token is valid
  };

  return (
    <>
      {isAuthenticated() ? (
        // <button onClick={handleLogout}>Logout</button>
        // <ButtonAppBar/>
        <Index/>
       
        
      ) : (
        <>
                
          {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button> */}
          <div className="container">
                    <div className="conlogin">
                        <label for="phone_number">Email</label>
                        <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label for="message">password:</label>
                        <input type="password" placeholder="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <input type="button" value="login"  className="button" onClick={handleLogin}></input>
                        <a href="/register">No account register here?</a>
                    </div>
          </div>

          </>
      )}
      </>
  );
};

export default Auth;