import React from "react";
import "../Styles/footer.css";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer class="footer">
      <div class="flogo">
        <Link to="/">
          <img src="\Images\Comlogo-removebg-preview.png" alt="Logo" />
        </Link>
      </div>

      <ul class="nav-links">
        <li>
          <a href="#" class="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <div class="copyright">
        Copyright &copy; {year} Venture | All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
