import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import farmImg from "../assets/farm-aerial.png";
import produceImg from "../assets/fresh-produce.png";
import longevityImg from "../assets/produce-longevity.png";
import labImg from "../assets/team-lab.png";

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

/* Animated counter */
function AnimatedNumber({ value, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true;
          const end = parseFloat(value);
          const isDecimal = value.toString().includes(".");
          const startTime = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = end * eased;
            el.textContent =
              (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className="stat-number">
      0{suffix}
    </span>
  );
}

export default function Home() {
  const heroRef = useReveal(0.05);
  const introRef = useReveal(0.12);
  const halfBlockRef = useReveal(0.1);
  const fullImgRef = useReveal(0.1);
  const statsRef = useReveal(0.12);
  const textImgRef = useReveal(0.1);
  const findRef = useReveal(0.1);

  return (
    <main className="home-page">
      {/* ===== SECTION 1: HERO HEADER ===== */}
      <section className="hero-header" ref={heroRef}>
        <div className="hero-bg">
          <img src={farmImg} alt="Sustainable organic farming" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Plant-Based</span>
            <span className="title-line">Protection</span>
            <span className="title-line title-accent">Inspired by Nature</span>
          </h1>
          <div className="scroll-cta">
            <span className="scroll-label">Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: INTRO TEXT BLOCK ===== */}
      <section className="intro-block" ref={introRef}>
        <div className="intro-grid">
          <div className="intro-left">
            <h2 className="intro-heading">
              Fresher &amp; Better — For&nbsp;You and
              For&nbsp;All&nbsp;of&nbsp;Us.
            </h2>
          </div>
          <div className="intro-right">
            <p className="intro-text">
              Nearly 800 million people (1 in 10 of the world's population) go
              to bed hungry each night, yet one third of food and 45% of fruits
              and vegetables are lost or thrown away before they have a chance
              to be eaten.
            </p>
            <Link to="/our-story" className="link-arrow">
              <span>Our Story</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: HALF-SCREEN CONTENT BLOCK ===== */}
      <section className="half-block" ref={halfBlockRef}>
        <div className="half-grid">
          <div className="half-image">
            <img src={farmImg} alt="Sustainable organic farming" />
          </div>
          <div className="half-content">
            <h2 className="half-heading">
              Nature already has the&nbsp;answer.
            </h2>
            <p className="half-text">
              Every fruit and vegetable is protected by a thin peel — a natural
              barrier made of plant-derived materials that slows the rate of
              water loss and oxidation that cause produce to spoil.
            </p>
            <p className="half-text">
              Our technology creates a little extra "peel" using materials found
              in every fruit and vegetable, keeping moisture in and oxygen out.
            </p>
            <Link to="/our-story" className="link-arrow">
              <span>Learn More</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FULL-SCREEN IMAGE ===== */}
      <section className="full-image-section" ref={fullImgRef}>
        <div className="full-image-wrapper">
          <img src={produceImg} alt="Fresh fruits and vegetables" />
        </div>
        <div className="full-image-caption">
          <p>
            Our plant-based protection is completely invisible, tasteless, and
            safe to eat.
          </p>
        </div>
      </section>

      {/* ===== SECTION 5: STATISTICS ===== */}
      <section className="stats-section" ref={statsRef}>
        <div className="stats-grid">
          <div className="stat-card">
            <AnimatedNumber value={1.3} suffix="B" />
            <p className="stat-label">
              Metric tons of food wasted annually worldwide
            </p>
          </div>
          <div className="stat-card">
            <AnimatedNumber value={45} suffix="%" />
            <p className="stat-label">
              Of fruits &amp; vegetables lost before reaching consumers
            </p>
          </div>
          <div className="stat-card">
            <AnimatedNumber value={800} suffix="M" />
            <p className="stat-label">
              People go to bed hungry each night around the world
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TEXT + IMAGE BLOCK (reversed) ===== */}
      <section className="half-block reversed" ref={textImgRef}>
        <div className="half-grid">
          <div className="half-image">
            <img src={longevityImg} alt="Fresh produce lasting longer" />
          </div>
          <div className="half-content">
            <h2 className="half-heading">
              Longer-lasting produce. Less food waste.
            </h2>
            <p className="half-text">
              By helping produce stay fresh longer, we help reduce food waste at
              every point in the supply chain — from farms to stores to your
              kitchen.
            </p>
            <Link to="/products" className="link-arrow">
              <span>Our Products</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: FIND / CTA ===== */}
      <section className="find-section" ref={findRef}>
        <div className="find-inner">
          <div className="find-content">
            <h2 className="find-heading">Find Our Products Near&nbsp;You</h2>
            <p className="find-text">
              Look for our sticker on your favorite produce at participating
              retailers nationwide.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
          <div className="find-image">
            <img src={labImg} alt="Our team at work" />
          </div>
        </div>
        <div className="find-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
      </section>
    </main>
  );
}
