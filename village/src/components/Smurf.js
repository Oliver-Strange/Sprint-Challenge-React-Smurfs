import React from 'react';

function Smurf(props) {
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );
  if (!props.smurfs.length || !smurf) {
    return <h2>Looking for Smurfs</h2>;
  }

  const deleteHandler = event => {
    event.preventDefault();
    props.deleteSmurf(props.match.params.id)
  }

  const populateSmurfForm = event => {
    event.preventDefault();
    props.populateSmurfForm(smurf)
  }



  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <button onClick={populateSmurfForm}>Update Smurf</button>
      <button onClick={deleteHandler}>Delete Smurf</button>
    </div>
  );
};


export default Smurf;

