import React from "react";

import { ButtonProps } from "../types/global";

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <button
      className="button"
      onClick={handleClick}
    >
      { text }
    </button>
  )
};

export default Button;