import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Match from "../Match";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      title: "Mr",
      gender: "Male",
      age: "",
      password1: "",
      password2: "",
      match: ""
    };
  }

  componentDidMount() {
    this.props.users.forEach(user => {
      if (user.id == this.props.data) {
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          title: user.title,
          gender: user.gender,
          age: user.age
        });
      }
    });
  }

  titleChange = e => {
    this.setState({ title: e.target.value });
  };

  genderChange = e => {
    this.setState({ gender: e.target.value });
  };

  ageChange = e => {
    this.setState({ age: e.target.value });
  };

  password1Change = e => {
    this.setState({ password1: e.target.value });
  };

  password2Change = e => {
    this.setState({ password2: e.target.value });
    if (this.state.password1 !== e.target.value) {
      this.setState({ match: false });
    } else {
      this.setState({ match: true });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.password1 === this.state.password2) {
      let user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        title: this.state.title,
        gender: this.state.gender,
        age: this.state.age
      };
      this.props.dispatch(
        actions.editUser(this.props.data, user)
      );
      this.props.dispatch(actions.toHome());
    }
  };

  render() {
    return (
      <div className="create-user">
        <h2 className="head">Update User`s Info</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="readonly-input"
              value={this.state.firstName}
              placeholder="First Name"
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="readonly-input"
              value={this.state.lastName}
              placeholder="Last Name"
              readOnly
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
          <div className="form-group">
            <label htmlFor="age">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password1"
              placeholder="Password"
              onChange={this.password1Change}
              value={this.state.password1}
              required
            />
            <Match data={this.state.match} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Confirm Password"
              onChange={this.password2Change}
              value={this.state.password2}
              required
            />
            <Match data={this.state.match} />
          </div>

          <button
            type="submit"
            class="btn btn-secondary back-btn"
            onClick={() => this.props.dispatch(actions.toHome())}
          >
            Back
          </button>
          <button type="submit" class="btn btn-primary create-btn">
            Update
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

export default connect(mapStateToProps)(Edit);
