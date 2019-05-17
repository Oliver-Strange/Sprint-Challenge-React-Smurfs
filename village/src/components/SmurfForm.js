import React, { Component } from "react";

class SmurfForm extends Component {
  state = {
    smurfs: this.props.activeSmurf || {
      name: "",
      age: "",
      height: ""
    }
  };

  submitSmurf = event => {
    event.preventDefault();
    if (this.props.activeSmurf) {
      this.props.updateSmurfForm(this.state.smurfs);
    } else {
      this.props.addSmurf(this.state.smurfs);
    }
  };

  handleInputChange = event => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      smurfs: {
        ...prevState.smurfs,
        [event.target.name]: event.target.value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurfs.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurfs.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurfs.height}
            name="height"
          />
          <button type="submit">
            {this.props.activeSmurf ? "Update Smurf" : "Add to the village"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
