import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import "./InnerPages.css";

const Contact = () => {
  useEffect(() => {
  if (window.location.hash === "#contact") {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, []);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your enquiry. Our team will contact you shortly.");
    setFormData({
      name: "",
      company: "",
      phone: "",
      quantity: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Sri Raja Rajeshwari Agro Bio Fuels</title>
        <meta
          name="description"
          content="Contact us for bulk orders and enquiries. Located in Wanaparthy, Telangana."
        />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Request Quotes & Bulk Order Enquiries</p>
        </div>
      </div>

      {/* Added id="contact" here */}
      <section id="contact" className="container mb-4">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="mb-3">Get in Touch</h2>
            <p className="mb-4">
              Whether you need pricing details, wish to schedule a factory
              visit, or require technical support for your boilers, our team is
              ready to assist you.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="icon-wrap">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4>Factory & Office Address</h4>
                  <p>
                    Sri Raja Rajeshwari Agro Bio Fuels,
                    <br />
                    Wanaparthy, Telangana, India.
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrap">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:+919963735262">+91 99637 35262</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrap">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>
                    <a href="mailto:srrbriquetts@gmail.com">
                      srrbriquetts@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrap">
                  <Clock className="text-primary" />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-top">
              <a
                href="https://wa.me/919963735262"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full"
                style={{ width: "100%" }}
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="contact-form-wrapper shadow-md border-radius">
            <h3 className="mb-3">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company"
                />
              </div>

              <div className="form-row">
                <div className="form-group w-50">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone/Mobile"
                  />
                </div>
                <div className="form-group w-50">
                  <label htmlFor="quantity">Required Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 100 Tons/Month"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Send size={18} /> Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="map-section bg-light p-0"
        style={{
          height: "400px",
          width: "100%",
          background: "#eaeaea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center" style={{ color: "#888" }}>
          <MapPin size={48} className="mx-auto mb-2" />
          <h3>Google Maps Integration</h3>
          <p>Interactive Map of Wanaparthy Factory Location</p>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }
        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .icon-wrap {
          background: rgba(27, 94, 32, 0.1);
          padding: 0.75rem;
          border-radius: 50%;
          display: flex;
        }
        .contact-item h4 {
          margin-bottom: 0.25rem;
          font-size: 1.1rem;
          color: var(--text-dark);
        }
        .contact-item p, .contact-item a {
          color: var(--text-light);
          margin: 0;
        }
        .contact-item a:hover {
          color: var(--secondary-color);
        }
        .border-top { border-top: 1px solid var(--border-color); }
        .pt-3 { padding-top: 1.5rem; }

        .contact-form-wrapper {
          background: var(--bg-white);
          padding: 2.5rem;
          border: 1px solid var(--border-color);
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-row {
          display: flex;
          gap: 1rem;
        }
        .w-50 { width: 50%; }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-dark);
          font-size: 0.9rem;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-family: inherit;
          transition: border-color var(--transition-fast);
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(27, 94, 32, 0.1);
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .form-row { flex-direction: column; gap: 0; }
          .w-50 { width: 100%; }
        }
      `,
        }}
      />
    </>
  );
};

export default Contact;