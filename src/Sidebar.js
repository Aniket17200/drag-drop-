import React, { useState } from "react";
import { useDrag } from "react-dnd";
import {
  FaElementor,
  FaFileAlt,
  FaPalette,
  FaImages,
  FaGlobe,
  FaStore,
  FaBusinessTime,
  FaPlus,
  FaTimes,
  FaCaretDown,
  FaUpload,
  FaBars,
  FaChevronCircleDown,
  FaArrowCircleDown,
  FaAngleDown,
  FaCaretSquareDown,

} from "react-icons/fa";

const DraggableItem = ({ type, icon, variant, imageSrc }) => {
  const [, drag] = useDrag(() => ({
    type,
    item: { type, variant },
  }));

  return (
    <div
      ref={drag}
      className="bg-white text-black p-3 rounded-xl shadow-lg cursor-pointer mb-4 flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl"
    >
      {/* Render the icon and the image if provided */}
      {imageSrc ? (
        <img src={imageSrc} alt="uploaded" className="w-full h-24 object-cover rounded-lg mb-1" />
      ) : (
        <span className="text-3xl mb-1">{icon}</span>
      )}
    </div>
  );
};

function Sidebar() {
  const [showComponents, setShowComponents] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showimages, setShowimages] = useState(false);
  const [showGlobal, setShowGlobal] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showBuisness, setShowBuisness] = useState(false);
 
 
  const [showStyle, setShowStyle] = useState(false);
  const [showDropdowns, setShowDropdowns] = useState({
    navbar: false,
    card: false,
    hero: false,
    login: false,
    dropdown: false,
    combobox: false,
    button: false,
  });

  const [imageURL, setImageURL] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);


  // Toggle function to show or hide the style panel


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  const handleURLChange = (e) => {
    setImageURL(e.target.value);
  }

  const handleUpload = () => {
    console.log("File uploaded:", selectedFile);
    console.log("Image URL:", imageURL);
  };

  const sidebarItems = [
    { name: "Add Element", icon: <FaPlus />, action: () => setShowComponents(!showComponents) },
    { name: "Pages", icon: <FaFileAlt />, action: () => setShowPages(!showPages) },
    { name: "Site Style", icon: <FaPalette /> ,action: () => setShowStyle(!showStyle)},
    { name: "Media", icon: <FaImages />,action: () => setShowimages(!showimages) },
    { name: "Global Section", icon: <FaGlobe />,action: () => setShowGlobal(!showGlobal) },
    { name: "App Market", icon: <FaStore />,action: () => setShowMarket(!showMarket) },
    { name: "My Business", icon: <FaBusinessTime />,action: () => setShowBuisness(!showBuisness)},
  ];

  const toggleDropdown = (section) => {
    setShowDropdowns((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex">
      {/* Sidebar with Icons Only */}
      <div className="flex flex-col items-center mt-2 py-9 w-24 bg-white text-gray-700 shadow-4xl rounded-lg shadow-lg">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="p-5 rounded-full mb-5 transition-all transform hover:scale-110 focus:outline-none hover:bg-gray-200 hover:text-black shadow-md hover:shadow-lg"
            title={item.name}
          >
            <span className="text-2xl opacity-80">{item.icon}</span>
          </button>
        ))}
      </div>

      {/* Expandable Component Section */}
      {showComponents && (
        <div className="relative w-64 mt-4 bg-gray-50 p-6 shadow-lg rounded-lg transform transition-transform ml-4 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Components</h2>
          <button
            onClick={() => setShowComponents(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            title="Close"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Navbar Section */}
          <div className="mb-6">
            <h3 className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('navbar')}>
              <span className="font-semibold text-gray-700 text-lg">Navbar</span>
              <FaCaretDown className={`transform transition-transform ${showDropdowns.navbar ? "rotate-180" : ""}`} />
            </h3>
            {showDropdowns.navbar && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                <DraggableItem type="navbar" icon={<FaElementor />} variant="Navbar" />
                <DraggableItem type="navbar" icon={<FaFileAlt />} variant="Navbar1" />
                <DraggableItem type="navbar" icon={<FaPalette />} variant="Navbar3" />
              </div>
            )}
          </div>

          {/* Card Section */}
          <div className="mb-6">
            <h3 className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('card')}>
              <span className="font-semibold text-gray-700 text-lg">Card</span>
              <FaCaretDown className={`transform transition-transform ${showDropdowns.card ? "rotate-180" : ""}`} />
            </h3>
            {showDropdowns.card && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                <DraggableItem type="card" icon={<FaImages />} variant="Card" />
                <DraggableItem type="card" icon={<FaGlobe />} variant="Card1" />
                <DraggableItem type="card" icon={<FaStore />} variant="Card2" />
                <DraggableItem type="card" icon={<FaStore />} variant="Card4WithStyles" />
              </div>
            )}
          </div>

          {/* Hero Section */}
          <div className="mb-6">
            <h3 className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('hero')}>
              <span className="font-semibold text-gray-700 text-lg">Hero Section</span>
              <FaCaretDown className={`transform transition-transform ${showDropdowns.hero ? "rotate-180" : ""}`} />
            </h3>
            {showDropdowns.hero && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                <DraggableItem type="hero" icon={<FaElementor />} variant="Hero" />
                <DraggableItem type="hero" icon={<FaFileAlt />} variant="Hero1" />
              </div>
            )}
          </div>

          {/* Login Section */}
          <div className="mb-6">
            <h3 className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('login')}>
              <span className="font-semibold text-gray-700 text-lg">Login</span>
              <FaCaretDown className={`transform transition-transform ${showDropdowns.login ? "rotate-180" : ""}`} />
            </h3>
            {showDropdowns.login && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                <DraggableItem type="login" icon={<FaPalette />} variant="Login" />
                <DraggableItem type="login" icon={<FaImages />} variant="Login2" />
              </div>
            )}
          </div>

          {/* Dropdown Section */}
          <div className="mb-6">
            <h3 className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('dropdown')}>
              <span className="font-semibold text-gray-700 text-lg">Dropdown</span>
              <FaCaretDown className={`transform transition-transform ${showDropdowns.dropdown ? "rotate-180" : ""}`} />
            </h3>
            {showDropdowns.dropdown && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                <DraggableItem type="Dropdown" icon={<FaBars />} variant="Dropdown2" />
                <DraggableItem type="Dropdown" icon={<FaCaretDown />} variant="Dropdown" />
                <DraggableItem type="Dropdown" icon={<FaChevronCircleDown />} variant="Dropdown3" />
                <DraggableItem type="Dropdown" icon={<FaArrowCircleDown />} variant="Dropdown4" />
                <DraggableItem type="Dropdown" icon={<FaCaretSquareDown />} variant="Dropdown5" />
                <DraggableItem type="Dropdown" icon={<FaAngleDown />} variant="Dropdown6" />
              </div>
            )}
          </div>

          {/* Combobox Section */}
          <div className="mb-6">
            <h3 className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('combobox')}>
              <span className="font-semibold text-gray-700 text-lg">Combobox</span>
              <FaCaretDown className={`transform transition-transform ${showDropdowns.combobox ? "rotate-180" : ""}`} />
            </h3>
            {showDropdowns.combobox && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                <DraggableItem type="Combobox" icon={<FaBars />} variant="Combobox1" />
                <DraggableItem type="Combobox" icon={<FaCaretDown />} variant="Combobox" />
                <DraggableItem type="Combobox" icon={<FaChevronCircleDown />} variant="Combobox2" />
                <DraggableItem type="Combobox" icon={<FaCaretDown />} variant="Combobox3" />
                <DraggableItem type="Combobox" icon={<FaChevronCircleDown />} variant="Combobox4" />
                <DraggableItem type="Combobox" icon={<FaCaretDown />} variant="Combobox5" />
                <DraggableItem type="Combobox" icon={<FaChevronCircleDown />} variant="Combobox6" />
              </div>
            )}
          </div>

          {/* Button Section */}
          <div className="mb-6">
            <h3 className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('button')}>
              <span className="font-semibold text-gray-700 text-lg">Button</span>
              <FaCaretDown className={`transform transition-transform ${showDropdowns.button ? "rotate-180" : ""}`} />
            </h3>
            {showDropdowns.button && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                <DraggableItem type="Button" icon={<FaPlus />} variant="Button1" />
                <DraggableItem type="Button" icon={<FaUpload />} variant="Button" />
                <DraggableItem type="Button" icon={<FaPlus />} variant="Button2" />
                <DraggableItem type="Button" icon={<FaUpload />} variant="Button3" />
                <DraggableItem type="Button" icon={<FaPlus />} variant="Button4" />
                <DraggableItem type="Button" icon={<FaUpload />} variant="Button5" />
                <DraggableItem type="Button" icon={<FaPlus />} variant="Button6" />
              
              </div>
            )}
          </div>
        </div>
      )}
      {showPages && (
        <div className="relative w-64 mt-4 bg-gray-50 p-6 shadow-lg rounded-lg transform transition-transform ml-4 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Pages</h2>
          <button
            onClick={() => setShowPages(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            title="Close"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Upload Media Section */}
          <div className="border-t pt-4 mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaUpload className="text-blue-500 mr-2" />
              Upload Media
            </h4>
            <div className="flex flex-col space-y-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-2 w-full border border-gray-300 rounded px-2 py-1 hover:border-blue-500 transition-all"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter image URL"
                  value={imageURL}
                  onChange={handleURLChange}
                  className="mb-2 w-full border border-gray-300 rounded px-2 py-1 hover:border-blue-500 transition-all"
                />
              </div>
              <button
                onClick={handleUpload}
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-all"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
       {showStyle && (
        <div className="relative w-64 mt-4 bg-gray-50 p-6 shadow-lg rounded-lg transform transition-transform ml-4 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Site Style</h2>
          <button
            onClick={() => setShowStyle(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            title="Close"
          >
            <FaTimes className="text-2xl" />
          </button>

          <div className="style-panel bg-white p-4 rounded-md shadow-md w-full">
            <h3 className="text-lg font-semibold mb-3">Site Style Options</h3>

            {/* Color Picker */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Background Color:</label>
              <input type="color" className="w-full h-8 mt-2" />
            </div>

            {/* Font Selection */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Font Style:</label>
              <select className="w-full mt-2 p-2 border rounded">
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
            </div>

            {/* Font Size Slider */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700">Font Size:</label>
              <input type="range" min="12" max="36" defaultValue="16" className="w-full mt-2" />
            </div>
          </div>
        </div>
      )}
       {showimages && (
  <div className="relative w-64 mt-4 bg-gray-50 p-6 shadow-lg rounded-lg transform transition-transform ml-4 border border-gray-200">
    <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">images</h2>
    <button
      onClick={() => setShowimages(false)}
      className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      title="Close"
    >
      <FaTimes className="text-2xl" />
    </button>
  </div>
)}
{showGlobal && (
  <div className="relative w-64 mt-4 bg-gray-50 p-6 shadow-lg rounded-lg transform transition-transform ml-4 border border-gray-200">
    <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Site Global</h2>
    <button
      onClick={() => setShowGlobal(false)}
      className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      title="Close"
    >
      <FaTimes className="text-2xl" />
    </button>
  </div>
)}
{showMarket && (
  <div className="relative w-64 mt-4 bg-gray-50 p-6 shadow-lg rounded-lg transform transition-transform ml-4 border border-gray-200">
    <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Site Market</h2>
    <button
      onClick={() => setShowMarket(false)}
      className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      title="Close"
    >
      <FaTimes className="text-2xl" />
    </button>
  </div>
)}
{showBuisness && (
  <div className="relative w-64 mt-4 bg-gray-50 p-6 shadow-lg rounded-lg transform transition-transform ml-4 border border-gray-200">
    <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b pb-2">Business</h2>
    <button
      onClick={() => setShowBuisness(false)}
      className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      title="Close"
    >
      <FaTimes className="text-2xl" />
    </button>
  </div>
)}
    </div>
    
  );
}

export default Sidebar;
