import React from "react";
import styled from "styled-components";

function Smurfs(props) {
  function routeToSmurf(event, smurf) {
    event.preventDefault();
    props.history.push(`/smurfs/${smurf.id}`);
  }
  return (
    <StyledSmurfsContainer>
      <h1>Smurf Village</h1>
        <StyledSmurf>
          {props.smurfs.map(smurf => (
            <div key={smurf.id} onClick={event => routeToSmurf(event, smurf)}>
              <h1>name: {smurf.name}</h1>
              <h2>age: {smurf.age}</h2>
              <h2>height: {smurf.height}</h2>
            </div>
          ))}
        </StyledSmurf>
    </StyledSmurfsContainer>
  );
}

const StyledSmurfsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const StyledSmurf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border: 1px solid grey;
    
    &:hover {
        cursor: pointer; 
    }

    h1 {
        margin: 5px auto;
    }

    h2 {
        margin 5px auto;
    }
`;

export default Smurfs;
