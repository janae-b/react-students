import React from "react";
import Score from "../Score/Score"

const Student = (props) => {
  return (
      <body className="App-body">
        <div className="card col-md-8 m-3">
        <h1>{props.student.name}</h1> 
        <p className="card-body">{props.student.bio}</p>
        <h4>Scores</h4>
        {props.student.scores.map(score => <Score Score={score}/>)}
        </div>
      </body>
  );
};

export default Student;