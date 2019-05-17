import React, { Component } from "react";

function Smurfs(props) {
  function routeToSmurf(event, smurf) {
    event.preventDefault();
    props.history.push(`/smurfs/${smurf.id}`);
  }
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      {props.smurfs.map(smurf => (
        <div key={smurf.id} onClick={event => routeToSmurf(event, smurf)}>
          <h1>name: {smurf.name}</h1>
          <h2>age: {smurf.age}</h2>
          <h2>height: {smurf.height}</h2>
        </div>
      ))}
    </div>
  );
}

export default Smurfs;
