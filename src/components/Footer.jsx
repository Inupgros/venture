import React from "react";
import "../Styles/footer.css";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="logo">
        <img src="Images/logo.png" alt="Logo" />
        <span style={{ fontSize: "2rem", color: "white", fontWeight: "700" }}>
          FINADVISOR
        </span>
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
        Copyright &copy; 2024 Finadvisors | All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
