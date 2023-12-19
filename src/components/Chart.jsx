import React from "react";
import Plot from "react-plotly.js";
import { send_mock } from "../mockData/mockdata";

const Chart = ({ index, title, type }) => {
  const data = send_mock(index);

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
  console.log("transformedData", transformedData);

  const graph = [
    {
      marker: {
        color: "green",
      },
      type: "scatter",
      x: [
        "2023-11-20",
        "2023-11-13",
        "2023-11-06",
        "2023-10-30",
        "2023-10-23",
        "2023-10-16",
      ],
      y: [96, 68, 23, 12, -22, 8],
      showlegend: true,
      name: "positiveTweets",
    },
    {
      marker: {
        color: "red",
      },
      type: "scatter",
      x: [
        "2023-11-20",
        "2023-11-13",
        "2023-11-06",
        "2023-10-30",
        "2023-10-23",
        "2023-10-16",
      ],
      y: [96, 28, 63, 12, -12, 86],
      showlegend: true,
      name: "positiveTweets",
    },
  ];

  return (
    <>
      <Plot
        data={transformedData}
        layout={{ width: "100%", height: "500px", title: title }}
      />
    </>
  );
};

export default Chart;
