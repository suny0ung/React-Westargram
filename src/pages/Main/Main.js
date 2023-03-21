import React from "react";
import "./Main.css";

function Main(){
  return(
    <div className="main">
      <nav className="menuBar">
        <div className="logoBox">
          <i className="fa-brands fa-instagram"></i>
          <p className="logoText">Westagram</p>
        </div>
        <div className="searchBox">
          <input className="searchInput" placeholder="검색"></input>
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="innerMenu">
          <i class="fa-regular fa-compass"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-regular fa-user"></i>
        </div>
      </nav>
      <div className="mainBox">
        <div className="mainFeeds">
          <article>
          <div className="feedsTop"></div>
            <div className="feedsImg"></div>
            <div className="feedsMiddle"></div>
            <div className="feedsBottom">
              <div className="likeBox"></div>
              <form className="commentBox">
                <div className="previousComment"></div>
                <input className="commentInput"></input>
                <button className="commentBtn"></button>
              </form>
            </div>
          </article>
        </div>
        <div className="mainRight">
          <div className="mainRightTop"></div>
          <div className="mainRightMid1"></div>
          <div className="mainRightMid2"></div>
          <div className="mainRightBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;