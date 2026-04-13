// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowLeft, Building2, ExternalLink, FileText, Download, Globe } from "lucide-react";
// import doc from "../document/necu/EduGlobe Authorisation Letter.pdf"

// // Helper function to create slug from university name (for document folder)
// const getUniSlug = (name) => {
//   return name
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-|-$/g, '');
// };

// const universities = [
//   { 
//     name: "North East Christian University", 
//     location: "Dimapur, Nagaland", 
//     type: "Private University", 
//     website: "https://www.necu.ac.in",
//     brochure: {
//       docUrl: doc,
//       docName: "NECU_Brochure.pdf"
//     },
//     guidelines: "/documents/nec-university/guidelines.pdf"
//   },
//   { 
//     name: "Maharaja Agrasen Himalayan Garhwal University", 
//     location: "Dhair Gaon", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/maharaja-agrasen/brochure.pdf",
//     guidelines: "/documents/maharaja-agrasen/guidelines.pdf"
//   },
//   { 
//     name: "Techno India University", 
//     location: "New Town, Kolkata", 
//     type: "Private University", 
//     website: "https://www.technoindiauniversity.ac.in",
//     brochure: "/documents/techno-india/brochure.pdf",
//     guidelines: "/documents/techno-india/guidelines.pdf"
//   },
//   { 
//     name: "Sparsh Himalaya University", 
//     location: "Dehradun", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/sparsh-himalaya/brochure.pdf",
//     guidelines: "/documents/sparsh-himalaya/guidelines.pdf"
//   },
//   { 
//     name: "Haridwar University", 
//     location: "Roorkee", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/haridwar-university/brochure.pdf",
//     guidelines: "/documents/haridwar-university/guidelines.pdf"
//   },
//   { 
//     name: "Mangalayatan University", 
//     location: "Aligarh", 
//     type: "Private University", 
//     website: "https://www.mangalayatan.in",
//     brochure: "/documents/mangalayatan/brochure.pdf",
//     guidelines: "/documents/mangalayatan/guidelines.pdf"
//   },
//   { 
//     name: "The Glocal University", 
//     location: "Saharanpur", 
//     type: "Private University", 
//     website: "https://www.theglocaluniversity.in",
//     brochure: "/documents/glocal-university/brochure.pdf",
//     guidelines: "/documents/glocal-university/guidelines.pdf"
//   },
//   { 
//     name: "Future University", 
//     location: "Bareilly", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/future-university/brochure.pdf",
//     guidelines: "/documents/future-university/guidelines.pdf"
//   },
//   { 
//     name: "Maya Devi University", 
//     location: "Dehradun", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/maya-devi/brochure.pdf",
//     guidelines: "/documents/maya-devi/guidelines.pdf"
//   },
//   { 
//     name: "Shri Venkateshwara University", 
//     location: "Gajraula", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/shri-venkateshwara/brochure.pdf",
//     guidelines: "/documents/shri-venkateshwara/guidelines.pdf"
//   },
//   { 
//     name: "Shobhit University", 
//     location: "Gangoh", 
//     type: "Private University", 
//     website: "https://www.shobhituniversity.ac.in",
//     brochure: "/documents/shobhit-university/brochure.pdf",
//     guidelines: "/documents/shobhit-university/guidelines.pdf"
//   },
//   { 
//     name: "Shrimati Manjira Devi University", 
//     location: "Uttarkashi", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/manjira-devi/brochure.pdf",
//     guidelines: "/documents/manjira-devi/guidelines.pdf"
//   },
//   { 
//     name: "Sanskriti University", 
//     location: "Mathura", 
//     type: "Private University", 
//     website: "https://www.sanskriti.edu.in",
//     brochure: "/documents/sanskriti-university/brochure.pdf",
//     guidelines: "/documents/sanskriti-university/guidelines.pdf"
//   },
//   { 
//     name: "Maharishi University of Information Technology", 
//     location: "Lucknow", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/maharishi-muit/brochure.pdf",
//     guidelines: "/documents/maharishi-muit/guidelines.pdf"
//   },
//   { 
//     name: "Sreenidhi University", 
//     location: "Hyderabad", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/sreenidhi/brochure.pdf",
//     guidelines: "/documents/sreenidhi/guidelines.pdf"
//   },
//   { 
//     name: "Anurag University", 
//     location: "Hyderabad", 
//     type: "Private University", 
//     website: "https://anurag.edu.in",
//     brochure: "/documents/anurag-university/brochure.pdf",
//     guidelines: "/documents/anurag-university/guidelines.pdf"
//   },
//   { 
//     name: "Sikkim Alpine University", 
//     location: "South Sikkim", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/sikkim-alpine/brochure.pdf",
//     guidelines: "/documents/sikkim-alpine/guidelines.pdf"
//   },
//   { 
//     name: "Sikkim Global Technical University", 
//     location: "Namchi", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/sikkim-global/brochure.pdf",
//     guidelines: "/documents/sikkim-global/guidelines.pdf"
//   },
//   { 
//     name: "Shridhar University", 
//     location: "Pilani", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/shridhar-university/brochure.pdf",
//     guidelines: "/documents/shridhar-university/guidelines.pdf"
//   },
//   { 
//     name: "Shyam University", 
//     location: "Dausa", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/shyam-university/brochure.pdf",
//     guidelines: "/documents/shyam-university/guidelines.pdf"
//   },
//   { 
//     name: "Singhania University", 
//     location: "Jhunjhunu", 
//     type: "Private University", 
//     website: "https://www.singhaniauniversity.co.in",
//     brochure: "/documents/singhania-university/brochure.pdf",
//     guidelines: "/documents/singhania-university/guidelines.pdf"
//   },
//   { 
//     name: "CMJ University", 
//     location: "Shillong", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/cmj-university/brochure.pdf",
//     guidelines: "/documents/cmj-university/guidelines.pdf"
//   },
//   { 
//     name: "Asian International University", 
//     location: "Imphal", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/asian-international/brochure.pdf",
//     guidelines: "/documents/asian-international/guidelines.pdf"
//   },
//   { 
//     name: "Bir Tikendrajit University", 
//     location: "Imphal", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/bir-tikendrajit/brochure.pdf",
//     guidelines: "/documents/bir-tikendrajit/guidelines.pdf"
//   },
//   { 
//     name: "Bhabha University", 
//     location: "Bhopal", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/bhabha-university/brochure.pdf",
//     guidelines: "/documents/bhabha-university/guidelines.pdf"
//   },
//   { 
//     name: "Dr. A.P.J. Abdul Kalam University", 
//     location: "Indore", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/apj-abdul-kalam/brochure.pdf",
//     guidelines: "/documents/apj-abdul-kalam/guidelines.pdf"
//   },
//   { 
//     name: "Dr. C.V. Raman University, Khandwa", 
//     location: "Khandwa", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/cv-raman/brochure.pdf",
//     guidelines: "/documents/cv-raman/guidelines.pdf"
//   },
//   { 
//     name: "Dr. Preeti Global University", 
//     location: "Shivpuri", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/preeti-global/brochure.pdf",
//     guidelines: "/documents/preeti-global/guidelines.pdf"
//   },
//   { 
//     name: "Madhyanchal Professional University", 
//     location: "Bhopal", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/madhyanchal/brochure.pdf",
//     guidelines: "/documents/madhyanchal/guidelines.pdf"
//   },
//   { 
//     name: "Mahakaushal University", 
//     location: "Jabalpur", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/mahakaushal/brochure.pdf",
//     guidelines: "/documents/mahakaushal/guidelines.pdf"
//   },
//   { 
//     name: "Shri Krishna University", 
//     location: "Chhatarpur", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/shri-krishna/brochure.pdf",
//     guidelines: "/documents/shri-krishna/guidelines.pdf"
//   },
//   { 
//     name: "P.K. University", 
//     location: "Shivpuri", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/pk-university/brochure.pdf",
//     guidelines: "/documents/pk-university/guidelines.pdf"
//   },
//   { 
//     name: "Swami Vivekanand University", 
//     location: "Sagar", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/swami-vivekanand/brochure.pdf",
//     guidelines: "/documents/swami-vivekanand/guidelines.pdf"
//   },
//   { 
//     name: "Sai Nath University", 
//     location: "Ranchi", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/sai-nath/brochure.pdf",
//     guidelines: "/documents/sai-nath/guidelines.pdf"
//   },
//   { 
//     name: "Sarala Birla University", 
//     location: "Ranchi", 
//     type: "Private University", 
//     website: "https://www.saralabirlauniversity.ac.in",
//     brochure: "/documents/sarala-birla/brochure.pdf",
//     guidelines: "/documents/sarala-birla/guidelines.pdf"
//   },
//   { 
//     name: "Sona Devi University", 
//     location: "East Singhbhum", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/sona-devi/brochure.pdf",
//     guidelines: "/documents/sona-devi/guidelines.pdf"
//   },
//   { 
//     name: "YBN University", 
//     location: "Ranchi", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/ybn-university/brochure.pdf",
//     guidelines: "/documents/ybn-university/guidelines.pdf"
//   },
//   { 
//     name: "NIILM University, Kaithal", 
//     location: "Kaithal", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/niilm-university/brochure.pdf",
//     guidelines: "/documents/niilm-university/guidelines.pdf"
//   },
//   { 
//     name: "Om Sterling Global University", 
//     location: "Hisar", 
//     type: "Private University", 
//     website: "https://www.osgu.ac.in",
//     brochure: "/documents/om-sterling/brochure.pdf",
//     guidelines: "/documents/om-sterling/guidelines.pdf"
//   },
//   { 
//     name: "Monark University", 
//     location: "Ahmedabad", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/monark-university/brochure.pdf",
//     guidelines: "/documents/monark-university/guidelines.pdf"
//   },
//   { 
//     name: "Sabarmati University", 
//     location: "Ahmedabad", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/sabarmati-university/brochure.pdf",
//     guidelines: "/documents/sabarmati-university/guidelines.pdf"
//   },
//   { 
//     name: "Sardar Vallabhbhai Global University", 
//     location: "Ahmedabad", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/sardar-vallabhbhai/brochure.pdf",
//     guidelines: "/documents/sardar-vallabhbhai/guidelines.pdf"
//   },
//   { 
//     name: "K. K. Modi University", 
//     location: "Durg", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/kk-modi/brochure.pdf",
//     guidelines: "/documents/kk-modi/guidelines.pdf"
//   },
//   { 
//     name: "Kalinga University", 
//     location: "Raipur", 
//     type: "Private University", 
//     website: "https://kalingauniversity.ac.in",
//     brochure: "/documents/kalinga-university/brochure.pdf",
//     guidelines: "/documents/kalinga-university/guidelines.pdf"
//   },
//   { 
//     name: "Apex Professional University", 
//     location: "Gumin Nagar", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/apex-professional/brochure.pdf",
//     guidelines: "/documents/apex-professional/guidelines.pdf"
//   },
//   { 
//     name: "North East Frontier Technical University", 
//     location: "Aalo", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/neft-university/brochure.pdf",
//     guidelines: "/documents/neft-university/guidelines.pdf"
//   },
//   { 
//     name: "Arunodaya University", 
//     location: "Itanagar", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/arunodaya-university/brochure.pdf",
//     guidelines: "/documents/arunodaya-university/guidelines.pdf"
//   },
//   { 
//     name: "Godavari Global University", 
//     location: "Rajamahendravaram", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/godavari-global/brochure.pdf",
//     guidelines: "/documents/godavari-global/guidelines.pdf"
//   },
//   { 
//     name: "Krea University", 
//     location: "Sri City", 
//     type: "Private University", 
//     website: "https://www.krea.edu.in",
//     brochure: "/documents/krea-university/brochure.pdf",
//     guidelines: "/documents/krea-university/guidelines.pdf"
//   },
//   { 
//     name: "Mohan Babu University", 
//     location: "Tirupati", 
//     type: "Private University", 
//     website: "#",
//     brochure: "/documents/mohan-babu/brochure.pdf",
//     guidelines: "/documents/mohan-babu/guidelines.pdf"
//   },
// ];

