import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./LineChart.scss";

// eslint-disable-next-line no-restricted-globals
const bodyWidth = screen.width;
// eslint-disable-next-line no-restricted-globals
const bodyHeight = screen.height;

const ChartComponent = (props) => {
  const svgRef = useRef();
  const { manage, month, data } = props;

  const width = bodyWidth - 1170;
  const height = bodyHeight - 870;

  console.log(bodyHeight, bodyWidth);

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible")
      .style("margin", "30px");

    const xScale = d3.scaleLinear().domain(month).range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(manage)])
      .range([height, 0]);

    const generateLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(10)
      .tickFormat((i) => i + 1);

    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${height})`)
      .style("color", "#7D7C7C")
      .style("font-size", "12");

    svg
      .selectAll(".line1")
      //   .data([manage])
      .data([data])
      .join("path")
      .attr("class", "line1")
      .attr("d", (d) => generateLine(d))
      .attr("fill", "none")
      .attr("stroke", "#47b747")
      .attr("stroke-width", 2)
      .attr("clip-path", "url(#clip-path)");

    svg
      .append("clipPath")
      .attr("id", "clip-path")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height);
  }, [manage, month, data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default ChartComponent;
