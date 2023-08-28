import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TextField from "@mui/material/TextField";

import { ptags } from "./DisplayMethods/ptags";
import { ptagsOntopOfEachother } from "./DisplayMethods/ptagsOntop";
import { konva } from "./DisplayMethods/konva";
import { konvaOntopOfEachother } from "./DisplayMethods/konvaOntop";
import "react-tabs/style/react-tabs.css";

const App = () => {
  const [amount, setAmount] = useState(0);
  const handleAmountUpdate = (e) => {
    let updatedValue = e.target.value - "0";
    if (isNaN(updatedValue)) {
      updatedValue = 0;
    }
    setAmount(updatedValue);
  };

  return (
    <div style={{ margin: "10px" }}>
      <div style={{ margin: "10px" }}>
        <TextField
          style={{ marginTop: "20px" }}
          id="outlined-basic"
          label="render amount"
          variant="outlined"
          value={amount}
          onChange={handleAmountUpdate}
        />
      </div>
      <Tabs>
        <TabList>
          <Tab>p tags</Tab>
          <Tab>p tags ontop of eachother</Tab>
          <Tab>konva</Tab>
          <Tab>konva ontop of eachother</Tab>
        </TabList>

        <TabPanel>{ptags(amount)}</TabPanel>
        <TabPanel>{ptagsOntopOfEachother(amount)}</TabPanel>
        <TabPanel>{konva(amount)}</TabPanel>
        <TabPanel>{konvaOntopOfEachother(amount)}</TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
