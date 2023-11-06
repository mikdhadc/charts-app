import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import SideNav from "./components/SideNav/SideNav";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f9f9f9" }}>
      <div>
        <PageHeader />
      </div>
      <main className="main">
        <Router>
          <SideNav />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accounts" element={<Dashboard />} />
            <Route path="/payroll" element={<Dashboard />} />
            <Route path="/reports" element={<Dashboard />} />
            <Route path="/advisor" element={<Dashboard />} />
            <Route path="/contacts" element={<Dashboard />} />
          </Routes>
        </Router>
        <div className="content"></div>
      </main>
    </div>
  );
}

export default App;
