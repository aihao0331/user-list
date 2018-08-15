import React from "react";
const Match = props => {
  return props.data === "" ? null : props.data === true ? (
    <i class="fas fa-check" />
  ) : (
    <i class="fas fa-times" style={{ color: "red" }} />
  );
};

export default Match;
