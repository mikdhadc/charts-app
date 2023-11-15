import React, { useState } from "react";
import { Paper, Button } from "@mui/material";
import { paperDefaultProps } from "../../pages/Dashboard";
import "./BarChart.scss";
import Popup from "./Popup";

function BarChart() {
  const [open, setOpen] = useState(false);

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
      <div></div>
      {open && <Popup open={open} setOpen={setOpen} />}
    </Paper>
  );
}

export default BarChart;
