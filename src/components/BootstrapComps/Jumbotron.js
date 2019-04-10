import React from 'react';
import pics from "../../pictures/pics.json";
import "./style.css";


function Jumbotron(props) {
  return (
    <div className="jumbotron d-flex justify-content-center">
    <img alt={pics[0].name} src={pics[0].url} className="jumboPic"/>
    <img alt={pics[1].name} src={pics[1].url} className="jumboPic"/>
      {/* <h6 className="instructions">Click image to begin! Only click each image once to earn points!</h6> */}


    </div>
  );
}


export default Jumbotron;