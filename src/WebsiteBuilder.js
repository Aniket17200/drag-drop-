import React, { useState } from "react";
import { generateContent } from "./geminiApi";
import { useDrop } from "react-dnd";
import Navbar from "./Navbar";
import Card from "./Card";
import Hero from "./Hero";

function WebsiteBuilder() {
  const [components, setComponents] = useState([]);
  const [userPrompt, setUserPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [, drop] = useDrop(() => ({
    accept: ["navbar", "card", "hero"],
    drop: (item) => addComponent(item),
  }));

  const addComponent = (item) => {
    setComponents((prev) => [
      ...prev,
      { id: Date.now(), ...item, x: 0, y: 0, width: 300, height: 200 },
    ]);
  };

  const handleGenerateContent = async () => {
    setErrorMessage(""); // Reset error message on each API call
    console.log("User Prompt:", userPrompt); // Log user prompt
    const response = await generateContent(userPrompt);

    if (response && response.contents) {
      setAiResponse(response.contents[0].parts[0].text);
    } else {
      // If response is null, display a generic error message
      setErrorMessage("Failed to retrieve AI content. Please try again.");
    }
  };

  const renderComponent = (component) => {
    const ComponentType = {
      Navbar,
      Card,
      Hero,
    }[component.type];

    return ComponentType ? <ComponentType key={component.id} /> : null;
  };

  return (
    <div ref={drop} className="builder-area bg-gray-100 p-4 min-h-screen">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Ask for AI suggestions..."
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleGenerateContent} className="btn bg-blue-500 text-white">
          Get AI Help
        </button>

        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        {aiResponse && <div className="ai-response p-4 border mt-4 bg-white rounded">{aiResponse}</div>}
        
        <h2 className="text-lg font-bold">Preview Area</h2>
        <div className="preview-area relative min-h-[400px] border border-dashed border-gray-300">
          {components.map((component) => renderComponent(component))}
        </div>
      </div>
    </div>
  );
}

export default WebsiteBuilder;
