import React from "react";

const Results = (props) => {
  const results = props.shows.map((d, i) => {
    return (
      <div key={i}>
        <img src={d.image} alt={d.name} />
        <p>{d.name}</p>
      </div>
    );
  });

  return (
    <div>
      <button onClick={props.onSearchAgain}>Back to Search</button>
      <div>{results}</div>
    </div>
  );
};

export default Results;
