import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaMoneyBillWave,
  FaUserPlus,
  FaBuilding,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

const navItems = [
  { to: "/dashboard", icon: FaTachometerAlt, label: "Dashboard" },
  { to: "/admin/payments", icon: FaMoneyBillWave, label: "Payments" },
  { to: "/add-associate", icon: FaUserPlus, label: "Add Associate" },
  { to: "/admin-associates-dashboard", icon: FaBuilding, label: "View Associates" },
  { to: "/admin-contact", icon: FaEnvelope, label: "Contact Messages" },
];

const Sidebar = ({ collapsed = false, onToggleCollapse, onClose }) => {
  const location = useLocation();

  return (
    <div
      className={`h-screen bg-white text-gray-700 flex flex-col shadow-lg border-r border-gray-200 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Brand */}
      <div className="flex items-center justify-between gap-2 px-4 h-16 md:h-20 border-b border-gray-100 flex-shrink-0">
        <div className={`flex items-center gap-3 overflow-hidden ${collapsed ? "justify-center w-full" : ""}`}>
          <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-sm">
            <FaGlobe className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="leading-tight whitespace-nowrap">
              <p className="font-extrabold text-gray-900 tracking-tight text-base">EDUGLOBE</p>
              <p className="text-[10px] text-red-600 font-medium tracking-wide">GLOBAL EDUCATION PARTNER</p>
            </div>
          )}
        </div>

        {/* Mobile close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden text-gray-400 hover:text-red-600 transition-colors flex-shrink-0"
            aria-label="Close menu"
          >
            <MdClose size={22} />
          </button>
        )}

        {/* Desktop collapse toggle */}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="hidden md:flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 text-gray-400 hover:text-red-600 hover:border-red-200 transition-colors flex-shrink-0"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <FaChevronRight size={11} /> : <FaChevronLeft size={11} />}
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              title={collapsed ? item.label : undefined}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                active ? "bg-red-50 text-red-700" : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <item.icon
                className={`w-4 h-4 flex-shrink-0 ${
                  active ? "text-red-600" : "text-gray-400 group-hover:text-red-500"
                }`}
              />
              {!collapsed && <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
