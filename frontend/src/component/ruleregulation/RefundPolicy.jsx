import React from 'react';
import { 
  Shield, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  Mail, 
  CreditCard, 
  Scale,
  Clock,
  AlertCircle,
  Heart,
  DollarSign,
  ArrowRight,
  Calendar,
  FileText,
  Users,
  ThumbsUp
} from 'lucide-react';

const RefundPolicy = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Transparent Process",
      description: "Clear and straightforward refund guidelines"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "7-21 working days for refund processing"
    },
    {
      icon: Heart,
      title: "Fair Approach",
      description: "We believe in fairness and transparency"
    }
  ];

  const refundEligibility = [
    {
      icon: CheckCircle,
      title: "Double Charging",
      description: "You were charged twice by mistake",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: AlertCircle,
      title: "Technical Error",
      description: "Payment was made due to a technical error",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Service Delay",
      description: "We are unable to start the service within the agreed time",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const nonRefundable = [
    {
      icon: XCircle,
      title: "Change of Mind",
      description: "After payment is completed",
      color: "text-red-600"
    },
    {
      icon: Users,
      title: "Client Delay",
      description: "Delay or non-cooperation from the client side",
      color: "text-red-600"
    },
    {
      icon: AlertCircle,
      title: "Expectation Mismatch",
      description: "Results not meeting expectations",
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "Third-Party Issues",
      description: "Issues related to third-party institutions or partners",
      color: "text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1e2a38] to-[#2a3a48] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c5a46d] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c5a46d] rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <RefreshCw className="w-4 h-4 text-[#c5a46d]" />
              <span className="text-white text-sm">Money Back Policy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Refund Policy
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Clear, transparent, and fair refund guidelines for our professional services
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2">
              <Calendar className="w-4 h-4 text-[#c5a46d]" />
              <span className="text-gray-300 text-sm">Effective Date: 01/09/2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 mb-12 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#c5a46d]/10 rounded-xl">
              <Shield className="w-7 h-7 text-[#c5a46d]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1e2a38] mb-2">EduGlobe Services FZ LLC</h2>
              <p className="text-gray-600 leading-relaxed">
                At EduGlobe Services FZ LLC, we aim to provide high-quality professional services. 
                Since our work involves consultancy, planning, and institutional support, our refund policy 
                is simple and transparent.
              </p>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="inline-flex p-3 bg-[#c5a46d]/10 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-[#c5a46d]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* General Rule - Highlight Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">✅ 1. General Rule</h3>
              <p className="text-amber-700 mb-3">Most of our services are non-refundable because:</p>
              <div className="space-y-2">
                {[
                  'Work starts immediately after confirmation',
                  'Time, expertise, and resources are committed',
                  'Services are customized for each client'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-amber-700">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* When You Can Get Refund */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#1e2a38] mb-6 flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-[#c5a46d]" />
            🔄 2. When Can You Get a Refund?
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {refundEligibility.map((item, idx) => (
              <div key={idx} className={`${item.bgColor} rounded-xl p-5 border border-${item.color.split('-')[1]}-100`}>
                <div className="flex items-start gap-3">
                  <item.icon className={`w-5 h-5 ${item.color} mt-0.5`} />
                  <div>
                    <h4 className={`font-semibold ${item.color} mb-1`}>{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partial Refunds */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">⚖️ 3. Partial Refunds (If Applicable)</h3>
              <p className="text-blue-700">If work has started but is not completed:</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2 text-blue-700">
                  <CheckCircle className="w-4 h-4" />
                  <span>You may receive a partial refund</span>
                </div>
                <div className="flex items-center gap-2 text-blue-700">
                  <CheckCircle className="w-4 h-4" />
                  <span>The amount will depend on how much work has already been done</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When Refunds Not Applicable */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#1e2a38] mb-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-500" />
            ❌ 4. When Refunds Are Not Applicable
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {nonRefundable.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                <item.icon className={`w-5 h-5 ${item.color} mt-0.5`} />
                <div>
                  <h4 className={`font-semibold ${item.color}`}>{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Request Refund */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 mb-10 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#1e2a38] mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-[#c5a46d]" />
            📩 5. How to Request a Refund
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-gray-700 mb-3">To request a refund:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#c5a46d]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#c5a46d] text-sm font-bold">1</span>
                  </div>
                  <span>Email us at: <a href="mailto:business@eduglobe.ae" className="text-[#c5a46d] font-medium">business@eduglobe.ae</a></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c5a46d]/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-[#c5a46d] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <span>Share your:</span>
                    <ul className="list-disc list-inside ml-4 mt-1 text-gray-600">
                      <li>Payment details</li>
                      <li>Reason for refund</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Processing Time:</span>
              </div>
              <p className="text-amber-700 text-lg font-bold">7–21 working days</p>
            </div>
          </div>
        </div>

        {/* Refund Method */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">💳 6. Refund Method</h3>
              <p className="text-green-700">Refunds will be made through:</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <span className="bg-white px-4 py-2 rounded-lg text-green-700">Original payment method</span>
                <span className="bg-white px-4 py-2 rounded-lg text-green-700">OR</span>
                <span className="bg-white px-4 py-2 rounded-lg text-green-700">Bank transfer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Decision */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Scale className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">⚠️ 7. Final Decision</h3>
              <p className="text-purple-700">
                All refund decisions will be made by EduGlobe Services FZ LLC based on the situation.
              </p>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="bg-gradient-to-r from-[#1e2a38] to-[#2a3a48] rounded-2xl p-8 text-center">
          <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
            <ThumbsUp className="w-8 h-8 text-[#c5a46d]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">🤝 Our Promise</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We believe in fairness and transparency. If there's any issue, we'll always try to resolve it in the best possible way.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-[#c5a46d]">
            <span>Your trust matters to us</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-[#1e2a38] mb-3">Have questions about our Refund Policy?</h4>
            <p className="text-gray-600 mb-6">We're here to help clarify any concerns you may have.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:business@eduglobe.ae" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e2a38] text-white rounded-xl hover:bg-[#2a3a48] transition-all duration-300">
                <Mail className="w-4 h-4" />
                Email Support Team
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:border-[#c5a46d] hover:text-[#c5a46d] transition-all duration-300">
                <FileText className="w-4 h-4" />
                Submit Refund Request
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}

      </div>
    </div>
  );
};

export default RefundPolicy;