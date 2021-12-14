import React from "react";
import "./styles/Header.css";
import "../App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { Header } from "./Header";
import styles from "../StyleModules/LandingPage.module.css"
function LandingPage() {
  return (
    <div className={styles.mainContainer}>
        <Header />
        <div className={styles.bodyContainer}>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
    </div>
  );
}

export { LandingPage };
