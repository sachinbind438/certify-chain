"use client";

import { Button } from "@/components/ui/Button";

export default function StudentProfile({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="h-24 w-24 rounded-full bg-white p-1">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                    JD
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    John Doe
                  </h1>
                  <p className="text-blue-100">
                    Computer Science Student • MIT
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group">
                  Share Profile
                  <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-2 border-purple-300 hover:border-purple-200 hover:bg-purple-500/10 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm group">
                  Download CV
                  <span className="ml-2 inline-block transform scale-0 group-hover:scale-100 transition-transform duration-300">↓</span>
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
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">
                Computer Science student at MIT with a focus on blockchain technology and distributed systems. 
                Passionate about building secure and scalable applications. Currently working on decentralized 
                identity solutions and smart contracts.
              </p>
            </div>

            {/* Certificates */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp animation-delay-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Certificates</h2>
                  <Button variant="outline" size="sm" className="border-purple-300 hover:border-purple-400 hover:bg-purple-50 transform hover:scale-105 hover:-translate-y-1 group">
                    View All
                    <span className="ml-2 inline-block transform scale-0 group-hover:scale-100 transition-transform duration-300">→</span>
                  </Button>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  {
                    title: "Advanced Web Development",
                    institution: "MIT",
                    date: "2023",
                    grade: "A+",
                    verified: true
                  },
                  {
                    title: "Blockchain Fundamentals",
                    institution: "MIT",
                    date: "2023",
                    grade: "A",
                    verified: true
                  },
                  {
                    title: "Data Structures and Algorithms",
                    institution: "MIT",
                    date: "2022",
                    grade: "A+",
                    verified: true
                  }
                ].map((cert) => (
                  <div key={cert.title} className="p-4 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{cert.title}</h3>
                          <p className="text-sm text-gray-500">{cert.institution} • {cert.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-900">{cert.grade}</span>
                        {cert.verified && (
                          <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Performance</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Overall Grade</span>
                    <span className="text-sm font-medium text-gray-900">A (4.0/4.0)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Course Completion</span>
                    <span className="text-sm font-medium text-gray-900">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Class Rank</span>
                    <span className="text-sm font-medium text-gray-900">Top 5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Certificates", value: "12" },
                  { label: "Current Rank", value: "#28" },
                  { label: "Verifications", value: "156" },
                  { label: "Course Score", value: "92.5" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-300">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Blockchain",
                  "Smart Contracts",
                  "Web Development",
                  "Python",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Solidity",
                  "Data Structures",
                  "Algorithms"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-400">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-600">john.doe@mit.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-gray-600">Cambridge, MA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-sm text-gray-600">github.com/johndoe</span>
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
