import React, { useState } from "react";
import "./Pro1.css";

function Pro1() {
  const [result, setresult] = useState("hellow");
  const [hide, sethide] = useState(false);
  const [show, setshow] = useState("show");

  const hide_seek = () => {
    sethide(!hide);
    if (show == "show") {
      setshow("hide");
    } else {
      setshow("show");
    }
  };

  return (
    <div className="App">
      <div className="result">
        {result}{" "}
        <span className="btn" onClick={hide_seek}>
          {show}
        </span>
      </div>
      {hide ? (
        <div className="options">
          <div
            className="x"
            onClick={() => {
              setresult("Linkedin");
            }}
            id="Link"
          >
            LinkedIn
          </div>
          <div
            className="x"
            onClick={() => {
              setresult("Twitter");
            }}
          >
            Twitter
          </div>
          <div
            className="x"
            onClick={() => {
              setresult("whatsApp");
            }}
          >
            whatsApp
          </div>
          <div
            className="x"
            onClick={() => {
              setresult("Facebook");
            }}
          >
            Facebook
          </div>
          <div
            className="x"
            onClick={() => {
              setresult("Instagram");
            }}
          >
            Instagram
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default Pro1;
