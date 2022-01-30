import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const change = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", change);

  return (
    <div className={navbar ? "navbar-active" : "navbar"}>
      <div className="nav-links">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3?</a>
          </p>
          <p>
            <a href="#posibi">Open AI</a>
          </p>
          <p>
            <a href="#feature">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Blogs</a>
          </p>
        </div>
      </div>
      <div className="sign">
        <p>Sign in</p>
        <button className="btn-sign">Sign up</button>
      </div>
      <div className="toggle">
        {toggle ? <RiCloseLine size={30} color="#fff" onClick={() => setToggle(false)} /> : <RiMenu3Line size={30} color="#fff" onClick={() => setToggle(true)} />}
        {toggle && (
          <div className="menu">
            <div className="menu-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p>
                <a href="#posibi">Open AI</a>
              </p>
              <p>
                <a href="#feature">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Blogs</a>
              </p>
            </div>
            <div className="menu-sign">
              <p>Sign in</p>
              <button className="btn-sign">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
