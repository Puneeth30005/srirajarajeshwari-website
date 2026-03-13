import React from "react";
import { Helmet } from "react-helmet-async";
import { TreePine, Zap, HandCoins, Recycle, Waves } from "lucide-react";
import "./InnerPages.css";

const Benefits = () => {
  return (
    <>
      <Helmet>
        <title>Benefits of Briquettes | Eco-friendly Fuel</title>
        <meta
          name="description"
          content="Discover why biomass briquettes are a cost-effective and sustainable alternative to coal. Low smoke, high efficiency, and renewable."
        />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Benefits of Briquettes</h1>
          <p>Why Industries are Switching from Coal to Biomass</p>
        </div>
      </div>

      <section className="container">
        <div className="benefits-grid">
          <div className="info-card benefit-card">
            <TreePine
              size={48}
              className="text-primary mb-3 mx-auto"
              style={{ margin: "0 auto" }}
            />
            <h3 className="mb-2">100% Eco-Friendly & Renewable</h3>
            <p>
              Unlike coal which takes millions of years to form, biomass is a
              continuous cycle. Using briquettes means zero net carbon
              emissions, making it deeply sustainable.
            </p>
          </div>

          <div className="info-card benefit-card">
            <Waves
              size={48}
              className="text-primary mb-3 mx-auto"
              style={{ margin: "0 auto" }}
            />
            <h3 className="mb-2">Low Smoke & Emissions</h3>
            <p>
              Our briquettes produce very little smoke, no sulfur oxide (SOx),
              and extremely low nitrogen oxide (NOx), resulting in a cleaner
              factory environment and easier compliance with pollution control
              boards.
            </p>
          </div>

          <div className="info-card benefit-card">
            <Zap
              size={48}
              className="text-secondary mb-3 mx-auto"
              style={{ margin: "0 auto" }}
            />
            <h3 className="mb-2">High Heat Efficiency</h3>
            <p>
              Because they are uniformly dense and have low moisture content
              (8-10%), they burn hotter and longer than loose biomass,
              maintaining consistent boiler pressure.
            </p>
          </div>

          <div className="info-card benefit-card">
            <HandCoins
              size={48}
              className="text-secondary mb-3 mx-auto"
              style={{ margin: "0 auto" }}
            />
            <h3 className="mb-2">Cost-Effective Alternative</h3>
            <p>
              Briquettes offer significant cost savings compared to imported
              coal. You get similar heat output for a fraction of the cost,
              improving your company's bottom line.
            </p>
          </div>

          <div
            className="info-card benefit-card"
            style={{
              gridColumn: "1 / -1",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Recycle
              size={48}
              className="text-primary mb-3 mx-auto"
              style={{ margin: "0 auto" }}
            />
            <h3 className="mb-2">Sustainable Use of Agricultural Waste</h3>
            <p>
              By purchasing briquettes, you prevent crop residue from being
              burned openly in fields. This improves rural air quality and
              provides additional income to farmers.
            </p>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .benefit-card:hover { border-color: var(--primary-color); }
      `,
        }}
      />
    </>
  );
};

export default Benefits;
