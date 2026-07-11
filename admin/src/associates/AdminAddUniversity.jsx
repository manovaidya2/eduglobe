import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function AdminAddUniversity() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "",
    website: "",
    displayOrder: 0,
    logo: null,
    details: [{ heading: "", description: "" }],
    documents: [{ name: "", file: null }],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleLogoChange = (e) => setForm({ ...form, logo: e.target.files[0] || null });

  // Details handlers
  const addDetail = () =>
    setForm({ ...form, details: [...form.details, { heading: "", description: "" }] });
  const removeDetail = (i) =>
    setForm({ ...form, details: form.details.filter((_, idx) => idx !== i) });
  const handleDetailChange = (i, field, value) => {
    const updated = [...form.details];
    updated[i] = { ...updated[i], [field]: value };
    setForm({ ...form, details: updated });
  };

  // Document handlers
  const addDocument = () =>
    setForm({ ...form, documents: [...form.documents, { name: "", file: null }] });
  const removeDocument = (i) =>
    setForm({ ...form, documents: form.documents.filter((_, idx) => idx !== i) });
  const handleDocChange = (i, field, value) => {
    const updated = [...form.documents];
    updated[i] = { ...updated[i], [field]: value };
    setForm({ ...form, documents: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("location", form.location);
      formData.append("type", form.type);
      formData.append("website", form.website);
      formData.append("displayOrder", form.displayOrder);
      if (form.logo) formData.append("logo", form.logo);

      // Details as JSON string
      formData.append("details", JSON.stringify(
        form.details.filter((d) => d.heading.trim())
      ));

      // Documents: name + file
      form.documents.forEach((doc) => {
        if (doc.file) {
          formData.append("documentNames", doc.name);
          formData.append("documents", doc.file);
        }
      });

      const res = await axiosInstance.post("/associates", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(res.data.message || "Associates added successfully ✅");
      setForm({
        name: "", 
        location: "", 
        type: "", 
        website: "", 
        displayOrder: 0,
        logo: null,
        details: [{ heading: "", description: "" }],
        documents: [{ name: "", file: null }],
      });
    } catch (err) {
      alert(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl space-y-5">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add Associates</h2>

        {/* Basic Fields */}
        <input 
          type="text" 
          name="name" 
          placeholder="University Name" 
          value={form.name}
          onChange={handleChange} 
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
          required 
        />
        
        <div className="grid grid-cols-2 gap-3">
          <input 
            type="text" 
            name="location" 
            placeholder="Location" 
            value={form.location}
            onChange={handleChange} 
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
            required 
          />
          <input 
            type="text" 
            name="type" 
            placeholder="Type (Private/Government)" 
            value={form.type}
            onChange={handleChange} 
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
            required 
          />
        </div>
        
        <input 
          type="text" 
          name="website" 
          placeholder="Website URL" 
          value={form.website}
          onChange={handleChange} 
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
        />

        {/* Display Order Field */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Display Order <span className="text-xs text-gray-500">(Lower number = appears first)</span>
          </label>
          <input 
            type="number" 
            name="displayOrder" 
            min="0"
            value={form.displayOrder}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
          />
          <p className="text-xs text-gray-500 mt-1">
            Universities will be sorted by this number (0, 1, 2...). Smallest number appears first on frontend.
            You can reorder later from the dashboard.
          </p>
        </div>

        {/* Logo */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Upload Logo</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleLogoChange}
            className="w-full border p-2 rounded-lg bg-gray-50" 
          />
          {form.logo && <p className="text-sm text-green-600 mt-1">Selected: {form.logo.name}</p>}
        </div>

        {/* Dynamic Details */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="font-medium text-gray-700">University Details</label>
            <button type="button" onClick={addDetail}
              className="text-blue-600 font-medium hover:underline text-sm">+ Add Heading</button>
          </div>
          {form.details.map((detail, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-3 mb-3 bg-gray-50 relative">
              {form.details.length > 1 && (
                <button type="button" onClick={() => removeDetail(i)}
                  className="absolute top-2 right-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded">✕</button>
              )}
              <input 
                type="text" 
                placeholder="Heading (e.g. About the University)"
                value={detail.heading} 
                onChange={(e) => handleDetailChange(i, "heading", e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 mb-2" 
              />
              <textarea 
                placeholder="Description..." 
                value={detail.description}
                onChange={(e) => handleDetailChange(i, "description", e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-y min-h-[80px]" 
              />
            </div>
          ))}
        </div>

        {/* Documents */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="font-medium text-gray-700">Documents (PDF)</label>
            <button type="button" onClick={addDocument}
              className="text-blue-600 font-medium hover:underline text-sm">+ Add Document</button>
          </div>
          {form.documents.map((doc, i) => (
            <div key={i} className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 mb-2 bg-gray-50">
              {/* PDF Icon */}
              <div className="w-9 h-11 bg-blue-50 rounded flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="2" width="12" height="18" rx="2" fill="#4285f4" opacity=".2"/>
                  <rect x="4" y="2" width="12" height="18" rx="2" stroke="#4285f4" strokeWidth="1.2"/>
                  <path d="M8 8h6M8 11h6M8 14h4" stroke="#4285f4" strokeWidth="1.2" strokeLinecap="round"/>
                  <rect x="13" y="14" width="7" height="7" rx="1.5" fill="#e53935"/>
                  <path d="M15.5 17.5h3M17 16v3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1 space-y-1">
                <input 
                  type="text" 
                  placeholder="Document name (e.g. VCS-TCHP Scheme)"
                  value={doc.name} 
                  onChange={(e) => handleDocChange(i, "name", e.target.value)}
                  className="w-full border border-gray-300 p-1.5 rounded text-sm outline-none focus:ring-2 focus:ring-blue-400" 
                />
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 flex-1 truncate">
                    {doc.file ? doc.file.name : "No file chosen"}
                  </span>
                  <label className="text-xs border border-gray-300 px-3 py-1 rounded cursor-pointer hover:bg-gray-100">
                    Choose PDF
                    <input 
                      type="file" 
                      accept="application/pdf" 
                      className="hidden"
                      onChange={(e) => handleDocChange(i, "file", e.target.files[0] || null)} 
                    />
                  </label>
                </div>
              </div>
              <button type="button" onClick={() => removeDocument(i)}
                className="text-red-500 text-lg leading-none px-1">✕</button>
            </div>
          ))}
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Associates"}
        </button>
      </form>
    </div>
  );
}