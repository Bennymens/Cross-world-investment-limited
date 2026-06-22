import { useEffect, useRef } from "react";
import "./Impact.css";

import cassavaBg from "../assets/cassava 1.webp";
import farmImg from "../assets/farm-aerial.png";

/* ── Reusable scroll-reveal hook ── */
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

/* ── Animated counter ── */
function AnimatedNumber({ value, suffix = "", duration = 2000 }) {
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
    <span ref={ref} className="impact-stat-number">
      0{suffix}
    </span>
  );
}

export default function Impact() {
  const heroRef = useReveal(0.05);
  const metricsRef = useReveal(0.1);
  const panel1Ref = useReveal(0.1);
  const panel2Ref = useReveal(0.1);
  const chainRef = useReveal(0.08);

  return (
    <main className="impact-page">
      {/* ═════ HERO: Sticky light-green heading ═════ */}
      <section className="impact-hero" ref={heroRef}>
        <div className="impact-blob impact-blob-tl" />
        <div className="impact-blob impact-blob-br" />

        <div className="impact-hero-content">
          <h1 className="impact-hero-title">
            <span className="impact-title-line">Sustaining Value</span>
            <span className="impact-title-line">Preventing Post-Harvest Loss</span>
          </h1>
        </div>

        {/* Scroll hint at the bottom */}
        <div className="impact-scroll-hint">
          <span className="impact-scroll-label">Impact</span>
          <svg
            className="impact-scroll-arrow"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ═════ METRICS: Slides up over hero with cassava background ═════ */}
      <section className="impact-metrics" ref={metricsRef}>
        <img
          src={cassavaBg}
          alt="Cassava background"
          className="impact-metrics-bg"
        />
        <div className="impact-metrics-overlay" />

        <div className="impact-metrics-content">
          <h2 className="impact-metrics-heading">
            Our Planned Sustainability Footprint
          </h2>

          <div className="impact-stats-grid">
            <div className="impact-stat-card">
              <AnimatedNumber value={36} suffix="K" />
              <p className="impact-stat-label">
                metric tonnes of raw cassava roots saved from post-harvest rot annually.
              </p>
            </div>
            <div className="impact-stat-card">
              <AnimatedNumber value={90} suffix="%" />
              <p className="impact-stat-label">
                of process water recycled in our closed-loop purification system.
              </p>
            </div>
            <div className="impact-stat-card">
              <AnimatedNumber value={60} suffix="+" />
              <p className="impact-stat-label">
                direct jobs created, driving local youth employment in the Central region.
              </p>
            </div>
          </div>

          <p className="impact-metrics-disclaimer">
            * Estimates calculated based on 9000MT full-capacity production design and site specifications.
          </p>
        </div>
      </section>

      {/* ═════ CONTENT PANELS: slide up over the metrics image ═════ */}
      <div className="impact-content-scroll">
        <div className="impact-panels-inner">
          {/* Panel 1 */}
          <div className="impact-panel row-text-right" ref={panel1Ref}>
            <div className="impact-col col-left">
              <h2 className="impact-panel-heading">
                Solving the perishability crisis.
              </h2>
            </div>
            <div className="impact-col col-right">
              <p className="impact-panel-text">
                Cassava is a resilient and hardy crop, but once harvested, its roots deteriorate rapidly due to physiological post-harvest starch degradation. Within 24 to 48 hours, the starch quality declines, rendering the root unusable for premium extraction.
              </p>
              <p className="impact-panel-text">
                By building our factory in Obiri in close proximity to our 5,000-acre farm, we cut down transit times to minutes. Harvesting and processing occur in a continuous, automated loop, preserving starch integrity and avoiding agricultural waste.
              </p>
              <p className="impact-panel-text">
                Our plant's design includes an advanced waste water treatment system that purifies process water, recycling up to 90% back into root washing and rasping, significantly reducing freshwater consumption.
              </p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="impact-panel row-text-right" ref={panel2Ref}>
            <div className="impact-col col-left">
              <h2 className="impact-panel-heading">
                Local jobs, global recovery.
              </h2>
            </div>
            <div className="impact-col col-right">
              <p className="impact-panel-text">
                Agriculture is the backbone of Ghana's economy, yet a lack of local agro-processing capacity leads to economic value leaking abroad. Ghana remains an importer of starches and secondary goods while local raw materials spoil.
              </p>
              <p className="impact-panel-text">
                We are building local capacity. By training 60+ personnel to manage mechanized planters, harvesters, and high-speed automated extraction boilers, we provide stable technical careers in the Central and Eastern regions.
              </p>
              <p className="impact-panel-text">
                We also contribute to national economic recovery by developing non-traditional export products (industrial starch) sold on pre-paid contract terms, generating foreign exchange in USD and enhancing trade balances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═════ SUPPLY CHAIN: Spoilage Window ═════ */}
      <section className="chain-section" ref={chainRef}>
        <div className="chain-header">
          <div className="chain-header-left">
            <h2 className="chain-heading">
              The Cassava<br />
              <span className="chain-title-pill">Spoilage Window</span>
            </h2>
          </div>
          <div className="chain-header-right">
            <p className="chain-description">
              Unprocessed cassava roots degrade rapidly after harvest due to enzymatic browning and physiological deterioration. Here is how value and starch quality deteriorate hour-by-hour compared to our immediate processing solution:
            </p>
          </div>
        </div>

        <div className="chain-columns">
          {/* Column 1 — Harvest */}
          <div className="chain-column">
            <div className="chain-main-card chain-card--yellow">
              <div className="chain-card-top">
                <svg className="chain-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V13c0-2.5 1.5-4.5 4-5.5" />
                  <path d="M12 16c-3-1-5-3.5-5-6.5 0 0 3 0 5 3" />
                  <path d="M16 7.5C16 5 14 3 11.5 3 11.5 3 11.5 6 14 7.5" />
                  <path d="M5 22h14" />
                </svg>
                <span className="chain-card-label">At Harvest</span>
              </div>
              <div className="chain-card-bottom">
                <div className="chain-card-number">
                  <span className="impact-stat-number">100%</span>
                </div>
                <p className="chain-card-sublabel">Starch Yield &amp; Value</p>
              </div>
            </div>
            <div className="chain-waste-badge chain-badge--yellow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
              <span>Fresh Root</span>
            </div>
          </div>

          {/* Column 2 — 24 Hours */}
          <div className="chain-column">
            <div className="chain-main-card chain-card--orange">
              <div className="chain-card-top">
                <svg className="chain-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="chain-card-label">24 Hours Post-Harvest</span>
              </div>
              <div className="chain-card-bottom">
                <div className="chain-card-number">
                  <span className="impact-stat-number">70%</span>
                </div>
                <p className="chain-card-sublabel">Starch Quality Retained</p>
              </div>
            </div>
            <div className="chain-waste-badge chain-badge--orange">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
              <span>30% lost</span>
            </div>
          </div>

          {/* Column 3 — 48 Hours */}
          <div className="chain-column">
            <div className="chain-main-card chain-card--cream">
              <div className="chain-card-top">
                <svg className="chain-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span className="chain-card-label">48 Hours Post-Harvest</span>
              </div>
              <div className="chain-card-bottom">
                <div className="chain-card-number">
                  <span className="impact-stat-number">30%</span>
                </div>
                <p className="chain-card-sublabel">Starch Quality Retained</p>
              </div>
            </div>
            <div className="chain-waste-badge chain-badge--cream">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
              <span>70% lost</span>
            </div>
          </div>

          {/* Column 4 — 72 Hours */}
          <div className="chain-column">
            <div className="chain-main-card chain-card--light-green">
              <div className="chain-card-top">
                <svg className="chain-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <span className="chain-card-label">72 Hours Post-Harvest</span>
              </div>
              <div className="chain-card-bottom">
                <div className="chain-card-number">
                  <span className="impact-stat-number">0%</span>
                </div>
                <p className="chain-card-sublabel">Starch Quality Retained</p>
              </div>
            </div>
            <div className="chain-waste-badge chain-badge--light-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
              <span>100% rot</span>
            </div>
          </div>

          {/* Column 5 — Our Solution */}
          <div className="chain-column">
            <div className="chain-main-card chain-card--dark-green">
              <div className="chain-card-top">
                <svg className="chain-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="chain-card-label">Cross World Loop</span>
              </div>
              <div className="chain-card-bottom">
                <div className="chain-card-number">
                  <span className="impact-stat-number">100%</span>
                </div>
                <p className="chain-card-sublabel">Starch Yield Conserved</p>
              </div>
            </div>

            <div className="chain-waste-badge chain-badge--dark-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
              <span>Starch Preservation</span>
            </div>
          </div>
        </div>

        <p className="chain-footnote">
          * Physiological deterioration rates based on industry research into native cassava root storage stability.
        </p>
      </section>
    </main>
  );
}
