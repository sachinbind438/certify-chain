import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";

type UserType = "student" | "institution" | "employer";

// This is a placeholder for actual authentication state
const userType: UserType = "student"; // Will be replaced with actual auth state

export default function Settings() {
  const [activeTab, setActiveTab] = useState<"account" | "privacy" | "notifications" | "security">("account");

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 animate-fadeIn">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative">
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-blue-100 mt-2">
              Manage your account settings and preferences
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {[
              { id: "account", name: "Account" },
              { id: "privacy", name: "Privacy" },
              { id: "notifications", name: "Notifications" },
              { id: "security", name: "Security" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                  transition-colors duration-200
                `}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-6 animate-slideUp">
          {/* Account Settings */}
          {activeTab === "account" && (
            <>
              {/* Profile Settings */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
                  <p className="mt-1 text-sm text-gray-600">Update your personal information</p>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-gray-200">
                          <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                            <Button variant="ghost" className="text-white text-sm">
                              Change
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-900">Profile Picture</p>
                        <p className="text-sm text-gray-500">JPG, GIF or PNG. Max size of 2MB</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        type="text"
                      />
                      <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                      />
                      {userType === "institution" && (
                        <Input
                          label="Institution Name"
                          placeholder="Enter institution name"
                          type="text"
                        />
                      )}
                      {userType === "student" && (
                        <Input
                          label="Student ID"
                          placeholder="Enter student ID"
                          type="text"
                        />
                      )}
                    </div>

                    <div>
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Wallet Settings */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Wallet Settings</h2>
                  <p className="mt-1 text-sm text-gray-600">Manage your blockchain wallet connection</p>
                </div>
                <div className="p-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium text-gray-900">Connected Wallet</p>
                        <p className="text-sm text-gray-600">Not connected</p>
                      </div>
                      <Button>Connect Wallet</Button>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Connect your Solana wallet to issue or receive certificates on the blockchain.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Privacy Settings */}
          {activeTab === "privacy" && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Privacy Settings</h2>
                <p className="mt-1 text-sm text-gray-600">Manage your privacy preferences</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Profile Visibility",
                      description: "Make your profile visible to other users",
                      enabled: true
                    },
                    {
                      title: "Show Certificates",
                      description: "Display your certificates on your public profile",
                      enabled: true
                    },
                    {
                      title: "Show Rankings",
                      description: "Display your ranking information publicly",
                      enabled: false
                    }
                  ].map((setting) => (
                    <div key={setting.title} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{setting.title}</p>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={setting.enabled} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Notification Settings</h2>
                <p className="mt-1 text-sm text-gray-600">Choose what updates you want to receive</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Email Notifications",
                      description: "Receive updates about new certificates and verifications",
                      enabled: true
                    },
                    {
                      title: "Ranking Updates",
                      description: "Get notified about changes in your ranking",
                      enabled: true
                    },
                    {
                      title: "Certificate Issuance",
                      description: "Receive notifications when new certificates are issued to you",
                      enabled: true
                    },
                    {
                      title: "Verification Requests",
                      description: "Get notified when someone verifies your certificates",
                      enabled: true
                    }
                  ].map((notification) => (
                    <div key={notification.title} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{notification.title}</p>
                        <p className="text-sm text-gray-600">{notification.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={notification.enabled} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === "security" && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Security Settings</h2>
                  <p className="mt-1 text-sm text-gray-600">Manage your account security</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-between">
                      Change Password
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                    <Button variant="outline" className="w-full justify-between">
                      Enable Two-Factor Authentication
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                    <Button variant="outline" className="w-full justify-between">
                      View Login History
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>

                  {/* Danger Zone */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="rounded-lg bg-red-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">Danger Zone</h3>
                          <div className="mt-2">
                            <p className="text-sm text-red-700">
                              Once you delete your account, there is no going back. Please be certain.
                            </p>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                              Delete Account
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
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

        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
