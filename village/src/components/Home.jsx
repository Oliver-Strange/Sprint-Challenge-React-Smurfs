import React from "react";
import styled from 'styled-components';

function Home(props) {
  const routeToSmurfs = event => {
    event.preventDefault();
    props.history.push("/smurfs");
  };

  return (
    <StyledHomeContainer>
      <h1>Smurfs!</h1>
      <button onClick={routeToSmurfs}>Let's see em!</button>
    </StyledHomeContainer>
  );
}

const StyledHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20% auto;

    button {
        border-radius: 10px;
        border-style: none;
        padding: 5px;
    }
`;

export default Home;
