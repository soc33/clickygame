import React from "react";
import "./style.css";

class PictureButton extends React.Component {
  switchPictures = () => {

  }

  render(props) {
    return <div className="pictureButton">
      <img className="picture" alt={props.name} src={props.image} onCLick={this.switchPictures} />
    </div>;
  }
}

export default PictureButton;