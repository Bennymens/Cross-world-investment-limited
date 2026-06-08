import { useEffect, useRef, useState } from "react";
import "./Products.css";

import farmImg from "../assets/farm-aerial.png";
import cassavaImg from "../assets/Cassava.png";
import limeImg from "../assets/lime-slice.png";

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

      {/* ===== SCROLLABLE OVERLAPPING LIGHT BLUE WRAPPER ===== */}
      <div className="products-content-scroll light-blue-bg">
        <section className="story-panels-container">
          
          {/* Section 3: Our Product Ingredients */}
          <div className="story-panel row-text-right" ref={ingredientsRef}>
            <div className="story-col col-left">
              <h2 className="story-heading">Our Product Ingredients</h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text">
                Our product for conventional produce, <strong>Edipeel</strong>, is made of <strong>plant-based mono- and diglycerides</strong>.
              </p>
              <p className="story-text">
                Our product for organic produce, <strong>Organipeel,*</strong> is made of <strong>citric acid, baking soda, and plant-based mono- and diglycerides</strong>.
              </p>
              <p className="story-text note-text">
                * NOTE: As we're developing new products that are more tailored to organic producers' operations and evolving needs, <a href="#organipeel" className="underline-link">Organipeel has not been commercially available or used for over 2 years.</a>
              </p>
              <p className="story-text">
                And mono- and diglycerides are nothing more than purified, naturally occurring simple fats.
              </p>
            </div>
          </div>

          {/* Section 4: Safety & Purity */}
          <div className="safety-section-block" ref={safetyRef}>
            <h2 className="safety-section-heading">Safety and purity are our priorities.</h2>
            <div className="safety-badges-row">
              <img src={chemicalFreeBadge} alt="Chemical Free" className="safety-badge-img" />
              <img src={ecoFriendlyBadge} alt="Eco Friendly" className="safety-badge-img" />
              <img src={pureQualityBadge} alt="Pure Quality" className="safety-badge-img" />
              <img src={plantBasedBadge} alt="Plant Based" className="safety-badge-img" />
            </div>
            <div className="safety-description-row">
              <p className="safety-description-text">
                The safety and purity of our products are our top priority. That's why Apeel is made with food grade ingredients safe for human consumption—verified and tested for your peace of mind.
              </p>
            </div>
          </div>

          {/* Section 5: How We Compare */}
          <div className="story-panel row-text-right" ref={compareRef}>
            <div className="story-col col-left">
              <h2 className="story-heading">
                How do we compare to other post-harvest treatments on produce today?
              </h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text">
                Traditional waxes (made from polyethylene, paraffins, shellac, carnauba wax, beeswax, and other ingredients) have been widely used for decades, mainly for the purposes of adding shine in response to supermarket and consumer preferences for glossy, attractive produce.
              </p>
              <p className="story-text">
                Some of these industry standard ingredients are animal-based (e.g., beeswax and shellac) or petroleum-derived (e.g., polyethylene, paraffins, etc.).
              </p>
              <p className="story-text">
                And the extra sad part is they aren't very effective at helping produce stay fresher for much longer.
              </p>
              <p className="story-text">
                We believe we all deserve better. That's why we use food to actually protect food.
              </p>
              <p className="story-text">
                The ingredients in Apeel formulations are plant-based, responsibly sourced, non-GMO, free of regulated allergens, and free of trans fats. These ingredients are naturally found in the peels, pulp, and seeds of plants we already eat, and are common existing food ingredients that have been widely used in everyday foods in the U.S., Europe, and worldwide for decades.
              </p>
              <p className="story-text">
                For more information, see <a href="#dieticians" className="underline-link">what Registered Dieticians have to say.</a>
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
            <h2 className="benefits-heading">Product Benefits</h2>
            <p className="benefits-text lead">
              Cross World products are applied to the surface of fresh cassava roots and products to create a thin, edible barrier – reinforcing the existing natural peel – to slow water loss and oxidation. This helps to keep produce fresher for longer – retaining taste, texture, and nutrients for longer, giving everyone more time to get produce to more people, while reducing waste and saving money and resources along the way.
            </p>
            <p className="benefits-text">
              Our products replace traditional wax coatings and chemical preservatives, offering a completely natural, invisible defense that keeps moisture in and oxygen out. By mimicking nature's own protective barriers, we extend produce freshness without adding synthetic substances.
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
