import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
import resume from "../Thu_Nguyen_Resume.pdf";

const Navbar = () => {
  return (
    <div>
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/photo">Photography</Link>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
