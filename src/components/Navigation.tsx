import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-navy-900 via-navy-900/95 to-transparent border-b border-green-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">м</span>
            </div>
            <span className="text-white font-semibold tracking-wide hidden sm:inline">meUus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
              Home
            </Link>
            <Link to="/ecosystem" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
              Ecosystem
            </Link>
            <Link to="/pillars" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
              Pillars
            </Link>
            <Link to="/global" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
              Global
            </Link>
            <Link to="/dlas" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
              DLAS
            </Link>
          </div>

          {/* Join Now Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/join"
              className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white rounded-full text-sm font-semibold transition-all transform hover:scale-105"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-3">
            <Link to="/" className="block px-4 py-2 text-gray-300 hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link to="/ecosystem" className="block px-4 py-2 text-gray-300 hover:text-green-400 transition-colors">
              Ecosystem
            </Link>
            <Link to="/pillars" className="block px-4 py-2 text-gray-300 hover:text-green-400 transition-colors">
              Pillars
            </Link>
            <Link to="/global" className="block px-4 py-2 text-gray-300 hover:text-green-400 transition-colors">
              Global
            </Link>
            <Link to="/dlas" className="block px-4 py-2 text-gray-300 hover:text-green-400 transition-colors">
              DLAS
            </Link>
            <div className="px-4 pt-3 border-t border-gray-700">
              <Link
                to="/join"
                className="block w-full text-center px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full font-semibold transition-all"
              >
                Join the Founding
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
