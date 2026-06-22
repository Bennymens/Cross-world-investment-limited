import { useEffect, useRef, useState } from "react";
import "./Products.css";

import farmImg from "../assets/farm-aerial.png";
import cassavaImg from "../assets/Cassava.png";
import cassavaBg from "../assets/cassava 1.webp";

import chemicalFreeBadge from "../assets/Chemical free.png";
import ecoFriendlyBadge from "../assets/Eco Friendly.png";
import pureQualityBadge from "../assets/pure quality.png";
import plantBasedBadge from "../assets/plant based.png";

import cassava1 from "../assets/cassava 1.jpg";
import cassava2 from "../assets/cassava 2.jpg";

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
  const benefitsRef = useReveal(0.12);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const productsData = [
    { name: "Premium Cassava Roots", img: cassavaImg },
    { name: "Food Grade Starch", img: null },
    { name: "Industrial Starch", img: null },
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
            <span className="title-line">Rooted in Ghana</span>
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

      {/* ===== SCROLLABLE OVERLAPPING LIGHT BLUE WRAPPER ===== */}
      <div className="products-content-scroll light-blue-bg">
        <section className="story-panels-container">
          
          {/* Section 3: Product Properties */}
          <div className="story-panel row-text-right" ref={ingredientsRef}>
            <div className="story-col col-left">
              <h2 className="story-heading">Starch Properties &amp; Standards</h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text">
                Our starch is <strong>100% natural, native, and chemical-free</strong>. Our extraction process is completely mechanical, using clean water to wash, peel, rasp, and separate starch granules from the root fibers.
              </p>
              <p className="story-text">
                Because we preserve the natural properties of the crop, our premium cassava starch offers excellent <strong>natural paste clarity, high paste viscosity, and superior freeze-thaw stability</strong>.
              </p>
              <p className="story-text">
                Naturally gluten-free and neutral in taste, it provides a superior clean-label binder, thickener, and texturizer suitable for food products and industrial applications alike.
              </p>
            </div>
          </div>

          {/* Section 4: Safety & Purity */}
          <div className="safety-section-block" ref={safetyRef}>
            <h2 className="safety-section-heading">Strict Quality &amp; Process Controls</h2>
            <div className="safety-badges-row">
              <img src={chemicalFreeBadge} alt="Chemical Free" className="safety-badge-img" />
              <img src={ecoFriendlyBadge} alt="Eco Friendly" className="safety-badge-img" />
              <img src={pureQualityBadge} alt="Pure Quality" className="safety-badge-img" />
              <img src={plantBasedBadge} alt="Plant Based" className="safety-badge-img" />
            </div>
            <div className="safety-description-row">
              <p className="safety-description-text">
                We maintain rigorous standards of hygiene and quality control. With an onsite laboratory testing density, moisture, ash content, and pH, we guarantee consistent premium quality. We are working toward ISO and Ghana Standards Authority certifications within our first two years of operations.
              </p>
            </div>
          </div>

          {/* Section 5: How We Compare */}
          <div className="story-panel row-text-right" ref={compareRef}>
            <div className="story-col col-left">
              <h2 className="story-heading">
                How does Cassava Starch compare in the global market?
              </h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text">
                Compared to potato, wheat, or corn starches, cassava is a relatively cheap source of raw material that delivers matching or superior binding and thickening properties.
              </p>
              <p className="story-text">
                Standard industrial starches often undergo heavy chemical modification to achieve stability. Our cassava starch achieves high freeze-thaw stability and clarity naturally, without synthetic additives.
              </p>
              <p className="story-text">
                Most importantly, our business model relies on our own <strong>5,000-acre farm</strong> to supply the raw cassava roots, avoiding the raw material shortages that plague competitors who rely solely on third-party out-growers.
              </p>
              <p className="story-text">
                For more details on our business case and financials, see our <a href="/business-plan" className="underline-link">Investor Business Plan.</a>
              </p>
            </div>
          </div>

        </section>
      </div>

      {/* ===== SECTION 6: PRODUCT BENEFITS (Cream background) ===== */}
      <section className="benefits-section" ref={benefitsRef}>
        <div className="benefits-container">
          <div className="benefits-left-col">
            <div className="benefits-small-image-wrapper">
              <img src={cassava1} alt="Fresh cassava crop close-up" className="benefits-small-img" />
            </div>
            <h2 className="benefits-heading">Operational Advantages</h2>
            <p className="benefits-text lead">
              By locating our processing factory in the same area as our farm in Obiri, Central Region, we process tubers immediately after harvesting. This is critical because fresh cassava roots begin to spoil within 24 to 48 hours of harvest.
            </p>
            <p className="benefits-text">
              Immediate mechanical refining preserves the high starch content, yielding a brighter, higher-purity native starch. Our closed-loop water treatment system purifies and recycles up to 90% of extraction water, keeping operations highly sustainable and eco-friendly.
            </p>
          </div>
          <div className="benefits-right-col">
            <img src={cassava2} alt="Cassava root harvesting" className="benefits-large-img" />
          </div>
        </div>
      </section>
    </main>
  );
}
