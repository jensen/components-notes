import React from "react";
import Tweet from "components/Tweet";

export default function TweetList(props) {
  const tweetComponents = props.tweets.map(tweet => (
    <Tweet
      key={tweet.id}
      content={tweet.content}
      user={tweet.user}
      date={tweet.date}
    />
  ));

  return <section className="posts">{tweetComponents}</section>;
}
