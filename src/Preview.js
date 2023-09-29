import React, { useEffect } from "react";
import Header from "./Header";
import DOMPurify from "dompurify";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

function Preview({ onStatePreview, statePreview, text }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [text]);

  function preserveCode(html) {
    let result = ''
    html.split(/(<pre>[\s\S]*?<\/pre>)/g).map((line) => {
      return line.startsWith("<pre")
        ? (result += line)
        : (result += line.replace(/\r\n/g, "<br />"));
    });

    return result
  }

  const sanitizedHTML = DOMPurify.sanitize(preserveCode(text));

  return (
    <div className={`container-preview ${statePreview === "maxim" && "maxim"}`}>
      <Header
        onState={onStatePreview}
        stateView={statePreview}
        title={"Previewer"}
      />
      <div
        id="preview"
        style={{
          height: statePreview === "maxim" && "calc(100vh - 2.3rem)",
          overflowY: statePreview === "maxim" && "scroll",
        }}
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      ></div>
    </div>
  );
}

export default Preview;
