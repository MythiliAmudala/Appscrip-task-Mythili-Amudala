import React, { useState } from "react";
import "./index.css";

export default function Stories() {
  const [showForm, setShowForm] = useState(false);
  const [stories, setStories] = useState([
    {
      id: 1,
      title: "The Weaver's Legacy",
      excerpt: "Meet Maria, a third-generation weaver from Italy preserving ancient textile techniques...",
      category: "Artisan Journey",
      date: "March 15, 2024",
      readTime: "5 min read",
      icon: "ri-user-3-fill"
    },
    {
      id: 2,
      title: "Natural Dye Revolution",
      excerpt: "How plant-based dyes are transforming sustainable fashion with vibrant, eco-friendly colors...",
      category: "Craft Focus",
      date: "February 28, 2024",
      readTime: "7 min read",
      icon: "ri-palette-fill"
    },
    {
      id: 3,
      title: "Spring Collection Story",
      excerpt: "The inspiration behind our latest collection, drawn from Mediterranean landscapes and traditions...",
      category: "Inspiration",
      date: "January 12, 2024",
      readTime: "6 min read",
      icon: "ri-heart-3-fill"
    },
    {
      id: 4,
      title: "Women Artisans Collective",
      excerpt: "Empowering women artisans through fair trade and preserving cultural heritage...",
      category: "Community",
      date: "December 5, 2023",
      readTime: "8 min read",
      icon: "ri-community-fill"
    },
    {
      id: 5,
      title: "Zero-Waste Journey",
      excerpt: "Our commitment to zero-waste production and circular fashion principles...",
      category: "Sustainability",
      date: "November 20, 2023",
      readTime: "4 min read",
      icon: "ri-leaf-fill"
    },
    {
      id: 6,
      title: "Ancient Techniques Revived",
      excerpt: "Rediscovering and preserving forgotten textile techniques from around the world...",
      category: "Heritage",
      date: "October 8, 2023",
      readTime: "9 min read",
      icon: "ri-ancient-pavilion-fill"
    }
  ]);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    readTime: "",
    description: "",
    category: "Artisan Journey"
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleShareStory = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newStory = {
      id: Date.now(),
      title: formData.title,
      excerpt: formData.description,
      category: formData.category,
      date: formData.date,
      readTime: formData.readTime,
      icon: getCategoryIcon(formData.category)
    };

    setStories(prev => [newStory, ...prev]);
    setFormData({
      title: "",
      date: "",
      readTime: "",
      description: "",
      category: "Artisan Journey"
    });
    setShowForm(false);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleDeleteStory = (id) => {
    setStories(prev => prev.filter(story => story.id !== id));
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      "Artisan Journey": "ri-user-3-fill",
      "Craft Focus": "ri-palette-fill",
      "Inspiration": "ri-heart-3-fill",
      "Community": "ri-community-fill",
      "Sustainability": "ri-leaf-fill",
      "Heritage": "ri-ancient-pavilion-fill"
    };
    return iconMap[category] || "ri-book-open-fill";
  };

  return (
    <section className="stories container" aria-labelledby="stories-heading">
      {/* SEO Meta Information */}
      <meta name="description" content="Discover inspiring stories from mettā muse - artisan journeys, craft traditions, and the inspiration behind our sustainable luxury collections." />
      <meta name="keywords" content="artisan stories, craft traditions, fashion inspiration, sustainable luxury, mettā muse, behind the scenes" />
      
      {/* Animated Background Elements */}
      <div className="story-background">
        <div className="floating-story-icon" aria-hidden="true">
          <i className="ri-quill-pen-fill" title="Writing quill"></i>
        </div>
        <div className="floating-story-icon" aria-hidden="true">
          <i className="ri-book-open-fill" title="Open book"></i>
        </div>
        <div className="floating-story-icon" aria-hidden="true">
          <i className="ri-history-fill" title="History"></i>
        </div>
        <div className="floating-story-icon" aria-hidden="true">
          <i className="ri-user-heart-fill" title="Artisan love"></i>
        </div>
        <div className="floating-story-icon" aria-hidden="true">
          <i className="ri-sparkling-2-fill" title="Sparkling inspiration"></i>
        </div>
        <div className="floating-story-icon" aria-hidden="true">
          <i className="ri-compass-3-fill" title="Creative journey"></i>
        </div>
      </div>

      {/* Main Content */}
      <div className="stories-content">
        <h2 id="stories-heading" className="stories-title">Our Stories</h2>
        
        <div className="stories-intro">
          <p className="intro-text">
            <i className="ri-double-quotes-l intro-quote start" aria-hidden="true"></i>
            Stories about artisans, craft and the inspiration behind our collections.
            <i className="ri-double-quotes-r intro-quote end" aria-hidden="true"></i>
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="success-message">
            <i className="ri-checkbox-circle-fill" aria-hidden="true"></i>
            Story submitted successfully!
          </div>
        )}

        {/* Share Story Form */}
        {showForm && (
          <div className="story-form-overlay">
            <div className="story-form-container">
              <div className="form-header">
                <h3>Share Your Story</h3>
                <button 
                  className="close-btn"
                  onClick={() => setShowForm(false)}
                  aria-label="Close form"
                >
                  <i className="ri-close-line" aria-hidden="true"></i>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="story-form">
                <div className="form-group">
                  <label htmlFor="title">Story Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter story title"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="readTime">Read Time</label>
                  <input
                    type="text"
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 5 min read"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Artisan Journey">Artisan Journey</option>
                    <option value="Craft Focus">Craft Focus</option>
                    <option value="Inspiration">Inspiration</option>
                    <option value="Community">Community</option>
                    <option value="Sustainability">Sustainability</option>
                    <option value="Heritage">Heritage</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Story Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell your story..."
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    <i className="ri-send-plane-fill" aria-hidden="true"></i>
                    Submit Story
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Stories Grid */}
        <div className="stories-grid">
          {stories.map((story, index) => (
            <article 
              className="story-card" 
              key={story.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="story-media">
                <div className="story-image-placeholder">
                  <i className={story.icon} aria-hidden="true"></i>
                </div>
                <div className="story-badge">{story.category}</div>
                <button 
                  className="delete-btn"
                  onClick={() => handleDeleteStory(story.id)}
                  aria-label={`Delete ${story.title}`}
                >
                  <i className="ri-delete-bin-line" aria-hidden="true"></i>
                </button>
              </div>
              <div className="story-content">
                <h3 className="story-title">{story.title}</h3>
                <p className="story-excerpt">{story.excerpt}</p>
                <div className="story-meta">
                  <span className="story-date">
                    <i className="ri-calendar-2-fill" aria-hidden="true"></i>
                    {story.date}
                  </span>
                  <span className="story-read-time">
                    <i className="ri-time-fill" aria-hidden="true"></i>
                    {story.readTime}
                  </span>
                </div>
                <button className="btn-story" aria-label={`Read ${story.title}`}>
                  <span>Read Story</span>
                  <i className="ri-arrow-right-line" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="stories-cta">
          <div className="cta-content">
            <h3 className="cta-title">Share Your Story</h3>
            <p className="cta-text">
              Are you an artisan with a story to tell? Join our community and share your journey with the world.
            </p>
            <button 
              className="btn btn-primary" 
              onClick={handleShareStory}
              aria-label="Share your story with mettā muse"
            >
              <i className="ri-pencil-fill" aria-hidden="true"></i>
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}