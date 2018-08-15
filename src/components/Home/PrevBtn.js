import React from "react";

const PrevBtn = props => {
  return props.page <= 1 ? (
    <li class="page-item disabled">
      <a class="page-link">Prev</a>
    </li>
  ) : (
    <li class="page-item" onClick={() => props.change(props.page - 1)}>
      <a class="page-link">Prev</a>
    </li>
  );
};

export default PrevBtn;
