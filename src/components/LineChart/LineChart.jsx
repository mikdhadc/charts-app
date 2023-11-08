import React from "react";
import {
  InputLabel,
  Paper,
  FormControl,
  Select,
  MenuItem,
  // SelectChangeEvent,
} from "@mui/material";
import { paperDefaultProps } from "../../pages/Dashboard";
import "./LineChart.scss";

function LineChart() {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };
  return (
    <Paper elevation={0} style={paperDefaultProps}>
      <div className="line-chart-header">
        <div className="line-chart-title">Checking account</div>
        <div>
          <FormControl
            size="small"
            style={{ minWidth: "15ch", marginRight: "1rem" }}
          >
            <InputLabel>Manage</InputLabel>
            <Select
              labelId="manage"
              id="manage"
              value={""}
              label="Manage"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" style={{ minWidth: "15ch" }}>
            <InputLabel>Month</InputLabel>
            <Select
              labelId="month"
              id="month"
              value={""}
              label="month"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div></div>
    </Paper>
  );
}

export default LineChart;
