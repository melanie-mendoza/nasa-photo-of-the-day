import React from "react";
import "./App.css";
import MediaList from "./components/MediaList";
import LearnButton from "./components/LearnButton";
import DateButton from "./components/LearnButton";
import "./react-datetime.css";
import styled from "styled-components";

const Headline = styled.h1`
  color: white;
  margin: 0 auto;
  background-color: green;
  font-family: "Robot", sans-serif;
  font-size: 52px;
  margin-bottom: 40px;

  &:hover {
    background-color: blue;
  }

  @media(max-width: 600px) {
    background-color: purple;
  }
`;


function App() {
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>
      <Headline>NASA Photo Of The Day</Headline>
      <MediaList />
      
      <LearnButton buttonText={"Learn More"}/>
      <DateButton buttonText={"Pick A Date"}/>
  
    </div>
  );
}

export default App;
