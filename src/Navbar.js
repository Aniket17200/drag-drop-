import React from 'react';

export default function Navbar({
  variant = 'default',
  logoSrc = 'https://flowbite.com/docs/images/logo.svg',
  logoText = 'Flowbite',
  links = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Services', href: '#Services' },
    { name: 'Contact', href: '#Contact' },
  ],
  searchPlaceholder = 'Search...',
}) {
  return (
    <nav
      className={`border-gray-200 dark:bg-gray-900 ${
        variant === 'minimal' ? 'bg-gray-700' : 'bg-blue-500'
      } text-white`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#Home" className="flex items-center space-x-3">
          <img src={logoSrc} className="h-8" alt={`${logoText} Logo`} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {logoText}
          </span>
        </a>

        {/* Search and Toggle Button */}
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <input
            type="text"
            id="search-navbar"
            className="hidden md:block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={searchPlaceholder}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden w-full md:flex md:order-1 md:w-auto" id="navbar-search">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block py-2 px-3 rounded ${
                    link.current
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                  aria-current={link.current ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
