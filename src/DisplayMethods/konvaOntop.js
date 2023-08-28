import React from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";

const drawText = (len) => {
  let res = [];
  for (let i = 0; i < len; i++) {
    res.push(<Text text={`drawing element ${i}`} fontSize={15} y={i * 5} />);
  }
  return res;
};

export const konvaOntopOfEachother = (len) => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>{drawText(len)}</Layer>
    </Stage>
  );
};
