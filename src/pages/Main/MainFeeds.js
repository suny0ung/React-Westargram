import React from "react";
import Commentbox from "./Commentbox";
import './MainFeeds.scss';

function MainFeeds (){
  return(
    <div className="mainfeed">
      <article>
        <div className="feedsTop">
          <div className="userProfile">
            <img></img>
            <span></span>
          </div>
        </div>
        <div className="mainImg">
          <img></img>
        </div>
        <form className="likeBox">
          <button></button>
          <button></button>
          <button></button>
        </form>
        <form>
          <button></button>
        </form>
        <Commentbox></Commentbox>
      </article>
    </div>
  )
}

export default MainFeeds;