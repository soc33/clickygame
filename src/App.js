import React, { Component } from 'react';
import PictureButton from "./components/PictureButton";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import Navbar from "./components/BootstrapComps/navbar";
import Jumbotron from "./components/BootstrapComps/Jumbotron";
// import Container from "./components/BootstrapComps/container";
import "./App.css";

class App extends Component {
  state = {
    pictures,
    score: 0,
    highscore: 0
  };

  switchPictures= id => {
    this.state.pictures.find((o, i) => {
      if (o.id === id) {
        if(pictures[i].count === 0){
          pictures[i].count = pictures[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.pictures.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      } 
      console.log("switched picture " + o.id);
    });
  };

  gameOver() {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.pictures.forEach(picture => {
      picture.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  };



  render() {
    return (
      <div>
        < Navbar score={this.state.score} highscore={this.state.highscore}>PikaCHOOSE Carefully! </Navbar>
        <Jumbotron />
        <Wrapper>
          {this.state.pictures.map(picture => (
            <PictureButton
              switchPictures={this.switchPictures}
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
