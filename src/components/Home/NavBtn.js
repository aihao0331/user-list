import React from "react";

const NavBtn = props => {
  return (
    props.selected ? 
    <li class="page-item active" onClick={() => props.change(props.data)}>
      <a class="page-link">
        {props.data}
      </a>
    </li>
    :
    <li class="page-item" onClick={() => props.change(props.data)}>
      <a class="page-link">
        {props.data}
      </a>
    </li>
  );
};


export default NavBtn;