import React from "react";
import Header from "./Header";

function Editor({ onStateEditor, stateEditor, text, onChange }) {
  return (
    <div className={`container-editor ${stateEditor === "maxim" && "maxim"}`}>
      <Header
        onState={onStateEditor}
        stateView={stateEditor}
        title={"Editor"}
      />
      <textarea
        id="editor"
        style={{ height: stateEditor === "maxim" && "calc(100vh - 2.3rem)" }}
        value={text}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Editor;
