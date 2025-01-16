import React from "react";

let CardNumber = (props) => {
  return (
    <div className="bmb-3 mb-sm-0 my-2 mx-1">
      <div className="card bg-dark">
        <div className="card-body text-white">{props.number}</div>
      </div>
    </div>
  );
};

let SecondsCounter = (props) => {
  return (
    <div className="d-flex flex-row justify-content-center bg-dark text-white py-3">
      <div className="bmb-3 mb-sm-0 my-2 mx-1">
        <div className="card bg-dark">
          <div className="card-body text-white">
            <i className="fa-regular fa-clock fa-rotate-270"></i>
          </div>
        </div>
      </div>
      <CardNumber number={Math.floor((props.seconds / 100000) % 10)} />
      <CardNumber number={Math.floor((props.seconds / 10000) % 10)} />
      <CardNumber number={Math.floor((props.seconds / 1000) % 10)} />
      <CardNumber number={Math.floor((props.seconds / 100) % 10)} />
      <CardNumber number={Math.floor((props.seconds / 10) % 10)} />
      <CardNumber number={Math.floor((props.seconds / 1) % 10)} />
    </div>
  );
};

export default SecondsCounter;
