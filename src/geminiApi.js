// geminiApi.js
import axios from 'axios';

export const generateContent = async (userPrompt) => {
  const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD6-xvRw9qQv9GNZGkLHAw9DaZpYeATv_s';

  try {
    const response = await axios.post(apiUrl, {
      contents: [{ parts: [{ text: userPrompt }] }]
    });
    
    // Log the entire response for debugging
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    // Log the complete error object for more details
    console.error("Error with Gemini API:", error.response ? error.response.data : error.message);
    return null;
  }
};
