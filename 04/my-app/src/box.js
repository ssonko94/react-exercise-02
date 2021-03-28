import React from "react";

export default function Box(props) {
  const size = props.size;
  return (
    <div className={`box box--${size}`} style={props.style}>
      {props.children}
    </div>
  );
}
