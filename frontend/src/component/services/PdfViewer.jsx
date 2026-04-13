import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, FileText } from 'lucide-react';

export default function PdfViewer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const [universityName, setUniversityName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const BACKEND_URL = "https://api.eduglobe.ae";

  useEffect(() => {
    const state = location.state;
    if (state && state.documents && state.documents.length > 0) {
      // Create full URLs for each document
      const docUrls = state.documents.map(doc => ({
        name: doc,
        url: `${BACKEND_URL}/uploads/${doc}`
      }));
      setDocuments(docUrls);
      setUniversityName(state.universityName || 'Documents');
      setLoading(false);
    } else {
      setError('No documents found');
      setLoading(false);
    }
  }, [location]);

  const handleDownload = (doc) => {
    if (doc && doc.url) {
      const link = document.createElement('a');
      link.href = doc.url;
      link.download = doc.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00D4FF] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading documents...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-xl p-8 max-w-md shadow-lg">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <p className="text-gray-800 mb-4">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#00D4FF] text-white px-6 py-2 rounded-lg hover:bg-[#0088FF] transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Bar */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-[red]" />
                <h1 className="font-semibold text-gray-800 truncate max-w-[200px] sm:max-w-md">
                  {universityName}
                </h1>
                <span className="text-sm text-gray-500">
                  ({documents.length} documents)
                </span>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>

      {/* Content Area - Always Grid View */}
      <div className="flex-1 p-4 sm:p-6 overflow-auto">
        {documents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No documents available</p>
          </div>
        ) : (
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* PDF Preview */}
               <div className="relative bg-gray-50 p-2 border-b border-gray-200">

  <iframe
    src={`${doc.url}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-width`}
    title={doc.name}
    className="w-full rounded-lg"
    style={{ 
      height: "800px",          // 🔥 height badhao
      width: "100%",            // ✅ full width
      border: "none",
      pointerEvents: "none",
      backgroundColor: "#f9fafb"
    }}
  />

  {/* Overlay */}
  <div className="absolute bottom-2 left-2">
    <div className="bg-white/80 text-white text-xs px-2 py-1 rounded">
      PDF Document
    </div>
  </div>

</div>
                
                {/* Document Info */}
              
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}