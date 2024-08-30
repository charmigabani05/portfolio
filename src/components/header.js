import React from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import "./Header.css"; 
export default function Header() {
  return (
    <>
      <header
        style={{
          fontFamily: "Lora",
          backgroundColor: "#1E201E",
          color: "#BEC6A0",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          <div className="name">
            <h1 style={{ color: "#BEC6A0" }}>Charmi Gabani</h1>
          </div>
          <div className="navbar-nav">
            <Link
              className="nav-link enabled"
              to="/"
              style={{ color: "#BEC6A0" }}
            >
              HOME
            </Link>
            <Link
              className="nav-link enabled"
              to="/about"
              style={{ color: "#BEC6A0" }}
            >
              ABOUT
            </Link>
            <Link
              className="nav-link enabled"
              to="/portfolio"
              style={{ color: "#BEC6A0" }}
            >
              PORTFOLIO
            </Link>
            <Link
              className="nav-link enabled"
              to="/resume"
              style={{ color: "#BEC6A0" }}
            >
              RESUME
            </Link>
            <Link
              className="nav-link enabled"
              to="/service"
              style={{ color: "#BEC6A0" }}
            >
              SERVICE
            </Link>
            <Link
              className="nav-link enabled"
              to="/footer"
              style={{ color: "#BEC6A0" }}
            >
              CONTACT
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/charmi_gabani_05/">
              <img
                src={instagram}
                alt="Instagram Icon"
                className="social-icon"
              />
            </a>
            <a href="https://www.linkedin.com/in/charmi-gabani-180318299/">
            <img src={linkedin} alt="LinkedIn Icon" className="social-icon" />
            </a>
            <a href="https://github.com/charmigabani05">
            <i className=" fa-brands fa-github"/>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
