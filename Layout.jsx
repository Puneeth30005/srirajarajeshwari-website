import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.scrollTo(0, 0);
  }
}, [pathname]);

  return (
    <div className="layout-wrapper">
      <Header />
      <main
        className="main-content"
        style={{ minHeight: "calc(100vh - 400px)" }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
