import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Nav from "./Nav";
import MainFeeds from "./MainFeeds";
import Rightfeeds from "./Rightfeeds";
import "./Main.scss";

function Main(){
  
  return(
    <div className="main">
      <Nav></Nav>
      <div className="main">
        <MainFeeds></MainFeeds>
        <Rightfeeds></Rightfeeds>
      </div>
    </div>
  );
}

export default Main;