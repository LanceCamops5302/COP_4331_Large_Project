import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from '@mui/material';
import Card from './Card'
import axios from 'axios';
import './VideoGrid.css';
import ModalForm from "./ModalForm";

export default function Clips(props) {
    const [items, setItems] = useState([]);
    // This method fetches the records from the database.
    useEffect(() => {
      async function getItems() {
        const response = await fetch(`http://localhost:5000/clips`);
  
        if (!response.ok) {
          const message = `An error occured: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        const items = await response.json();
        setItems(items);
      }
  
      getItems();
  
      return;
    }, []);


    console.log(items.length);

  return (
    <div>
      <div>
        <div className="text-center" style={{position: "relative"}}>
          <Typography variant="h1" component="h2">
            Explore
          </Typography>
          <div>
          </div>
        </div>
        <div className="container">
          <div className="video-grid">
            {items.map((item) => (
              <div>
                <VideoItem item={item} className="card" />
                <p>{item.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const VideoItem = (props) => {
  const { rating, url, imagelink, hours } = props.item;

    const videoID = extractVideoId(url);
    const youtubeID = 'https://www.youtube.com/embed/' + videoID + '?enablejsapi=0&modestbranding=1'
    console.log(youtubeID);
    return(
      <div>
      <div className='video-wrapper'>
      <iframe className="video" src={youtubeID} title="YouTube video player" 
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
      </div>
    )
}


function extractVideoId(link) {
  var regex = /[?&]([^=#]+)=([^&#]*)/g;
  var params = {};
  var match;
  while (match = regex.exec(link)) {
    params[match[1]] = match[2];
  }
  return params['v'];
}
