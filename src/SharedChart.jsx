import React from "react";
import Plot from "react-plotly.js";
import { month_mockData, date_mock, week_mock, send_mock } from "./mockdata";

const SharedChart = ({ index }) => {
  const data = week_mock;
  console.log(data);
  function extractCategories(data) {
    const timelineStats = data.stats.twitter.timelineStats.timeline;

    const sentimentCategories = timelineStats.flatMap((entry) => {
      const sentiment = entry.sentimentAsCategories;
      return Object.keys(sentiment);
    });

    const uniqueSentimentCategories = [...new Set(sentimentCategories)];
    return uniqueSentimentCategories;
  }
  const categories = extractCategories(data);
  function transformData(inputData) {
    const timelineStats = inputData.stats.twitter.timelineStats.timeline;

    // console.log(categories);

    const result = categories.map((category) => {
      const data = timelineStats.map((timeline) => {
        return timeline.sentimentAsCategories[category];
      });

      return {
        /**  type: "scatter",
        mode: "lines+markers", */
        type: "bar",
        x: timelineStats.map((timeline) => timeline.date),
        y: data,
        showlegend: true,
        name: category,
      };
    });

    return result;
  }

  const transformedData = transformData(data);

  return (
    <>
      <Plot
        data={transformedData}
        layout={{ width: "100%", height: "500px", title: "Weekly Comparision" }}
      />
    </>
  );
};

export default SharedChart;
