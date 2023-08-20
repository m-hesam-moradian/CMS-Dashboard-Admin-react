import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "./routes"
import TopBar from "./Components/TopBar/TopBar";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";




export default function App() {
  let router=useRoutes(routes)
  return (
    <>
      <TopBar></TopBar>
      <div className="main-container">

      <SideBar></SideBar>
      {router}

      </div>
    </>
  );
}
