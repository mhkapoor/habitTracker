import React from "react";

const Input = ({ value, className, label, placeholder, onChange }) => {
  return (
    <div className={className}>
      <h5>{label}</h5>
      <input
        className="p-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