// // Function to download document
// const handleDownload = (docUrl, docName, uniName) => {
//   if (docUrl && docUrl !== "#") {
//     const link = document.createElement('a');
//     link.href = docUrl;
//     link.download = docName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   } else {
//     alert(`Document for ${uniName} is currently not available.`);
//   }
// };

// // Function to open website
// const handleVisitWebsite = (url, uniName) => {
//   if (url && url !== "#") {
//     window.open(url, '_blank', 'noopener,noreferrer');
//   } else {
//     alert(`Official website for ${uniName} is currently not available.`);
//   }
// };

// export default function AssociatesPage() {
//   return (
//     <div className="min-h-screen bg-[#f5f5f5] py-10 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
        
        

//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Associate Universities</h1>
//         <p className="text-gray-600 mb-8">
//           We have partnerships with <span className="font-semibold text-[#c5a46d]">{universities.length}+ universities</span> across India to help you achieve your study abroad dreams.
//         </p>

//         {/* UNIVERSITY CARDS */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {universities.map((uni, idx) => (
//             <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition hover:border-[#c5a46d]/30 overflow-hidden">
//               <div className="p-5">
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 rounded-full bg-[#c5a46d]/10 flex items-center justify-center text-[#c5a46d] flex-shrink-0">
//                     <Building2 size={20} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-bold text-lg text-gray-900 leading-tight">{uni.name}</h3>
//                     {uni.location && (
//                       <p className="text-sm text-gray-500 mt-0.5">{uni.location}</p>
//                     )}
//                     <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
//                       {uni.type}
//                     </span>
//                   </div>
//                 </div>

//                 {/* 📄 DOCUMENTS SECTION - Inside each card */}
//                 <div className="mt-4 pt-3 border-t border-gray-100">
//                   <p className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-1">
//                     <FileText size={12} /> University Documents
//                   </p>
//                   <div className="flex flex-col gap-2">
//                     {/* Brochure Download */}
//                     <button
//                       onClick={() => handleDownload(uni.brochure, `${uni.name.replace(/\s/g, '_')}_Brochure.pdf`, uni.name)}
//                       className="flex items-center justify-between w-full text-sm bg-gray-50 hover:bg-[#c5a46d]/10 px-3 py-2 rounded-lg transition group"
//                     >
//                       <span className="flex items-center gap-2">
//                         <Download size={14} className="text-[#c5a46d]" />
//                         <span className="text-gray-700">University Brochure</span>
//                       </span>
//                       <span className="text-xs text-gray-400 group-hover:text-[#c5a46d]">PDF</span>
//                     </button>

//                     {/* Guidelines Download */}
//                     <button
//                       onClick={() => handleDownload(uni.guidelines, `${uni.name.replace(/\s/g, '_')}_Guidelines.pdf`, uni.name)}
//                       className="flex items-center justify-between w-full text-sm bg-gray-50 hover:bg-[#c5a46d]/10 px-3 py-2 rounded-lg transition group"
//                     >
//                       <span className="flex items-center gap-2">
//                         <Download size={14} className="text-[#c5a46d]" />
//                         <span className="text-gray-700">Admission Guidelines</span>
//                       </span>
//                       <span className="text-xs text-gray-400 group-hover:text-[#c5a46d]">PDF</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Website Button */}
//                 <button
//                   onClick={() => handleVisitWebsite(uni.website, uni.name)}
//                   className="mt-4 w-full flex items-center justify-center gap-2 text-sm bg-[#c5a46d] text-white px-3 py-2 rounded-lg hover:bg-[#b8945d] transition"
//                 >
//                   <Globe size={14} />
//                   Visit Official Website
//                   <ExternalLink size={12} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Footer */}
//         <div className="mt-10 text-center">
//           <p className="text-gray-500 text-sm">
//             Showing {universities.length} associated universities
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { Building2, ExternalLink, FileText, Download, Globe, Search, Filter, X } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";

export default function AssociatesPage() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [error, setError] = useState(null);
  const [downloading, setDownloading] = useState(null);

  // Backend base URL for file access (without /api)
  const BACKEND_URL = "http://localhost:5003";

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
      setUniversities(response.data.data || []);
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

  // Function to download document - FIXED VERSION
  const handleDownload = async (filename, uniName) => {
    if (!filename) {
      alert(`No document available for ${uniName}`);
      return;
    }

    setDownloading(filename);
    
    try {
      // Correct URL - direct to uploads folder (not via /api)
      const downloadUrl = `${BACKEND_URL}/uploads/${filename}`;
      console.log("Downloading from:", downloadUrl);
      
      // Create hidden anchor element and trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error("Error downloading file:", error);
      alert(`Failed to download document for ${uniName}`);
    } finally {
      setDownloading(null);
    }
  };

  // Function to view document in new tab
  const handleViewDocument = (filename, uniName) => {
    if (!filename) {
      alert(`No document available for ${uniName}`);
      return;
    }
    
    const viewUrl = `${BACKEND_URL}/uploads/${filename}`;
    window.open(viewUrl, '_blank');
  };

  // Function to open website
  const handleVisitWebsite = (url, uniName) => {
    if (url && url !== "#" && url !== "") {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Official website for ${uniName} is currently not available.`);
    }
  };

  // Get image URL - FIXED VERSION
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
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c5a46d] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading universities...</p>
        </div>
      </div>
    );
  }

  if (error && universities.length === 0) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
        <div className="text-center bg-white rounded-xl p-8 max-w-md mx-4">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <p className="text-gray-800 mb-4">{error}</p>
          <button
            onClick={fetchUniversities}
            className="bg-[#c5a46d] text-white px-6 py-2 rounded-lg hover:bg-[#b8945d] transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Associate Universities</h1>
        <p className="text-gray-600 mb-6">
          We have partnerships with <span className="font-semibold text-[#c5a46d]">{universities.length}+ universities</span> across India to help you achieve your study abroad dreams.
        </p>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by university name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a46d] focus:border-transparent outline-none"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative min-w-[180px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a46d] focus:border-transparent outline-none appearance-none bg-white w-full"
              >
                {universityTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            {(searchTerm || selectedType !== "all") && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>

          {/* Search Results Count */}
          {(searchTerm || selectedType !== "all") && (
            <p className="text-sm text-gray-500 mt-3">
              Found {filteredUniversities.length} university{filteredUniversities.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* UNIVERSITY CARDS */}
        {filteredUniversities.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500 text-lg">No universities found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-[#c5a46d] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredUniversities.map((uni, idx) => (
              <div key={uni._id || idx} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition hover:border-[#c5a46d]/30 overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    {/* Logo */}
                    {uni.logo ? (
                      <img
                        src={getImageUrl(uni.logo)}
                        alt={uni.name}
                        className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/48?text=Logo";
                        }}
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#c5a46d]/10 flex items-center justify-center text-[#c5a46d] flex-shrink-0">
                        <Building2 size={24} />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 leading-tight">{uni.name}</h3>
                      {uni.location && (
                        <p className="text-sm text-gray-500 mt-0.5">{uni.location}</p>
                      )}
                      <span className="inline-block mt-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {uni.type || "University"}
                      </span>
                    </div>
                  </div>

                  {/* Documents Section */}
                  {uni.documents && uni.documents.length > 0 ? (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <p className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-1">
                        <FileText size={12} /> University Documents ({uni.documents.length})
                      </p>
                      <div className="flex flex-col gap-2">
                        {uni.documents.map((doc, docIndex) => (
                          <button
                            key={docIndex}
                            onClick={() => handleDownload(doc, uni.name)}
                            disabled={downloading === doc}
                            className="flex items-center justify-between w-full text-sm bg-gray-50 hover:bg-[#c5a46d]/10 px-3 py-2 rounded-lg transition group"
                          >
                            <span className="flex items-center gap-2 flex-1 min-w-0">
                              <Download size={14} className="text-[#c5a46d] flex-shrink-0" />
                              <span className="text-gray-700 truncate">
                                {downloading === doc ? 'Downloading...' : (doc.length > 35 ? doc.substring(0, 35) + '...' : doc)}
                              </span>
                            </span>
                            <span className="text-xs text-gray-400 group-hover:text-[#c5a46d] flex-shrink-0 ml-2">PDF</span>
                          </button>
                        ))}
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
                    onClick={() => handleVisitWebsite(uni.website, uni.name)}
                    className="mt-4 w-full flex items-center justify-center gap-2 text-sm bg-[#c5a46d] text-white px-3 py-2 rounded-lg hover:bg-[#b8945d] transition"
                  >
                    <Globe size={14} />
                    Visit Official Website
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Showing {filteredUniversities.length} of {universities.length} associated universities
          </p>
          <button
            onClick={fetchUniversities}
            className="mt-2 text-[#c5a46d] text-sm hover:underline inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh List
          </button>
        </div>
      </div>
    </div>
  );
}