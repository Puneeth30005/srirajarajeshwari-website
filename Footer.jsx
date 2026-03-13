import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Leaf, MessageCircle } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo mb-2">
            <Leaf size={28} className="footer-logo-icon" />
            <div className="logo-text">
              <span className="logo-title">Sri Raja Rajeshwari</span>
              <span className="logo-subtitle text-white">Agro Bio Fuels</span>
            </div>
          </div>
          <p className="footer-desc">
            Manufacturer and supplier of high-quality biomass briquettes.
            Providing sustainable, eco-friendly, and cost-effective fuel
            solutions for industrial boilers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Company</Link>
            </li>
            <li>
              <Link to="/product">Product Specifications</Link>
            </li>
            <li>
              <Link to="/benefits">Benefits of Briquettes</Link>
            </li>
            <li>
              <Link to="/industries">Industries We Serve</Link>
            </li>
            <li>
              <Link to="/comparison">Coal vs Briquettes</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={20} className="contact-icon" />
              <span>Wanaparthy, Telangana, India</span>
            </li>
            <li>
              <Phone size={20} className="contact-icon" />
              <a href="tel:+919876543210">+91 9963735262</a>{" "}
              {/* Placeholder Phone */}
            </li>
            <li>
              <Mail size={20} className="contact-icon" />
              <a href="mailto:info@srirajarajeshwaribiofuels.com">
                srrbriquetts@gmail.com
              </a>
            </li>
            <li>
              <MessageCircle size={20} className="contact-icon whatsapp-icon" />
              <a
                href="https://wa.me/919963735262"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Enquiry
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Sri Raja Rajeshwari Agro Bio
            Fuels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
