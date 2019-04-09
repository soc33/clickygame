import React from "react";
import "./style.css";
import pictures from "../../pictures.json";

class PictureButton extends React.Component {
  state = { pictures }
  switchPictures = pictures => {
      let ctr = pictures.length;
      let temp;
      let index;
  
      // While there are elements in the array
      while (ctr > 0) {
  // Pick a random index
          index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
          ctr--;
  // And swap the last element with it
          temp = pictures[ctr];
          pictures[ctr] = pictures[index];
          pictures[index] = temp;
      }
      return pictures;
  }

  render() {
    return <div className="pictureButton">
     
      <img className="picture" alt={this.state.pictures.name} src={this.state.pictures.image} onClick={this.switchPictures} />
    </div>;
  }
}

export default PictureButton;