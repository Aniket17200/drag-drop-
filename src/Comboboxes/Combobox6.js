import React, { useState } from 'react';

const Combobox6 = () => {
  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm(""); // reset search on selection
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-0 bg-white-50">
      <div className="relative w-64">
        <div
          onClick={toggleDropdown}
          className="bg-white border border-gray-300 rounded-lg p-3 flex justify-between items-center shadow-sm cursor-pointer"
        >
          <span className="text-gray-700">
            {selectedOption || "Choose a fruit"}
          </span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {isOpen && (
          <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <input
              type="text"
              className="w-full p-2 border-b border-gray-200 focus:outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => selectOption(option)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    {option}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Combobox6;
