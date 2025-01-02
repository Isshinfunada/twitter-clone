import Search from "@mui/icons-material/Search";
import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return <div className="widgets">
    <div className="widgets_input">
        <Search className="widgets_searchIcon"/>
        <input placeholder="キーワード検索" type="text"/>
    </div>

    <div className="widgets_widgetsContainer">
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId={'1812258574049157405'}/>
        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="reactjs"
            options={{height: 400}}
        />
        <TwitterShareButton 
            url={"https://facebook.com/reactjs"} options={{text: "#React.js is awesome", via: "reactjs"}}
        />
    </div>
  </div>;
}

export default Widgets;
