import React from "react";
import "./Button.css";

const Button = ({ content, onClick, type, value, id }) => {
  return (
    <div
      data-testid={id}
      className={`button ${content} ${type}`}
      onClick={() => onClick(value || content)}
    >
      {content}
    </div>
  );
};

export default Button;
