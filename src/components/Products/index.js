import React, { useEffect, useState } from "react";
import "./index.css";

export default function Products({ isLoggedIn = false, navigate }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        if (cancelled) return;
        setProducts(data);
        // derive categories
        const cats = Array.from(new Set(data.map((p) => p.category)));
        setCategories(cats);
      } catch (err) {
        console.error("API error", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = activeCategory === "all" ? products : products.filter(p => p.category === activeCategory);

  const handleContactClick = () => {
    navigate("contact");
  };

  const handleDetailsClick = () => {
    navigate("about");
  };

  const handleContactArtisansClick = () => {
    navigate("contact");
  };

  const handleBookConsultationClick = () => {
    navigate("contact");
  };

  return (
    <section className="products-page container" aria-labelledby="products-heading">
      {/* SEO Meta Information */}
      <meta name="description" content="Discover mettā muse's curated collection of sustainable luxury products. Shop artisan-crafted fashion with ethical sourcing and timeless designs." />
      <meta name="keywords" content="sustainable fashion, luxury products, artisan crafts, ethical shopping, mettā muse collection" />
      
      {/* Animated Background Elements */}
      <div className="products-background">
        <div className="floating-product-icon" aria-hidden="true">
          <i className="ri-shopping-bag-3-fill" title="Shopping bag"></i>
        </div>
        <div className="floating-product-icon" aria-hidden="true">
          <i className="ri-price-tag-3-fill" title="Price tag"></i>
        </div>
        <div className="floating-product-icon" aria-hidden="true">
          <i className="ri-star-smile-fill" title="Star rating"></i>
        </div>
        <div className="floating-product-icon" aria-hidden="true">
          <i className="ri-heart-3-fill" title="Favorite"></i>
        </div>
        <div className="floating-product-icon" aria-hidden="true">
          <i className="ri-gem-fill" title="Gem quality"></i>
        </div>
        <div className="floating-product-icon" aria-hidden="true">
          <i className="ri-sparkling-2-fill" title="Sparkling quality"></i>
        </div>
      </div>

      <div className="products-content">
        <div className="products-header">
          <h2 id="products-heading" className="products-title">Our Collection</h2>
          <p className="products-subtitle">Discover artisan-crafted luxury with sustainable elegance</p>
          
          <div className="filters-container">
            <div className="filters">
              <button 
                className={`chip ${activeCategory==="all" ? "active" : ""}`} 
                onClick={() => setActiveCategory("all")}
                aria-label="Show all products"
              >
                <i className="ri-apps-fill" aria-hidden="true"></i>
                All Products
              </button>
              {categories.map(cat => (
                <button 
                  className={`chip ${activeCategory===cat ? "active" : ""}`} 
                  onClick={() => setActiveCategory(cat)} 
                  key={cat}
                  aria-label={`Show ${cat} products`}
                >
                  <i className={`ri-${getCategoryIcon(cat)}`} aria-hidden="true"></i>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
            <p className="loading-text">Curating our collection...</p>
          </div>
        ) : (
          <>
            {filtered.length === 0 ? (
              <div className="empty-state">
                <i className="ri-search-eye-line" aria-hidden="true"></i>
                <h3>No products found</h3>
                <p>We couldn't find any products in this category. Try another filter!</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setActiveCategory("all")}
                >
                  Show All Products
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filtered.map((p, index) => (
                  <article 
                    className="product-card" 
                    key={p.id}
                    onMouseEnter={() => setHoveredProduct(p.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="product-badge">
                      {p.id % 2 === 0 ? (
                        <span className="badge in-stock">
                          <i className="ri-checkbox-circle-fill" aria-hidden="true"></i>
                          In Stock
                        </span>
                      ) : (
                        <span className="badge out-of-stock">
                          <i className="ri-error-warning-fill" aria-hidden="true"></i>
                          Out of Stock
                        </span>
                      )}
                    </div>
                    
                    <div className="media">
                      <div className="image-container">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          loading="lazy" 
                          className="product-image"
                        />
                        <div className="image-overlay">
                          <button className="btn-quick-view" aria-label="Quick view">
                            <i className="ri-eye-fill" aria-hidden="true"></i>
                            Quick View
                          </button>
                        </div>
                      </div>
                      <button className="btn-wishlist" aria-label="Add to wishlist">
                        <i className="ri-heart-3-line" aria-hidden="true"></i>
                      </button>
                    </div>

                    <div className="meta">
                      <div className="category-tag">
                        <i className={`ri-${getCategoryIcon(p.category)}`} aria-hidden="true"></i>
                        {p.category}
                      </div>
                      
                      <h3 className="title">{p.title}</h3>
                      
                      <div className="rating">
                        <div className="stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i 
                              key={star} 
                              className={`ri-star-${star <= Math.floor(p.rating?.rate || 4) ? 'fill' : 'line'}`}
                              aria-hidden="true"
                            ></i>
                          ))}
                        </div>
                        <span className="rating-count">({p.rating?.count || 120})</span>
                      </div>

                      <div className="price-area">
                        {!isLoggedIn ? (
                          <div className="price-cta">
                            <i className="ri-lock-2-fill" aria-hidden="true"></i>
                            <small>Create an account to see pricing</small>
                            <button className="btn-login-prompt">Sign In</button>
                          </div>
                        ) : (
                          <div className="price-container">
                            <div className="price">${p.price}</div>
                            {p.price > 100 && (
                              <div className="price-save">
                                <i className="ri-price-tag-3-fill" aria-hidden="true"></i>
                                Save ${(p.price * 0.15).toFixed(2)}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="card-footer">
                        <button 
                          className="btn btn-outline"
                          onClick={handleContactClick}
                          aria-label="Contact about this product"
                        >
                          <i className="ri-customer-service-2-fill" aria-hidden="true"></i>
                          Contact
                        </button>
                        <button 
                          className="btn btn-primary"
                          onClick={handleDetailsClick}
                          aria-label="View details about this product"
                        >
                          <i className="ri-information-fill" aria-hidden="true"></i>
                          Details
                        </button>
                      </div>
                    </div>

                    {/* Hover Effect Layer */}
                    <div className={`product-hover-effect ${hoveredProduct === p.id ? 'active' : ''}`}></div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}

        {/* Products CTA */}
        <div className="products-cta">
          <div className="cta-content">
            <h3 className="cta-title">Can't Find What You're Looking For?</h3>
            <p className="cta-text">
              Our artisans create custom pieces tailored to your preferences. Contact us for bespoke creations.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={handleContactArtisansClick}
                aria-label="Contact our artisans"
              >
                <i className="ri-customer-service-2-fill" aria-hidden="true"></i>
                Contact Artisans
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleBookConsultationClick}
                aria-label="Book a consultation"
              >
                <i className="ri-calendar-check-fill" aria-hidden="true"></i>
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get category icons
function getCategoryIcon(category) {
  const iconMap = {
    "men's clothing": "tshirt-fill",
    "women's clothing": "women-fill",
    jewelry: "gem-fill",
    electronics: "smartphone-fill"
  };
  return iconMap[category] || "price-tag-3-fill";
}