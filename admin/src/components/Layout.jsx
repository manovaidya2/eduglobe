import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("sidebar-collapsed") === "true"
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed);
  }, [collapsed]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar component handles its own positioning and sidebar */}
      <Navbar collapsed={collapsed} onToggleCollapse={() => setCollapsed((c) => !c)} />

      {/* Main Content Area */}
      <main
        className={`
          transition-all duration-300
          ${!isMobile && collapsed ? "md:ml-20" : ""}
          ${!isMobile && !collapsed ? "md:ml-64" : ""}
          pt-6 px-4 md:px-6 pb-8
        `}
      >
        {/* Content Container with proper spacing */}
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
