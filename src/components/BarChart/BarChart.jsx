import React, { useState, useRef, useEffect } from "react";
import { Paper, Button } from "@mui/material";
import { paperDefaultProps } from "../../pages/Dashboard";
import "./BarChart.scss";
import Popup from "./Popup";
import * as d3 from "d3";

// eslint-disable-next-line no-restricted-globals
const bodyWidth = screen.width;
// eslint-disable-next-line no-restricted-globals
const bodyHeight = screen.height;

const BarChart = (props) => {
  const [open, setOpen] = useState(false);
  const svgRef = useRef();

  const { data } = props;

  const width = bodyWidth - 1170;
  const height = bodyHeight - 870;

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible")
      .style("margin", "30px");

    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, width])
      .padding(0.8);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale).tickValues(xScale.domain());

    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${height})`)
      .style("color", "#7D7C7C")
      .style("font-size", "12");

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", "20px")
      .attr("height", (val) => height - yScale(val))
      .attr("fill", "#47b747")
      .attr("rx", "5px")
      .attr("ry", "5px");
  }, [data]);

  return (
    <Paper elevation={0} style={paperDefaultProps}>
      <div className="bar-chart-header">
        <div className="bar-chart-title">Invoices owed to you</div>
        <Button
          size="small"
          style={{
            backgroundColor: "#E0F4FF",
            color: "#47B747",
            padding: "0 1.5rem",
            height: "2rem",
            fontSize: "12px",
            textTransform: "capitalize",
          }}
          onClick={() => setOpen(!open)}
        >
          <b>New Sales Invoice</b>
        </Button>
      </div>
      <div className="bar-chart">
        <svg ref={svgRef}></svg>
      </div>
      {open && <Popup open={open} setOpen={setOpen} />}
    </Paper>
  );
};

export default BarChart;
