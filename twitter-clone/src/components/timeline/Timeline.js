import React, { useEffect, useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"; 

function Timeline() {
    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        const postData = collection(db, "posts");
        const q = query(postData, orderBy("timestamp", "desc"));
        
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc => doc.data())))
        });
    },[]);

  return (
  <div className="timeline">
    <div className="timeline_header">
        <h2>ホーム</h2>
    </div>
    <TweetBox />
    {posts.map((post) => (
        <Post 
        key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
        />
    ))}
  </div>

  );
}

export default Timeline;
