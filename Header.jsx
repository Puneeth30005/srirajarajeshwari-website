import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/product", label: "Products" },
    { path: "/benefits", label: "Benefits" },
    { path: "/industries", label: "Industries" },
    { path: "/production", label: "Production" },
    { path: "/comparison", label: "Comparison" },
    { path: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo">
            <Leaf className="logo-icon" size={32} />
            <div className="logo-text">
              <span className="logo-title">Sri Raja Rajeshwari</span>
              <span className="logo-subtitle">Agro Bio Fuels</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-secondary header-btn">
            Get Quote
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="mobile-nav animate-fade-in">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`mobile-nav-link ${location.pathname === link.path ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact#contact"
                  className="btn btn-secondary mobile-nav-btn"
                  onClick={closeMenu}
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
