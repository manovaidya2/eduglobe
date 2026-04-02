import React from 'react';
import { Shield, Lock, Eye, Globe, Database, Cookie, RefreshCw, Users, FileText, Server, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

// Calendar icon component
const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section with Abstract Pattern - Removed blur */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1e2a38] to-[#2a3a48]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-[#c5a46d] rounded-full"></div>
          <div className="absolute bottom-0 -right-40 w-80 h-80 bg-[#c5a46d] rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <Shield className="w-6 h-6 text-[#c5a46d]" />
              <span className="ml-2 text-white text-sm font-medium">Privacy First</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Your trust is our priority. Learn how we protect and manage your data.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Calendar className="w-4 h-4 text-[#c5a46d]" />
              <span className="text-gray-200 text-sm">Effective Date: 01/09/2025</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 "></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction Card - Removed shadow */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-gray-100 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-[#c5a46d]/10 to-[#c5a46d]/20 rounded-xl">
              <Globe className="w-6 h-6 text-[#c5a46d]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1e2a38] mb-2">EduGlobe Services FZ LLC</h2>
              <p className="text-gray-600 leading-relaxed">
                EduGlobe Services FZ LLC respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you interact with our services.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections Grid */}
        <div className="space-y-6">
          {/* Section 1 - Removed shadow */}
          <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="border-l-4 border-[#c5a46d] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#c5a46d]/10 rounded-lg group-hover:bg-[#c5a46d]/20 transition-colors">
                  <Database className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e2a38] mb-3">1. Information We Collect</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">a) Personal Information</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Name', 'Email address', 'Phone number', 'Company/Institution details'].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-gray-600 text-sm bg-gray-50 rounded-lg px-3 py-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#c5a46d]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">b) Technical Information</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['IP address', 'Browser type', 'Device information', 'Website usage data'].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-gray-600 text-sm bg-gray-50 rounded-lg px-3 py-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#c5a46d]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - Removed shadow */}
          <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="border-l-4 border-[#c5a46d] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#c5a46d]/10 rounded-lg group-hover:bg-[#c5a46d]/20 transition-colors">
                  <Users className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e2a38] mb-3">2. How We Use Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Respond to inquiries', 'Provide consultancy and business services', 'Improve website functionality', 'Send business-related communications'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700 bg-gray-50 rounded-lg px-4 py-2">
                        <div className="w-1.5 h-1.5 bg-[#c5a46d] rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Removed shadow */}
          <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="border-l-4 border-[#c5a46d] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#c5a46d]/10 rounded-lg group-hover:bg-[#c5a46d]/20 transition-colors">
                  <Lock className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e2a38] mb-3">3. Data Sharing</h3>
                  <div className="mb-3 inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-full">
                    ✓ We do NOT sell your data
                  </div>
                  <p className="font-semibold text-gray-700 mb-2 mt-3">We may share information with:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Partner institutions (only when required)', 'Legal authorities (if required by law)', 'Service providers (hosting, CRM tools, etc.)'].map((item, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Removed shadow */}
          <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="border-l-4 border-[#c5a46d] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#c5a46d]/10 rounded-lg group-hover:bg-[#c5a46d]/20 transition-colors">
                  <Server className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e2a38] mb-3">4. Data Protection</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {['Secure servers', 'Encrypted communications', 'Access controls'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
                        <Shield className="w-4 h-4 text-[#c5a46d]" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-amber-600 bg-amber-50 rounded-lg px-4 py-2 flex items-center gap-2">
                    <span className="text-lg">⚠️</span> However, no online system is 100% secure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 - Removed shadow */}
          <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="border-l-4 border-[#c5a46d] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#c5a46d]/10 rounded-lg group-hover:bg-[#c5a46d]/20 transition-colors">
                  <Cookie className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e2a38] mb-3">5. Cookies Policy</h3>
                  <p className="text-gray-700 mb-2">Our website may use cookies to:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                    <li>Enhance user experience</li>
                    <li>Track website analytics</li>
                  </ul>
                  <p className="text-sm text-gray-500 bg-gray-50 rounded-lg px-4 py-2">
                    You can disable cookies via browser settings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 - Removed shadow */}
          <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="border-l-4 border-[#c5a46d] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#c5a46d]/10 rounded-lg group-hover:bg-[#c5a46d]/20 transition-colors">
                  <RefreshCw className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e2a38] mb-3">6. Data Retention</h3>
                  <p className="text-gray-700">We retain data:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                    <li>Only as long as necessary</li>
                    <li>For legal, contractual, or operational purposes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 - Removed shadow, kept gradient */}
          <div className="group bg-gradient-to-br from-[#1e2a38] to-[#2a3a48] rounded-xl overflow-hidden">
            <div className="p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Eye className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">7. Your Rights</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Access your data', 'Request correction', 'Request deletion (subject to legal obligations)'].map((item, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 - Removed shadow */}
          <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="border-l-4 border-[#c5a46d] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#c5a46d]/10 rounded-lg group-hover:bg-[#c5a46d]/20 transition-colors">
                  <Globe className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e2a38] mb-3">8. International Data Transfers</h3>
                  <p className="text-gray-700">
                    As a UAE-based company working globally, your data may be processed across different jurisdictions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 - Removed shadow */}
          <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="border-l-4 border-[#c5a46d] p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#c5a46d]/10 rounded-lg group-hover:bg-[#c5a46d]/20 transition-colors">
                  <FileText className="w-5 h-5 text-[#c5a46d]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e2a38] mb-3">9. Updates to Policy</h3>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. Please check back periodically for any changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Footer Section - Removed shadow */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-[#1e2a38] mb-3">Have questions about our Privacy Policy?</h4>
            <p className="text-gray-600 mb-6">Our team is here to help you understand how we protect your data.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:privacy@eduglobe.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e2a38] text-white rounded-xl hover:bg-[#2a3a48] transition-all duration-300">
                <Mail className="w-4 h-4" />
                Contact Privacy Team
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:border-[#c5a46d] hover:text-[#c5a46d] transition-all duration-300">
                <Phone className="w-4 h-4" />
                +971 4 123 4567
              </a>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;