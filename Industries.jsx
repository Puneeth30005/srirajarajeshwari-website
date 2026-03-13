import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Scissors,
  Coffee,
  BookOpen,
  Building2,
  FlaskConical,
  Flame,
} from "lucide-react";
import "./InnerPages.css";

const Industries = () => {
  const industries = [
    {
      name: "Textile Industries",
      icon: <Scissors size={40} />,
      desc: "For steam generation required in dyeing, bleaching, and processing fabrics.",
    },
    {
      name: "Food Processing",
      icon: <Coffee size={40} />,
      desc: "For boiling, drying, and cooking processes requiring clean, non-toxic heat sources.",
    },
    {
      name: "Paper Mills",
      icon: <BookOpen size={40} />,
      desc: "For large-scale steam boilers necessary in pulp boiling and paper drying.",
    },
    {
      name: "Brick Kilns",
      icon: <Building2 size={40} />,
      desc: "As a direct replacement for coal used to fire and bake bricks evenly.",
    },
    {
      name: "Chemical Factories",
      icon: <FlaskConical size={40} />,
      desc: "For thermal fluid heaters and reactors requiring high-temperature consistency.",
    },
    {
      name: "Boiler-Based Industries",
      icon: <Flame size={40} />,
      desc: "Any manufacturing unit using solid fuel boilers can seamlessly switch to briquettes.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Sri Raja Rajeshwari Agro Bio Fuels</title>
        <meta
          name="description"
          content="We supply biomass briquettes to textile industries, food processing plants, paper mills, brick kilns, and chemical factories."
        />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Industries We Serve</h1>
          <p>Powering Diverse Sectors with Clean Energy</p>
        </div>
      </div>

      <section className="container text-center mb-4">
        <p
          className="mb-4"
          style={{ maxWidth: "800px", margin: "0 auto 3rem" }}
        >
          Biomass briquettes are a versatile drop-in replacement for coal. If
          your facility currently operates a solid fuel boiler, thermic fluid
          heater, or furnace, you can switch to briquettes with little to no
          modification to your equipment.
        </p>

        <div className="industries-grid">
          {industries.map((ind, idx) => (
            <div key={idx} className="industry-card shadow-sm">
              <div className="industry-icon">{ind.icon}</div>
              <h3>{ind.name}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-4" style={{ marginTop: "4rem" }}>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Request an Industry Consultation
          </Link>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        .industry-card {
          background: var(--bg-white);
          border-radius: 8px;
          padding: 2.5rem 1.5rem;
          border: 1px solid var(--border-color);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--secondary-color);
        }
        .industry-icon {
          color: var(--secondary-color);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }
        .industry-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
      `,
        }}
      />
    </>
  );
};

export default Industries;
