import React from "react";
import { Helmet } from "react-helmet-async";
import { Target, Award, MapPin } from "lucide-react";
import "./InnerPages.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sri Raja Rajeshwari Agro Bio Fuels</title>
        <meta
          name="description"
          content="Learn about our company background, mission, and commitment to renewable energy in Wanaparthy, Telangana."
        />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>About Company</h1>
          <p>Committed to Sustainable Industrial Energy</p>
        </div>
      </div>

      <section className="container">
        <div className="content-grid">
          <div className="content-text">
            <h2 className="mb-2">Our Background</h2>
            <p className="mb-2">
              Based in the heart of Wanaparthy, Telangana,{" "}
              <strong>Sri Raja Rajeshwari Agro Bio Fuels</strong> emerged from a
              vision to provide a cleaner, greener, and more sustainable energy
              source for India's growing industrial sector.
            </p>
            <p className="mb-3">
              We specialize in manufacturing high-density biomass briquettes
              from agricultural residues. Our products are engineered to be a
              direct replacement for traditional fossil fuels like coal,
              firewood, and lignite, primarily used in industrial boilers and
              thermal applications.
            </p>

            <h2 className="mb-2 mt-4">Our Mission</h2>
            <div className="mission-card mb-3">
              <Target className="text-secondary mb-1" size={32} />
              <p>
                To lead the transition to renewable energy in the industrial
                sector by providing high-quality, cost-effective biomass fuel,
                while supporting local farmers through the procurement of
                agricultural waste, thereby creating a circular and sustainable
                economy.
              </p>
            </div>

            <h2 className="mb-2 mt-4">Why We Do It</h2>
            <p>
              The industrial reliance on coal has led to significant
              environmental degradation and high carbon footprints. By utilizing
              agricultural waste—which would otherwise be burned or discarded—we
              create a value-added product that not only reduces industrial
              emissions but also offers immense cost savings to factory owners.
            </p>
          </div>

          <div className="content-sidebar">
            <div className="info-card">
              <Award size={40} className="mb-2 text-primary" />
              <h3>Quality Commitment</h3>
              <p>
                We maintain strict quality control ensuring consistent calorific
                value, very low moisture, and negligible ash content in every
                batch.
              </p>
            </div>
            <div className="info-card mt-3">
              <MapPin size={40} className="mb-2 text-primary" />
              <h3>Strategic Location</h3>
              <p>
                Located in Wanaparthy, Telangana, giving us excellent logistical
                access to supply industries across South and Central India
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
