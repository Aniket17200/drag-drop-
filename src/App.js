import React, { useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "./Sidebar";
import PreviewArea from "./PreviewArea";
import Header from "./Header";
import Footer from "./Footer";
import SidePanel from "./SidePanel";


function App() {
  const previewAreaRef = useRef();

  return (
    <>
      <Header
        onUndo={() => previewAreaRef.current.handleUndo()}
        onRedo={() => previewAreaRef.current.handleRedo()}
      />
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-col h-screen">
          <div className="flex flex-grow gap-5">
            <Sidebar />
            <PreviewArea ref={previewAreaRef} />
          </div>
           <SidePanel/>
          <Footer />
        </div>
      </DndProvider>
    </>
  );
}

export default App;
