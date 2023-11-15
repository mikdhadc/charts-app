import React, { useState } from "react";
import {
  InputLabel,
  Paper,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { paperDefaultProps } from "../../pages/Dashboard";
import "./LineChart.scss";
import ChartComponent from "./ChartComponent";

const LineChart = ({ data }) => {
  const [month, setMonth] = useState([0, 12]);
  const [manage, setManage] = useState([0, 400]);
  const [manageValue, setManageValue] = useState(400);
  const [monthValue, setMonthValue] = useState("January");

  const manageData = [400, 430, 510, 660, 730, 820, 935];
  const monthData = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const manageSelectHandle = (event) => {
    setManage([0, event.target.value]);
    setManageValue(event.target.value);
  };

  const monthSelectHandle = (event) => {
    setMonthValue(event.target.value);
    const temp = [...month];
    temp[0] = monthData.indexOf(event.target.value);
    temp[1] = monthData.indexOf(event.target.value) + 10;
    setMonth(temp);
  };

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
              value={manageValue}
              label="Manage"
              onChange={manageSelectHandle}
            >
              {manageData.map((item, i) => {
                return (
                  <MenuItem key={`manage-${i}`} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl size="small" style={{ minWidth: "15ch" }}>
            <InputLabel>Month</InputLabel>
            <Select
              labelId="month"
              id="month"
              value={monthValue}
              label="month"
              onChange={monthSelectHandle}
            >
              {monthData.map((item, i) => {
                return (
                  <MenuItem key={`month-${i}`} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="line-chart-component">
        <ChartComponent manage={manage} month={month} data={data} />
      </div>
    </Paper>
  );
};

export default LineChart;
