import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Timeline() {
  return (
  <div className="timeline">
    <div className="timeline_header">
        <h2>ホーム</h2>
    </div>
    <TweetBox />
    <Post 
        displayName="テストのユーザネーム"
        username="ユーザネーム"
        verified={true}
        text="Reactなう"
        avatar="https://picsum.photos/200"
        image="https://picsum.photos/800"
    />
  </div>

  );
}

export default Timeline;
