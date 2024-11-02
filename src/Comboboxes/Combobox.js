import React from 'react';

const Combobox = () => {
  return (
    <label className="relative inline-block text-gray-700">
      <input type="checkbox" className="hidden" />
      <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer transition-transform hover:scale-110 active:scale-95">
        <span className="block w-1.5 h-0.5 bg-gray-800 rounded transition-transform transform translate-y-1.5"></span>
        <span className="block w-1.5 h-0.5 bg-gray-800 rounded my-1"></span>
        <span className="block w-1.5 h-0.5 bg-gray-800 rounded -translate-y-1.5"></span>
      </div>
      <nav className="absolute left-0 top-10 bg-gray-100 border border-gray-300 shadow-lg rounded-lg scale-75 origin-top opacity-0 transition-all duration-300 pointer-events-none">
        <legend className="p-2 text-xs text-gray-600 uppercase">Actions</legend>
        <ul className="m-0 p-0 list-none">
          <li>
            <button className="flex items-center w-full p-2 text-gray-800 hover:bg-blue-300 focus:outline-none">
              <svg className="w-4 h-4 mr-2 text-blue-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle r={4} cy={7} cx={9} />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Collaborators</span>
            </button>
          </li>
          <li>
            <button className="flex items-center w-full p-2 text-gray-800 hover:bg-blue-300 focus:outline-none">
              <svg className="w-4 h-4 mr-2 text-blue-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span>Magic Link</span>
            </button>
          </li>
          <hr className="my-1 border-gray-300" />
          <li>
            <button className="flex items-center w-full p-2 text-gray-800 hover:bg-blue-300 focus:outline-none">
              <svg className="w-4 h-4 mr-2 text-gray-400" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <rect ry={2} rx={2} height={13} width={13} y={9} x={9} />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Clone</span>
            </button>
          </li>
          <li>
            <button className="flex items-center w-full p-2 text-gray-800 hover:bg-blue-300 focus:outline-none">
              <svg className="w-4 h-4 mr-2 text-gray-400" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
              </svg>
              <span>Edit</span>
            </button>
          </li>
          <hr className="my-1 border-gray-300" />
          <li>
            <button className="flex items-center w-full p-2 text-gray-800 hover:bg-blue-300 focus:outline-none">
              <svg className="w-4 h-4 mr-2 text-red-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <line y2={18} x2={6} y1={6} x1={18} />
                <line y2={18} x2={18} y1={6} x1={6} />
              </svg>
              <span>Delete</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
}

export default Combobox;
