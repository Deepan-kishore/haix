import React, { useState } from "react";
import Plot from "react-plotly.js";
import { send_mock } from "../mockData/mockdata";

const ChartSwitch = ({ index, title, type }) => {
  const [comp, setComp] = useState([0]);
  const data = send_mock(index);
  const handleComp = (a) => {
    if (comp.includes(a)) {
      setComp((prevComp) => {
        return prevComp.filter((i) => i !== a);
      });
    } else {
      // console.log(comp);
      setComp((prevComp) => {
        const newComp = [...prevComp, a];
        return newComp;
      });
    }
    // console.log(comp);
  };
  const extractCategories = (data) => {
    const { timeline } = data.stats.twitter.timelineStats;
    const sentimentCategories = Array.from(
      new Set(
        timeline.flatMap(({ sentimentAsCategories }) =>
          Object.keys(sentimentAsCategories)
        )
      )
    );
    return sentimentCategories;
  };

  const categories = extractCategories(data);

  const transformData = (inputData) => {
    const { timeline } = inputData.stats.twitter.timelineStats;
    return categories.map((category, index) => ({
      marker: { color: index == 0 ? "green" : index == 1 ? "yellow" : "red" },
      type: type,
      x: timeline.map(({ date }) => date),
      y: timeline.map(
        ({ sentimentAsCategories }) => sentimentAsCategories[category]
      ),
      showlegend: true,
      name: category,
    }));
  };
  const transformedData = transformData(data).filter(
    (i) =>
      i.name !== "positiveExternalTweets" &&
      i.name !== "neutralExternalTweets" &&
      i.name !== "negativeExternalTweets"
  );
  // console.log("transformedData", transformedData);

  const graph = [
    {
      marker: {
        color: "green",
      },

      type: type,
      x: [
        "2023-11-20",
        "2023-11-13",
        "2023-11-06",
        "2023-10-30",
        "2023-10-23",
        "2023-10-16",
      ],
      y: [12, 54, -43, 87, 43, 78],
      showlegend: false,
      // name: comp.includes(2) ? "Company 2" : "",
    },
    {
      marker: {
        color: comp.includes(1) ? "red" : "transparent",
      },
      type: type,
      x: [
        "2023-11-20",
        "2023-11-13",
        "2023-11-06",
        "2023-10-30",
        "2023-10-23",
        "2023-10-16",
      ],
      y: [96, 68, 23, 12, -22, 8],
      showlegend: false,
      // name: "Company 1",
    },

    {
      marker: {
        color: comp.includes(2) ? "blue" : "transparent",
      },
      type: type,
      x: [
        "2023-11-20",
        "2023-11-13",
        "2023-11-06",
        "2023-10-30",
        "2023-10-23",
        "2023-10-16",
      ],
      y: [96, 28, 63, 12, -12, 86],
      showlegend: false,
      // name: comp.includes(2) ? "Company 3" : "",
    },
    {
      marker: {
        color: comp.includes(3) ? "black" : "transparent",
      },
      type: type,
      x: [
        "2023-11-20",
        "2023-11-13",
        "2023-11-06",
        "2023-10-30",
        "2023-10-23",
        "2023-10-16",
      ],
      y: [45, 87, 12, -87, 23, 76],
      showlegend: false,
      // name: comp.includes(3) ? "Company 4" : "",
    },
  ];

  return (
    <div>
      <div className="d-flex justify-contents-center align-items-center mt-2 mx-5 ">
        <button
          className={`${comp.includes(1) ? "comp_selected" : " "} comp_btn`}
          onClick={() => handleComp(1)}
        >
          Company 1
        </button>
        <button
          className={`${comp.includes(2) && "comp_selected"} comp_btn`}
          onClick={() => handleComp(2)}
        >
          Company 2
        </button>
        <button
          className={`${comp.includes(3) ? "comp_selected" : " "} comp_btn`}
          onClick={() => {
            handleComp(3);
            console.log(comp);
            console.log(comp.includes(3));
          }}
        >
          Company 3
        </button>
      </div>
      <Plot
        data={graph}
        layout={{ width: "100%", height: "500px", title: title }}
      />
    </div>
  );
};

export default ChartSwitch;
