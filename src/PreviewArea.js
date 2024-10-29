import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useDrop } from "react-dnd";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Hero from "./Hero";

const PreviewArea = forwardRef((props, ref) => {
  const [components, setComponents] = useState([]);
  const [history, setHistory] = useState([]); // History for undo/redo
  const [redoStack, setRedoStack] = useState([]); // Stack for redo

  useImperativeHandle(ref, () => ({
    handleUndo,
    handleRedo,
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["navbar", "card", "hero", "login"],
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

    setHistory((prev) => [...prev, components]); // Save current state to history
    setComponents((prev) => [...prev, newComponent]);
    setRedoStack([]); // Clear redo stack on new action
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setRedoStack((prev) => [...prev, components]); // Save current state to redo stack
    setComponents(previousState);
    setHistory((prev) => prev.slice(0, -1)); // Remove last state from history
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const nextState = redoStack[redoStack.length - 1];
    setHistory((prev) => [...prev, components]); // Save current state to history
    setComponents(nextState);
    setRedoStack((prev) => prev.slice(0, -1)); // Remove last state from redo stack
  };

  const handleTextChange = (e, id) => {
    setHistory((prev) => [...prev, components]); // Save current state to history
    setComponents((prev) =>
      prev.map((component) =>
        component.id === id ? { ...component, editableText: e.target.innerText } : component
      )
    );
    setRedoStack([]); // Clear redo stack on text change
  };

  const renderComponent = (component) => {
    const ComponentType = {
      Navbar1: Navbar1,
      Navbar: Navbar,
      Card: Card,
      Card1: Card1,
      Card2: Card2,
      Hero: Hero,
    }[component.variant];

    if (!ComponentType) return null;

    return (
      <Draggable
        key={component.id}
        defaultPosition={{ x: component.x, y: component.y }}
        onStop={(e, data) => {
          setHistory((prev) => [...prev, components]); // Save state before dragging
          setComponents((prev) =>
            prev.map((comp) =>
              comp.id === component.id ? { ...comp, x: data.x, y: data.y } : comp
            )
          );
          setRedoStack([]); // Clear redo stack on drag
        }}
      >
        <Resizable
          defaultSize={{
            width: component.width,
            height: component.height,
          }}
          onResizeStop={(e, direction, ref, d) => {
            setHistory((prev) => [...prev, components]); // Save state before resizing
            setComponents((prev) =>
              prev.map((comp) =>
                comp.id === component.id
                  ? {
                      ...comp,
                      width: component.width + d.width,
                      height: component.height + d.height,
                    }
                  : comp
              )
            );
            setRedoStack([]); // Clear redo stack on resize
          }}
        >
          <div className="relative border border-gray-300 p-2 bg-white shadow-md">
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
        <div></div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 bg-gray-100 rounded-lg min-h-screen shadow-inner overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 140px)", width: "100%" }}
      >
        {components.map((component) => renderComponent(component))}
      </div>
    </div>
  );
});

export default PreviewArea;
