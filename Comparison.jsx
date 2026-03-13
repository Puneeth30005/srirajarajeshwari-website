import React from "react";
import { Helmet } from "react-helmet-async";
import { Leaf, AlertTriangle } from "lucide-react";
import "./InnerPages.css";

const Comparison = () => {
  return (
    <>
      <Helmet>
        <title>Coal vs Biomass Briquettes Comparison</title>
        <meta
          name="description"
          content="Compare the cost savings, heat output, ash content, and environmental benefits of biomass briquettes vs coal."
        />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Coal vs. Briquettes</h1>
          <p>Why switching to Biomass makes Business Sense</p>
        </div>
      </div>

      <section className="container mb-4">
        <div className="text-center mb-4">
          <p style={{ maxWidth: "800px", margin: "0 auto" }}>
            Switching from coal to biomass briquettes is not just an
            environmental decision; it is a highly economical one. See the
            direct comparison below.
          </p>
        </div>

        <div className="comparison-table-wrapper shadow-sm border-radius">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Parameters</th>
                <th className="coal-col">
                  <AlertTriangle size={18} className="inline-icon" />{" "}
                  Imported/Indian Coal
                </th>
                <th className="briquette-col">
                  <Leaf size={18} className="inline-icon" /> Biomass Briquettes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Environmental Impact</td>
                <td className="negative">High Carbon, SOx & NOx emissions</td>
                <td className="positive">Carbon Neutral, Zero Net CO2</td>
              </tr>
              <tr>
                <td className="font-semibold">Calorific Value</td>
                <td>4000 - 5500 kcal/kg</td>
                <td>4000 - 4500 kcal/kg (Consistent)</td>
              </tr>
              <tr>
                <td className="font-semibold">Ash Content</td>
                <td className="negative">15% - 40%</td>
                <td className="positive">Less than 10%</td>
              </tr>
              <tr>
                <td className="font-semibold">Moisture Content</td>
                <td>Can be highly volatile</td>
                <td className="positive">Strictly 8% - 10%</td>
              </tr>
              <tr>
                <td className="font-semibold">Clinker Formation</td>
                <td className="negative">
                  Forms hard clinkers on boiler grates
                </td>
                <td className="positive">Zero silica; No clinker formation</td>
              </tr>
              <tr>
                <td className="font-semibold">Boiler Maintenance</td>
                <td className="negative">
                  High (frequent tube cleaning needed)
                </td>
                <td className="positive">Low (minimal fly ash and soot)</td>
              </tr>
              <tr>
                <td className="font-semibold">Cost Stability</td>
                <td className="negative">
                  Subject to global market fluctuations
                </td>
                <td className="positive">Stable native agricultural pricing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .comparison-table-wrapper {
          overflow-x: auto;
          border: 1px solid var(--border-color);
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          background: var(--bg-white);
        }
        .comparison-table th, .comparison-table td {
          padding: 1.2rem;
          border-bottom: 1px solid var(--border-color);
        }
        .comparison-table th {
          background-color: var(--bg-light);
          font-weight: 700;
          font-size: 1.1rem;
        }
        .inline-icon {
          display: inline-block;
          vertical-align: text-bottom;
          margin-right: 0.25rem;
        }
        .coal-col { color: #555; }
        .briquette-col { color: var(--primary-color); }
        .negative { color: #d32f2f; background-color: rgba(211, 47, 47, 0.05); }
        .positive { color: var(--primary-color); background-color: rgba(27, 94, 32, 0.05); font-weight: 500;}
      `,
        }}
      />
    </>
  );
};

export default Comparison;
