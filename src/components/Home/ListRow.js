import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class ListRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.firstName}</td>
        <td>{this.props.data.lastName}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.gender}</td>
        <td>{this.props.data.age}</td>
        <td>
          <button
            type="button"
            class="btn btn-outline-success"
            id="my-btn"
            onClick={() => this.props.dispatch(actions.toEdit(this.props.data.id))}
          >
            <i className="fas fa-pencil-alt" />
            Edit
          </button>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-outline-danger"
            id="my-btn"
            onClick={() => this.props.delete(this.props.data.id)}
          >
            <i className="fas fa-trash-alt" />
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(() => {})(ListRow);
