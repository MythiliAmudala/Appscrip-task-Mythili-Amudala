import React from "react";
import "./index.css";

export default function NotFound({ navigate }) {
  return (
    <section className="notfound container">
      <h2>Page not found</h2>
      <p>Sorry, the page you requested does not exist.</p>
      <button className="btn" onClick={() => window.location.reload()}>Reload</button>
    </section>
  );
}
