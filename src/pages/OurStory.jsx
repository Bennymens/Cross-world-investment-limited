import { useEffect, useRef } from "react";
import "./OurStory.css";
import farmImg from "../assets/farm-aerial.png";

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
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const timeline = [
  {
    year: "2012",
    title: "The Idea is Born",
    desc: "Our founders observed the devastating impact of food waste in developing nations — millions of tons of produce spoiling before reaching those who needed it most.",
  },
  {
    year: "2014",
    title: "The Science Breakthrough",
    desc: "Using materials that exist in every fruit and vegetable, our team created an invisible, plant-based coating that dramatically slows the causes of spoilage.",
  },
  {
    year: "2018",
    title: "First Retail Launch",
    desc: "After years of research and FDA approval, our technology reached grocery store shelves for the first time — starting with avocados.",
  },
  {
    year: "2021",
    title: "Global Expansion",
    desc: "Now available in thousands of stores worldwide, reducing food waste at every point in the supply chain — from farm to fork.",
  },
  {
    year: "2024",
    title: "Looking Ahead",
    desc: "Expanding to new produce categories and new markets, with a mission to make every piece of produce last longer and reach more people.",
  },
];

export default function OurStory() {
  const refs = timeline.map(() => useReveal(0.15));

  return (
    <main className="story-page">
      {/* Hero */}
      <section className="story-hero">
        <div className="story-hero-bg">
          <img src={farmImg} alt="Sustainable farming" />
        </div>
        <div className="story-hero-content">
          <h1>Our Story</h1>
          <p>
            How a simple observation about nature's design led to a revolution
            in food sustainability.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="story-timeline">
        <div className="timeline-line" />
        {timeline.map((item, i) => (
          <div key={i} className="timeline-item" ref={refs[i]}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="timeline-dot" />
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="story-mission">
        <h2>Our mission is simple: reduce food waste worldwide.</h2>
        <p>
          By keeping produce fresh longer, we help ensure that more food reaches
          more people — reducing waste, saving resources, and creating a more
          sustainable food system for everyone.
        </p>
      </section>

      {/* Values */}
      <section className="story-values">
        <h2>What Drives Us</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
                <path d="M12 3c0 4-3 7-3 9s1.34 4 3 4 3-2 3-4-3-5-3-9z" />
              </svg>
            </div>
            <h3>Nature-First Innovation</h3>
            <p>
              We look to nature for answers. Our solutions use plant-derived
              materials that already exist in every fruit and vegetable.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
              </svg>
            </div>
            <h3>Global Impact</h3>
            <p>
              We're committed to making our technology accessible worldwide,
              especially in communities most affected by food insecurity.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" />
                <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" />
              </svg>
            </div>
            <h3>People-Centered</h3>
            <p>
              Behind every statistic is a family. We work to ensure food reaches
              tables, not landfills.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}