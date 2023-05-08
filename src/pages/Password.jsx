import React, { useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";

const Password = ({ setIsCorrectPassword }) => {
  const [password, setPassword] = useState("");

  const handlePasswordInput = (event) => {
    setPassword(event?.target?.value);
  };

  const handlePasswordSubmit = () => {
    const cleanPassword = password?.replace(/\s/g, "")?.toLocaleLowerCase() === "genesisyheraldo";
    
    setIsCorrectPassword(cleanPassword);
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
