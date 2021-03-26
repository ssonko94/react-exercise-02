import React from "react";

export default function Box(props) {
  const size = props.size;
  return (
    <div className={size} style={props.style}>
      {props.children}
    </div>
  );
}
