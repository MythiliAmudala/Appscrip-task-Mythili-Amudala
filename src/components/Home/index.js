import React from "react";
import "./index.css";

export default function Home({ navigate }) {
  return (
    <section className="home-hero container">
      <div className="hero-inner">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Explore a curated range of high-quality products designed to elevate
          your everyday experience. Browse categories, compare options, and find
          items crafted for comfort, quality, and modern living.
        </p>
        <div style={{ marginTop: 18 }}>
          <button
            className="btn btn-primary"
            onClick={() => navigate("products")}
          >
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}
