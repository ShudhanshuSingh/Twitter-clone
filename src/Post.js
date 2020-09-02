import React, { forwardRef } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__avatar">
          <Avatar src={avatar} alt={displayName} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}{" "}
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt=""></img>
          <div className="post__footer">
            <IconButton>
              <ChatBubbleOutlineIcon className="post__chatButton" fontSize="small" />
            </IconButton>
            <IconButton>
              <RepeatIcon className="post__retweet" fontSize="small" />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon className="post__favourite" fontSize="small" />
            </IconButton>
            <IconButton>
              <PublishIcon className="post__publish" fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
