import React from "react";
import "./style.css";
// import pictures from "../../pictures.json";

function PictureButton(props) {
  return <div className="pictureButton">
    <img className="picture" alt={props.name} src={props.image}/>
  </div>;
}
export default PictureButton;