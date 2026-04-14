import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, MapPin, Building2 } from 'lucide-react';
import axiosInstance from '../api/axiosInstance';

const BACKEND_URL = "https://api.eduglobe.ae";
// const BACKEND_URL = "http://localhost:5009"

export default function UniversityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/associates/${id}`)
      .then(res => setUniversity(res.data.data))
      .catch(() => navigate(-1))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDownload = async (doc) => {
    const fileName = typeof doc === 'object' ? doc.file : doc;
    const docName  = typeof doc === 'object' ? doc.name  : doc;
    const url = `${BACKEND_URL}/uploads/${fileName}`;
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = docName || fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      window.open(url, '_blank');
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3a5c]"></div>
    </div>
  );

  if (!university) return null;

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-[#1a3a5c] text-white w-full">
        <div className="w-full px-6 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-lg transition flex-shrink-0">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold truncate">{university.name}</h1>
        </div>
      </div>

      {/* Full width single page — no cards, just sections with dividers */}
      <div className="w-full">

        {/* University Info */}
        {/* University Info */}
<div className="w-full px-6 md:px-12 lg:px-20 py-10 flex flex-row gap-6 items-start">
  {university.logo && (
    <img
      src={`${BACKEND_URL}/uploads/${university.logo}`}
      alt={university.name}
      className="w-24 h-24 object-contain border border-gray-200 rounded-xl p-2 flex-shrink-0"
    />
  )}
  <div className="flex-1 space-y-3">
    <h2 className="text-3xl font-bold text-gray-900">{university.name}</h2>
    <div className="flex flex-wrap gap-5 text-sm text-gray-500">
      {university.location && (
        <span className="flex items-center gap-1.5">
          <MapPin size={15} className="text-[#1a3a5c]" />
          {university.location}
        </span>
      )}
      {university.type && (
        <span className="flex items-center gap-1.5">
          <Building2 size={15} className="text-[#1a3a5c]" />
          {university.type}
        </span>
      )}
      {university.website && (
        <a href={university.website} target="_blank" rel="noreferrer"
          className="flex items-center gap-1.5 text-blue-600 hover:underline">
          <Globe size={15} />
          Visit Website
        </a>
      )}
    </div>
  </div>
</div>

        {/* Dynamic Detail Sections */}
        {university.details?.filter(d => d.heading).map((detail, i) => (
          <React.Fragment key={i}>
            <hr className="border-t border-gray-200 mx-6 md:mx-12 lg:mx-20" />
            <div className="w-full px-6 md:px-12 lg:px-20 py-10">
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-4">
                {detail.heading}
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-base">
                {detail.description}
              </p>
            </div>
          </React.Fragment>
        ))}

        {/* Important Files */}
        {university.documents?.length > 0 && (
          <>
            <hr className="border-t border-gray-200 mx-6 md:mx-12 lg:mx-20" />
            <div className="w-full px-6 md:px-12 lg:px-20 py-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-widest">
                Important Files
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 border border-gray-200 rounded-xl overflow-hidden w-full">
                {university.documents.map((doc, i) => {
                  const docName = typeof doc === 'object' ? doc.name : doc;
                  return (
                    <button
                      key={i}
                      onClick={() => handleDownload(doc)}
                      className="flex items-center justify-between gap-3 bg-red-700 text-white px-5 py-5
                        hover:bg-red-800 active:bg-red-900 transition text-left
                        border-r border-b border-red-600 last:border-r-0"
                    >
                      <span className="text-sm font-semibold leading-snug flex-1">{docName}</span>
                      <div className="flex-shrink-0">
                        <svg width="36" height="36" viewBox="0 0 38 38" fill="none">
                          <rect x="4" y="2" width="22" height="28" rx="3"
                            fill="white" opacity=".2"/>
                          <rect x="4" y="2" width="22" height="28" rx="3"
                            stroke="white" strokeWidth="1.2"/>
                          <path d="M9 12h12M9 16h12M9 20h8"
                            stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                          <rect x="20" y="20" width="14" height="14" rx="3" fill="white" opacity=".25"/>
                          <path d="M27 24v5M24.5 26.5L27 29l2.5-2.5"
                            stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}