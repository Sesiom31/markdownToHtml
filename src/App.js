import React, { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";
import { marked } from "marked";

function App() {
  const [stateEditor, setStateEditor] = useState("normal");
  const [statePreview, setStatePreview] = useState("normal");
  const [text, setText] = useState("");

  useEffect(() => {
    async function getText() {
      try {
        let response = await fetch("data.md");
        let data = await response.text();
        setText(data);
      } catch (error) {
        console.log(error);
      }
    }

    getText();
  }, []);

  const handleStateEditor = (state) => {
    setStateEditor(state);
  };
  const handleStatePreview = (state) => {
    setStatePreview(state);
  };
  const handleChange = (newText) => {
    setText(newText);
  };

  return (
    <div className="container">
      {statePreview !== "maxim" && (
        <Editor
          onStateEditor={handleStateEditor}
          stateEditor={stateEditor}
          text={text}
          onChange={handleChange}
        />
      )}
      <div style={{ width: "100%", height: "0" }}></div>

      {stateEditor !== "maxim" && (
        <Preview
          onStatePreview={handleStatePreview}
          statePreview={statePreview}
          text={marked(text)}
        />
      )}
    </div>
  );
}

export default App;
