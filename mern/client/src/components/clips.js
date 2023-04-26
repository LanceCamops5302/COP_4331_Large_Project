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
          <Typography variant="h1" component="h2" >
            Explore
          </Typography>
        </div>
        <div class="container">
  <div className="row">
    {items.map((item, i) => (
      <div key={i} className="col-md-4 mb-4">
        <Card item={item} className="card" />
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}
function Item(props){
  const { name, address, imagelink, hours } = props.item;

    return(
        <div className="card p-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">c
          {`${address.street}, ${address.city}, ${address.state} ${address.zipcode}`}          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    )
}