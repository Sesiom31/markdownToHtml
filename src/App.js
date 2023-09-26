import React, { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import Previewer from "./Previewer";

function App() {
  

  return (
    <div className="container-general">
      <Editor  />
      <Previewer  />
    </div>
  );
}

export default App;
