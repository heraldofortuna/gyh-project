import React from "react";

const Input = ({ label, handleInput }) => {
  return (
    <label className="input">
      { label }
      <input
        className="input_text"
        type="password"
        onChange={handleInput}
      />
    </label>
  )
};

export default Input;