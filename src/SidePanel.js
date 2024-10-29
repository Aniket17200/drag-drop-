import React, { useState } from 'react';

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-white min-h-screen">
      {/* Toggle Button */}
      <button
        onClick={togglePanel}
        className={`fixed top-1/2 right-0 z-50 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-l-full shadow-xl transform -translate-y-1/2 transition-transform duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400`}
      >
        <span className={`transform text-2xl ${isOpen ? 'rotate-180' : ''}`}>➔</span>
      </button>

      {/* Side Panel Content */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-2xl transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 rounded-l-lg overflow-hidden`}
      >
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">Side Panel</h2>
          <p className="mt-2 text-lg">This is the content of the side panel.</p>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
