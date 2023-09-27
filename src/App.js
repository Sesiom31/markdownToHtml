import React, { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";

function App() {
  const [stateEditor, setStateEditor] = useState("normal");

  let statePreview;
  if (stateEditor === "normal") statePreview = "normal";
  if (stateEditor === "maxim") statePreview = "hidden";
  if (stateEditor === "hidden") statePreview = "maxim";

  const handleStateEditor = (state) => {
    setStateEditor(state);
  };

  return (
    <div className="container" style={{ border: "2px solid red" }}>
      
      {stateEditor !== "hidden" && (
        <Editor onStateEditor={handleStateEditor} stateEditor={stateEditor} />
      )}
      <div style={{ width: "100px", height: "0" }}></div>

      {statePreview !== "hidden" && (
        <Preview onStateEditor={handleStateEditor} stateEditor={stateEditor} />
      )}
    </div>
  );
}

export default App;
