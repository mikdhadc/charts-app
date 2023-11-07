import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import "./Dashboard.scss";
import BarChartOne from "../components/BarChartOne/BarChartOne";
import BarChartTwo from "../components/BarChartTwo/BarChartTwo";
import LineChart from "../components/LineChart/LineChart";
import DataTable from "../components/DataTable/DataTable";

export const paperDefaultProps = {
  boxShadow: " 3px 3px 5px 2px #f3f3f3",
  height: "40vh",
  borderRadius: "15px",
  padding: "1rem",
};

function Dashboard() {
  return (
    <div style={{ width: "100%", margin: "2rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 3 }} style={{ height: "100%" }}>
          <Grid item xs={12} sm={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BarChartOne />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BarChartTwo />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DataTable />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
