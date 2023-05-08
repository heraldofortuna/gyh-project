import React, { useState } from "react";

import "./App.css";

import Password from "./pages/Password";

const App = () => {
  const [isCorrectPassword, setIsCorrectPassword] = useState("");
  
  return (
    <div className="app">
      <header className="header">
        <div className="header_container">
          <h1>GyH Project</h1>
        </div>
      </header>
      <body className="body">
        <div className="wrapper">
          {
            isCorrectPassword ? (
              <>
                <div>
                  <ul>
                    <li>1. Tonito en Terrazas los 2</li>
                    <li>2. Fullday en un club</li>
                    <li>3. Vamos a un estreno en el cine</li>
                  </ul>
                </div>
              </>
            ) : (
              <Password setIsCorrectPassword={setIsCorrectPassword} />
            )
          }
        </div>
      </body>
      <footer className="footer">
        <div className="footer_container">
          <p className="footer_developer">Hecho por: Heraldo Fortuna - 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
