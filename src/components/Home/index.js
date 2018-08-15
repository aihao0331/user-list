import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import ListRow from "./ListRow.js";
import Nav from "./Nav.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: "",
      curPage: 1,
      userPerPage: 5,
      firstAsc: true,
      lastAsc: true,
      titleAsc: true,
      genderAsc: true,
      ageAsc: true
    };
  }

  componentDidMount() {
    this.setState({ users: this.props.users });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps.users });
  }

  onSearch = e => {
    this.setState({ search: e.target.value });
  };

  isMatch = user => {
    return (
      user.firstName.search(new RegExp(this.state.search, "i")) !== -1 ||
      user.lastName.search(new RegExp(this.state.search, "i")) !== -1 ||
      user.title.search(new RegExp(this.state.search, "i")) !== -1 ||
      user.gender.search(new RegExp(this.state.search, "i")) !== -1 ||
      user.age.toString().search(new RegExp(this.state.search, "i")) !== -1
    );
  };

  onEdit = (id, user) => {
    this.props.dispatch(actions.editUser(id, user));
  };

  onDelete = id => {
    this.props.dispatch(actions.deleteUser(id));
    if (
      this.state.curPage >
      Math.ceil((this.state.users.length - 1) / this.state.userPerPage)
    ) {
      this.setState({ curPage: this.state.curPage - 1 });
    }
  };

  firstSort = () => {
    let arr = this.state.users;
    if (this.state.firstAsc) {
      arr.sort((a, b) => {
        return a.firstName.localeCompare(b.firstName);
      });
    } else {
      arr.sort((a, b) => {
        return b.firstName.localeCompare(a.firstName);
      });
    }
    this.setState({ users: arr, firstAsc: !this.state.firstAsc });
  };

  lastSort = () => {
    let arr = this.state.users;
    if (this.state.lastAsc) {
      arr.sort((a, b) => {
        return a.lastName.localeCompare(b.lastName);
      });
    } else {
      arr.sort((a, b) => {
        return b.lastName.localeCompare(a.lastName);
      });
    }
    this.setState({ users: arr, lastAsc: !this.state.lastAsc });
  };

  titleSort = () => {
    let arr = this.state.users;
    if (this.state.titleAsc) {
      arr.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      arr.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    this.setState({ users: arr, titleAsc: !this.state.titleAsc });
  };

  genderSort = () => {
    let arr = this.state.users;
    if (this.state.genderAsc) {
      arr.sort((a, b) => {
        return a.gender.localeCompare(b.gender);
      });
    } else {
      arr.sort((a, b) => {
        return b.gender.localeCompare(a.gender);
      });
    }
    this.setState({ users: arr, genderAsc: !this.state.genderAsc });
  };

  ageSort = () => {
    let arr = this.state.users;
    if (this.state.ageAsc) {
      arr.sort((a, b) => {
        return a.age - b.age;
      });
    } else {
      arr.sort((a, b) => {
        return b.age - a.age;
      });
    }
    this.setState({ users: arr, ageAsc: !this.state.ageAsc });
  };

  navHandler = page => {
    this.setState({ curPage: page });
  };

  userPerPageChange = e => {
    this.setState({ userPerPage: e.target.value });
  };

  render() {
    return (
      <div className="home-list">
        <h2 className="head">User List</h2>
        <div class="input-group mb-3" id="search-bar">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Search:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.search}
            onChange={this.onSearch}
          />
          <button
            type="submit"
            class="btn btn-primary mb-2"
            id="create-user-btn"
            onClick={() => this.props.dispatch(actions.toCreate())}
          >
            New User
          </button>
        </div>
        <div class="form-page">
          <label>Users per page:</label>
          <select class="form-control" onChange={this.userPerPageChange}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th onClick={this.firstSort}>FirstName</th>
              <th onClick={this.lastSort}>LastName</th>
              <th onClick={this.titleSort}>Title</th>
              <th onClick={this.genderSort}>Gender</th>
              <th onClick={this.ageSort}>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users
              .filter(user => this.isMatch(user))
              .map((user, index) => {
                if (
                  index >= (this.state.curPage - 1) * this.state.userPerPage &&
                  index < this.state.curPage * this.state.userPerPage
                ) {
                  return (
                    <ListRow
                      key={user.id}
                      data={user}
                      edit={this.onEdit}
                      delete={this.onDelete}
                    />
                  );
                }
              })}
          </tbody>
        </table>
        <Nav
          data={{
            curPage: this.state.curPage,
            userPerPage: this.state.userPerPage,
            size: this.state.users.filter(user => this.isMatch(user)).length
          }}
          pageChange={this.navHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Home);
