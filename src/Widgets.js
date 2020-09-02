import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__inputs">
        <SearchIcon className="searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__container">
        <h3>What's happening</h3>
        <TwitterTweetEmbed tweetId={"1300586410433339392"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="PMOIndia"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
