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
    return categories.map((category) => ({
      type: type,
      x: timeline.map(({ date }) => date),
      y: timeline.map(
        ({ sentimentAsCategories }) => sentimentAsCategories[category]
      ),
      showlegend: true,
      name: category,
    }));
  };

  const transformedData = transformData(data);

  return (
    <Plot
      data={transformedData}
      layout={{ width: "100%", height: "500px", title: title }}
    />
  );
};

export default Chart;
