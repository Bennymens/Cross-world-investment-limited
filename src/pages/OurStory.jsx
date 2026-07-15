import { useEffect, useRef } from "react";
import "./OurStory.css";

import cassavaImg from "../assets/Cassava.png";
import officeImg from "../assets/modern-office.png";
import teamImg from "../assets/team-lab.png";
import farmImg from "../assets/farm-aerial.png";
import cassavaBg from "../assets/cassava 1.webp";

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
  const managementRef = useReveal(0.08);

  return (
    <main className="story-page">
      {/* ===== SECTION 0: HERO HEADER ===== */}
      <section className="hero-header" ref={heroRef}>
        <div className="hero-bg">
          <img src={farmImg} alt="Cassava agricultural fields" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Our Story</span>
            <span className="title-line">Rooted in Ghana</span>
            <span className="title-line title-accent">Sowing for the Future</span>
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
          {/* Panel 1: Ghanaian Roots & Agribusiness Vision */}
          <div className="story-panel row-text-right" ref={storyRef1}>
            <div className="story-col col-left">
              <span className="story-eyebrow">Our Origins</span>
              <h2 className="story-heading">
                Pioneering Agro-Processing in Ghana
              </h2>
            </div>
            <div className="story-col col-right">
              <p className="story-text story-lead">
                CROSSWORLD INVESTMENTS LIMITED is a wholly owned Ghanaian company incorporated in 2019.
                Our core object is Agribusiness and Agro-processing. Over three years of research,
                we identified improved species of high-grade cassava variety (Cross-Cassava) and engineered
                the most efficient industrial starch production process.
              </p>
              <p className="story-text">
                To prepare for commercial cultivation, we secured large tracts of land in the Eastern region
                and are in advanced stages of leasing 10,000 acres in the Eastern and Central regions.
                We have also built human resource capacity by training sixty local personnel in advanced cultivation methods.
              </p>
              <p className="story-text">
                Ghana is the 3rd largest producer of Cassava in Africa and 6th in the world. However, almost all
                of this production has traditionally been for food. We believe this agricultural strength can
                be harnessed to establish leadership in global cassava starch production.
              </p>
              <p className="story-text">
                A key operational challenge in industrial agro-processing (as seen in older projects like the Ayensu Starch Factory)
                is the erratic supply of cassava roots. CrossWorld solves this by sourcing raw material
                exclusively from our own 5,000-acre farm, establishing full control of our supply chain.
              </p>
            </div>
          </div>

          {/* Panel 2: Technology & High Capacity Extraction */}
          <div className="story-panel row-media-right" ref={storyRef2}>
            <div className="story-col col-left">
              <h2 className="story-heading">
                Industrial Scale & Precision Processing
              </h2>
              <p className="story-text story-lead">
                Our target is to build Ghana's biggest production and export channel for industrial starch.
                This is accomplished by commencing cultivation of 5,000 acres of high-starch cassava,
                supporting our 9,000 MT state-of-the-art processing plant located in Obiri, Central Region.
              </p>
              <p className="story-text">
                The factory will run three shifts 24 hours a day to optimize output and satisfy pre-paid off-take agreements.
                By combining mechanized agriculture with cutting-edge extraction systems, we transform fresh tubers into
                premium grade starch within hours, eliminating post-harvest loss.
              </p>
            </div>
            <div className="story-col col-right flex-center">
              <div className="lime-image-container">
                <img src={cassavaImg} alt="Premium cassava starch" className="story-detail-img" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== SECTION 2: FULL-BLEED OFFICE HERO (Parallax Background) ===== */}
      <section className="our-story-office-hero" ref={officeRef}>
        <img
          src={officeImg}
          alt="Modern offices and research facility"
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
              Shaping the Future of African Agriculture
            </h2>
            <p className="story-text">
              Africa holds sixty percent of the world's arable land, yet it remains a net importer of food.
              Agro-processing is key to retaining economic value on the continent, creating local employment,
              and securing long-term food safety.
            </p>
            <p className="story-text">
              We align with environmental guidelines by adopting a highly efficient closed-loop processing setup.
              Our water treatment system recycles process water, and our facility deploys clean solar backup solutions
              for auxiliary operations to minimize carbon footprints.
            </p>
            <p className="story-text">
              By exporting high-quality starch, we aim to put Ghana on the global industrial starch map while providing
              stable, sustainable careers for local growers and technicians.
            </p>
          </div>
          <div className="story-col col-right">
            <div className="team-image-wrapper">
              <img
                src={teamImg}
                alt="Our agricultural training team"
                className="team-group-image"
              />
            </div>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="founders-section" ref={foundersRef}>
          <h2 className="founders-title">Founders & Leadership</h2>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-card-banner">
                <span className="founder-card-text">A. Assan</span>
                <span className="founder-card-subtext">Founder &amp; Chief Executive Officer</span>
              </div>
            </div>
            <div className="founder-card">
              <div className="founder-card-banner">
                <span className="founder-card-text">Finance &amp; Admin Manager</span>
                <span className="founder-card-subtext">Accounting, Compliance &amp; Logistics</span>
              </div>
            </div>
            <div className="founder-card">
              <div className="founder-card-banner">
                <span className="founder-card-text">Factory Operations Manager</span>
                <span className="founder-card-subtext">Production, Quality Control &amp; Scheduling</span>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Management */}
        <section className="management-section" ref={managementRef}>
          <h2 className="management-title">Operational Management</h2>
          <div className="management-grid">
            <div className="management-card">
              <div className="management-card-banner">
                <span className="management-card-text">Farm Operations Manager</span>
                <span className="management-card-subtext">Crop Planning, Soil Health &amp; Mechanization</span>
              </div>
            </div>
            <div className="management-card">
              <div className="management-card-banner">
                <span className="management-card-text">Human Resources Manager</span>
                <span className="management-card-subtext">Recruiting, Security &amp; Workplace Wellbeing</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
