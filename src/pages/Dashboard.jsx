import React, { useEffect, useState } from "react";
import { Box, Fab, Grid } from "@mui/material";
import "./Dashboard.scss";
import BarChart from "../components/BarChart/BarChart";
import StackedChart from "../components/StackedChart/StackedChart";
import LineChart from "../components/LineChart/LineChart";
import DataTable from "../components/DataTable/DataTable";
import CachedIcon from "@mui/icons-material/Cached";
import * as d3 from "d3";

export const paperDefaultProps = {
  boxShadow: " 3px 3px 5px 2px #f3f3f3",
  height: "40vh",
  borderRadius: "15px",
};

const Dashboard = () => {
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [stackedChartData, setStackedChartData] = useState([
    { label: "July", stack1: 23, stack2: 18 },
    { label: "August", stack1: 25, stack2: 30 },
    { label: "September", stack1: 30, stack2: 20 },
    { label: "October", stack1: 29, stack2: 20 },
    { label: "November", stack1: 40, stack2: 15 },
    { label: "December", stack1: 15, stack2: 25 },
  ]);
  const [dataTableData, setDataTableData] = useState([]);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomFloat = (min, max) => {
    const temp = (Math.random() * (max - min) + min).toFixed(2);
    return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const generateLineData = () => {
    //line chart data
    const temp1 = d3.range(25).map(d3.randomInt(1, 400));
    setLineChartData(temp1);
  };

  const generateBarData = () => {
    //bar chart data
    const temp2 = d3.range(7).map(d3.randomInt(1, 400));
    setBarChartData(temp2);
  };

  const generateStackedData = () => {
    //stacked chart data
    const temp3 = [
      {
        label: "July",
        stack1: getRandomInt(10, 60),
        stack2: getRandomInt(10, 60),
      },
      {
        label: "August",
        stack1: getRandomInt(10, 60),
        stack2: getRandomInt(10, 60),
      },
      {
        label: "September",
        stack1: getRandomInt(10, 60),
        stack2: getRandomInt(10, 60),
      },
      {
        label: "October",
        stack1: getRandomInt(10, 60),
        stack2: getRandomInt(10, 60),
      },
      {
        label: "November",
        stack1: getRandomInt(10, 60),
        stack2: getRandomInt(10, 60),
      },
      {
        label: "December",
        stack1: getRandomInt(10, 60),
        stack2: getRandomInt(10, 60),
      },
    ];
    setStackedChartData(temp3);
  };

  const generateTableData = () => {
    //data table data
    const temp4 = [
      {
        account: "Sales",
        thisMonth: getRandomFloat(1000, 10000),
        ytd: getRandomFloat(2000, 25000),
      },
      {
        account: "Advertising",
        thisMonth: getRandomFloat(1000, 10000),
        ytd: getRandomFloat(2000, 25000),
      },
      {
        account: "Inventory",
        thisMonth: getRandomFloat(1000, 10000),
        ytd: getRandomFloat(2000, 25000),
      },
      {
        account: "Entertainment",
        thisMonth: getRandomFloat(1000, 10000),
        ytd: getRandomFloat(2000, 25000),
      },
      {
        account: "Product",
        thisMonth: getRandomFloat(1000, 10000),
        ytd: getRandomFloat(2000, 25000),
      },
    ];
    setDataTableData(temp4);
  };

  //generates data for all the charts
  const generateData = () => {
    generateLineData();
    generateBarData();
    generateStackedData();
    generateTableData();
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div style={{ width: "100%", margin: "2rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3 }} style={{ height: "100%" }}>
          <Grid item xs={12} sm={6}>
            <LineChart
              data={lineChartData}
              generateLineData={generateLineData}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BarChart data={barChartData} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StackedChart data={stackedChartData} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DataTable data={dataTableData} />
          </Grid>
        </Grid>
      </Box>
      <Fab
        variant="extended"
        style={{
          position: "fixed",
          right: "3rem",
          bottom: "2rem",
          textTransform: "capitalize",
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={() => generateData()}
      >
        <CachedIcon sx={{ mr: 1 }} />
        Update charts
      </Fab>
    </div>
  );
};

export default Dashboard;
