import React from 'react';
// import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>© 2023 AdmitSpot, Inc. All rights reserved.</p>
          <p>Ontario, Canada | New Brunswick, Canada</p>
          <p>info@admitspot.com | +1-905-783-7708</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <p>Students</p>
            <p>Universities</p>
            <p>Employers</p>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <p>Immigration services</p>
            <p>Blogs</p>
            <p>Virtual offices</p>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <p>Terms & Conditions</p>
            <p>Privacy policy</p>
            <p>Cookies policy</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Follow us on social media:</p>
        <div className="social-icons">
          {/* Add social media icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
