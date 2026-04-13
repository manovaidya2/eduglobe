import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import axiosInstance from "../../api/axiosInstance";

// Custom Icons (keeping your existing icons)
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="9" y1="22" x2="15" y2="22"></line>
    <line x1="9" y1="6" x2="9" y2="6"></line>
    <line x1="15" y1="6" x2="15" y2="6"></line>
    <line x1="9" y1="10" x2="9" y2="10"></line>
    <line x1="15" y1="10" x2="15" y2="10"></line>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const TrendingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8 10 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const UserCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <polyline points="16 11 18 13 22 9"></polyline>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const servicesList = [
  {
    icon: BuildingIcon,
    title: "Institution Setup & Establishment",
    items: [
      "End-to-end setup of universities, colleges, schools, boards, and associations",
      "Business model design and institutional structuring",
      "Legal and documentation support",
      "Strategic planning and execution roadmap",
    ],
  },
  {
    icon: UsersIcon,
    title: "Institutional Management Services",
    items: [
      "Complete operational management of institutions",
      "Academic and administrative coordination",
      "Student lifecycle management (admissions to completion)",
      "Process optimization and system implementation",
    ],
  },
  {
    icon: TrendingIcon,
    title: "Marketing & Business Development",
    items: [
      "Student acquisition strategies",
      "Digital and offline marketing campaigns",
      "Brand positioning and outreach",
      "Partnership and tie-up development",
    ],
  },
  {
    icon: BookIcon,
    title: "Curriculum Development & Skills Training",
    items: [
      "Curriculum design aligned with industry needs",
      "Skill-based and vocational program structuring",
      "Training module development",
      "Industry-integrated education models",
    ],
  },
  {
    icon: UserCheckIcon,
    title: "Human Resource Management",
    items: [
      "Faculty and staff recruitment",
      "Trainer and expert onboarding",
      "Organizational structuring",
      "Performance management systems",
    ],
  },
  {
    icon: ShieldIcon,
    title: "Government & Council Approvals",
    items: [
      "Regulatory advisory and documentation",
      "Approval process management (UGC, AICTE, councils, etc.)",
      "Compliance structuring and monitoring",
      "Liaison support",
    ],
  },
  {
    icon: DollarIcon,
    title: "Financial & Operational Management",
    items: [
      "Institutional financial planning",
      "Revenue model development",
      "Fee structuring and optimization",
      "Cost management and profitability strategies",
    ],
  },
];

const ServicesList = () => {
  const [associatesCount, setAssociatesCount] = useState(0);
  const [aspiratesCount, setAspiratesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch counts from API
  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      setLoading(true);
      // Fetch associates count
      const associatesResponse = await axiosInstance.get("/associates");
      setAssociatesCount(associatesResponse.data.data?.length || 0);

      // Fetch aspirates count
      try {
        const aspiratesResponse = await axiosInstance.get("/aspirates");
        setAspiratesCount(aspiratesResponse.data.data?.length || 0);
      } catch (error) {
        // Fallback to static count if endpoint doesn't exist
        setAspiratesCount(150);
      }
    } catch (error) {
      console.error("Error fetching counts:", error);
      setAssociatesCount(50);
      setAspiratesCount(150);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Two Cards Row - Associates and Aspirates */}
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          {/* Associates Card - Fully Clickable */}
          <Link 
            to="/associates" 
            className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BuildingIcon />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 font-medium">Total Partners</p>
                <p className="text-3xl font-bold text-blue-600">
                  {loading ? "..." : `${associatesCount}+`}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Our Associates</h3>
            <p className="text-gray-600 mb-4">
              We have partnered with {associatesCount}+ prestigious universities and institutions across India to provide quality education and global opportunities.
            </p>
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
              View All Associates
              <ArrowRightIcon />
            </div>
          </Link>

          {/* Aspirates Card - Fully Clickable */}
          <Link 
            to="/aspirates" 
            className="block bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-xl bg-purple-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCapIcon />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 font-medium">Active Students</p>
                <p className="text-3xl font-bold text-purple-600">
                  {loading ? "..." : `${aspiratesCount}+`}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">Our Aspirates</h3>
            <p className="text-gray-600 mb-4">
              Join {aspiratesCount}+ successful students who have achieved their academic goals through our guidance and support services.
            </p>
            <div className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300">
              Join as Aspirate
              <ArrowRightIcon />
            </div>
          </Link>
        </div>
      </div>

      {/* Services List Section */}
      <section className="section-padding">
        <div className="container space-y-6 md:space-y-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:shadow-xl transition-all duration-500 hover:border-primary/30 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Horizontal Layout - Icon Left, Content Right */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Icon Box - Left */}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary group-hover:shadow-xl group-hover:scale-110">
                    <div className="transition-all duration-500 group-hover:text-white">
                      <IconComponent />
                    </div>
                  </div>
                  
                  {/* Content - Right */}
                  <div className="flex-1">
                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-4 text-foreground transition-all duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                          <span className="text-accent mt-0.5 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-primary">
                            <CheckIcon />
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServicesList;