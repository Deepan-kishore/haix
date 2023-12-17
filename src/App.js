import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Chart from "./components/Chart";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const renderCharts = (titlePrefix) => (
    <>
      <Chart
        value={value}
        index={value}
        title={`${titlePrefix} Comparison - Graph`}
        type="scatter"
      />
      <Chart
        value={value}
        index={value}
        title={`${titlePrefix} Comparison - Bar`}
        type="bar"
      />
    </>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Daily comparison" />
          <Tab label="Weekly comparison" />
          <Tab label="Monthly comparison" />
        </Tabs>
      </Box>

      {value >= 0 && renderCharts(["Daily", "Weekly", "Monthly"][value])}
    </Box>
  );
}

export default App;
