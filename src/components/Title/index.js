import React from "react";
import "./style.css";

// this is where the score and highscore will display on the page in the title section.
function Title(props) {
  return <div className="title">{props.children}
  <div className="score">
  Score: {props.score} | Highscore: {props.highscore}
  </div>
  </div>;
}

export default Title;
