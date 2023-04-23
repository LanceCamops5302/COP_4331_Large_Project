import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


 export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleUsernameChange = (event) => {
      console.log(username)
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      console.log(password)
      setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        console.log(email)
        setEmail(event.target.value);
      };

  
    const handleSubmit = (event) => {
      event.preventDefault();
      // perform login validation here
    };
  
    return (
      <div className="d-flex justify-content-center p-5">
        <div className="card shadow-sm">
          <div className="container p-5 align-content-center">
            <div className="header">
              <h2>Sign Up </h2>
            </div>
            <div className="forms">
              <div className="form p-3">
                <h4 className="p-2">Username</h4>
                <TextField id="outlined-basic" size="small" label="" variant="outlined" value={username} onChange={handleUsernameChange}   />
                <h4 className="p-2">Email</h4>
                <TextField id="outlined-basic" size="small" label="" variant="outlined" value={email} onChange={handleEmailChange}/>
                <h4 className="p-2">Password</h4>
                <TextField id="outlined-basic p-5" size="small" label="" variant="outlined" value={password} onChange={handlePasswordChange} />
              </div>
              <div className="button p-3">
                <Button variant="outlined" >Register</Button>
              </div>
            </div>
            <Button variant="filled" >Already have an account?</Button>

          </div>
        </div>
      </div>
    )
  }