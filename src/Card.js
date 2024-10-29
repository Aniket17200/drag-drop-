// Card.js
import React from "react";

function Card({ editableText, onTextChange }) {
  return (
    <div className="card">
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onTextChange(e.target.innerText)}
        className="editable-text"
      >
        {editableText}
      </div>
      {/* Other card content goes here */}
    </div>
  );
}

export default Card;
