import React, { useState } from 'react';

const Card1 = ({
  imageUrl = '/path-to-default-image.jpg',
  name = 'John Doe',
  role = 'Visual Designer',
  dropdownOptions = [
    { label: 'Edit', action: () => console.log('Edit clicked'), color: 'text-gray-700' },
    { label: 'Export Data', action: () => console.log('Export Data clicked'), color: 'text-gray-700' },
    { label: 'Delete', action: () => console.log('Delete clicked'), color: 'text-red-600' },
  ],
  primaryButton = {
    label: 'Add Friend',
    bgColor: 'bg-gradient-to-r from-blue-500 to-blue-700',
    hoverBgColor: 'hover:from-blue-700 hover:to-blue-800',
    textColor: 'text-white',
    onClick: () => console.log('Add Friend clicked')
  },
  secondaryButton = {
    label: 'Message',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
    hoverTextColor: 'hover:text-blue-700',
    hoverBgColor: 'hover:bg-gray-100',
    borderColor: 'border-gray-200',
    onClick: () => console.log('Message clicked')
  },
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
      <div className="relative flex justify-end px-4 pt-4">
        <button
          onClick={handleDropdownToggle}
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 transition duration-200 ease-in-out"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute right-4 top-12 z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700">
            <ul className="py-2">
              {dropdownOptions.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      option.action();
                      setDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${option.color} hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center pb-10">
        <div className="relative mb-4">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg border-4 border-gray-200 dark:border-gray-700" src={imageUrl} alt={`${name} profile`} />
          <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-indigo-500 transition-colors duration-300"></div>
        </div>
        <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
        
        <div className="flex mt-4 space-x-2 md:mt-6">
          <button
            onClick={primaryButton.onClick}
            className={`inline-flex items-center px-4 py-2 text-sm font-medium ${primaryButton.textColor} ${primaryButton.bgColor} rounded-lg ${primaryButton.hoverBgColor} transition duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}
          >
            {primaryButton.label}
          </button>
          <button
            onClick={secondaryButton.onClick}
            className={`py-2 px-4 text-sm font-medium ${secondaryButton.textColor} ${secondaryButton.bgColor} rounded-lg border ${secondaryButton.borderColor} ${secondaryButton.hoverBgColor} ${secondaryButton.hoverTextColor} transition duration-300 ease-in-out transform hover:scale-105 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-700 dark:border-gray-600`}
          >
            {secondaryButton.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
