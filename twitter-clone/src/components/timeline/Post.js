import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import React from "react";
import "./Post.css";

function Post() {
  return <div className="post">
    <div className="post_avatar">
        <Avatar />
    </div>
    <div className="post_body">
        <div className="post_header">
            <div className="post_headerText">
                <h3>テストのユーザネーム
                    <VerifiedUserIcon className="post_badge" />
                </h3>
                    <span className="post_headerSpecial">
                        @ユーザネーム
                    </span>
            </div>
            <div className="post_headerDescription">
                <p>Reactなう</p>
            </div>
        </div>
        <img src="https://picsum.photos/800" />
        <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishOutlinedIcon fontSize="small" />
        </div>
    </div>
  </div>;
}

export default Post;
