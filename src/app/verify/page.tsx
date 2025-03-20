"use client";

import { Button } from "@/components/ui/Button";

export default function VerifyCertificate() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Verify Certificate
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Instantly verify the authenticity of any blockchain-based certificate
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Verification Form */}
          <div className="md:col-span-2 space-y-6">
            {/* Drop Zone */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Upload Certificate</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Drag and drop your certificate file or click to browse
                </p>
              </div>
              <div className="p-8">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors duration-200 cursor-pointer">
                  <div className="mx-auto h-12 w-12 text-gray-400">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    PDF, PNG, or JPG up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Manual Verification */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp animation-delay-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Manual Verification</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Enter the certificate ID or hash to verify
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Certificate ID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter certificate ID or hash"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 w-full group">
                  Verify Certificate
                  <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Button>
              </div>
            </div>

            {/* Recent Verifications */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp animation-delay-300">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Verifications</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  {
                    id: "CERT-123",
                    name: "John Doe",
                    institution: "MIT",
                    date: "2h ago",
                    status: "verified"
                  },
                  {
                    id: "CERT-124",
                    name: "Jane Smith",
                    institution: "Stanford",
                    date: "5h ago",
                    status: "verified"
                  },
                  {
                    id: "CERT-125",
                    name: "Mike Johnson",
                    institution: "Harvard",
                    date: "1d ago",
                    status: "verified"
                  }
                ].map((verification) => (
                  <div key={verification.id} className="p-4 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          verification.status === 'verified' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {verification.status === 'verified' ? (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{verification.name}</p>
                          <p className="text-xs text-gray-500">{verification.institution} • {verification.date}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {verification.id}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">How It Works</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload Certificate",
                    description: "Upload your certificate file or enter the certificate ID",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    )
                  },
                  {
                    title: "Blockchain Verification",
                    description: "Our system verifies the certificate on the blockchain",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                  {
                    title: "Instant Results",
                    description: "Get immediate verification results and certificate details",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  }
                ].map((step, index) => (
                  <div key={step.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{index + 1}. {step.title}</h4>
                      <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-300">
              <h3 className="text-lg font-medium text-gray-900 mb-4">FAQ</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "What types of certificates can I verify?",
                    answer: "Any certificate issued through our blockchain platform can be verified, including academic degrees, professional certifications, and course completions."
                  },
                  {
                    question: "How long does verification take?",
                    answer: "Verification is instant and takes just a few seconds to complete."
                  },
                  {
                    question: "Is the verification process secure?",
                    answer: "Yes, our verification process uses blockchain technology to ensure tamper-proof and secure verification."
                  }
                ].map((faq) => (
                  <div key={faq.question} className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">{faq.question}</h4>
                    <p className="text-sm text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
