import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Big-O Analyzer
              </h1>
              <p className="text-sm text-gray-600 hidden sm:block">
                Interactive Algorithm Complexity Visualization
              </p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#visualization"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Visualization
            </a>
            <a
              href="#analysis"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Analysis
            </a>
            <a
              href="#learn"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Learn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-gray-200">
            <a
              href="#visualization"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              📈 Visualization
            </a>
            <a
              href="#analysis"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              🧮 Analysis
            </a>
            <a
              href="#learn"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              📚 Learn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              💻 GitHub
            </a>
          </nav>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                <span className="font-semibold">Big-O Notation:</span> Mathematical analysis of algorithm efficiency
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">
                O(1) - Best
              </span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                O(n) - Good
              </span>
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full">
                O(2ⁿ) - Avoid
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
