import React from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";

const draw = (len) => {
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(
      <p
        style={{ position: "absolute", top: `${i}px` }}
      >{`drawing element ${i}`}</p>
    );
  }
  return res;
};

const App = () => {
  return <div>{draw(100000)}</div>;
};

export default App;
