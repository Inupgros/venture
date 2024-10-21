import React, { useState } from "react";
import "../Styles/navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const [active, setActive] = useState("Home");

  const handleActive = (act, sectionId) => {
    setActive(act);
    setShowMenu(false);

    // Navigate to the home page first, and then scroll to the section
    navigate("/");

    // Scroll after a slight delay to ensure page loads
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust the delay as necessary
  };

  return (
    <nav className="navbara">
      <div className="logo-wrap">
        <Link className="logo" to="/">
          <img src="/Images/Comlogo-removebg-preview.png" alt="Logo" />
        </Link>

        <div className="hamburger" onClick={() => handleShowMenu()}>
          {!showMenu ? <GiHamburgerMenu /> : <RxCross2 />}
        </div>
      </div>

      <ul className={showMenu ? "menushow" : "menuhide"}>
        <li>
          <Link
            to="/"
            className={active === "Home" ? "active" : ""}
            onClick={() => handleActive("Home", "hero-section")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={active === "Services" ? "active" : ""}
            onClick={() => handleActive("Services", "service-section")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={active === "Work" ? "active" : ""}
            onClick={() => handleActive("Work", "assest-section")}
          >
            How We Work
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={active === "Why" ? "active" : ""}
            onClick={() => handleActive("Why", "why-join-section")}
          >
            Why Choose Us
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={active === "FAQs" ? "active" : ""}
            onClick={() => handleActive("FAQs", "faq-section")}
          >
            FAQs
          </Link>
        </li>
        <div className="nav-btns">
          <Link className="how-use-btn" to="/how-we-work">
            How to use
          </Link>
          <Link className="contact-btn">Contact Us</Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
