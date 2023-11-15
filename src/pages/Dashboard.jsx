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
  const [data, setData] = useState([]);

  const generateData = () => {
    const temp = d3.range(25).map(d3.randomInt(1, 400));
    setData(temp);
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div style={{ width: "100%", margin: "2rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3 }} style={{ height: "100%" }}>
          <Grid item xs={12} sm={6}>
            <LineChart data={data} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BarChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StackedChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DataTable />
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
          backgroundColor: "#47B747",
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
