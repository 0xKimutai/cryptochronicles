import { useState } from 'react';
import { motion } from 'framer-motion';
import { logoutUser } from '../data/auth';

const Navbar = ({ currentUser, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    onLogout();
  };

  return (
    <nav className="bg-dark-800 border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-400">
                CryptoChronicles
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#submit" className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Submit Story
              </a>
              {currentUser && (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300 text-sm">
                    Welcome, {currentUser.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary-400 p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-800 border-t border-dark-700">
            <a href="#home" className="text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              About
            </a>
            <a href="#submit" className="text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
              Submit Story
            </a>
            {currentUser && (
              <>
                <div className="border-t border-dark-600 pt-2 mt-2">
                  <span className="text-gray-300 text-sm px-3 py-2 block">
                    Welcome, {currentUser.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 