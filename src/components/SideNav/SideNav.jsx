import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { sideBarData } from "./SideBarData";
import logo from "../../assets/logo.png";
import "./SideNav.scss";
import { IconButton } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";

function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const location = useLocation();

  const setCollapsedFn = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        collapsed={isCollapsed}
        width="27ch"
        height="100vh"
        backgroundColor="white"
        className="side-nav"
        style={{
          //   position: "fixed",
          top: 0,
          height: "100vh",
        }}
      >
        <div style={{ height: "5rem" }}>
          {isCollapsed ? (
            <div className="menu-icon">
              <IconButton
                onClick={() => {
                  setCollapsedFn();
                }}
              >
                <MenuRounded sx={{ color: "black" }} />
              </IconButton>
            </div>
          ) : (
            <div className="sidebar-header">
              <div className="logo">
                <img src={logo} alt="logo" height={40} width="inherit" />{" "}
              </div>
              <div className="close-menu-button">
                <IconButton onClick={() => setCollapsedFn()}>
                  <KeyboardDoubleArrowLeftOutlinedIcon fontSize="small" />
                </IconButton>
              </div>
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
                    style={{ padding: "30px", marginBottom: "2px" }}
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
