"use client";
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold transition-transform duration-300 group-hover:scale-110">
                CFC
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                CERTI-FI-CHAIN
              </span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-4">
              {[
                { href: '/dashboard', label: 'Dashboard' },
                { href: '/rankings', label: 'Rankings' },
                { href: '/verify', label: 'Verify' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="group border-blue-200 hover:border-blue-400 transition-colors duration-200"
            >
              <span className="mr-2">💳</span>
              Connect Wallet
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">
                →
              </span>
            </Button>
            <Link href="/settings">
              <Button
                variant="secondary"
                className="group bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="mr-2">⚙️</span>
                Settings
              </Button>
            </Link>
            {/* Mobile menu button */}
            <button className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[
            { href: '/dashboard', label: 'Dashboard' },
            { href: '/rankings', label: 'Rankings' },
            { href: '/verify', label: 'Verify' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        nav {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
