import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar ">
      <Link class="logo">
        <img src="Images\logo.png" alt="Logo" />
        <span>FINADVISOR</span>
      </Link>

      {/* <div class="menu-toggle">&#9776;</div> */}

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/how-we-work">How We Work</Link>
        </li>
        <li>
          <Link to="/">Why Choose Us</Link>
        </li>
        <li>
          <Link to="/">FAQs</Link>
        </li>
        <div className="nav-btns">
          <Link className="how-use-btn">How to use </Link>
          <Link class="contact-btn">Contact Us</Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
