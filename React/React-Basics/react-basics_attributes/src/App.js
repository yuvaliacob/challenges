import React from "react";
import "./styles.css";

export default function App() {
  return <ArticleComponent />;
}

function ArticleComponent() {
  return (
    <article className="article">
      <h2 className="article__title">Title</h2>
      <label htmlFor="myarticle">Label</label>
      <input id="myarticle"></input>
      <a className="article__link" href="http://www.wikipedia.com">
        Clickity
      </a>
    </article>
  );
}
