import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from 'moment';
import MediaCard from "./MediaCard"
//import Buttons from "./Buttons";
// import styled from "styled-components";

// const Image = styled.img`
//   width: 50%
//   border-radius: 2px;
//   margin: 0 auto;
// `;


export default function MediaList() {
  const [media, setMedia] = useState([]);
  //console.log(media)
  const [date, setDate] = useState(Moment().format("YYYY-MM-DD"))


  useEffect( () => {
    // make a web API call to get data
    // https://api.nasa.gov/planetary/apod?api_key=5MmWnV0bhdCmXGAXjpUKkBeZFjZ4Zk9riSvCxE7h   
    // render the media to the screen using Media
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=5MmWnV0bhdCmXGAXjpUKkBeZFjZ4Zk9riSvCxE7h&date=${date}`)
      .then(response => {
        console.log(response);
        //save data to state
        setMedia(response.data);
      })
      .catch( err => {
        console.log(err);
      });
  }, [date]); 

  return (
    <div>
      <MediaCard
        title={media.title}
        date={media.date}
  
        hdurl={media.hdurl}
        
  
        explanation={media.explanation}
        setDate={setDate}
      />
    </div>
  );
}