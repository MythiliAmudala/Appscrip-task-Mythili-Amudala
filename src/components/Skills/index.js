import React from "react";
import "./index.css";

export default function Skills({ navigate }) {
  const handleViewWorkshops = () => {
    // Redirect to workshops website
    window.open("https://www.skillshare.com/browse/fashion-design", "_blank");
  };

  const handleOnlineCourses = () => {
    // Redirect to online courses website
    window.open("https://www.coursera.org/browse/arts-and-humanities/fashion", "_blank");
  };

  return (
    <section className="skills container" aria-labelledby="skills-heading">
      {/* SEO Meta Information */}
      <meta name="description" content="Discover mettā muse's artisan skills and craft techniques. Explore traditional craftsmanship, sustainable practices, and innovative design methods." />
      <meta name="keywords" content="artisan skills, craft techniques, traditional craftsmanship, sustainable practices, fashion design, mettā muse" />
      
      {/* Animated Background Elements */}
      <div className="skills-background">
        <div className="floating-skill-icon" aria-hidden="true">
          <i className="ri-scissors-cut-fill" title="Precision cutting"></i>
        </div>
        <div className="floating-skill-icon" aria-hidden="true">
          <i className="ri-needle-fill" title="Hand embroidery"></i>
        </div>
        <div className="floating-skill-icon" aria-hidden="true">
          <i className="ri-palette-fill" title="Natural dyeing"></i>
        </div>
        <div className="floating-skill-icon" aria-hidden="true">
          <i className="ri-ruler-line" title="Precision tailoring"></i>
        </div>
        <div className="floating-skill-icon" aria-hidden="true">
          <i className="ri-artboard-2-fill" title="Pattern making"></i>
        </div>
        <div className="floating-skill-icon" aria-hidden="true">
          <i className="ri-magic-fill" title="Creative design"></i>
        </div>
      </div>

      <div className="skills-content">
        <h2 id="skills-heading" className="skills-title">Artisan Skills & Craftsmanship</h2>
        <p className="skills-subtitle">Mastering traditional techniques with sustainable innovation</p>

        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Skill Card 1 */}
          <div className="skill-card">
            <div className="skill-icon-wrapper">
              <i className="ri-scissors-cut-fill skill-icon" aria-hidden="true"></i>
              <div className="skill-glow"></div>
            </div>
            <h3 className="skill-title">Precision Cutting</h3>
            <p className="skill-description">
              Masterful fabric cutting techniques that minimize waste and ensure perfect pattern alignment
            </p>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '95%'}}></div>
              </div>
              <span className="progress-text">95% Mastery</span>
            </div>
          </div>

          {/* Skill Card 2 */}
          <div className="skill-card">
            <div className="skill-icon-wrapper">
              <i className="ri-needle-fill skill-icon" aria-hidden="true"></i>
              <div className="skill-glow"></div>
            </div>
            <h3 className="skill-title">Hand Embroidery</h3>
            <p className="skill-description">
              Intricate hand-stitched embroidery using traditional techniques passed through generations
            </p>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '92%'}}></div>
              </div>
              <span className="progress-text">92% Mastery</span>
            </div>
          </div>

          {/* Skill Card 3 */}
          <div className="skill-card">
            <div className="skill-icon-wrapper">
              <i className="ri-palette-fill skill-icon" aria-hidden="true"></i>
              <div className="skill-glow"></div>
            </div>
            <h3 className="skill-title">Natural Dyeing</h3>
            <p className="skill-description">
              Eco-friendly dyeing using plant-based pigments for vibrant, sustainable colors
            </p>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '88%'}}></div>
              </div>
              <span className="progress-text">88% Mastery</span>
            </div>
          </div>

          {/* Skill Card 4 */}
          <div className="skill-card">
            <div className="skill-icon-wrapper">
              <i className="ri-ruler-line skill-icon" aria-hidden="true"></i>
              <div className="skill-glow"></div>
            </div>
            <h3 className="skill-title">Bespoke Tailoring</h3>
            <p className="skill-description">
              Custom-fit tailoring ensuring perfect garment structure and comfort
            </p>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '96%'}}></div>
              </div>
              <span className="progress-text">96% Mastery</span>
            </div>
          </div>

          {/* Skill Card 5 */}
          <div className="skill-card">
            <div className="skill-icon-wrapper">
              <i className="ri-artboard-2-fill skill-icon" aria-hidden="true"></i>
              <div className="skill-glow"></div>
            </div>
            <h3 className="skill-title">Pattern Making</h3>
            <p className="skill-description">
              Advanced pattern drafting for innovative designs and zero-waste production
            </p>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '90%'}}></div>
              </div>
              <span className="progress-text">90% Mastery</span>
            </div>
          </div>

          {/* Skill Card 6 */}
          <div className="skill-card">
            <div className="skill-icon-wrapper">
              <i className="ri-magic-fill skill-icon" aria-hidden="true"></i>
              <div className="skill-glow"></div>
            </div>
            <h3 className="skill-title">Creative Design</h3>
            <p className="skill-description">
              Innovative design thinking blending traditional aesthetics with modern sustainability
            </p>
            <div className="skill-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '94%'}}></div>
              </div>
              <span className="progress-text">94% Mastery</span>
            </div>
          </div>
        </div>

        {/* Craftsmanship Timeline */}
        <div className="craftsmanship-section">
          <h3 className="section-title">Our Craftsmanship Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Traditional Training</h4>
                <p>Learning ancient techniques from master artisans</p>
                <span className="timeline-year">2010-2015</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Sustainable Innovation</h4>
                <p>Integrating eco-friendly practices with traditional methods</p>
                <span className="timeline-year">2015-2018</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Master Craftsmanship</h4>
                <p>Achieving excellence in sustainable luxury fashion</p>
                <span className="timeline-year">2018-Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills CTA */}
        <div className="skills-cta">
          <div className="cta-content">
            <h3 className="cta-title">Learn Our Craft</h3>
            <p className="cta-text">
              Join our workshops and masterclasses to learn traditional techniques from our skilled artisans.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={handleViewWorkshops}
                aria-label="View fashion design workshops on Skillshare"
              >
                <i className="ri-calendar-schedule-fill" aria-hidden="true"></i>
                View Workshops
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleOnlineCourses}
                aria-label="Explore online fashion courses on Coursera"
              >
                <i className="ri-video-fill" aria-hidden="true"></i>
                Online Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}