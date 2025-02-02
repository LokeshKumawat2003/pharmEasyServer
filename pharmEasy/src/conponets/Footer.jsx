import React from "react";
import "../componetnsStyle/footer.css";
const Footer = () => {
  return (
    <footer className="footerStyle">
      <div className="footerContainerStyle">
        <div className="footerSectionStyle">
          <h3>Company</h3>
          <ul className="listStyle">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Partner with PharmEasy</li>
          </ul>
        </div>

        <div className="footerSectionStyle">
          <h3>Our Services</h3>
          <ul className="listStyle">
            <li>Order Medicine</li>
            <li>Healthcare Products</li>
            <li>Lab Tests</li>
          </ul>
        </div>

        <div className="footerSectionStyle">
          <h3>Featured Categories</h3>
          <ul className="listStyle">
            <li>Must Haves</li>
            <li>Sports Nutrition</li>
            <li>Homeopathy Care</li>
            <li>Elderly Care</li>
            <li>Personal Care</li>
            <li>Healthcare Devices</li>
            <li>Health Food and Drinks</li>
            <li>Skin Care</li>
            <li>Mother and Baby Care</li>
            <li>Accessories & Wearables</li>
            <li>Fitness Supplements</li>
            <li>Ayurvedic Care</li>
            <li>Sexual Wellness</li>
            <li>Diabetic Care</li>
            <li>Health Condition</li>
            <li>Home Care</li>
          </ul>
        </div>

        <div className="footerSectionStyle">
          <h3>Need Help</h3>
          <ul className="listStyle">
            <li>Browse All Medicines</li>
            <li>Browse All Molecules</li>
            <li>Browse All Cities</li>
            <li>Browse All Stores</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footerSectionStyle">
          <h3>Policy Info</h3>
          <ul className="listStyle">
            <li>Editorial Policy</li>
            <li>Privacy Policy</li>
            <li>Vulnerability Disclosure Policy</li>
            <li>Terms and Condition</li>
            <li>Customer Support Policy</li>
            <li>Return Policy</li>
            <li>Smartbuy Policy</li>
          </ul>
        </div>

        <div className="footerSectionStyle">
          <h3>Follow Us On</h3>
          <ul className="listStyle">
            <li>Social Media Links</li>
          </ul>
        </div>

        <div className="footerSectionStyle">
          <h3>Our Payment Partners</h3>
          <ul className="listStyle">
            <li>Payment Gateway Logos</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
