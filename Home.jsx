import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  TrendingDown,
  Factory,
} from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sri Raja Rajeshwari Agro Bio Fuels | Biomass Briquettes</title>
        <meta
          name="description"
          content="Manufacturer and supplier of high-quality biomass briquettes in Wanaparthy, Telangana. Eco-friendly alternative to coal for industrial boilers."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <span className="hero-badge">
              <Leaf size={16} /> Eco-Friendly Fuel
            </span>
            <h1>
              Biomass Briquettes – Eco-Friendly Alternative to Coal for
              Industrial Boilers
            </h1>
            <p className="hero-subtitle">
              Sri Raja Rajeshwari Agro Bio Fuels is a leading manufacturer and
              supplier of high-quality biomass briquettes located in Wanaparthy,
              Telangana. We provide sustainable fuel solutions as a
              cost-effective alternative to coal.
            </p>
            <div className="hero-cta">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Get Quote <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline btn-outline-light btn-lg"
                style={{ marginLeft: "16px" }}
              >
                Request Bulk Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-section bg-light">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Why Choose Our Biomass Briquettes?</h2>
            <p>
              Engineered for maximum heat output and minimum environmental
              impact.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Leaf className="feature-icon" />
              </div>
              <h3>100% Eco-Friendly</h3>
              <p>
                Made from agricultural waste, reducing carbon footprint and
                completely renewable.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <TrendingDown className="feature-icon" />
              </div>
              <h3>Cost-Effective</h3>
              <p>
                Significantly lower cost per unit of heat compared to
                traditional fossil fuels like coal.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck className="feature-icon" />
              </div>
              <h3>High Efficiency</h3>
              <p>
                Consistent burning with calorific value of 4000–4500 kcal/kg and
                extremely low ash content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="about-quick-section">
        <div className="container about-quick-container">
          <div className="about-text">
            <h2>Powering Industries Sustainably</h2>
            <p className="mb-2">
              Based in <strong>Wanaparthy, Telangana</strong>, Sri Raja
              Rajeshwari Agro Bio Fuels is dedicated to transforming
              agricultural biomass waste into high-density briquettes.
            </p>
            <p className="mb-3">
              Our state-of-the-art production facility ensures a reliable supply
              chain for boiler-based industries, helping them transition away
              from coal while improving boiler efficiency and lowering
              emissions.
            </p>
            <ul className="check-list mb-3">
              <li>High-capacity production line</li>
              <li>Stringent quality control</li>
              <li>Timely bulk deliveries across India</li>
            </ul>
            <Link to="/about" className="btn btn-outline">
              Learn More About Us
            </Link>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <Factory size={64} style={{ opacity: 0.2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container text-center">
          <h2>Ready to switch to sustainable energy?</h2>
          <p className="mb-3">
            Contact our sales team today for bulk pricing and logistics support.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Contact Us
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-outline-light btn-lg cta-whatsapp"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
