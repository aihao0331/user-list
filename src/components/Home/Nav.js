import React, { Component } from "react";

import NavBtn from "./NavBtn.js";
import PrevBtn from "./PrevBtn.js";
import NextBtn from "./NextBtn.js";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { pages: [], total: 0 };
  }

  componentWillReceiveProps(props) {
    let arr = [];
    let total = Math.ceil(props.data.size / props.data.userPerPage);
    for (let i = 1; i <= total; i++) {
      arr.push(i);
    }
    this.setState({ pages: arr, total: total });
  }

  render() {
    return (
      <nav aria-label="..." id="page-nav">
        <ul class="pagination">
          <PrevBtn
            page={this.props.data.curPage}
            change={this.props.pageChange}
          />
          {this.state.pages.map((num, index) => {
            return index + 1 === this.props.data.curPage ? (
              <NavBtn
                data={num}
                selected={true}
                change={this.props.pageChange}
              />
            ) : (
              <NavBtn
                data={num}
                selected={false}
                change={this.props.pageChange}
              />
            );
          })}
          <NextBtn
            page={this.props.data.curPage}
            size={this.state.total}
            change={this.props.pageChange}
          />
        </ul>
      </nav>
    );
  }
}

export default Nav;
