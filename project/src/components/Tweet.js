import React from "react";

export default function Tweet(props) {
  const {
    user: { name, avatar },
    date,
    content
  } = props;

  return (
    <article className="post">
      <header className="post">
        <img className="avatar" src={avatar} alt="Avatar" />
        <span className="user">
          <div className="name">{name}</div>
          <div className="date">{date}</div>
        </span>
      </header>
      <p>{content}</p>
    </article>
  );
}
