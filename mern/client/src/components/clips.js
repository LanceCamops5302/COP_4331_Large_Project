import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from '@mui/material';
import Card from './Card'
import { useState } from 'react';
import axios from 'axios';


export default function Clips(props) {
    const [items, setItems] = useState([]);
  
    
    axios.get('http://localhost:5000/record')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  return (
    <div>
      <div>
        <div className="text-center">
          <Typography variant="h1" component="h2">
            Explore
          </Typography>
        </div>
        <Card/>
      </div>
      
    </div>
  );
}
