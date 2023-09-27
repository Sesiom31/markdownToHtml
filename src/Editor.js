import React from "react";
import Header from "./Header";

function Editor({ onStateEditor, stateEditor }) {
  return (
    <div className="container-editor">
      <Header onStateEditor={onStateEditor} state={stateEditor} />
      <textarea id="editor"></textarea>
    </div>
  );
}

export default Editor;
