import React from 'react';
import { 
  FileText, 
  Shield, 
  Users, 
  Copyright, 
  FileSignature, 
  AlertTriangle, 
  ExternalLink, 
  Ban, 
  Gavel, 
  RefreshCw,
  CheckCircle,
  Building2,
  GraduationCap,
  Handshake,
  BookOpen,
  Target,
  ArrowRight,
  Scale,
  Lock,
  Globe
} from 'lucide-react';

const TermsConditions = () => {
  const sections = [
    {
      icon: GraduationCap,
      title: "1. Nature of Services",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-500",
      content: (
        <>
          <p className="text-gray-700 mb-4">
            EduGlobe Services FZ LLC operates as an Education Business Development & Institutional Management Company. 
            Our services include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Institutional setup and management',
              'Academic consultancy and curriculum development',
              'Business development for educational institutions',
              'Training program structuring and implementation',
              'Strategic partnerships and collaborations'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      icon: Users,
      title: "2. User Responsibilities",
      color: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-500",
      content: (
        <>
          <p className="text-gray-700 mb-3">By using our website, you agree to:</p>
          <div className="space-y-2">
            {[
              'Provide accurate and complete information',
              'Not misuse or attempt to disrupt the website',
              'Not engage in unauthorized data access or scraping',
              'Use services only for lawful purposes'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      icon: Copyright,
      title: "3. Intellectual Property",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-500",
      content: (
        <>
          <p className="text-gray-700 mb-3">
            All content on this website (including text, logos, branding, designs, and documents) is the intellectual 
            property of EduGlobe Services FZ LLC.
          </p>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-semibold text-red-700 mb-2">You may not:</p>
            <div className="space-y-2">
              {[
                'Copy, reproduce, or distribute content without permission',
                'Use branding or materials for commercial purposes'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-red-700">
                  <Ban className="w-4 h-4" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )
    },
    {
      icon: FileSignature,
      title: "4. Service Agreements",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-500",
      content: (
        <>
          <p className="text-gray-700 mb-3">All services offered by EduGlobe are governed by:</p>
          <div className="flex flex-wrap gap-3 mb-4">
            {['Separate agreements', 'MOUs (Memorandum of Understanding)', 'Commercial contracts'].map((item, idx) => (
              <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Website content does not constitute a legally binding service agreement.</span>
            </p>
          </div>
        </>
      )
    },
    {
      icon: AlertTriangle,
      title: "5. Limitation of Liability",
      color: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-500",
      content: (
        <>
          <p className="text-gray-700 mb-3">EduGlobe shall not be liable for:</p>
          <div className="space-y-2">
            {[
              'Any indirect or consequential damages',
              'Business losses arising from third-party partnerships',
              'Outcomes of institutional collaborations'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      icon: ExternalLink,
      title: "6. Third-Party Links",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-500",
      content: (
        <>
          <p className="text-gray-700 mb-3">Our website may contain links to third-party websites. We are not responsible for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {['Their content', 'Their privacy practices', 'Their service outcomes'].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center text-gray-700">
                <ExternalLink className="w-4 h-4 text-indigo-500 mx-auto mb-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      icon: Ban,
      title: "7. Termination of Access",
      color: "bg-gray-50",
      iconColor: "text-gray-600",
      borderColor: "border-gray-500",
      content: (
        <>
          <p className="text-gray-700 mb-3">We reserve the right to:</p>
          <div className="space-y-2">
            {[
              'Restrict or terminate access',
              'Remove any user violating these terms'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      icon: Gavel,
      title: "8. Governing Law",
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-500",
      content: (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-5">
          <p className="text-emerald-800 font-medium flex items-center gap-2">
            <Scale className="w-5 h-5" />
            These Terms shall be governed by the laws of the United Arab Emirates (UAE) and applicable Free Zone regulations.
          </p>
        </div>
      )
    },
    {
      icon: RefreshCw,
      title: "9. Amendments",
      color: "bg-cyan-50",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-500",
      content: (
        <div className="bg-cyan-50 rounded-lg p-5">
          <p className="text-cyan-800 flex items-start gap-2">
            <RefreshCw className="w-5 h-5 mt-0.5 flex-shrink-0" />
            We reserve the right to update these Terms at any time. Continued use of the website constitutes acceptance of the updated terms.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Minimalist */}
      <div className="relative bg-[#1e2a38] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#c5a46d" strokeWidth="0.5"/>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#c5a46d"/>
            </pattern>
            <rect width="100" height="100" fill="url(#dots)"/>
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <FileText className="w-4 h-4 text-[#c5a46d]" />
              <span className="text-white text-sm">Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2">
              <CalendarIcon className="w-4 h-4 text-[#c5a46d]" />
              <span className="text-gray-300 text-sm">Effective Date: 01/09/2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Company Introduction Card */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 mb-12 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#c5a46d]/10 rounded-xl">
              <Building2 className="w-7 h-7 text-[#c5a46d]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1e2a38] mb-2">EduGlobe Services FZ LLC</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to EduGlobe Services FZ LLC ("Company", "we", "our", "us"). By accessing or using our website and services, 
                you agree to comply with the following Terms and Conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Sections Grid - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <div 
              key={idx}
              className={`group bg-white rounded-xl border ${section.borderColor} border-l-4 hover:shadow-lg transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2 ${section.color} rounded-lg`}>
                    <section.icon className={`w-5 h-5 ${section.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
                </div>
                <div className="pl-11">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Acceptance Section */}
        <div className="mt-12 bg-[#1e2a38] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">By using EduGlobe Services, you agree to these Terms & Conditions</h3>
          <p className="text-gray-300 mb-6">If you do not agree with any part of these terms, please do not use our website or services.</p>
          <div className="inline-flex items-center gap-2 text-[#c5a46d] font-medium">
            <span>Last reviewed: September 2025</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-[#1e2a38] mb-3">Have questions about our Terms & Conditions?</h4>
            <p className="text-gray-600 mb-6">Our legal team is here to address your concerns.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:legal@eduglobe.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e2a38] text-white rounded-xl hover:bg-[#2a3a48] transition-all duration-300">
                <MailIcon className="w-4 h-4" />
                Contact Legal Team
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:border-[#c5a46d] hover:text-[#c5a46d] transition-all duration-300">
                <PhoneIcon className="w-4 h-4" />
                +971 4 123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}

      </div>
    </div>
  );
};

// SVG Icon Components
const CalendarIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default TermsConditions;