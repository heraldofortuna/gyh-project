import React from "react";

import { InputProps } from "../types/global";

const Input = ({ label, handleInput }: InputProps) => {
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