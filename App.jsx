import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "./App.css";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Benefits from "./Benefits";
import Industries from "./Industries";
import Production from "./Production";
import Comparison from "./Comparison";
import Contact from "./Contact";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="industries" element={<Industries />} />
            <Route path="production" element={<Production />} />
            <Route path="comparison" element={<Comparison />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
