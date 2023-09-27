import React from "react";
import Header from "./Header";

function Preview({ onStateEditor, stateEditor }) {
  return (
    <div className="container-preview">
      <Header onStateEditor={onStateEditor} stateEditor={stateEditor} />
      <div id="preview"></div>
    </div>
  );
}

export default Preview;
