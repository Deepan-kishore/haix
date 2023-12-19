import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Chart from "./components/Chart";
import Menu from "./components/Menu";
import UserMenu from "./components/UserMenu";
import UserBadge from "./components/UserBadge";
import ChartSwitch from "./components/ChartSwitch";

function App() {
  const [value, setValue] = useState(0);
  const [mod, setMod] = useState(1);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const renderCharts = (titlePrefix) => (
    <div className="d-flex">
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
    </div>
  );

  return (
    <div className="p-5" style={{ background: "#eff4fa" }}>
      <h6>
        Showing Analysis for <span className="text-success"> ADIDAS </span>{" "}
      </h6>
      <UserBadge />
      <Menu
        title={"Instagram"}
        description={"fgh"}
        urlToImage={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png"
        }
      />

      <UserMenu />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className="my-3">
          <button
            className={`mode_b ${mod == 0 && "mode_active"}`}
            onClick={() => setMod(0)}
          >
            {" "}
            Users Active Timeline
          </button>
          <button
            className={`mode_b ${mod == 1 && "mode_active"}`}
            onClick={() => setMod(1)}
          >
            {" "}
            Sentiment Trend{" "}
          </button>
          <button
            className={`mode_b ${mod == 2 && "mode_active"}`}
            onClick={() => setMod(2)}
          >
            {" "}
            Followers Timeline Active Timeline
          </button>
          <button
            className={`mode_b ${mod == 3 && "mode_active"}`}
            onClick={() => setMod(3)}
          >
            {" "}
            Mentions Timeline summary{" "}
          </button>
          <button
            className={`mode_b ${mod == 4 && "mode_active"}`}
            onClick={() => setMod(4)}
          >
            Top Hashtags
          </button>
          <button
            className={`mode_b ${mod == 5 && "mode_active"}`}
            onClick={() => setMod(5)}
          >
            Top comments
          </button>
          <button
            className={`mode_b ${mod == 6 && "mode_active"}`}
            onClick={() => setMod(6)}
          >
            Viral Post Timeline
          </button>
        </div>
        {/* <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Daily comparison" />
          <Tab label="Weekly comparison" />
        </Tabs> */}
      </Box>
      {mod == 0 && (
        <div className="d-flex">
          <ChartSwitch
            // value={value}
            index={2}
            title={`${"Multi"} Company Comparison - Graph`}
            type="scatter"
          />
          <ChartSwitch
            // value={value}
            index={2}
            title={`${"Multi"} Company Comparison - Graph`}
            type="bar"
          />
        </div>
      )}
      {mod == 1 && renderCharts(["Daily", "Weekly"][value])}
      {mod == 2 && (
        <Chart
          // value={value}
          index={1}
          title={`${"weekly"} Comparison - Bar`}
          type="bar"
        />
      )}
      {mod == 3 && (
        <Chart
          // value={value}
          index={2}
          title={`${"Monthly"} Comparison - Bar`}
          type="scatter"
        />
      )}
      {mod == 4 && (
        <div className="d-flex">
          {" "}
          <Chart
            // value={value}
            index={2}
            title={`${"daily"} Comparison - Bar`}
            type="bar"
          />
          <Chart
            // value={value}
            index={1}
            title={`${"weekly"} Comparison - Bar`}
            type="scatter"
          />
        </div>
      )}
      {mod == 5 && (
        <Chart
          // value={value}
          index={2}
          title={`${"Monthly"} Comparison - Bar`}
          type="bar"
        />
      )}
      {mod == 6 && (
        <Chart
          // value={value}
          index={0}
          title={`${"daily"} Comparison - Bar`}
          type="scatter"
        />
      )}
    </div>
  );
}

export default App;
