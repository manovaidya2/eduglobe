import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, ExternalLink, FileText, Globe, Search, Filter, X, Eye } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";
import { Helmet } from "react-helmet-async";

export default function AssociatesPage() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Backend base URL for file access (without /api)
  const BACKEND_URL = "https://api.eduglobe.ae";
  // const BACKEND_URL = "http://localhost:5009";

  // Fetch universities from API
  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get("/associates");
      console.log("Fetched universities:", response.data);
      
      // Sort universities by createdAt (oldest first - jo sabse pahle add hua wo pahle dikhega)
      const sortedUniversities = (response.data.data || []).sort((a, b) => {
        // If createdAt exists, use it for sorting
        if (a.createdAt && b.createdAt) {
          return new Date(a.createdAt) - new Date(b.createdAt);
        }
        // Fallback: if no createdAt, try using _id (MongoDB ObjectId contains timestamp)
        if (a._id && b._id) {
          return a._id.localeCompare(b._id);
        }
        return 0;
      });
      
      setUniversities(sortedUniversities);
    } catch (error) {
      console.error("Error fetching universities:", error);
      setError("Failed to load universities. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Get unique university types for filter
  const universityTypes = ["all", ...new Set(universities.map(uni => uni.type).filter(Boolean))];

  // Filter universities based on search and type
  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = 
      (uni.name && uni.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (uni.location && uni.location.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "all" || uni.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Function to open PDF in viewer - Navigate to PDF Viewer Page with all documents
  const handleViewDocuments = (uni) => {
    navigate(`/associates/${uni._id}`);
  };

  // Function to open website
  const handleVisitWebsite = (url, uniName, e) => {
    e.stopPropagation(); // Prevent card click when clicking on website button
    if (url && url !== "#" && url !== "") {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Official website for ${uniName} is currently not available.`);
    }
  };

  // Get image URL
  const getImageUrl = (filename) => {
    if (!filename) return null;
    return `${BACKEND_URL}/uploads/${filename}`;
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
  };

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Associates | EduGlobe</title>
          <meta name="description" content="Explore our network of associated universities and institutions." />
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00D4FF] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading universities...</p>
          </div>
        </div>
      </>
    );
  }

  if (error && universities.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-xl p-6 sm:p-8 max-w-md mx-auto shadow-lg">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <p className="text-gray-800 mb-4">{error}</p>
          <button
            onClick={fetchUniversities}
            className="bg-[#00D4FF] text-white px-6 py-2 rounded-lg hover:bg-[#0088FF] transition duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Universities
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[red] to-[red] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            We have partnerships with <span className="font-semibold text-[red]">{universities.length}+ universities</span> across India to help you achieve your study abroad dreams.
          </p>
        </div>

        {/* Search and Filter Section - Always in a single row */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8">
          <div className="flex flex-row gap-4">
            {/* Search Bar - takes remaining space */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by university name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent outline-none transition"
              />
            </div>

            {/* Filter Dropdown - fixed width */}
            <div className="relative w-[220px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent outline-none appearance-none bg-white transition"
              >
                {universityTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button - only shows when filters active */}
            {(searchTerm || selectedType !== "all") && (
              <button
                onClick={clearFilters}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 whitespace-nowrap"
              >
                <X size={16} />
                <span className="hidden sm:inline">Clear Filters</span>
              </button>
            )}
          </div>

          {/* Search Results Count */}
          {(searchTerm || selectedType !== "all") && (
            <p className="text-sm text-gray-500 mt-3 text-center sm:text-left">
              Found {filteredUniversities.length} university{filteredUniversities.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* UNIVERSITY CARDS - Responsive Grid */}
        {filteredUniversities.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">No universities found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-[#00D4FF] hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredUniversities.map((uni, idx) => (
                <div 
                  key={uni._id || idx} 
                  onClick={() => handleViewDocuments(uni)}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#00D4FF]/30 overflow-hidden group cursor-pointer"
                >
                  <div className="p-4 sm:p-5">
                    {/* University Header */}
                    <div className="flex items-start gap-3">
                      {/* Logo */}
                      {uni.logo ? (
                        <img
                          src={getImageUrl(uni.logo)}
                          alt={uni.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-200"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/48?text=Logo";
                          }}
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] flex-shrink-0">
                          <Building2 size={20} className="sm:w-6 sm:h-6" />
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-tight group-hover:text-[red] transition-colors line-clamp-2">
                          {uni.name}
                        </h3>
                        {uni.location && (
                          <p className="text-xs sm:text-sm text-gray-500 mt-0.5 truncate">
                            📍 {uni.location}
                          </p>
                        )}
                        <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          {uni.type || "University"}
                        </span>
                      </div>
                    </div>

                    {/* Documents Count Badge */}
                    {uni.documents && uni.documents.length > 0 ? (
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                          <FileText size={14} className="text-[red]" />
                          <span>{uni.documents.length} Document{uni.documents.length !== 1 ? 's' : ''} Available</span>
                          <Eye size={14} className="text-[red] ml-2" />
                          <span className="text-xs text-gray-400">Click to view</span>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-400 text-center py-2">
                          No documents available
                        </p>
                      </div>
                    )}

                    {/* Website Button */}
                    <button
                      onClick={(e) => handleVisitWebsite(uni.website, uni.name, e)}
                      className="mt-4 w-full flex items-center justify-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-[red] to-[red] text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Globe size={14} />
                      Visit Official Website
                      <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Stats Footer */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <p className="text-gray-600 text-sm sm:text-base">
              Showing <span className="font-semibold text-[#00D4FF]">{filteredUniversities.length}</span> of <span className="font-semibold">{universities.length}</span> associated universities
            </p>
            <button
              onClick={fetchUniversities}
              className="mt-3 text-[#00D4FF] text-sm hover:underline inline-flex items-center gap-1 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}