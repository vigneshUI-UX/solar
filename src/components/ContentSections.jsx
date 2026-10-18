import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContentSections.css';

gsap.registerPlugin(ScrollTrigger);

export default function ContentSections() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.anim-block');
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger success transmission state
    setFormSubmitted(true);
    
    // Clear form inputs
    setFormData({ name: '', email: '', message: '' });

    // Reset success banner after 4.5 seconds
    const timer = setTimeout(() => {
      setFormSubmitted(false);
    }, 4500);

    return () => clearTimeout(timer);
  };

  return (
    <div className="content-sections-wrapper" ref={sectionRef}>
      
      {/* ABOUT SECTION */}
      <section id="about" className="section-block anim-block">
        <div className="section-header">
          <span className="section-tag">WHO WE ARE</span>
          <h2>The Cosmic Lore</h2>
        </div>
        <div className="cards-responsive-grid">
          
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-content-top">
                  <h3>🌌 Deep Genesis</h3>
                  <p>Born from the collision of stellar dust and quantum imagination, we bridge astrophysics and state-of-the-art interactive digital experiences.</p>
                </div>
                <span className="flip-hint">Explore Lore ↻</span>
              </div>
              <div className="flip-card-back">
                <div className="card-content-top">
                  <h3>Origin Code</h3>
                  <p>Engineered across decentralized quantum nodes to ensure zero latency, fluid frame syncing, and infinite aesthetic depth.</p>
                </div>
                <span className="flip-hint">Back ↺</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-content-top">
                  <h3>🚀 Stellar Tech</h3>
                  <p>Equipped with advanced React pipelines, WebGL rendering engines, and high-frequency scrub controllers for spatial traversal.</p>
                </div>
                <span className="flip-hint">Explore Lore ↻</span>
              </div>
              <div className="flip-card-back">
                <div className="card-content-top">
                  <h3>Core Stack</h3>
                  <p>Optimized with hardware acceleration, custom GLSL lighting shaders, and glassmorphic UI matrix frameworks.</p>
                </div>
                <span className="flip-hint">Back ↺</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-content-top">
                  <h3>🔭 Horizons</h3>
                  <p>Mapping uncharted sectors of the galaxy—from luminous stellar nurseries and event horizons to ancient ringed planetary giants.</p>
                </div>
                <span className="flip-hint">Explore Lore ↻</span>
              </div>
              <div className="flip-card-back">
                <div className="card-content-top">
                  <h3>Telemetry</h3>
                  <p>Live coordinates synced with deep space observation arrays for accurate planetary simulation and atmospheric lore.</p>
                </div>
                <span className="flip-hint">Back ↺</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-block anim-block">
        <div className="section-header">
          <span className="section-tag">WHAT WE OFFER</span>
          <h2>Galactic Modules</h2>
        </div>
        <div className="cards-responsive-grid">
          
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front service-front">
                <div className="card-content-top">
                  <div className="service-icon">🪐</div>
                  <h3>3D Simulation</h3>
                  <p>Immersive planetary interiors, multi-layered atmospheric telemetry, and interactive core walkthroughs.</p>
                </div>
                <span className="flip-hint">View Specs ↻</span>
              </div>
              <div className="flip-card-back service-back">
                <div className="card-content-top">
                  <h3>Module Specs</h3>
                  <p>Real-time mantle and core analysis backed by accurate astronomical constants and WebGL renders.</p>
                </div>
                <span className="flip-hint">Back ↺</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front service-front">
                <div className="card-content-top">
                  <div className="service-icon">📜</div>
                  <h3>Cinematic Scrubbing</h3>
                  <p>Frame-synchronized storytelling powered by GSAP scroll triggers for smooth visual navigation.</p>
                </div>
                <span className="flip-hint">View Specs ↻</span>
              </div>
              <div className="flip-card-back service-back">
                <div className="card-content-top">
                  <h3>Engine Details</h3>
                  <p>Custom linear interpolation smoothing prevents stuttering across high-refresh displays.</p>
                </div>
                <span className="flip-hint">Back ↺</span>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front service-front">
                <div className="card-content-top">
                  <div className="service-icon">✨</div>
                  <h3>Neon Aesthetics</h3>
                  <p>Futuristic cyber-glass panels, aurora glow lighting, and responsive particle field transitions.</p>
                </div>
                <span className="flip-hint">View Specs ↻</span>
              </div>
              <div className="flip-card-back service-back">
                <div className="card-content-top">
                  <h3>Design System</h3>
                  <p>Tailored gradients and backdrop filter blurring designed for high-end sci-fi web apps.</p>
                </div>
                <span className="flip-hint">Back ↺</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="section-block anim-block">
        <div className="section-header">
          <span className="section-tag">VISUAL ARCHIVE</span>
          <h2>The Cosmic Gallery</h2>
        </div>
        <div className="cards-responsive-grid">
          
          <div className="gallery-card">
            <div className="gallery-img-wrapper">
              <img 
                src="https://cdn.mos.cms.futurecdn.net/FCeiVe8w9qgKqtpTDxKkik.jpg" 
                alt="Stunning deep space red nebula with glowing stellar gas clouds" 
              />
            </div>
            <h4>Stellar Nurseries</h4>
          </div>

          <div className="gallery-card">
            <div className="gallery-img-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/PIA17172_Saturn_eclipse_mosaic_bright_crop.jpg" 
                alt="Saturn planet eclipsed by sunlight showcasing glowing ice rings" 
              />
            </div>
            <h4>Saturnian Rings</h4>
          </div>

          <div className="gallery-card">
            <div className="gallery-img-wrapper">
              <img 
                src="https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/images/imagerecords/6000/6226/aurora_img_2005254.jpg?w=540&h=540&fit=clip&crop=faces%2Cfocalpoint" 
                alt="Earth viewed from space with vibrant green aurora borealis swirling over Antarctica" 
              />
            </div>
            <h4>Aurora Skies</h4>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-block anim-block">
        <div className="section-header">
          <span className="section-tag">MISSION CONTROL</span>
          <h2>Establish Transmission</h2>
        </div>
        <div className="contact-container">
          {formSubmitted ? (
            <div className="success-message">
              <h3>🚀 Transmission Successful!</h3>
              <p>Your signal has been beamed across the galaxy. Mission Control will reply shortly.</p>
            </div>
          ) : (
            <form className="main-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Voyager Callsign (Name)" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Communication Frequency (Email)" 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Transmit Message to Mission Control..." 
                  rows="4" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="hero-btn">Transmit Signal</button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}