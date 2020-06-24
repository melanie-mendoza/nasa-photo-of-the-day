import React from "react";
import DateTime from "react-datetime";
import styled from "styled-components";

const Image = styled.img`
  width: 50%;
  border-top: 60px;
  border-radius: 40px;
`;

const Explanation = styled.p`
  width: 90%;
  justify-content: justified;
  padding-left: 60px;

  @media(max-width: 600px) {
    width: 60%;
    margin-left: 50px;
  }
`;


function MediaCard({ date, title, hdurl, explanation, setDate, media_type, url }) {
  return (
    <div className="photoCard" margin="0 auto">
      <div>
         {media_type === "video" ? 
        ( <iframe
          title="Videos in space"
          width="420"
          height="315"
          alt="space"
          src={url}
          />
      ) : (
       <Image alt="NASA" src={hdurl}/>
       )}
      </div>
      <h2>{title}</h2>
      <DateTime
        dateFormat="YYYY-MM-DD"
        timeFormat={false}
        closeOnSelect={true}
        onChange={time => {
          console.log("Time: ", time);
          const newDate = time.format("YYYY-MM-DD")
          console.log("Date is now ", newDate);
          setDate(newDate);
        }}
      />
      <Explanation>{explanation}</Explanation>
    </div>
  );
}

export default MediaCard;
