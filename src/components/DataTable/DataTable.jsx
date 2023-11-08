import React from "react";
import { Paper } from "@mui/material";
import { paperDefaultProps } from "../../pages/Dashboard";
import "./DataTable.scss";

function DataTable() {
  return (
    <Paper elevation={0} style={paperDefaultProps}>
      <div className="data-table-header">
        <div className="data-table-title">Account watchlist</div>
      </div>
      <div></div>
    </Paper>
  );
}

export default DataTable;
