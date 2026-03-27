import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const services = [
  "Institution Setup & Establishment",
  "Institutional Management",
  "Marketing & Business Development",
  "Curriculum & Skills Development",
  "Regulatory & Compliance Support",
  "Admissions Support",
  "Academic Support",
  "Skills Training",
  "Partnership Inquiry",
  "Other",
];

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: ""
  });
   const [errors, setErrors] = useState({});

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };


  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name can only contain letters and spaces.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone.trim()) {
      const digitsOnly = formData.phone.replace(/[\s\+\-]/g, "");
      if (!/^[\d\+\-\s]+$/.test(formData.phone.trim())) {
        newErrors.phone = "Phone can only contain numbers, +, and -.";
      } else if (digitsOnly.length < 7) {
        newErrors.phone = "Phone number must be at least 7 digits.";
      }
    }

    if (formData.country.trim() && !/^[a-zA-Z\s]+$/.test(formData.country.trim())) {
      newErrors.country = "Country can only contain letters and spaces.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    return newErrors;
  };

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceChange = (e) => {
    setFormData(prev => ({ ...prev, service: e.target.value }));
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: "" }));
    }
  };

  

 const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

  try {
    await emailjs.send(
      "service_evgd8to",     
      "template_b2qad6l",    
      {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        service: formData.service,
        message: formData.message,
      },
      "9MBBWsetSOD8SHxJE"      
    );

    showToast("Inquiry sent successfully!", "success");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    showToast("Failed to send email!", "error");
  }

  setLoading(false);
};

  // Toast Component
  const ToastNotification = () => {
    if (!toast) return null;
    return (
      <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
        <div className="bg-card border border-border rounded-lg shadow-xl p-4 min-w-[280px] max-w-sm">
          <div className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-5 h-5 rounded-full ${
              toast.type === "success" ? "bg-green-500" : "bg-red-500"
            } mt-0.5`} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">
                {toast.type === "success" ? "Success!" : "Error!"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{toast.message}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

   return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                errors.fullName ? "border-red-500" : "border-border"
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                errors.email ? "border-red-500" : "border-border"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Phone and Country Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone / WhatsApp"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                errors.phone ? "border-red-500" : "border-border"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                errors.country ? "border-red-500" : "border-border"
              }`}
            />
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
          </div>
        </div>

        {/* Service Select */}
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleServiceChange}
            className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer ${
              errors.service ? "border-red-500" : "border-border"
            }`}
          >
            <option value="" disabled>Interested Service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        {/* Message Textarea */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
      
      <ToastNotification />
    </>
  );
};

export default ContactForm;