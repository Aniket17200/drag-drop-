import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCloud,
  faDesktop,
  faMobileAlt,
  faEllipsisH,
  faBell,
  faEye,
  faUndo,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

function Header({ onUndo, onRedo }) {
  const handleViewSwitch = (viewType) => {
    console.log(`Switching to ${viewType} view`);
  };

  const handleOptionsClick = () => {
    console.log("Options clicked");
  };

  const handleUpgradeClick = () => {
    console.log("Upgrade clicked");
  };

  const handlePublishClick = () => {
    console.log("Publish clicked");
  };

  const handleNotificationClick = () => {
    console.log("Notifications clicked");
  };

  return (
    <div className="flex items-center justify-between bg-white text-gray-900 p-6 shadow-md">
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
        <div className="flex items-center space-x-1">
          <span>Home</span>
          <FontAwesomeIcon icon={faCaretDown} className="hover:scale-110 transition-transform" />
        </div>
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faCloud} className="hover:scale-110 transition-transform" />
          <span>Autosave on</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => handleViewSwitch("desktop")} className="hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faDesktop} />
        </button>
        <button onClick={() => handleViewSwitch("mobile")} className="hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faMobileAlt} />
        </button>
        <button onClick={handleOptionsClick} className="hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
        <button onClick={onUndo} className="hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button onClick={onRedo} className="hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <div className="flex items-center space-x-1">
          <span>1280px</span>
          <FontAwesomeIcon icon={faCaretDown} className="hover:scale-110 transition-transform" />
        </div>
        <div className="flex items-center space-x-1">
          <span>100%</span>
          <FontAwesomeIcon icon={faCaretDown} className="hover:scale-110 transition-transform" />
        </div>
        <button onClick={handleUpgradeClick} className="bg-purple-600 text-white px-2 py-1 rounded">
          Upgrade
        </button>
        <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
          <span className="text-xs">S</span>
        </div>
        <button onClick={handleNotificationClick} className="hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button onClick={handlePublishClick} className="bg-blue-600 text-white px-4 py-2 rounded">
          Publish
        </button>
        <button className="hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
    </div>
  );
}

export default Header;
