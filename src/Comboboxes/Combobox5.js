import React, { useState } from 'react';

const Combobox5 = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-0 bg-white-100">
      <div className="relative w-64">
        <div
          onClick={toggleDropdown}
          className="bg-white border border-gray-300 rounded-md p-2 flex justify-between items-center cursor-pointer"
        >
          <span className="text-gray-700">{selectedOption || "Choose an option"}</span>
          <svg
            className={`w-5 h-5 text-gray-500 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {isOpen && (
          <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto shadow-lg z-10">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => selectOption(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Combobox5;
