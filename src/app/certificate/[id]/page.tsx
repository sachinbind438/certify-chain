"use client";

import { Button } from "@/components/ui/Button";

export default function CertificateDetails({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Advanced Web Development Certificate
                </h1>
                <p className="text-blue-100">
                  Issued by MIT • Verified on Blockchain
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Download PDF
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Share Certificate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Certificate Preview */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp">
              <div className="aspect-[1.414/1] bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="w-full max-w-2xl mx-auto text-center space-y-6 scale-90">
                    <div className="border-8 border-double border-gray-200 p-8">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-serif text-gray-900">Certificate of Completion</h2>
                          <p className="text-lg text-gray-600 mt-2">This is to certify that</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">John Doe</p>
                          <p className="text-gray-600 mt-2">has successfully completed the course</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-900">Advanced Web Development</p>
                          <p className="text-gray-600 mt-2">with a grade of A+</p>
                        </div>
                        <div className="pt-6">
                          <p className="text-gray-600">Issued on September 15, 2023</p>
                          <div className="flex justify-center space-x-16 mt-6">
                            <div className="text-center">
                              <div className="h-px w-40 bg-gray-300 mb-2"></div>
                              <p className="text-sm text-gray-600">Course Director</p>
                            </div>
                            <div className="text-center">
                              <div className="h-px w-40 bg-gray-300 mb-2"></div>
                              <p className="text-sm text-gray-600">Dean</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp animation-delay-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Course Details</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Course Name</h3>
                    <p className="mt-1 text-sm text-gray-900">Advanced Web Development</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Institution</h3>
                    <p className="mt-1 text-sm text-gray-900">Massachusetts Institute of Technology</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Issue Date</h3>
                    <p className="mt-1 text-sm text-gray-900">September 15, 2023</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Valid Until</h3>
                    <p className="mt-1 text-sm text-gray-900">No Expiration</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Grade</h3>
                    <p className="mt-1 text-sm text-gray-900">A+ (97/100)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Credits</h3>
                    <p className="mt-1 text-sm text-gray-900">4.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp animation-delay-300">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Course Content</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {[
                    {
                      module: "Module 1: Modern JavaScript",
                      topics: ["ES6+ Features", "Async Programming", "Module System"],
                      grade: "98%"
                    },
                    {
                      module: "Module 2: React & Next.js",
                      topics: ["Component Architecture", "State Management", "Server Components"],
                      grade: "95%"
                    },
                    {
                      module: "Module 3: Backend Development",
                      topics: ["Node.js", "RESTful APIs", "Database Design"],
                      grade: "97%"
                    },
                    {
                      module: "Module 4: DevOps & Deployment",
                      topics: ["CI/CD", "Cloud Services", "Performance Optimization"],
                      grade: "98%"
                    }
                  ].map((module) => (
                    <div key={module.module} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-900">{module.module}</h3>
                        <span className="text-sm font-medium text-green-600">{module.grade}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Verification Status */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-200">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Verified on Blockchain</h3>
                  <p className="text-sm text-gray-600 mt-1">Last verified 2 hours ago</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-500">Certificate ID</span>
                    <span className="font-mono text-gray-900">CERT-123456</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-500">Blockchain Hash</span>
                    <span className="font-mono text-gray-900">0x1234...5678</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-500">Block Number</span>
                    <span className="font-mono text-gray-900">#12345678</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipient Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-300">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recipient</h3>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  JD
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </div>
            </div>

            {/* Issuer Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-400">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Issuer</h3>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 p-2">
                  <img
                    src="/mit-logo.png"
                    alt="MIT"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Massachusetts Institute of Technology</p>
                  <p className="text-sm text-gray-500">Verified Institution</p>
                </div>
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
