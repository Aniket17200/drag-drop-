import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { FaElementor, FaFileAlt, FaPalette, FaImages, FaGlobe, FaStore, FaBusinessTime, FaPlus, FaTimes } from "react-icons/fa";

const DraggableItem = ({ type, icon, variant }) => {
  const [, drag] = useDrag(() => ({
    type,
    item: { type, variant },
  }));

  return (
    <div
      ref={drag}
      className="bg-white text-black p-3 rounded-xl shadow-lg cursor-pointer mb-4 flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl"
    >
      <span className="text-3xl mb-1">{icon}</span>
    </div>
  );
};

function Sidebar() {
  const [showComponents, setShowComponents] = useState(false);

  const sidebarItems = [
    { name: "Add Element", icon:<FaPlus/>, action: () => setShowComponents(!showComponents) },
    { name: "Pages", icon: <FaFileAlt /> },
    { name: "Site Style", icon: <FaPalette /> },
    { name: "Media", icon: <FaImages /> },
    { name: "Global Section", icon: <FaGlobe /> },
    { name: "App Market", icon: <FaStore /> },
    { name: "My Business", icon: <FaBusinessTime /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar with Icons Only */}
      <div className="flex flex-col items-center mt-2  py-9  w-24 bg-white text-gray-700 shadow-4xl rounded-lg shadow-lg">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action || null}
            className="p-5 rounded-full mb-5 transition-all transform hover:scale-110 focus:outline-none hover:bg-gray-200 hover:text-black shadow-md hover:shadow-lg"
            title={item.name}
          >
            <span className="text-2xl opacity-80">{item.icon}</span>
          </button>
        ))}
      </div>

      {/* Expandable Component Section */}
      {showComponents && (
        <div className="w-64 mt-4 bg-gray-50 p-6 shadow-lg rounded-lg transform transition-transform ml-4 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Components</h2>
          <button
            onClick={() => setShowComponents(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            title="Close"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Navbar Variants in 3-Column Layout */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 text-lg">Navbar</h3>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <DraggableItem type="navbar" icon={<FaElementor />} variant="Navbar1" />
              <DraggableItem type="navbar" icon={<FaFileAlt />} variant="Navbar" />
              <DraggableItem type="navbar" icon={<FaPalette />} variant="Navbar3" />
            </div>
          </div>

          {/* Card Variants in 3-Column Layout */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 text-lg">Card</h3>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <DraggableItem type="card" icon={<FaImages />} variant="Card1" />
              <DraggableItem type="card" icon={<FaGlobe />} variant="Card" />
              <DraggableItem type="card" icon={<FaStore />} variant="Card3" />
            </div>
          </div>

          {/* Hero Section Variants */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 text-lg">Hero Section</h3>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <DraggableItem type="hero" icon={<FaElementor />} variant="Hero1" />
              <DraggableItem type="hero" icon={<FaFileAlt />} variant="Hero" />
            </div>
          </div>

          {/* Login Section Variants */}
          <div>
            <h3 className="font-semibold text-gray-700 text-lg">Login</h3>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <DraggableItem type="login" icon={<FaPalette />} variant="Login1" />
              <DraggableItem type="login" icon={<FaImages />} variant="Login2" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
