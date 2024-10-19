import React, { useState } from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const [active, setActive] = useState("Home");

  const handleActive = (act) => {
    setActive(act);
    setShowMenu(false);
  };

  return (
    <nav class="navbara">
      <div className="logo-wrap">
        <Link class="logo" to="/">
          <img src="Images\logo.png" alt="Logo" />
          <span>FINADVISOR</span>
        </Link>

        <div className="hamburger" onClick={() => handleShowMenu()}>
          {!showMenu ? (
            <GiHamburgerMenu></GiHamburgerMenu>
          ) : (
            <RxCross2></RxCross2>
          )}
        </div>
      </div>

      <ul className={showMenu ? "menushow" : "menuhide"}>
        <li>
          <Link
            to="/"
            className={active === "Home" ? "active" : ""}
            onClick={() => handleActive("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={active === "Services" ? "active" : ""}
            onClick={() => handleActive("Services")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={active === "Work" ? "active" : ""}
            onClick={() => handleActive("Work")}
          >
            How We Work
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={active === "Why" ? "active" : ""}
            onClick={() => handleActive("Why")}
          >
            Why Choose Us
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={active === "FAQs" ? "active" : ""}
            onClick={() => handleActive("FAQs")}
          >
            FAQs
          </Link>
        </li>
        <div className="nav-btns">
          <Link className="how-use-btn" to="/how-we-work">
            How to use{" "}
          </Link>
          <Link class="contact-btn">Contact Us</Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
