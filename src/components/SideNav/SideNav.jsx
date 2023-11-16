import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { sideBarData } from "./SideBarData";
import "./SideNav.scss";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const location = useLocation();

  const setCollapsedFn = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <Sidebar
        collapsed={isCollapsed}
        width="30ch"
        height="100vh"
        backgroundColor="white"
        className="side-nav"
        style={{
          height: "100vh",
        }}
      >
        <div>
          {isCollapsed ? (
            <div className="close-menu-button">
              <IconButton onClick={() => setCollapsedFn()}>
                <KeyboardDoubleArrowRightOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          ) : (
            <div className="close-menu-button">
              <IconButton onClick={() => setCollapsedFn()}>
                <KeyboardDoubleArrowLeftOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          )}
        </div>

        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                color: active ? "white" : "black",
                backgroundColor: active ? "#47B747" : "white",
                "&:hover": {
                  backgroundColor: "#47B747 !important",
                  color: "white !important",
                },
              };
            },
          }}
        >
          {sideBarData.map((item, i) => {
            return (
              <div className="menu-item">
                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <MenuItem
                    key={`nav-item-${i}`}
                    icon={item.icon}
                    className={item.class}
                    style={{
                      padding: "30px",
                      marginBottom: "2px",
                      fontWeight: 500,
                    }}
                    active={item.path === location.pathname ? true : false}
                  >
                    {item.title}
                  </MenuItem>
                </Link>
              </div>
            );
          })}
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideNav;
