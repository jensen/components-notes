import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.css";

import Header from "components/Header";
import Tweet from "components/Tweet";
import TweetList from "components/TweetList";

storiesOf("Tweet", module)
  .add("basic tweet", () => (
    <Tweet
      content="Here is the tweet content."
      user={{
        name: "Sam Nelson",
        avatar: "https://api.adorable.io/avatars/64/samnelson.png"
      }}
      date="1 week ago"
    />
  ))
  .add("two tweets", () => (
    <>
      <Tweet
        content="Here is the tweet content."
        user={{
          name: "Sam Nelson",
          avatar: "https://api.adorable.io/avatars/64/samnelson.png"
        }}
        date="1 week ago"
      />
      <Tweet
        content="Here is the other tweet content."
        user={{
          name: "Jones Gibson",
          avatar: "https://api.adorable.io/avatars/64/jonesgibson.png"
        }}
        date="3 week ago"
      />
    </>
  ));

const tweets = [
  {
    id: 1,
    user: {
      name: "Newton",
      avatar: "https://api.adorable.io/avatars/64/newton@adorable.png"
    },
    content:
      "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    date: "3 days ago"
  },
  {
    id: 2,
    user: {
      name: "Descartes",
      avatar: "https://api.adorable.io/avatars/64/descartes@adorable.png"
    },
    content:
      "Declarative views make your code more predictable and easier to debug.",
    date: "4 days ago"
  },
  {
    id: 3,
    user: {
      name: "Johann von Goethe",
      avatar: "https://api.adorable.io/avatars/64/johannvongoethe.png"
    },
    content:
      "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
    date: "1 week ago"
  }
];

storiesOf("TweetList", module)
  .add("Empty List", () => <TweetList tweets={[]} />)
  .add("Full List", () => <TweetList tweets={tweets} />);

storiesOf("Header", module).add("Basic Input", () => (
  <Header onPost={action("onPost")} />
));
