import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';


 export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (event) => {
      console.log(username)
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      console.log(password)
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      axios.post(`http://localhost:5000/auth`, {
        user_name: username,
        pass_word: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
      event.preventDefault();
      // perform login validation here
    };
  
    return (
      <div className="d-flex justify-content-center p-5">
        <div className="card shadow-sm">
          <div className="container align-content-center p-5">
            <div className="header">
              <h2>Login </h2>
            </div>
            <div className="forms">
              <div className="form p-3">
                <h4 className="p-2">Username</h4>
                <TextField id="outlined-basic" size="small" label="" variant="outlined" value={username} onChange={handleUsernameChange}   />
                <h4 className="p-2">Password</h4>
                <TextField id="outlined-basic p-5" size="small" label="" variant="outlined" value={password} onChange={handlePasswordChange} />
              </div>
              <div className="button p-3">
                <Button variant="outlined" onClick={handleSubmit} >Login</Button>
              </div>
            </div>
            <Button variant="filled" >Not a Member?</Button>

          </div>
        </div>
      </div>
    )
  }