import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import { useStateValue } from "../Context/StateProvider";
import "../App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { Header } from "./Header";
function LandingPage() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </Link>
  );
}

export { LandingPage };
