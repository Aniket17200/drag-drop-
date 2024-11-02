import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown when an option is selected
  };

  return (
    <div
      className="relative inline-block text-white"
      onMouseEnter={() => setIsOpen(true)} // Open dropdown on hover
      onMouseLeave={() => setIsOpen(false)} // Close dropdown when not hovering
    >
      <div
        className="cursor-pointer bg-gray-800 p-2 mb-1 rounded-md flex justify-between items-center w-36"
      >
        <span>{selectedOption}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <path
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            fill="white"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 bg-gray-800 p-2 rounded-md transition-opacity">
          <div className="flex flex-col space-y-1">
            {["All", "option-1", "option-2", "option-3"].map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={option}
                  name="option"
                  type="radio"
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                  className="hidden"
                />
                <label
                  htmlFor={option}
                  className={`cursor-pointer px-4 py-1 w-full rounded-md transition-colors ${
                    selectedOption === option ? 'bg-gray-700' : 'hover:bg-gray-700'
                  }`}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
