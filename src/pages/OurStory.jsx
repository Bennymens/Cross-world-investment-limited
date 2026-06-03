import { useEffect, useRef } from "react";
import "./OurStory.css";

import limeImg from "../assets/lime-slice.png";
import officeImg from "../assets/modern-office.png";
import teamImg from "../assets/team-lab.png";
import heroImg from "../assets/hero-avocados.png";

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

export default function OurStory() {
  const heroRef = useReveal(0.05);
  const storyRef1 = useReveal(0.08);
  const storyRef2 = useReveal(0.08);
  const officeRef = useReveal(0.08);
  const futureRef = useReveal(0.08);
  const foundersRef = useReveal(0.08);

  return (
    <main className="story-page">
      {/* ===== SECTION 0: HERO HEADER ===== */}
      <section className="hero-header" ref={heroRef}>
        <div className="hero-bg">
          <img src={heroImg} alt="avocados fresh produce" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Our Story</span>
            <span className="title-line">Rooted in Science</span>
            <span className="title-line title-accent">Inspired by Nature</span>
          </h1>
          <div className="scroll-cta">
            <span className="scroll-label">Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: STORY SCROLL CONTAINER ===== */}
      <div className="story-content-scroll story-intro-wrapper">
        <section className="story-panels-container">
          {/* Panel 1: Founded by Scientists */}
          <div className="story-panel row-text-right" ref={storyRef1}>
            <div className="story-col col-left">
              <span className="story-eyebrow">Our Story</span>
              <h2 className="story-heading">
                Founded by Scientists Inspired By Nature
              </h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text story-lead">
                During graduate school, James was driving home past beautiful
                and bountiful fields of fresh produce along Central California
                while listening to a podcast about global hunger. It made him
                wonder: how could so many people be hungry when there was such
                an abundance of food growing? And if so many were hungry, how
                could so much of this abundance be going to waste?
              </p>
              <p className="story-text">
                According to the UN World Food Program and others, it's mostly
                due to a lack of access to food, technology, and resilient food
                production systems.
              </p>
              <p className="story-text">
                Moisture loss, oxidation, and pest and fungal stressors are
                leading contributors to fruit and vegetable spoilage.
              </p>
              <p className="story-text">
                But learning more about how we protect food today only left
                James even more frustrated. For decades, across the globe, we've
                relied heavily on a surprisingly small handful of ways to help
                fresh fruits and vegetables last longer after harvest. These
                tools have gotten us a long way, but also come with challenges.
              </p>
              <p className="story-text">
                Refrigeration is a massive energy suck, a significant source of
                emissions, and is expensive — it's why a lot of places around
                the world don't have access to refrigeration. Designer
                pesticides aren't great for our long-term health or the
                environment. Waxes — which can be plant-based but are also often
                animal- or petroleum-derived — make produce look better, but
                don't really meaningfully improve quality or shelf life. And
                packaging just adds to our growing problems with single-use
                plastics and microplastics.
              </p>
              <p className="story-text">
                And all this leads to a pretty narrow set of fresh fruits and
                vegetables available in stores today relative to the diversity
                of what's really out there — only the ones that can survive
                storage and transportation are commonly available, which aren't
                really the ones that always taste best or have the highest
                density of nutrients.
              </p>
            </div>
          </div>

          {/* Panel 2: Built From What Plants Already Know */}
          <div className="story-panel row-media-right" ref={storyRef2}>
            <div className="story-col col-left">
              <h2 className="story-heading">
                Built From What Plants Already Know
              </h2>
              <p className="story-text story-lead">
                We work with cassava — a resilient root crop harvested across
                many regions — and convert freshly harvested roots into
                high‑purity starch. Our process gently washes, peels, mills, and
                separates starch granules, then dewaters and dries them to
                produce versatile cassava starch for food and industrial uses.
              </p>
              <p className="story-text">
                The method emphasizes low-impact processing: we recycle process
                water, minimize waste, and preserve the natural quality of the
                starch so it can serve as a clean-label ingredient worldwide.
              </p>
            </div>
            <div className="story-col col-right flex-center">
              <div className="lime-image-container">
                {/* Image removed — placeholder left for manual upload */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== SECTION 2: FULL-BLEED OFFICE HERO (Parallax Background) ===== */}
      <section className="our-story-office-hero" ref={officeRef}>
        <img
          src={officeImg}
          alt="Modern research office and lab space"
          className="office-bg-image"
        />
        <div className="office-overlay" />
      </section>

      {/* ===== SECTION 3: BOTTOM SCROLL CONTAINER (Overlapping office hero) ===== */}
      <div className="story-content-scroll our-story-bottom-wrapper">
        {/* Shaping the Future */}
        <section
          className="story-panel row-media-right shaping-future-panel"
          ref={futureRef}
        >
          <div className="story-col col-left">
            <h2 className="story-heading">
              Shaping the Future of How Food is Protected
            </h2>
            <p className="story-text">
              Apeel Sciences is an American innovation company founded by
              scientists in a garage with the mission to solve global food waste
              and scarcity by using science inspired by nature.
            </p>
            <p className="story-text">
              The company deploys plant-based protection that keep produce
              fresher for longer, offering a transparent alternative to
              traditional waxes and plastics. By applying this tech-forward
              approach to the post-harvest industry, Apeel aims to secure a more
              resilient food supply and ensure every family has access to
              healthy, affordable, and abundant produce.
            </p>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="story-link"
            >
              Explore the ideas shaping our story on Food Fight ↳
            </a>
          </div>
          <div className="story-col col-right">
            <div className="team-image-wrapper">
              <img
                src={teamImg}
                alt="Our team in action"
                className="team-group-image"
              />
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="founders-section" ref={foundersRef}>
          <h2 className="founders-title">Founders</h2>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-avatar initials-jr">JR</div>
              <h3 className="founder-name">James Rogers</h3>
              <p className="founder-role">Founder</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar initials-jd">JD</div>
              <h3 className="founder-name">Jenny Du</h3>
              <p className="founder-role">Co-Founder &amp; SVP Operations</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar initials-lp">LP</div>
              <h3 className="founder-name">Lou Perez</h3>
              <p className="founder-role">Co-Founder &amp; SVP Technology</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
