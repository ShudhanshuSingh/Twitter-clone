import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase"
import firebase from "firebase";
function TweetBox({user}) {
  const [input,setInput] = React.useState('')
  const [image,setImage] = React.useState('')

  const addTweet = (event) =>{
    event.preventDefault();
    db.collection("posts").add({
      displayName:user.user.displayName,
      username:user.user.email,
      verified:true,
      text:input,
      image:image,
      avatar:user.user.photoURL,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()

    })
    setImage('')
    setInput('')
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt={user.user.displayName}
            src={user.user.photoURL}
          ></Avatar>
          <input value={input} onChange={(event)=>setInput(event.target.value)} placeholder="What's happening?" type="text"></input>
        </div>
        <input className="tweetBox__imageInput" value={image} onChange={(event)=>setImage(event.target.value)}  placeholder="Optional : Enter image url" type="text"></input>
        <Button disabled={!input} type="submit" onClick={addTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
