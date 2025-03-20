"use client";

import { Button } from "@/components/ui/Button";

export default function IssueCertificate() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Issue New Certificate
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Create and issue blockchain-verified certificates for your students.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Certificate Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-slideUp">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    Certificate Details
                  </h2>
                  <p className="text-sm text-gray-600">
                    Fill in the required information to issue a new certificate.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Student Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Student Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Student Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter student's full name"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Student ID
                        </label>
                        <input
                          type="text"
                          placeholder="Enter student's ID"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Certificate Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Certificate Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Certificate Title
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Bachelor of Computer Science"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Course/Program
                        </label>
                        <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200">
                          <option value="">Select a course</option>
                          <option value="cs">Computer Science</option>
                          <option value="ds">Data Science</option>
                          <option value="blockchain">Blockchain Technology</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Enter certificate description"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Achievement Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Achievement Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Grade/Score
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., A+ or 95"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Issue Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 w-full group">
                    Issue Certificate
                    <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Certificate Preview</h3>
              <div className="aspect-[8.5/11] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-4 flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center">
                  Fill in the certificate details to see a preview
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-300">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Important Information
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Certificates are permanently stored on blockchain</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Cannot be modified after issuance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Instantly verifiable by employers</span>
                </li>
              </ul>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-400">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { text: 'Certificate issued to John Doe', time: '2h ago' },
                  { text: 'Certificate issued to Jane Smith', time: '1d ago' },
                  { text: 'Certificate template updated', time: '2d ago' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-2"></div>
                    <div>
                      <p className="text-sm text-gray-900">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
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

        .animation-delay-400 {
          animation-delay: 400ms;
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
