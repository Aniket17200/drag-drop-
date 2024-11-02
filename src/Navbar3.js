import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar3({
  logoText = 'Logo',
  menuItems = [
    { label: 'Home', href: '#', icon: faHome, current: true },
    { label: 'About', href: '#About', icon: faInfoCircle },
    { label: 'Services', href: '#Services', icon: faCog },
    { label: 'Contact', href: '#Contact', icon: faEnvelope },
  ],
  variant = 'default',
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`border-gray-200 dark:bg-gray-900 ${
        variant === 'minimal' ? 'bg-gray-700' : 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
      } text-white transition-all duration-500`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo with Typing Effect */}
        <a href="#Home" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold logo-text">
            {logoText.split('').map((char, index) => (
              <span key={index} className="typing-animation">{char}</span>
            ))}
          </span>
        </a>

        {/* Toggle Button for mobile with Icon Animation */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle menu"
            className="text-gray-300 hover:text-white focus:outline-none transition-transform duration-300 ease-in-out transform"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col p-4 mt-4 space-y-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <li key={index} className="transition-all duration-300 ease-in-out hover:scale-105 hover:text-yellow-300">
                <a
                  href={item.href}
                  className={`flex items-center space-x-2 py-2 px-3 rounded ${
                    item.current
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                  <span className="flex-1 text-left">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        nav {
          background: linear-gradient(135deg, #4c1d95, #f472b6, #f97316);
          background-size: 300% 300%;
          animation: gradient-animation 5s ease infinite;
        }

        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .typing-animation {
          display: inline-block;
          animation: typing 0.5s steps(1) forwards;
          opacity: 0;
          animation-fill-mode: forwards;
          animation-delay: calc(0.1s * var(--char-index));
        }

        @keyframes typing {
          0% {
            opacity: 0;
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-text {
          display: flex;
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
}
