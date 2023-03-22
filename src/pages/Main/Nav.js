import React from "react";
import "./Nav.scss";

function Nav(){
  return(
    <nav className="nav">
      <div className="menuBar">
        <div className="logoBox">
          <i className="fa-brands fa-instagram"></i>
          <p className="logoText">Westagram</p>
        </div>
        <div className="searchBox">
          <input className="searchInput" type="text" placeholder="검색"></input>
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="innerMenu">
          <i class="fa-regular fa-compass"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </nav>

  );
};

export default Nav;