import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";

import Password from "./pages/Password";
import NextDates from "./pages/NextDates";

import "./index.css";

export default App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Password />}>
          <Route index element={<Password />} />
          <Route path="next-dates" element={<NextDates />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
