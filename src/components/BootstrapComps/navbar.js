import React from 'react';

function Navbar (props) {
  return (
    <nav className="navbar navbar-light bg-light display-4"> {props.children} 
      <div className="scores">
              Score: {props.score} | Highscore: {props.highscore}
          </div>
    </nav>
      );
    }

  
  
export default Navbar;