import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import { useState, useEffect  } from 'react';
import axios from 'axios';
// import { Card } from 'react-bootstrap';
import {Typography} from "@mui/material";
import { Link } from "react-router-dom";

export default function Content(){
    const [responseData, setResponseData] = useState([]);

    const [items, setItems] = useState([]);
  
    useEffect(() => {
      let isMounted = true;
      axios.get('http://localhost:5000/record')
        .then(response => {
          if (isMounted) {
            setItems(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
        return () => {
          isMounted = false;
        };
      }, []);
    
    
    return (
      <div className="mx-auto w-75">
        <div className="text-center">
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
    const { name, address, imagelink, hours, _id} = props.item;
  
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
              <h3 className="card-title text-primary">{name}</h3>
              <h5 className="card-text text-dark">Address</h5>
              <p className="card-text">{`${address.street}, ${address.city}, ${address.state} ${address.zipcode}`}</p>
              <Link className="btn btn-link btn-outline-primary" to={`/clips/${_id}`}>Check it Out!</Link>
            </div>
            <div style={{}}>
              <h5 className="card-text text-success">Hours</h5>
              <ul>
                <li>Monday: {hours.monday}</li>
                <li>Tuesday: {hours.tuesday}</li>
                <li>Wednesday: {hours.wednesday}</li>
                <li>Thursday: {hours.thursday}</li>
                <li>Friday: {hours.friday}</li>
                <li>Saturday: {hours.saturday}</li>
                <li>Sunday: {hours.sunday}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
