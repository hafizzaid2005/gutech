import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          We specialize in providing top-notch software and hardware solutions
          for all your laptop needs. From diagnostics to repairs, we ensure
          fast, reliable, and professional support.
        </p>
      </div>
      <div className="footer-column">
        <h3>Services</h3>
        <ul>
          <li><a href="#">Laptop Repairs</a></li>
          <li><a href="#">Software Installation</a></li>
          <li><a href="#">Data Recovery</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
