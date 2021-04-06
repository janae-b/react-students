import React from "react";

const Score = (props) => {
    return (
      <div className="card col-sm-4">
          {props.Score.date}<br/>
          {props.Score.score}
      </div>
    );
  }

export default Score;
