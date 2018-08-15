import React, { Component } from "react";
import { connect } from "react-redux";

import userData from "../../data/users_data.js";
import Home from "../Home";
import Create from "../Create";
import Edit from "../Edit";
import * as actions from "../../actions";

class App extends Component {
  componentDidMount() {
    userData.forEach(user => {
      this.props.dispatch(actions.addUser(user));
    });
  }

  render() {
    const { flag } = this.props;
    return (
      <div>
        {flag.route === "home" && <Home />}
        {flag.route === "create" && <Create />}
        {flag.route === "edit" && <Edit data={flag.id} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    flag: state.flags
  };
};

export default connect(mapStateToProps)(App);
