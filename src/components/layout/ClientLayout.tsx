"use client";

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#E9F1FA]">
      <Navbar />
      <main className="pt-16 min-h-screen transition-all duration-300">
        <div className="animate-fadeIn">
          {children}
        </div>
      </main>
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-[#00ABE4] flex items-center justify-center text-white font-bold">
                  CFC
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-[#00ABE4] text-transparent bg-clip-text">
                  CERTIFY-CHAIN
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Revolutionizing credential management with blockchain technology.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { id: 1, href: '/dashboard', label: 'Dashboard' },
                  { id: 2, href: '/issue', label: 'Issue Certificate' },
                  { id: 3, href: '/verify', label: 'Verify Certificate' },
                  { id: 4, href: '/rankings', label: 'Rankings' },
                  { id: 5, href: '/settings', label: 'Settings' }
                ].map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#00ABE4] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {[
                  { id: 6, href: '#', label: 'Documentation' },
                  { id: 7, href: '#', label: 'API Reference' },
                  { id: 8, href: '#', label: 'Support' },
                ].map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#00ABE4] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {[
                  { id: 9, href: '#', label: 'Twitter', icon: '🐦' },
                  { id: 10, href: '#', label: 'Discord', icon: '💬' },
                  { id: 11, href: '#', label: 'GitHub', icon: '📦' },
                ].map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#00ABE4] transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Certify-Chain. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ClientLayout;
