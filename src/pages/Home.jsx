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
  const storyRef1 = useReveal(0.12);
  const storyRef2 = useReveal(0.12);
  const storyRef3 = useReveal(0.12);
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

      {/* ===== SCROLLABLE OVERLAPPING CREAM WRAPPER ===== */}
      <div className="home-content-scroll">

        {/* ===== STORY SEQUENCES (Apeel Style) ===== */}
        <section className="story-panels-container">

          {/* Panel 1: Fresher & Better */}
          <div className="story-panel row-text-right" ref={storyRef1}>
            <div className="story-col col-left">
              <h2 className="story-heading">
                Fresher &amp; Better — For You and For All of Us.
              </h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text">
                Cassava is a vital staple crop for over 800 million people, yet it is highly perishable and must be processed within 24 to 48 hours of harvest before it spoils. Processing cassava roots into high-value starch preserves this critical food source, extending its usability indefinitely and preventing massive post-harvest loss.
              </p>
              <p className="story-text">
                Traditional processing methods, however, are often inefficient and resource-intensive. They require substantial volumes of fresh water and rely on manual techniques that yield inconsistent starch quality, reducing the profit margins of smallholder farmers.
              </p>
              <p className="story-text">
                Sadly, without access to modern processing facilities, farming communities are forced to sell their tubers at rock-bottom prices or watch their harvests go to waste, compounding rural poverty and limiting economic mobility.
              </p>
              <p className="story-text">
                By introducing sustainable, advanced starch extraction technologies, we can recycle processing water, optimize energy usage, and dramatically improve extraction yields. This transforms the humble root into a premium industrial ingredient.
              </p>
              <p className="story-text">
                We approach cassava processing differently—maximizing output, minimizing ecological impact, and creating a robust, reliable value chain that benefits both local farmers and global industries.
              </p>
              <Link to="/our-story" className="story-link">
                Our Story ↳
              </Link>
            </div>
          </div>

          {/* Panel 2: Using technology to refine roots */}
          <div className="story-panel row-media-right" ref={storyRef2}>
            <div className="story-col col-left">
              <h2 className="story-heading">
                Using technology to refine roots.
              </h2>
              <p className="story-text">
                We extract premium starch from fresh cassava roots using sustainable, advanced refining technology that isolates pure starch granules while recycling process water and preserving the crop's natural properties.
              </p>
              <p className="story-text">
                In doing so, we deliver a highly functional, gluten-free, and neutral-taste binder and texturizer for global food and manufacturing markets, while ensuring smallholder farmers receive stable, fair prices for their harvest.
              </p>
              <Link to="/products" className="story-link">
                Products ↳
              </Link>
            </div>
            <div className="story-col col-right">
              <img src="/src/assets/Cassava.png" alt="Cassava Processing" className="starch-image-display" />
            </div>
          </div>

          {/* Panel 3: Refined by nature, proven by science */}
          <div className="story-panel row-text-right" ref={storyRef3}>
            <div className="story-col col-left">
              <h2 className="story-heading">
                Refined by nature, proven by science.
              </h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text">
                Standard industrial starches (sourced from maize, potato, or wheat) often undergo heavy chemical modification to achieve stability and viscosity.
              </p>
              <p className="story-text">
                Our cassava starch offers high natural paste clarity, excellent freeze-thaw stability, and a neutral taste profile without the need for synthetic additives or intense chemical processing.
              </p>
              <p className="story-text">
                To learn more about our quality grades and purity standards, explore our FAQs: Starch Quality and Specifications.
              </p>
              <Link to="/faq" className="story-link">
                FAQs ↳
              </Link>
            </div>
          </div>

        </section>


      </div>

      {/* ===== SECTION 5: STATISTICS (Full-bleed Background Image) ===== */}
      <section className="stats-section" ref={statsRef}>
        <img src="/src/assets/cassava 1.webp" alt="Cassava Starch Processing Background" className="stats-bg-image" />
        <div className="stats-overlay" />
        <div className="stats-content-wrapper">
          <h2 className="stats-main-heading">Our sustainability impact since 2021</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <AnimatedNumber value={166} suffix="M" />
              <p className="stat-label">pieces of fruit prevented from waste.</p>
            </div>
            <div className="stat-card">
              <AnimatedNumber value={29.1} suffix="K" />
              <p className="stat-label">
                metric tons CO₂-eq of greenhouse gas emissions avoided, the equivalent of planting 485,000 trees.
              </p>
            </div>
            <div className="stat-card">
              <AnimatedNumber value={7.0} suffix="B" />
              <p className="stat-label">liters of water conserved, enough to fill 2,800 Olympic-sized swimming pools.</p>
            </div>
          </div>
          <p className="stats-disclaimer">
            * Calculated using Life Cycle Analysis methodology that has been third party verified as being compliant with ISO 14044 standards.
          </p>
        </div>
      </section>

      {/* ===== WHAT WE DO SECTIONS (Scroll overlap wrapper) ===== */}
      <div className="home-content-scroll what-we-do-wrapper">
        
        {/* What We Do Panel 1: Leading the way */}
        <section className="story-panel row-text-right what-we-do-panel-1" ref={textImgRef}>
          <div className="story-col col-left">
            <h2 className="story-heading">
              And we're leading the way.
            </h2>
          </div>
          <div className="story-col col-right">
            <p className="story-text">
              Our sustainable extraction and refining processes represent a massive leap forward in cassava processing technology. We partner with local farming communities, providing state-of-the-art starch processing infrastructure that maximizes value directly at the source. From starch extraction and dewatering to advanced flash drying, we ensure premium quality that satisfies rigorous industrial and clean-label standards worldwide.
            </p>
            <Link to="/products" className="story-link">
              Products ↳
            </Link>
          </div>
        </section>

        {/* What We Do Panel 2: Refinement & Starch Processing */}
        <section className="story-panel row-media-right what-we-do-panel-2" ref={findRef}>
          <div className="story-col col-left">
            <div className="what-we-do-image-wrapper">
              <img src="/src/assets/team-lab.png" alt="Our refining team in action" className="what-we-do-image" />
            </div>
          </div>
          <div className="story-col col-right">
            <h2 className="story-heading">
              Let's talk about the refinement.
            </h2>
            <p className="story-text">
              Processing cassava into high-grade industrial starch requires high precision. We take harvested fresh roots and immediately subject them to automated cleaning, peeling, and rasping to release the starch granules in their purest state.
            </p>
            <p className="story-text">
              Our processing cycle integrates cutting-edge centrifugal separation and hydrocyclone technology. This separates starch from fibers and proteins with zero chemicals, preserving the organic integrity of the crop while recycling up to 90% of the extraction water.
            </p>
            <p className="story-text">
              Finally, our high-speed flash dryers gently dehydrate the starch under strictly regulated temperatures. The result is an ultra-fine, pure white powder with consistent viscosity and high paste clarity, ready for regional and international supply chains.
            </p>
            <Link to="/faq" className="story-link">
              FAQs: Quality &amp; Process ↳
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
