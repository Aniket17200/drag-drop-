import React, { useState } from 'react';

const HeaderCustomizationForm = ({ navbarData, onUpdate }) => {
  const [logoSrc, setLogoSrc] = useState(navbarData.logoSrc);
  const [logoText, setLogoText] = useState(navbarData.logoText);
  const [links, setLinks] = useState(navbarData.links);
  const [searchPlaceholder, setSearchPlaceholder] = useState(navbarData.searchPlaceholder);

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setLinks(newLinks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ logoSrc, logoText, links, searchPlaceholder });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Logo Source:</label>
        <input
          type="text"
          value={logoSrc}
          onChange={(e) => setLogoSrc(e.target.value)}
        />
      </div>
      <div>
        <label>Logo Text:</label>
        <input
          type="text"
          value={logoText}
          onChange={(e) => setLogoText(e.target.value)}
        />
      </div>
      {links.map((link, index) => (
        <div key={index}>
          <label>Link Name:</label>
          <input
            type="text"
            value={link.name}
            onChange={(e) => handleLinkChange(index, 'name', e.target.value)}
          />
          <label>Link Href:</label>
          <input
            type="text"
            value={link.href}
            onChange={(e) => handleLinkChange(index, 'href', e.target.value)}
          />
        </div>
      ))}
      <div>
        <label>Search Placeholder:</label>
        <input
          type="text"
          value={searchPlaceholder}
          onChange={(e) => setSearchPlaceholder(e.target.value)}
        />
      </div>
      <button type="submit">Update Navbar</button>
    </form>
  );
};

export default HeaderCustomizationForm;
