import React, { useState } from "react";

const MediaUpload = () => {
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleURLChange = (e) => {
    setImageURL(e.target.value);
  };

  const handleUpload = () => {
    // Logic to handle the upload
    console.log("File: ", file);
    console.log("Image URL: ", imageURL);
  };

  return (
    <div className="border-t pt-4 mt-4">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Upload Media</h4>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2 w-full border border-gray-300 rounded px-2 py-1"
      />
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageURL}
        onChange={handleURLChange}
        className="mb-2 w-full border border-gray-300 rounded px-2 py-1"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-1 px-4 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default MediaUpload;
