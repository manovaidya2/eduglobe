import React, { useState, useEffect } from "react";
import { FaBars, FaBell, FaUserCircle, FaSearch, FaSignOutAlt, FaUser, FaCog } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ collapsed, onToggleCollapse }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar overlay on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest(".profile-menu")) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isProfileOpen]);

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarMargin = collapsed ? "md:ml-20" : "md:ml-64";

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`
          bg-white text-gray-800
          flex justify-between items-center
          fixed top-0 left-0 right-0 z-40
          transition-all duration-300 border-b border-gray-200
          ${scrolled ? "shadow-md" : "shadow-sm"}
          ${sidebarMargin} px-4 md:px-6 py-3
        `}
      >
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Menu Icon for mobile */}
          <button
            className="md:hidden text-xl text-gray-500 hover:text-red-600 transition-colors duration-200"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>

          {/* Mobile Brand */}
          <div className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-bold text-sm text-gray-900">EDUGLOBE</span>
          </div>

          {/* Desktop Welcome Message */}
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-gray-900">
              Welcome back, <span className="text-red-600">Admin</span>
            </h2>
            <p className="text-xs text-gray-400">Global education platform</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-500/10 transition-all duration-200">
            <FaSearch className="text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent outline-none text-sm px-2 py-1 text-gray-800 placeholder-gray-400 w-48"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 group">
            <FaBell className="text-lg text-gray-500 group-hover:text-red-600 transition-colors" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative profile-menu">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-2 py-1.5 transition-all duration-200"
              aria-label="Profile menu"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <FaUserCircle className="text-white text-xl" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">Administrator</p>
                <p className="text-xs text-gray-400">Admin Account</p>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                      <FaUserCircle className="text-white text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Administrator</p>
                      <p className="text-xs text-gray-400">admin@eduglobe.com</p>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FaUser className="text-red-600 text-sm" />
                    <span className="text-sm text-gray-700">My Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FaCog className="text-red-600 text-sm" />
                    <span className="text-sm text-gray-700">Settings</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors border-t border-gray-100 mt-1"
                  >
                    <FaSignOutAlt className="text-red-600 text-sm" />
                    <span className="text-sm text-red-600">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar always visible on desktop */}
      <div className={`hidden md:block fixed left-0 top-0 h-screen z-30 transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
        <Sidebar collapsed={collapsed} onToggleCollapse={onToggleCollapse} />
      </div>

      {/* Sidebar overlay on mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="relative w-64">
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        </div>
      )}

      {/* Mobile Search Bar */}
      <div className="md:hidden fixed top-14 left-0 right-0 z-30 px-4 pt-2 pb-3 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          <FaSearch className="text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search courses, lessons..."
            className="bg-transparent outline-none text-sm px-2 text-gray-800 placeholder-gray-400 flex-1"
          />
        </div>
      </div>

      {/* Spacer for navbar and mobile search */}
      <div className="h-16 md:h-20"></div>
      <div className="md:hidden h-12"></div>
    </>
  );
};

export default Navbar;
