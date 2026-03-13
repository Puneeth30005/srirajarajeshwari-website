import React from "react";
import { Helmet } from "react-helmet-async";
import { FileText, CheckCircle2 } from "lucide-react";
import "./InnerPages.css";

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Product Specifications | Biomass Briquettes</title>
        <meta
          name="description"
          content="Technical specifications of our 90mm biomass briquettes for industrial boilers. High calorific value, low ash and moisture."
        />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Product Specifications</h1>
          <p>Premium 90mm Biomass Briquettes</p>
        </div>
      </div>

      <section className="container">
        <div className="product-layout mb-4">
          <div className="product-info animate-fade-in">
            <h2 className="mb-2">High-Density 90mm Briquettes</h2>
            <p className="mb-3">
              Our flagship product is the 90mm diameter cylindrical biomass
              briquette, manufactured using purely organic and agricultural
              waste without any chemical binders. Through immense multi-ton
              pressure, raw materials are compressed into solid logs that burn
              efficiently and consistently.
            </p>

            <div className="spec-table-container shadow-sm border-radius">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">Diameter / Size</td>
                    <td>90 mm</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Moisture Content</td>
                    <td>8–10%</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Calorific Value</td>
                    <td>4000–4500 kcal/kg</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Ash Content</td>
                    <td>Less than 10%</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Raw Material</td>
                    <td>
                      100% Agricultural biomass waste (groundnut shells,
                      sawdust, cotton stalks, etc.)
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Density</td>
                    <td>1000 - 1200 kg/m³</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="product-performance bg-light border-radius p-4">
            <h3 className="mb-3 flex items-center gap-2">
              <FileText className="text-primary" /> Boiler Performance
            </h3>
            <p className="mb-3">
              How do our briquettes perform in industrial boilers?
            </p>
            <ul className="performance-list">
              <li>
                <CheckCircle2 className="text-secondary" size={20} />
                <span>
                  <strong>Consistent Heat:</strong> High density allows for
                  prolonged, steady burning, reducing fuel feeding frequency.
                </span>
              </li>
              <li>
                <CheckCircle2 className="text-secondary" size={20} />
                <span>
                  <strong>Zero Clinker Formation:</strong> The absence of silica
                  and dirt means no hard clinkers form on boiler grates.
                </span>
              </li>
              <li>
                <CheckCircle2 className="text-secondary" size={20} />
                <span>
                  <strong>Easy Handling:</strong> Uniform shape and size (90mm)
                  makes automated feeding and storage significantly easier than
                  loose biomass.
                </span>
              </li>
              <li>
                <CheckCircle2 className="text-secondary" size={20} />
                <span>
                  <strong>Lower Maintenance:</strong> Reduced soot and ash
                  content drastically cuts down boiler tube cleaning frequency.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
