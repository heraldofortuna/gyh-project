import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

import sectionOne from "../assets/section-1.jpeg";

const Sections = () => {
  return (
    <div className="container">
      <ul className="sections">
        <li className="section">
          <Link to="/next-dates">
            <Card image={sectionOne} title="Próximas Citas" />
          </Link>
        </li>
        <li className="section">
          <Link to="/next-dates">
            <Card image={sectionOne} title="Próximas Citas" />
          </Link>
        </li>
        <li className="section">
          <Link to="/next-dates">
            <Card image={sectionOne} title="Próximas Citas" />
          </Link>
        </li>
        <li className="section">
          <Link to="/next-dates">
            <Card image={sectionOne} title="Próximas Citas" />
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default Sections;