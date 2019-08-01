import React from "react";

const Error = props => {
  return (
    <div>
      <h6>Error!</h6>
      <p>
        {props.location && props.location.state && props.location.state.message}
      </p>
    </div>
  );
};

export default Error;
