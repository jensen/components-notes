import React, { useState } from "react";

export default function Header(props) {
  const [value, setValue] = useState("");

  return (
    <header className="container">
      <section className="brand">
        <img src="images/logo.png" alt="Logo" />
        <span className="name">TWTR</span>
        <button className="compose"></button>
      </section>
      <section className="create">
        <textarea
          className="textarea"
          value={value}
          onChange={event => setValue(event.target.value)}
        ></textarea>
        <div className="status">
          <span className="error">&nbsp;</span>
          <span className="counter over">140</span>
        </div>
        <button className="post" onClick={() => props.onPost(value)}>
          POST
        </button>
      </section>
    </header>
  );
}
