import React from "react";

const Label = ({ children, className, id }) => {
  return (
    <div
      className={`border border-black py-2 px-0  text-lg rounded-4xl w-40 text-center ${className}`}
    >
      <p id={id}>{children}</p>
    </div>
  );
};

export default Label;
