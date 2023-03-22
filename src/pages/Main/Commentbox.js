import React from "react";
import "./Commentbox.scss";

function CommentBox(){
  return(
    <form className="commentBox">
      <ul className="previousComment">

      </ul>
      <input className="commentInput" type="text" placeholder="댓글달기..."/>
      <button className="uploadBut">게시</button>
    </form>
  );
}

export default CommentBox;