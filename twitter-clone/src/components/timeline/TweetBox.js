import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from "../../firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        // firebaseのfirestoreにデータを送信する処理
        e.preventDefault();

        addDoc(collection(db, "posts"), {
            displayName: "テストユーザー",
            username: "testUser",
            verified: true,
            text: tweetMessage,
            avatar: "https://picsum.photos/200",
            image: tweetImage,
            timestamp: serverTimestamp(),
        });

        setTweetMessage("");
        setTweetImage("");
    };

  return (
  <div className="tweetBox">
    <form>
         <div className="tweetBox_input">
        <Avatar />
        <input
        value={tweetMessage}
            placeholder="いまどうしてる？" type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
        ></input>
        </div>
        <input className="tweetBox_imageInput" placeholder="画像のURLを入力してください" type="text"
        onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button className="tweetBox_tweetButton" type="submit"
        onClick={sendTweet}
        >ツイートする</Button>
    </form>
  </div>
);
}

export default TweetBox;
