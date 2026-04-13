import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileAlt,
  FaCalendarAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaWpforms,
  FaStethoscope,
  FaBrain,
  FaHandHoldingHeart,
  FaLeaf,
  FaClinicMedical,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaChartLine,
  FaCertificate,
  FaAward,
  FaBriefcase,
  FaLaptopCode,
  FaGlobe,
  FaBuilding,
} from "react-icons/fa";
import { MdHealthAndSafety, MdPsychology, MdSchool, MdQuiz } from "react-icons/md";
import { GiHealthNormal, GiHealing, GiMeditation } from "react-icons/gi";

const Sidebar = () => {
  const [openForms, setOpenForms] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="w-64 bg-gradient-to-b from-[#0A2540] via-[#0F3B5C] to-[#0A2540] text-white h-screen flex flex-col shadow-2xl relative overflow-hidden fixed left-0 top-0 border-r border-[#00D4FF]/20">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00D4FF] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#00D4FF] rounded-full blur-3xl"></div>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00D4FF 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Animated Particles - Cyan/Blue Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#00D4FF]/20 rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Brand Section - Fixed at top */}
      <div className="relative p-6 border-b border-[#00D4FF]/20 flex-shrink-0 bg-gradient-to-b from-[#0A2540] via-[#0F3B5C] to-[#0A2540] z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Icon Container - Cyan/Blue Theme */}
          <div className="relative mb-3 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0088FF] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#0088FF] rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <FaGlobe className="w-8 h-8 text-[#0A2540]" />
            </div>
          </div>

          {/* Name with Blue/Cyan Typography */}
          <div className="space-y-1">
            <h1 className="text-xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#4DE8FF] to-[#0088FF] bg-clip-text text-transparent">
                EDUGLOBE
              </span>
            </h1>
           
            {/* Subtitle with Cyan accents */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent"></div>
              <span className="text-xs font-medium text-[#00D4FF] tracking-wider">GLOBAL EDUCATION PARTNER</span>
              <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Navigation Area - Takes all remaining space */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#00D4FF]/30 scrollbar-track-transparent p-4" style={{ maxHeight: "calc(100vh - 100px)" }}>
        
        {/* Main Navigation Section */}
        <div className="mb-6">
          <ul className="space-y-1">
            {[
              { to: "/dashboard", icon: FaTachometerAlt, label: "Dashboard", color: "from-[#00D4FF] to-[#0088FF]" },
              // { to: "/study-india-dashboard", icon: FaBook, label: "Study India Dashboard", color: "from-[#00D4FF] to-[#0088FF]" },
              // { to: "/admin-study-abroad", icon: FaFileAlt, label: "Study Abroad Dashboard  ", color: "from-[#00D4FF] to-[#0088FF]" },
              // { to: "/admin-universities", icon: FaCalendarAlt, label: "Universities", color: "from-[#00D4FF] to-[#0088FF]" },
              // { to: "/admin-dashboard", icon: FaChartLine, label: "Blog Manager", color: "from-[#00D4FF] to-[#0088FF]" },
              // { to: "/admin-contact", icon: FaPhoneAlt, label: "Contact Messages", color: "from-[#00D4FF] to-[#0088FF]" },
              // { to: "/admin-applications", icon: FaWpforms, label: "Applications", color: "from-[#00D4FF] to-[#0088FF]" },
              // { to: "/agent-dashboard", icon: FaUserGraduate, label: "Agent Dashboard", color: "from-[#00D4FF] to-[#0088FF]" },
              // { to: "/partner-dashboard", icon: FaHandHoldingHeart, label: "Partner Dashboard", color: "from-[#00D4FF] to-[#0088FF]" },
              { to: "/admin-associates-dashboard", icon: FaUsers, label: "Add Associate", color: "from-[#00D4FF] to-[#0088FF]" },
              { to: "/associates", icon: FaBuilding, label: "View Associates", color: "from-[#00D4FF] to-[#0088FF]" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="relative group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 overflow-hidden"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Hover Background Animation - Cyan/Blue */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon with Gradient */}
                  <div className={`relative z-10 p-2 bg-gradient-to-br ${item.color} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-3.5 h-3.5 text-[#0A2540]" />
                  </div>
                  
                  {/* Label */}
                  <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>

                  {/* Active Indicator */}
                  {hoveredItem === index && (
                    <div className="absolute right-2 w-1 h-1 bg-[#00D4FF] rounded-full animate-ping"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        
        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(0, 212, 255, 0.3);
          border-radius: 20px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Sidebar;