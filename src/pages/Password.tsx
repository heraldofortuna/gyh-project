import React, { useState } from "react";

import { PasswordProps } from "../types/global";

import Input from "../components/Input";
import Button from "../components/Button";

const Password = ({ setIsCorrectPassword }: PasswordProps) => {
  const [password, setPassword] = useState("");

  const handlePasswordInput = (event: any) => {
    setPassword(event?.target?.value);
  };

  const handlePasswordSubmit = () => {
    const parsedPassword = password?.replace(/\s/g, "")?.toLocaleLowerCase() === "genesisyheraldo";
    
    setIsCorrectPassword(parsedPassword);
  };

  return (
    <div className="container">
      <Input
        label="Ingrese contraseña"
        handleInput={handlePasswordInput}
      />
      <Button
        text="Ingresar"
        handleClick={handlePasswordSubmit}
      />
    </div>
  )
};

export default Password;
