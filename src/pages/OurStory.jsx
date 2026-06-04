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
                Driving past cassava fields, it's striking how abundant the crop
                is and how quickly value can be lost when roots aren't processed
                soon after harvest. This reality motivated a focus on reducing
                post-harvest loss by processing cassava close to where it's
                grown.
              </p>
              <p className="story-text">
                Globally, much of the food loss problem stems from limited
                access to processing, cold storage, and resilient supply chains
                — a challenge especially acute for root crops like cassava which
                begin to degrade rapidly after harvest.
              </p>
              <p className="story-text">
                Moisture loss, oxidation, and damage from pests and fungi all
                accelerate spoilage. Conventional fixes — long-distance cold
                chains, heavy chemical treatments, or single-use packaging — are
                costly or unsustainable in many producing regions.
              </p>
              <p className="story-text">
                Converting cassava into high-quality starch near the farm solves
                several problems at once: roots are washed and peeled, milled to
                release starch, then separated, dewatered, and dried into stable
                starch grades. The approach preserves value, reduces waste, and
                enables local economic opportunities while keeping environmental
                impact low through water recycling and efficient processing.
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
              <h3 className="founder-name">Founder</h3>
              <p className="founder-role">Leadership Team</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar initials-jd">JD</div>
              <h3 className="founder-name">Co-Founder</h3>
              <p className="founder-role">Operations Lead</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar initials-lp">LP</div>
              <h3 className="founder-name">Co-Founder</h3>
              <p className="founder-role">Technology Lead</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
