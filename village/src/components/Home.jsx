import React from 'react';

function Home(props) {
    const routeToSmurfs = event => {
        event.preventDefault();
        props.history.push('/smurfs');
    };

    return (
        <div>
            <h1>Smurfs!</h1>
            <button onClick={routeToSmurfs}>Let's see em!</button>
        </div>
    );
}

export default Home;