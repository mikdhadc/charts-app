import React from "react";
import { Paper } from "@mui/material";
import { paperDefaultProps } from "../../pages/Dashboard";
import "./DataTable.scss";

const bold = 500;

const DataTable = (props) => {
  const { data } = props;

  return (
    <Paper elevation={0} style={paperDefaultProps}>
      <div className="data-table-header">
        <div className="data-table-title">Account watchlist</div>
      </div>
      <div className="data-table">
        <table
          border={0}
          width="100%"
          style={{
            height: "auto",
            borderCollapse: "separate",
            borderSpacing: "1rem",
          }}
        >
          <tr style={{ color: "#a1a1a1", fontWeight: bold }}>
            <td width="60%">Account</td>
            <td>This month</td>
            <td>YTD</td>
          </tr>
          {data.map((item) => {
            return (
              <tr style={{ fontWeight: bold }}>
                <td>{item.account}</td>
                <td>{item.thisMonth}</td>
                <td>{item.ytd}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </Paper>
  );
};

export default DataTable;
