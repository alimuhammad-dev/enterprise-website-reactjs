import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} <strong>Ali Muhammad Saeed</strong>. All
          Rights Reserved.
        </p>

        <p className="footer-text">
          Designed & Developed with ❤️ using React.js & Bootstrap
        </p>
      </div>
    </footer>
  );
}

export default Footer;