"use client";

import { Button } from "@/components/ui/Button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#E9F1FA] animate-fadeIn">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#00ABE4] to-[#00ABE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome Back, John!</h1>
              <p className="text-[#E9F1FA] mt-2">Here's an overview of your academic achievements</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-white text-[#00ABE4] hover:bg-[#E9F1FA] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-white/25 group">
              Issue Certificate
              <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Total Certificates", value: "28", icon: "🎓" },
            { title: "Pending Verifications", value: "5", icon: "⏳" },
            { title: "Institution Rank", value: "#12", icon: "🏆" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { title: "Certificate Issued", desc: "BSc Computer Science - John Doe", time: "2 hours ago", icon: "📜" },
              { title: "Verification Request", desc: "From Google Inc.", time: "5 hours ago", icon: "🔍" },
              { title: "New Achievement", desc: "Top 10% in Rankings", time: "1 day ago", icon: "🌟" }
            ].map((activity, index) => (
              <div key={index} className="p-6 hover:bg-[#E9F1FA] transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{activity.title}</p>
                    <p className="text-gray-600 text-sm">{activity.desc}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
