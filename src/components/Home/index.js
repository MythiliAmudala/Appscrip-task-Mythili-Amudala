import React from "react";
import "./index.css";

export default function Home({ navigate }) {
  return (
    <section className="home-hero container">
      <div className="hero-inner">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est possus rhoncus
          sedeisque. Dolor irrisque sedeisque non a met mi ut elementum dolor.
        </p>
        <div style={{ marginTop: 18 }}>
          <button className="btn btn-primary" onClick={() => navigate("products")}>
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
} 