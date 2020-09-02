import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed({user}) {
  const [tweets, setTweets] = React.useState([]);

  React.useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setTweets(snapshot.docs.map((doc) => ({ id: doc.id, tweet: doc.data() })))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h3>Home</h3>
      </div>
      <TweetBox user={user} />
      <FlipMove>
        {tweets.map(({ id, tweet }) => (
          <Post
            key={id}
            displayName={tweet.displayName}
            username={tweet.username}
            verified={tweet.verified}
            text={tweet.text}
            image={tweet.image}
            avatar={tweet.avatar}
          />
        ))}
      </FlipMove>

      {/* <Post
        displayName="Shudhanshu Singh"
        username="shudhanshu08"
        verified={true}
        text="YOooo"
        image="https://images.wsj.net/im-105325?width=1280&size=1"
        avatar="https://images.wsj.net/im-105325?width=1280&size=1"
      /> */}
    </div>
  );
}

export default Feed;
