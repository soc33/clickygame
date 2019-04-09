import React, { Component } from 'react';
import PictureButton from "./components/PictureButton";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import Navbar from "./components/BootstrapComps/navbar";
// import Container from "./components/BootstrapComps/container";
import Counter from "./components/Counter/Counter";
import "./App.css";

class App extends Component {
  state = { pictures };

  switchPictures() {};

  gameOver() {};



  render() {
    return (
      <div>
        < Navbar />
        <Counter />
        <Wrapper>
            {this.state.pictures.map(picture => (
              <PictureButton
                onClick={this.switchPictures}
                id={picture.id}
                key={picture.id}
                name={picture.name}
                image={picture.image}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
