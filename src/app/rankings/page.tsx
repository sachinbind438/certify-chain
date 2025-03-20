"use client";

import { Button } from "@/components/ui/Button";

// Mock data for rankings
const rankings = [
  {
    id: 1,
    name: "John Doe",
    institution: "Example University",
    score: 95.5,
    certificates: 3,
    trend: "up",
  },
  {
    id: 2,
    name: "Jane Smith",
    institution: "Tech Institute",
    score: 94.8,
    certificates: 4,
    trend: "down",
  },
  // Add more mock data as needed
];

export default function Rankings() {
  return (
    <div className="min-h-screen bg-[#E9F1FA] animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-[#00ABE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Student Rankings</h1>
            <p className="text-[#E9F1FA] max-w-2xl mx-auto">
              Track academic performance and compare achievements across institutions globally
            </p>
          </div>
          <div className="mt-8">
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm p-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search by name or institution..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00ABE4] focus:border-[#00ABE4] transition-colors duration-200"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-[#00ABE4] text-white hover:from-blue-600 hover:to-[#0098cb] transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group">
                  Search
                  <span className="ml-2 inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Global Rankings</h2>
              <div className="flex items-center space-x-4">
                <select className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00ABE4] focus:border-[#00ABE4] transition-colors duration-200">
                  <option>All Time</option>
                  <option>This Year</option>
                  <option>This Month</option>
                </select>
                <select className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00ABE4] focus:border-[#00ABE4] transition-colors duration-200">
                  <option>All Institutions</option>
                  <option>Universities</option>
                  <option>Colleges</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#E9F1FA]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rankings.map((student, index) => (
                  <tr key={student.id} className="hover:bg-[#E9F1FA] transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">#{index + 1}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-[#00ABE4] flex items-center justify-center text-white font-medium">
                          {student.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.institution}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.institution}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[#00ABE4]">{student.score}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.certificates} Certificates
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" className="text-[#00ABE4] hover:text-blue-700">
                        View Profile
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing 1 to {rankings.length} of {rankings.length} entries
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-[#00ABE4] text-[#00ABE4]">Previous</Button>
              <Button variant="outline" size="sm" className="border-[#00ABE4] text-[#00ABE4]">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
