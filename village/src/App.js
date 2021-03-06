import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import styled from "styled-components";

import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSmurf: null,
      smurfs: [],
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ message: "Data fetching failed!" });
      });
  }

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push("/smurfs");
      })
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        this.props.history.push("/smurfs");
      })
      .then(err => console.log(err));
  };

  populateSmurfForm = smurf => {
    this.setState({
      activeSmurf: smurf
    });
    this.props.history.push("/smurf-form");
  };

  updateSmurfForm = smurf => {
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        this.setState({
          activeSmurf: null,
          smurfs: res.data
        });
        this.props.history.push("/smurfs");
      })
      .then(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
      <StyledContainer>
        <StyledNav>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>
          <StyledNavLink to="/smurfs">Smurfs</StyledNavLink>
          <StyledNavLink to="/smurf-form">Add Smurf</StyledNavLink>
        </StyledNav>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/smurfs"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurfs/:id"
          render={props => (
            <Smurf
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              populateSmurfForm={this.populateSmurfForm}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              activeSmurf={this.state.activeSmurf}
              updateSmurfForm={this.updateSmurfForm}
            />
          )}
        />
      </StyledContainer>
        
      </div>
    );
  }
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;

`;

const StyledNavLink = styled(NavLink)`
  margin: 20px;
  text-decoration: none;
  color: black;
`;

export default App;
