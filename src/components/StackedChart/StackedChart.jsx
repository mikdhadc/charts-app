import React, { useRef, useEffect } from "react";
import { Paper } from "@mui/material";
import { paperDefaultProps } from "../../pages/Dashboard";
import "./StackedChart.scss";
import * as d3 from "d3";

const legendStyleDefault = {
  display: "flex",
  gap: "0.75rem",
  alignItems: "center",
};

const StackedChart = (props) => {
  const svgRef = useRef();
  const { data } = props;

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();
    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const width = 630;
    const height = 250;

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .style("margin", "30px");

    const keys = Object.keys(data[0]).slice(1);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.8);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d3.sum(keys, (key) => d[key]))])
      .nice()
      .range([height, 0]);

    const color = d3.scaleOrdinal().domain(keys).range(["#47b747", "#82CD47"]);

    svg
      .append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter()
      .append("g")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.data.label))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth());

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .style("color", "#7D7C7C");
  }, [data]);

  return (
    <Paper elevation={0} style={paperDefaultProps}>
      <div className="stacked-chart-header">
        <div className="stacked-chart-title">Total cash flow</div>
        <div className="stacked-chart-legend">
          <div style={legendStyleDefault}>
            <div className="stacked-chart-legend-1"></div>
            <span>In</span>
          </div>
          <div style={legendStyleDefault}>
            <div className="stacked-chart-legend-2"></div>
            <span>Out</span>
          </div>
        </div>
      </div>
      <div ref={svgRef} className="stacked-chart"></div>
    </Paper>
  );
};

export default StackedChart;
