import React from 'react';
import '../Styl/Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer id="footer">
      <div id="footer-container" className="container-fluid px-5 py-5">
        <div className="row justify-content-between">

          <div className="col-lg-4 col-md-12" id="footer-left">
            <div className="d-flex align-items-center mb-3" id="footer-logo-row">
              <img src="Assets\main-logo-website.png" alt="logo" id="footer-logo-img" />
            </div>
            <p id="footer-subscribe-text">
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>
            <div id="footer-newsletter" className="d-flex mt-3">
              <input
                type="email"
                className="form-control"
                id="footer-email-input"
                placeholder="Your email here"
              />
              <button id="footer-join-btn">Join</button>
            </div>
            <p id="footer-consent">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </div>

          <div className="col-lg-7 col-md-12 mt-5 mt-lg-0" id="footer-right">
            <div className="row justify-content-between">

              <div className="col-md-4 footer-link-group">
                <h5 className="footer-heading">Useful Links</h5>
                <ul className="footer-list">
                  <li>Home Page</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Blog Posts</li>
                  <li>FAQs</li>
                </ul>
              </div>

              <div className="col-md-4 footer-link-group">
                <h5 className="footer-heading">Resources</h5>
                <ul className="footer-list">
                  <li>Help Center</li>
                  <li>User Guide</li>
                  <li>Community Forum</li>
                  <li>Feedback</li>
                  <li>Support</li>
                </ul>
              </div>

              <div className="col-md-4 footer-link-group">
                <h5 className="footer-heading">Connect With Us</h5>
                <ul className="footer-list social-list">
                  <li><FaFacebookF /> Facebook</li>
                  <li><FaInstagram /> Instagram</li>
                  <li><FaXTwitter /> X</li>
                  <li><FaLinkedinIn /> LinkedIn</li>
                  <li><FaYoutube /> YouTube</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <hr id="footer-divider" />

      <div id="footer-bottom" className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center px-5 py-3">
        <p id="footer-copyright">
          © 2024 Osumare. All rights reserved.
        </p>
        <div id="footer-policy-links" className="d-flex gap-3">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}



