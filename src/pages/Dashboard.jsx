import React from "react";
import { Box, Fab, Grid } from "@mui/material";
import "./Dashboard.scss";
import BarChart from "../components/BarChart/BarChart";
import StackedChart from "../components/StackedChart/StackedChart";
import LineChart from "../components/LineChart/LineChart";
import DataTable from "../components/DataTable/DataTable";
import { Upgrade } from "@mui/icons-material";

export const paperDefaultProps = {
  boxShadow: " 3px 3px 5px 2px #f3f3f3",
  height: "40vh",
  borderRadius: "15px",
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
      >
        <Upgrade sx={{ mr: 1 }} />
        Update charts
      </Fab>
    </div>
  );
}

export default Dashboard;
