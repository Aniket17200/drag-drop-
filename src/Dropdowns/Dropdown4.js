import React, { useState } from 'react';

const Dropdown4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="menu">
      <div 
        className="item" 
        role="menuitem" 
        aria-haspopup="true" 
        aria-expanded={isOpen} 
        onClick={toggleDropdown} 
        onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()} 
        tabIndex={0} // Make the item focusable
      >
        <a href=" " className="link">
          <span> Our Services </span>
          <svg viewBox="0 0 360 360" xmlSpace="preserve">
            <g id="SVGRepo_iconCarrier">
              <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
            </g>
          </svg>
        </a>
        {isOpen && (
          <div className="submenu" role="menu" aria-label="Submenu">
            <div className="submenu-item" role="none">
              <a href=" " className="submenu-link"> Development </a>
            </div>
            <div className="submenu-item" role="none">
              <a href=" " className="submenu-link"> Design </a>
            </div>
            <div className="submenu-item" role="none">
              <a href=" " className="submenu-link"> Marketing </a>
            </div>
            <div className="submenu-item" role="none">
              <a href=" " className="submenu-link"> SEO </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown4;
