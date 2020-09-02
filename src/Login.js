import React from "react";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { auth, provider } from "./firebase";

function Login({user}) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => user(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="info__box">
        <div className="info__boxContent">
          <h2 className="info__boxData">
            <SearchIcon />
            <span className="span__text">Follow your interest.</span>
          </h2>
          <h2 className="info__boxData">
            <PeopleOutlineIcon />
            <span className="span__text">
              Hear what people are talking about.
            </span>
          </h2>
          <h2 className="info__boxData">
            <ChatBubbleOutlineIcon />
            <span className="span__text">Join the conversation.</span>
          </h2>
        </div>
      </div>
      <div className="login__box">
        <div className="login__boxInfo">
          <TwitterIcon className="twitter__icon" fontSize="larger" />
          <h3> See Whats happening in the world right now</h3>

          <div className="login__details">
            <h3 className="login__detailsText">Join Twitter today.</h3>
            <Button type="submit" onClick={signIn} className="signin__button">
              Sign in using Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
