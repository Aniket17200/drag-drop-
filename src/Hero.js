import React from "react";

function Hero() {
  return (
    <div className="bg-cover bg-center h-32 p-4 rounded-md shadow-md text-white" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}>
      <h2 className="text-2xl font-bold">Hero Section</h2>
      <p>This is a hero section with a background image.</p>
    </div>
  );
}

export default Hero;
