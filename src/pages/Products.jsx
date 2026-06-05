import { useEffect, useRef, useState } from "react";
import "./Products.css";

import farmImg from "../assets/farm-aerial.png";
import cassavaImg from "../assets/Cassava.png";
import limeImg from "../assets/lime-slice.png";

/* Reusable scroll-reveal hook */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("revealed");
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

/* Individual Category Item with scroll-reveal for vertical mobile scrolling */
function CategoryItem({ prod, idx, activeIndex }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("revealed");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isActive = activeIndex === idx;

  return (
    <div 
      className={`category-item ${isActive ? "active" : ""}`} 
      ref={ref}
    >
      <div className="product-image-container">
        <div className={`product-bg-blob blob-color-${idx}`} />
        {prod.img ? (
          <img src={prod.img} alt={prod.name} className="product-img-element" />
        ) : (
          <div className="product-img-placeholder">
            <span className="placeholder-plus">+</span>
          </div>
        )}
      </div>
      <div className="product-name-wrapper">
        <span className="product-name">{prod.name}</span>
        <div className="highlight-rect" />
      </div>
    </div>
  );
}

export default function Products() {
  const heroRef = useReveal(0.05);
  const categoriesRef = useReveal(0.08);
  const ingredientsRef = useReveal(0.12);
  const safetyRef = useReveal(0.12);
  const compareRef = useReveal(0.12);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const productsData = [
    { name: "Cassava Roots", img: cassavaImg },
    { name: "Food Starch", img: limeImg },
    { name: "Industrial Starch", img: null },
    { name: "Decentralized Units", img: null },
    { name: "Organic Silage", img: null },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;
      const section = sectionRef.current;
      const track = trackRef.current;

      // On mobile viewports: items are stacked vertically. Use vertical center-focus calculation.
      if (window.innerWidth <= 900) {
        track.style.transform = "";
        
        const items = track.querySelectorAll(".category-item");
        const viewportVerticalCenter = window.innerHeight / 2;
        
        let closestIdx = 0;
        let minDistance = Infinity;
        
        items.forEach((item, idx) => {
          const rect = item.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const distance = Math.abs(center - viewportVerticalCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = idx;
          }
        });
        
        setActiveIndex(closestIdx);
        return;
      }

      // On desktop viewports: horizontal track translates based on vertical scroll.
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / (rect.height - window.innerHeight);

      if (progress >= 0 && progress <= 1) {
        const maxTranslate = track.scrollWidth - window.innerWidth;
        const translate = progress * maxTranslate;
        track.style.transform = `translateX(-${translate}px)`;

        // Calculate active index relative to viewport horizontal center
        const items = track.querySelectorAll(".category-item");
        const viewportCenter = window.innerWidth / 2;

        let closestIdx = 0;
        let minDistance = Infinity;

        items.forEach((item, idx) => {
          const rect = item.getBoundingClientRect();
          const center = rect.left + rect.width / 2;
          const distance = Math.abs(center - viewportCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = idx;
          }
        });

        setActiveIndex(closestIdx);
      } else if (progress < 0) {
        track.style.transform = "translateX(0px)";
        setActiveIndex(0);
      } else if (progress > 1) {
        const maxTranslate = track.scrollWidth - window.innerWidth;
        track.style.transform = `translateX(-${maxTranslate}px)`;
        setActiveIndex(productsData.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Call once initially to set starting positions
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="products-page">
      {/* ===== SECTION 1: HERO HEADER ===== */}
      <section className="hero-header" ref={heroRef}>
        <div className="hero-bg">
          <img src={farmImg} alt="Cassava agricultural fields" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Redefining Quality</span>
            <span className="title-line">Rooted in Science</span>
            <span className="title-line title-accent">Driven by Purity</span>
          </h1>
          <div className="scroll-cta">
            <span className="scroll-label">Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PARALLAX HORIZONTAL SCROLL WRAPPER ===== */}
      <section 
        className="products-categories-scroll-wrapper" 
        ref={sectionRef}
      >
        <div className="sticky-container" ref={categoriesRef}>
          <div className="horizontal-track" ref={trackRef}>
            {/* Title block */}
            <div className="categories-header-container">
              <div className="header-text-group">
                <span className="products-eyebrow">Categories</span>
                <h2 className="products-section-title">
                  Cross World Produce<br />Categories
                </h2>
              </div>
              <div className="blob-wrapper">
                <svg className="yellow-blob-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#F4C14E" d="M44.7,-72.6C58.1,-65.4,69.2,-53.4,75.9,-39.3C82.7,-25.2,85.1,-9.1,83.9,6.5C82.7,22.1,77.9,37.1,69,49.1C60.1,61.1,47.1,70.1,32.8,75.2C18.6,80.4,3.1,81.7,-12.3,78.9C-27.7,76.1,-43,69.2,-55.4,59.3C-67.8,49.4,-77.3,36.5,-81.9,21.8C-86.5,7.1,-86.2,-9.3,-81.3,-24.5C-76.3,-39.7,-66.7,-53.7,-53.6,-61C-40.4,-68.3,-23.7,-68.9,-7.6,-70C8.5,-71.1,24.6,-72.7,38.1,-72.6C40.3,-72.6,42.5,-72.6,44.7,-72.6Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>

            {/* Product cards */}
            {productsData.map((prod, idx) => (
              <CategoryItem 
                prod={prod}
                idx={idx}
                activeIndex={activeIndex}
                key={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCROLLABLE OVERLAPPING CREAM WRAPPER FOR REMAINING SECTIONS ===== */}
      <div className="products-content-scroll">
        <section className="story-panels-container">
          {/* Section 3: Our Product Ingredients */}
          <div className="story-panel row-text-right" ref={ingredientsRef}>
            <div className="story-col col-left">
              <span className="story-eyebrow">Ingredients</span>
              <h2 className="story-heading">Our Product Ingredients</h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text story-lead">
                100% pure cassava root. No synthetic chemical treatments, no bleach, and no artificial modification.
              </p>
              <p className="story-text">
                Our starch is extracted solely using physical separation methods. Fresh cassava roots are thoroughly washed, peeled, and crushed. Centrifugal hydrocyclones isolate the starch granules from the fiber and organic water under strict hygiene standards.
              </p>
              <p className="story-text">
                Because our processing units are located in the heart of agricultural communities, the roots go from field to flour in under 24 hours. This rapid turnaround halts enzymatic breakdown naturally, giving our product its signature bright white color and high viscosity without any sulfur dioxide or bleach.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Safety & Purity (Teal/Dark Green wrapper) */}
        <section className="safety-badges-section" ref={safetyRef}>
          <div className="safety-container">
            <h2 className="safety-title">Safety and purity are our priorities</h2>
            
            <div className="badges-grid">
              <div className="badge-card">
                <div className="badge-icon-circle">
                  {/* Leaf Icon */}
                  <svg viewBox="0 0 24 24" className="badge-svg">
                    <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34C5.71,20.5 7.6,19.96 9.5,19.96C11.4,19.96 13.29,20.5 15.18,21.34C13.1,16.17 11,10 2,8C2,8 9,2 17,8M22,2C22,2 18,6 18,10C18,14 22,18 22,18C22,18 20,14 20,10C20,6 22,2 22,2Z" />
                  </svg>
                </div>
                <span className="badge-label">100% Plant-Based</span>
              </div>

              <div className="badge-card">
                <div className="badge-icon-circle">
                  {/* Grain Slash Icon */}
                  <svg viewBox="0 0 24 24" className="badge-svg">
                    <path fill="currentColor" d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14C0,17.1 2.5,19.5 5.5,19.5H19C21.76,19.5 24,17.24 24,14.5C24,11.87 21.95,9.72 19.35,10.04M19,17.5H5.5C3.57,17.5 2,15.93 2,14C2,12.07 3.57,10.5 5.5,10.5H6.5V9.5C6.5,6.46 8.96,4 12,4C15.04,4 17.5,6.46 17.5,9.5V10.5H19C20.93,10.5 22,12.07 22,14C22,15.93 20.43,17.5 19,17.5Z" />
                  </svg>
                </div>
                <span className="badge-label">Gluten Free</span>
              </div>

              <div className="badge-card">
                <div className="badge-icon-circle">
                  {/* Flask-slash / Chemical-free Icon */}
                  <svg viewBox="0 0 24 24" className="badge-svg">
                    <path fill="currentColor" d="M6,22H18A2,2 0 0,0 20,20V19L13.5,9.75V5H15V3H9V5H10.5V9.75L4,19V20A2,2 0 0,0 6,22M7.5,18L12,11.5L16.5,18H7.5Z" />
                  </svg>
                </div>
                <span className="badge-label">Chemical Free</span>
              </div>

              <div className="badge-card">
                <div className="badge-icon-circle">
                  {/* Globe Icon */}
                  <svg viewBox="0 0 24 24" className="badge-svg">
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
                  </svg>
                </div>
                <span className="badge-label">Eco-Friendly</span>
              </div>

              <div className="badge-card">
                <div className="badge-icon-circle">
                  {/* DNA Icon */}
                  <svg viewBox="0 0 24 24" className="badge-svg">
                    <path fill="currentColor" d="M18.6,19.5C19.1,18.8 19.5,18 19.8,17.1L16,14.6L12.2,17.1C12.5,18 12.9,18.8 13.4,19.5L11,21.1L12.5,22L16,19.6L19.5,22L21,21.1L18.6,19.5M5.4,4.5C4.9,5.2 4.5,6 4.2,6.9L8,9.4L11.8,6.9C11.5,6 11.1,5.2 10.6,4.5L13,2.9L11.5,2L8,4.4L4.5,2L3,2.9L5.4,4.5M16,11.1L12.2,8.6C11.7,9.3 11.3,10.1 11,11L14.8,13.5L18.6,11C18.3,10.1 17.9,9.3 17.4,8.6L16,11.1M8,12.9L11.8,15.4C12.3,14.7 12.7,13.9 13,13L9.2,10.5L5.4,13C5.7,13.9 6.1,14.7 6.6,15.4L8,12.9Z" />
                  </svg>
                </div>
                <span className="badge-label">Non-GMO</span>
              </div>

              <div className="badge-card">
                <div className="badge-icon-circle">
                  {/* Star Icon */}
                  <svg viewBox="0 0 24 24" className="badge-svg">
                    <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                  </svg>
                </div>
                <span className="badge-label">Pure Quality</span>
              </div>

              <div className="badge-card">
                <div className="badge-icon-circle">
                  {/* Network Wired Icon */}
                  <svg viewBox="0 0 24 24" className="badge-svg">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <span className="badge-label">Decentralized</span>
              </div>

              <div className="badge-card">
                <div className="badge-icon-circle">
                  {/* Food grade / Utensils Icon */}
                  <svg viewBox="0 0 24 24" className="badge-svg">
                    <path fill="currentColor" d="M11 9H9V2H7V9H5V2H3V9C3 11.12 4.66 12.84 6.75 12.97V22H8.25V12.97C10.34 12.84 12 11.12 12 9V2H11V9M16 6V14h3v8h1.5V2c-2.5 0-4.5 2-4.5 4z" />
                  </svg>
                </div>
                <span className="badge-label">Food Grade</span>
              </div>
            </div>

            <p className="safety-text-description">
              All facilities operate under GMP conditions and are third-party certified to guarantee strict adherence to regional food safety standards and export requirements.
            </p>
          </div>
        </section>

        <section className="story-panels-container">
          {/* Section 5: How We Compare */}
          <div className="story-panel row-text-right" ref={compareRef}>
            <div className="story-col col-left">
              <span className="story-eyebrow">Comparison</span>
              <h2 className="story-heading">How We Compare</h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text story-lead">
                Cassava starch naturally delivers what maize and potato starches can only achieve through chemical modification.
              </p>
              <p className="story-text">
                Many standard starches must undergo chemical esterification or cross-linking to remain stable during freezing, high heat pasteurization, or acidic processing.
              </p>
              <p className="story-text">
                Our cassava starch naturally boasts high paste clarity, excellent freeze-thaw stability, and a completely neutral taste profile. This makes it an outstanding clean-label alternative, allowing manufacturers to clean up their ingredient decks while delivering superior textures and stable shelf life.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
