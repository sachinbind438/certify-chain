"use client";

import { Button } from "@/components/ui/Button";

export default function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome Back, John!</h1>
                <p className="text-blue-100 mt-2">Here's an overview of your academic achievements</p>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 group">
                Issue Certificate
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-slideUp">
          {[
            {
              title: "Total Certificates",
              value: "12",
              change: "+2 this month",
              trend: "up",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
            },
            {
              title: "Current Rank",
              value: "#28",
              change: "Top 5%",
              trend: "up",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
            },
            {
              title: "Average Score",
              value: "92.5",
              change: "+1.2 points",
              trend: "up",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
            },
            {
              title: "Verifications",
              value: "156",
              change: "+12 this week",
              trend: "up",
              icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
          ].map((stat) => (
            <div key={stat.title} className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{stat.title}</h3>
              <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Certificates */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp animation-delay-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Certificates</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Advanced Web Development</h3>
                          <p className="text-sm text-gray-500">Issued by MIT • 2 weeks ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        View →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Overview</h2>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                Chart Component Here
              </div>
            </div>
          </div>

          {/* Upcoming Verifications & Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-400">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-4">
                {[
                  { label: 'Issue New Certificate', icon: '📜' },
                  { label: 'View Rankings', icon: '📊' },
                  { label: 'Verify Certificate', icon: '✓' },
                  { label: 'Update Profile', icon: '👤' },
                ].map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="w-full justify-start group"
                  >
                    <span className="mr-3">{action.icon}</span>
                    {action.label}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      →
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 animate-slideUp animation-delay-500">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { text: 'Your certificate was verified by Tesla Inc.', time: '2h ago' },
                  { text: 'You ranked up to #28 globally', time: '1d ago' },
                  { text: 'New certificate issued by MIT', time: '2d ago' },
                  { text: 'Profile viewed by Microsoft', time: '3d ago' },
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

        .animation-delay-500 {
          animation-delay: 500ms;
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
