import React from "react";
import "./index.css";

export default function About({ navigate }) {
  const handleExploreCollections = () => {
    navigate("products");
  };

  const handleOurSustainability = () => {
    navigate("stories");
  };

  return (
    <section className="about container" aria-labelledby="about-heading">
      <meta name="description" content="Discover mettā muse - redefining luxury fashion with sustainable practices, artisan craftsmanship, and timeless designs. Learn about our journey and values." />
      <meta name="keywords" content="luxury fashion, sustainable clothing, artisan craftsmanship, ethical fashion, mettā muse, timeless designs" />
      
      <div className="floating-icon" aria-hidden="true">
        <i className="ri-sparkling-2-fill" title="Sparkling decoration"></i>
      </div>
      <div className="floating-icon" aria-hidden="true">
        <i className="ri-flower-fill" title="Floral decoration"></i>
      </div>
      <div className="floating-icon" aria-hidden="true">
        <i className="ri-star-s-fill" title="Star decoration"></i>
      </div>
      <div className="floating-icon" aria-hidden="true">
        <i className="ri-heart-3-fill" title="Heart decoration"></i>
      </div>
      <div className="floating-icon" aria-hidden="true">
        <i className="ri-diamond-fill" title="Diamond decoration"></i>
      </div>
      <div className="floating-icon" aria-hidden="true">
        <i className="ri-sparkling-fill" title="Sparkle decoration"></i>
      </div>
      
      <h2 id="about-heading" className="about-title">About mettā muse</h2>
      
      <div className="about-content">
        <div className="about-hero-section">
          <p className="about-intro">
            <i className="ri-sparkling-2-fill about-icon sparkle" aria-hidden="true"></i> 
            <strong className="highlight-text">Redefining Luxury Fashion</strong> 
            <i className="ri-sparkling-2-fill about-icon sparkle" aria-hidden="true"></i>
          </p>
          
          <div className="about-description">
            <p>
              At <strong>mettā muse</strong>, we believe in the power of conscious elegance. Our curated collections 
              blend timeless sophistication with sustainable practices, creating garments that tell 
              stories of craftsmanship and mindful living. Founded in 2018, we've been at the forefront 
              of the sustainable luxury movement, combining traditional techniques with innovative design.
            </p>
          </div>
        </div>

        <div className="story-section">
          <h3 className="section-title">Our Journey</h3>
          <div className="story-content">
            <div className="story-text">
              <p>
                What began as a small atelier in Milan has blossomed into a global movement 
                towards conscious fashion. Our founder, Isabella Rossi, started mettā muse 
                with a vision to create pieces that not only look beautiful but also carry 
                meaningful stories of the artisans who create them.
              </p>
              <p>
                Each collection is a testament to our commitment to quality, sustainability, 
                and the preservation of traditional craftsmanship techniques passed down 
                through generations.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <i className="ri-calendar-fill stat-icon" aria-hidden="true"></i>
                <span className="stat-number">6+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-card">
                <i className="ri-global-fill stat-icon" aria-hidden="true"></i>
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries Served</span>
              </div>
              <div className="stat-card">
                <i className="ri-user-heart-fill stat-icon" aria-hidden="true"></i>
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="products-section">
          <h3 className="section-title">Our Products Excellence</h3>
          <div className="products-grid">
            <div className="product-category">
              <i className="ri-t-shirt-fill category-icon" aria-hidden="true"></i>
              <h4>Luxury Apparel</h4>
              <p>Handcrafted garments using the finest organic fabrics and sustainable materials</p>
            </div>
            <div className="product-category">
              <i className="ri-gem-fill category-icon" aria-hidden="true"></i>
              <h4>Artisan Accessories</h4>
              <p>Unique pieces crafted by skilled artisans using traditional techniques</p>
            </div>
            <div className="product-category">
              <i className="ri-heart-fill category-icon" aria-hidden="true"></i>
              <h4>Limited Collections</h4>
              <p>Exclusive, limited-edition pieces that celebrate heritage and innovation</p>
            </div>
          </div>
        </div>

        <div className="craftsmanship-section">
          <h3 className="section-title">Artisan Craftsmanship</h3>
          <div className="craftsmanship-content">
            <div className="craft-item">
              <i className="ri-handbag-fill craft-icon" aria-hidden="true"></i>
              <div className="craft-text">
                <h4>Hand-Embroidered Details</h4>
                <p>Each piece features intricate hand-embroidery by master artisans</p>
              </div>
            </div>
            <div className="craft-item">
              <i className="ri-palette-fill craft-icon" aria-hidden="true"></i>
              <div className="craft-text">
                <h4>Natural Dyeing Techniques</h4>
                <p>Using plant-based dyes for vibrant, eco-friendly colors</p>
              </div>
            </div>
            <div className="craft-item">
              <i className="ri-scissors-cut-fill craft-icon" aria-hidden="true"></i>
              <div className="craft-text">
                <h4>Precision Tailoring</h4>
                <p>Bespoke tailoring ensuring perfect fit and comfort</p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="section-title">Our Core Values</h3>
          <ul className="feature-list">
            <li className="feature-item">
              <i className="ri-leaf-fill feature-icon leaf" aria-hidden="true"></i>
              <div className="feature-content">
                <h4>Ethically Sourced Materials</h4>
                <p>We use only certified organic cotton, peace silk, and recycled materials</p>
              </div>
            </li>
            <li className="feature-item">
              <i className="ri-palette-fill feature-icon palette" aria-hidden="true"></i>
              <div className="feature-content">
                <h4>Artisan Craftsmanship</h4>
                <p>Partnering with skilled artisans to preserve traditional techniques</p>
              </div>
            </li>
            <li className="feature-item">
              <i className="ri-diamond-fill feature-icon diamond" aria-hidden="true"></i>
              <div className="feature-content">
                <h4>Timeless Designs</h4>
                <p>Creating pieces that transcend seasons and trends</p>
              </div>
            </li>
            <li className="feature-item">
              <i className="ri-earth-fill feature-icon earth" aria-hidden="true"></i>
              <div className="feature-content">
                <h4>Sustainable Fashion</h4>
                <p>Zero-waste production and carbon-neutral shipping</p>
              </div>
            </li>
            <li className="feature-item">
              <i className="ri-community-fill feature-icon community" aria-hidden="true"></i>
              <div className="feature-content">
                <h4>Community Impact</h4>
                <p>Supporting artisan communities and fair trade practices</p>
              </div>
            </li>
            <li className="feature-item">
              <i className="ri-shield-check-fill feature-icon quality" aria-hidden="true"></i>
              <div className="feature-content">
                <h4>Quality Assurance</h4>
                <p>Rigorous quality checks ensuring lasting durability</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="sustainability-section">
          <h3 className="section-title">Sustainability Commitment</h3>
          <div className="sustainability-grid">
            <div className="sustain-card">
              <i className="ri-recycle-fill sustain-icon" aria-hidden="true"></i>
              <h4>Circular Fashion</h4>
              <p>Take-back program and recycling initiatives</p>
            </div>
            <div className="sustain-card">
              <i className="ri-water-flash-fill sustain-icon" aria-hidden="true"></i>
              <h4>Water Conservation</h4>
              <p>90% less water usage in our production process</p>
            </div>
            <div className="sustain-card">
              <i className="ri-plant-fill sustain-icon" aria-hidden="true"></i>
              <h4>Carbon Neutral</h4>
              <p>100% carbon offset through reforestation projects</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Join Our Movement</h3>
          <p className="cta-text">
            Experience the difference of conscious luxury. Each purchase supports artisan communities 
            and contributes to a more sustainable fashion industry.
          </p>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary" 
              onClick={handleExploreCollections}
              aria-label="Explore our collections"
            >
              <i className="ri-shopping-bag-fill" aria-hidden="true"></i>
              Explore Collections
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={handleOurSustainability}
              aria-label="Learn about our sustainability practices"
            >
              <i className="ri-leaf-fill" aria-hidden="true"></i>
              Our Sustainability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}