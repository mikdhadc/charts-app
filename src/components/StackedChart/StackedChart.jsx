import React from "react";
import { Paper } from "@mui/material";
import { paperDefaultProps } from "../../pages/Dashboard";
import "./StackedChart.scss";

const legendStyleDefault = {
  display: "flex",
  gap: "0.75rem",
  alignItems: "center",
};

function StackedChart() {
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
      <div></div>
    </Paper>
  );
}

export default StackedChart;
