import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import ButtonAppBar from "./header"
import {toast, Toast,ToastContainer} from "react-toastify"


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
  const navigate=useNavigate()
  const handleLogin = async () => {
    try {
      // const response = await axios.post('/login', { email, password });
      // localStorage.setItem('token', response.data.token);
      // console.log(email);
      if(confirmpassword!==password){
        toast.error("passwords not matched",{
          position:"top-center"
        })
        console.log(confirmpassword)
      }
      else{
        localStorage.setItem('token', email)
        navigate("/header")

      }
      // localStorage.setItem('token', "19k61a0419")
      // // navigate("/header")
      // navigate("/")
      

    } catch (error) {
      console.error(error);
    }
  };
    return(
        <>
        <div className="container">
                    <div className="conlogin">
                        <label for="phone_number">Email</label>
                        <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label for="message">password:</label>
                        <input type="password" placeholder="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <label for="message">confirm password:</label>
                        <input type="password" placeholder="re enter password" id="conpassword" value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)}></input>
                        <input type="button" value="Register"  className="button" onClick={handleLogin}></input>
                    </div>
                    <ToastContainer/>
          </div>
        </>
    )
}
export default Register;