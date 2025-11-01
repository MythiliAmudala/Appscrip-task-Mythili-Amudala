import React, { useState, useEffect } from "react";
import "./index.css";

export default function Header({ navigate, isLoggedIn, setIsLoggedIn }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (page) => {
    navigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`} role="banner">
        <div className="header-container">
          {/* Brand Logo */}
          <div className="brand-section">
            <div 
              className="brand" 
              onClick={() => handleNavigation("home")} 
              role="button" 
              tabIndex={0}
              aria-label="Go to homepage"
            >
              <div className="logo">
                <i className="ri-sparkling-2-fill logo-icon" aria-hidden="true"></i>
                mettā muse
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <button 
              className="nav-link" 
              onClick={() => handleNavigation("products")}
              aria-label="Browse products"
            >
              <i className="ri-shopping-bag-line nav-icon" aria-hidden="true"></i>
              SHOP
            </button>
            <button 
              className="nav-link" 
              onClick={() => handleNavigation("skills")}
              aria-label="View our skills"
            >
              <i className="ri-lightbulb-flash-line nav-icon" aria-hidden="true"></i>
              SKILLS
            </button>
            <button 
              className="nav-link" 
              onClick={() => handleNavigation("stories")}
              aria-label="Read our stories"
            >
              <i className="ri-book-open-line nav-icon" aria-hidden="true"></i>
              STORIES
            </button>
            <button 
              className="nav-link" 
              onClick={() => handleNavigation("about")}
              aria-label="Learn about us"
            >
              <i className="ri-information-line nav-icon" aria-hidden="true"></i>
              ABOUT
            </button>
            <button 
              className="nav-link" 
              onClick={() => handleNavigation("contact")}
              aria-label="Contact us"
            >
              <i className="ri-customer-service-2-line nav-icon" aria-hidden="true"></i>
              CONTACT US
            </button>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            {!isLoggedIn ? (
              <button 
                className="btn btn-primary btn-small" 
                onClick={() => setIsLoggedIn(true)}
                aria-label="Create account"
              >
                <i className="ri-user-add-line btn-icon" aria-hidden="true"></i>
                Create Account
              </button>
            ) : (
              <div className="user-menu">
                <button 
                  className="user-avatar" 
                  aria-label="User menu"
                  aria-expanded="false"
                >
                  <i className="ri-user-3-fill" aria-hidden="true"></i>
                </button>
                <div className="user-dropdown" role="menu">
                  <button 
                    className="dropdown-item" 
                    onClick={() => setIsLoggedIn(false)}
                    role="menuitem"
                  >
                    <i className="ri-logout-box-r-line" aria-hidden="true"></i>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
              onClick={handleMobileMenuToggle}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav 
        id="mobile-navigation"
        className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-nav-content">
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation("products")}
            aria-label="Browse products"
          >
            <i className="ri-shopping-bag-line nav-icon" aria-hidden="true"></i>
            SHOP
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation("skills")}
            aria-label="View our skills"
          >
            <i className="ri-lightbulb-flash-line nav-icon" aria-hidden="true"></i>
            SKILLS
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation("stories")}
            aria-label="Read our stories"
          >
            <i className="ri-book-open-line nav-icon" aria-hidden="true"></i>
            STORIES
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation("about")}
            aria-label="Learn about us"
          >
            <i className="ri-information-line nav-icon" aria-hidden="true"></i>
            ABOUT
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation("contact")}
            aria-label="Contact us"
          >
            <i className="ri-customer-service-2-line nav-icon" aria-hidden="true"></i>
            CONTACT US
          </button>
          
          <div className="mobile-actions">
            {!isLoggedIn ? (
              <button 
                className="btn btn-primary btn-full" 
                onClick={() => setIsLoggedIn(true)}
                aria-label="Create account"
              >
                <i className="ri-user-add-line btn-icon" aria-hidden="true"></i>
                Create Account
              </button>
            ) : (
              <button 
                className="btn btn-secondary btn-full" 
                onClick={() => setIsLoggedIn(false)}
                aria-label="Sign out"
              >
                <i className="ri-logout-box-r-line btn-icon" aria-hidden="true"></i>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={handleMobileMenuToggle}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}