import React, { useState } from 'react';


const SidePanel = ({ navbarData, onNavbarUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const [logoText, setLogoText] = useState('Flowbite');
  const [logoSrc, setLogoSrc] = useState('https://flowbite.com/docs/images/logo.svg');
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search...');
  const [links, setLinks] = useState([
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#About' },
    { name: 'Services', href: '#Services' },
    { name: 'Contact', href: '#Contact' },
  ]);

  const handleLinkChange = (index, newName) => {
    const updatedLinks = links.map((link, i) =>
      i === index ? { ...link, name: newName } : link
    );
    setLinks(updatedLinks);
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
        <div className="p-4 border-b border-gray-300 shadow-md">
          <h2 className="text-lg font-semibold">Customize Navbar</h2>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <label className="block mb-1">Logo Text:</label>
            <input
              type="text"
              value={logoText}
              onChange={(e) => setLogoText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Logo URL:</label>
            <input
              type="text"
              value={logoSrc}
              onChange={(e) => setLogoSrc(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Search Placeholder:</label>
            <input
              type="text"
              value={searchPlaceholder}
              onChange={(e) => setSearchPlaceholder(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {links.map((link, index) => (
            <div key={index}>
              <label className="block mb-1">{`Link ${index + 1} Name:`}</label>
              <input
                type="text"
                value={link.name}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default SidePanel;
