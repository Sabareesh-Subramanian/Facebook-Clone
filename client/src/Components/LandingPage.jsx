import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import "../App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { Header } from "./Header";
function LandingPage() {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "black" , backgroundColor:"white"}}>
      <Header />
      <div className="app_body" style={{backgroundColor:"white"}}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </Link>
  );
}

export { LandingPage };
