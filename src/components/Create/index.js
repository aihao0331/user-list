import React, { Component } from "react";
import { connect } from "react-redux";


import * as actions from "../../actions";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "Mr",
      gender: "Male",
      age: ""
    };
  }

  firstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  lastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  titleChange = e => {
    this.setState({ title: e.target.value });
  };

  genderChange = e => {
    this.setState({ gender: e.target.value });
  };

  ageChange = e => {
    this.setState({ age: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title,
      gender: this.state.gender,
      age: this.state.age
    };
    this.props.dispatch(actions.addUser(user));
    this.props.dispatch(actions.toHome());
  };

  render() {
    return (
      <div className="create-user">
        <h2 className="head">Create A New User</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={this.firstNameChange}
              value={this.state.firstName}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={this.lastNameChange}
              value={this.state.lastName}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <select
              className="form-control"
              id="title"
              onChange={this.titleChange}
              value={this.state.title}
            >
              <option value="Mr">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Miss">Miss.</option>
              <option value="Ms">Ms.</option>
              <option value="Sir">Sir.</option>
              <option value="Dr">Dr.</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              onChange={this.genderChange}
              value={this.state.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Age"
              onChange={this.ageChange}
              value={this.state.age}
              maxLength="3"
              required
            />
          </div>
          <button
            type="submit"
            class="btn btn-secondary back-btn"
            onClick={() => this.props.dispatch(actions.toHome())}
          >
            Back
          </button>
          <button type="submit" class="btn btn-primary create-btn">
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Create);
