import React from "react";
import { Helmet } from "react-helmet-async";
import { Settings, Truck, PackageCheck, Tractor } from "lucide-react";
import "./InnerPages.css";

const Production = () => {
  return (
    <>
      <Helmet>
        <title>Factory & Production | Sri Raja Rajeshwari Agro Bio Fuels</title>
        <meta
          name="description"
          content="View our advanced briquette machines, production process, and factory setup in Wanaparthy. Reliable bulk supply capability."
        />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Factory & Production</h1>
          <p>State-of-the-Art Manufacturing in Wanaparthy</p>
        </div>
      </div>

      <section className="container">
        <div className="content-grid align-items-center mb-4 text-center">
          <h2 className="mb-2" style={{ gridColumn: "1 / -1" }}>
            Our Production Process
          </h2>
          <p
            style={{
              gridColumn: "1 / -1",
              maxWidth: "800px",
              margin: "0 auto 3rem",
            }}
          >
            We utilize high-pressure mechanical presses to transform loose,
            low-density agricultural dust into high-density, uniform fuel logs.
            The entire process is binderless—meaning absolutely no chemicals or
            adhesives are used.
          </p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <Tractor size={48} className="text-secondary mb-2 mx-auto" />
            <h3>Raw Material Sourcing</h3>
            <p>
              Procuring groundnut shells, sawdust, and crop stalks directly from
              local farmers and mills.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <Settings size={48} className="text-primary mb-2 mx-auto" />
            <h3>Crushing & Drying</h3>
            <p>
              Materials are screened, crushed to a uniform size, and dried to
              ensure optimal 8-10% moisture content.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <PackageCheck size={48} className="text-secondary mb-2 mx-auto" />
            <h3>High-Pressure Pressing</h3>
            <p>
              Rammed through high-tonnage machines, the natural lignin melts and
              binds the dust into a solid 90mm log.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <Truck size={48} className="text-primary mb-2 mx-auto" />
            <h3>Cooling & Dispatch</h3>
            <p>
              Briquettes are cooled on conveyor tracks before being loaded
              directly onto trucks for bulk delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light p-4 mt-4">
        <div className="container text-center">
          <h2 className="mb-3">Reliable Supply Capacity</h2>
          <p className="mb-2" style={{ maxWidth: "800px", margin: "0 auto" }}>
            Our factory in Wanaparthy operates continuously to meet the heavy
            demands of commercial boilers and industries. We maintain a large
            storage yard to ensure continuous supply even during monsoon seasons
            when raw materials might be scarce.
          </p>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
          position: relative;
        }
        .process-step {
          text-align: center;
          background: var(--bg-white);
          padding: 2rem 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          position: relative;
        }
        .step-number {
          width: 32px;
          height: 32px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
        }
        .process-step h3 {
          font-size: 1.25rem;
          margin-top: 1rem;
          color: var(--text-dark);
        }
        .mx-auto { margin-left: auto; margin-right: auto; }
      `,
        }}
      />
    </>
  );
};

export default Production;
