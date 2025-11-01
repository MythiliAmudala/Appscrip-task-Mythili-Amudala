import React, { useState } from "react";
import "./index.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function validateEmail(e) {
    const re = /\S+@\S+\.\S+/;
    return re.test(e);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address");
      return;
    }
    setStatus("Thanks — check your inbox!");
    setEmail("");
  };

  return (
    <section className="newsletter container">
      <h2>BE THE FIRST TO KNOW</h2>
      <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.this is simply dummy text.</p>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your e-mail..." aria-label="email" />
        <button className="btn btn-primary" type="submit">SUBSCRIBE</button>
      </form>

      {status && <div className="status-msg">{status}</div>}
    </section>
  );
}
