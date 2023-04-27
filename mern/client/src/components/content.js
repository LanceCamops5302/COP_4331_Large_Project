import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import { useState } from 'react';
import axios from 'axios';
// import { Card } from 'react-bootstrap';
import {Typography} from "@mui/material";
export default function Content(){
    const [responseData, setResponseData] = useState([]);

    const [items, setItems] = useState([]);
  
    
      axios.get('http://localhost:5000/record')
        .then(response => {
          setItems(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    
    
    return (
      <div class="mx-auto w-75">
        <div class="text-center">
        <Typography variant="h1" component="h2">
  Featured
</Typography>
        </div>
        <div>
        <Carousel>
          {
            items.map((item, i) => <Item key={i} item={item} />)
          }
        </Carousel>
        {/* <Button variant="outlined" onClick={handleSubmit}>Fetch Data</Button> */}
      </div>
      
      </div>
    );
  }
  
  function Item(props) {
    const { name, address, imagelink, hours } = props.item;
  
    return (
      <div>
        <div className="card w-75 p-3 mx-auto shadow">
          {imagelink && (
            <a href={imagelink}>
              <img
                className="card-img-top mx-auto d-block rounded"
                src={imagelink}
                alt={name}
                style={{ height: '200px', width: '320px', objectFit: 'cover' }}
              />
            </a>
          )}
          <div className="card-body" style={{ display: "flex", justifyContent: "center"}}>
            <div style={{paddingRight: "200px"}}>
              <h5 className="card-title text-primary">{name}</h5>
              <h6 className="card-text text-dark">Address</h6>
              <p className="card-text">{`${address.street}, ${address.city}, ${address.state} ${address.zipcode}`}</p>
            </div>
            <div style={{}}>
              <h6 className="card-text text-success">Hours</h6>
              <ul>
                <li>Monday: {hours.monday}</li>
                <li>Tuesday: {hours.tuesday}</li>
                <li>Wednesday:{hours.wednesday}</li>
                <li>Thursday: {hours.thursday}</li>
                <li>Friday: {hours.friday}</li>
                <li>Saturday: {hours.saturday}</li>
                <li>Sunday: {hours.sunday}</li>
              </ul>
              <button className="btn btn-outline-primary">Check it Out!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
