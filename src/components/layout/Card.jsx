import "./Card.css";
import React from "react";

export default (props) => {
  const { titulo, children } = props;
  return (
    <section className="Card">
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </section>
  );
};
