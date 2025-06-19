import React from "react";
import "../Styl/Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="nav-main-body navbar navbar-expand-lg">
      <div class="container-fluid">
          <div className="nav-main-logo-img-container navbar-brand">
            <img className="nav-main-logo-img cover-fill" src="Assets\main-logo-website.png" alt="logo" />
          </div>
          <ul className="nav-main-list navbar-nav">
            <li className="nav-main-list-variables nav-item">
              <a href="#about" className="nav-link active">About Us</a>
            </li>
            <li className="nav-main-list-variables">
              <a href="#feature" className="nav-link active">Features</a>
            </li>
            <li className="nav-main-list-variables">
              <a href="#options" className="nav-link active">More Option</a>
            </li>
            <li className="nav-main-list-variables">
              <a href="#contact" className="nav-link active">Contact</a>
            </li>
          </ul>
          <ul className="nav-log-icons navbar-nav">
            <li id="nav-log-icon">
              <a href="/" className="nav-link active" style={{color: '#FF3E54'}}>Log In</a>
            </li>
            <li id="nav-log-icon" style={{background:'#FF3E54'}}>
              <a href="/" className="nav-link active" style={{color: 'white'}}>Sign Up</a>
            </li>
          </ul>
      </div>
      </nav>
    </>
  );
}
