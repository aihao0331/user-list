import React from "react";

const NextBtn = props => {
  return props.page >= props.size ? (
    <li class="page-item disabled">
      <a class="page-link">Next</a>
    </li>
  ) : (
    <li class="page-item" onClick={() => props.change(props.page + 1)}>
      <a class="page-link">Next</a>
    </li>
  );
};

export default NextBtn;
