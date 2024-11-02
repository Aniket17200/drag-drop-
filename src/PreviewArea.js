import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useDrop } from "react-dnd";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

// Import Components
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import Navbar3 from "./Navbar3";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Hero from "./Hero";
import Dropdown from "./Dropdowns/Dropdown";
import Dropdown2 from "./Dropdowns/Dropdown2";
import Dropdown3 from "./Dropdowns/Dropdown3";
import Dropdown4 from "./Dropdowns/Dropdown4";
import Dropdown5 from "./Dropdowns/Dropdown5";
import Dropdown6 from "./Dropdowns/Dropdown6";
import Combobox from "./Comboboxes/Combobox";
import Combobox2 from "./Comboboxes/Combobox2";
import Combobox3 from "./Comboboxes/Combobox3";
import Combobox4 from "./Comboboxes/Combobox4";
import Combobox5 from "./Comboboxes/Combobox5";
import Combobox6 from "./Comboboxes/Combobox6";
import Button from "./Buttons/Button";
import Button2 from "./Buttons/Button2";
import Button3 from "./Buttons/Button3";
import Button4 from "./Buttons/Button4";
import Button5 from "./Buttons/Button5";
import Button6 from "./Buttons/Button6";

// Constraints with fallback defaults
const componentConstraints = {
  Navbar1: { minWidth: 650, minHeight: 100, maxWidth: 1000, maxHeight: 400 },
  Navbar: { minWidth: 600, minHeight: 80, maxWidth: 1000, maxHeight: 300 },
  Card: { minWidth: 30, minHeight: 20, maxWidth: 50, maxHeight: 70 },
  Card1: { minWidth: 300, minHeight: 200, maxWidth: 500, maxHeight: 400 },
  Card2: { minWidth: 300, minHeight: 200, maxWidth: 500, maxHeight: 400 },
  Hero: { minWidth: 600, minHeight: 300, maxWidth: 800, maxHeight: 500 },
  Dropdown: { minWidth: 30, minHeight: 20, maxWidth: 50, maxHeight: 70 },
  // Add other components here...
  default: { minWidth: 100, minHeight: 100, maxWidth: 800, maxHeight: 600 },
};

const PreviewArea = forwardRef((props, ref) => {
  const [components, setComponents] = useState([]);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  useImperativeHandle(ref, () => ({
    handleUndo,
    handleRedo,
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["navbar", "card", "hero", "login", "Dropdown", "Combobox", "Button"],
    drop: (item) => addComponent(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addComponent = (item) => {
    const newComponent = {
      id: Date.now(),
      ...item,
      x: 0,
      y: 0,
      width: 300,
      height: 200,
      editableText: "Edit me",
    };
    setHistory((prev) => [...prev, components]);
    setComponents((prev) => [...prev, newComponent]);
    setRedoStack([]);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const previousState = history.pop();
    setRedoStack((prev) => [...prev, components]);
    setComponents(previousState);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const nextState = redoStack.pop();
    setHistory((prev) => [...prev, components]);
    setComponents(nextState);
  };

  const handleTextChange = (e, id) => {
    const newText = e.target.innerText;
    setHistory((prev) => [...prev, components]);
    setComponents((prev) =>
      prev.map((component) =>
        component.id === id ? { ...component, editableText: newText } : component
      )
    );
    setRedoStack([]);
  };

  const renderComponent = (component) => {
    const ComponentType = {
      Navbar : Navbar,
      Navbar1: Navbar1,
      Navbar3 :Navbar3,
      Card: Card,
      Card1: Card1,
      Card2: Card2,
      Hero: Hero,
      Dropdown2 : Dropdown2,
      Dropdown3 : Dropdown3,
      Dropdown5 : Dropdown5,
      Dropdown4 : Dropdown4,
      Dropdown : Dropdown,
      Dropdown6 : Dropdown6,
      Combobox :Combobox,
      Combobox2 :Combobox2,
      Combobox3 :Combobox3,
      Combobox4 :Combobox4,
      Combobox5 :Combobox5,
      Combobox6 :Combobox6,
      Button :Button,
      Button2 :Button2,
      Button3 :Button3,
      Button4 :Button4,
      Button5 :Button5,
      Button6 :Button6,
    }[component.variant];

    if (!ComponentType) return null;

    const constraints = componentConstraints[component.variant] || componentConstraints.default;

    return (
      <Draggable
        key={component.id}
        defaultPosition={{ x: component.x, y: component.y }}
        onStop={(e, data) => {
          setHistory((prev) => [...prev, components]);
          setComponents((prev) =>
            prev.map((comp) =>
              comp.id === component.id ? { ...comp, x: data.x, y: data.y } : comp
            )
          );
          setRedoStack([]);
        }}
      >
        <Resizable
          defaultSize={{ width: component.width, height: component.height }}
          minWidth={constraints.minWidth}
          minHeight={constraints.minHeight}
          maxWidth={constraints.maxWidth}
          maxHeight={constraints.maxHeight}
          onResizeStop={(e, direction, ref, d) => {
            setHistory((prev) => [...prev, components]);
            setComponents((prev) =>
              prev.map((comp) =>
                comp.id === component.id
                  ? {
                      ...comp,
                      width: Math.max(
                        constraints.minWidth,
                        Math.min(constraints.maxWidth, component.width + d.width)
                      ),
                      height: Math.max(
                        constraints.minHeight,
                        Math.min(constraints.maxHeight, component.height + d.height)
                      ),
                    }
                  : comp
              )
            );
            setRedoStack([]);
          }}
        >
          <div className="relative border shadow-md z-10">
            <ComponentType
              editableText={component.editableText}
              onTextChange={(text) => handleTextChange({ target: { innerText: text } }, component.id)}
            />
          </div>
        </Resizable>
      </Draggable>
    );
  };

  return (
    <div
      ref={drop}
      className={`flex-grow p-4 mt-5 mr-4 ${isOver ? "bg-green-100" : "bg-white"} transition-all duration-300 min-h-screen overflow-hidden`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Preview Area</h2>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 bg-gray-100 rounded-lg min-h-screen shadow-inner overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 140px)", width: "100%" }}
      >
        {components.map(renderComponent)}
      </div>
    </div>
  );
});

export default PreviewArea;
