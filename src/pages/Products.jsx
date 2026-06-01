import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

import heroImg from "../assets/hero-avocados.png";
import produceImg from "../assets/fresh-produce.png";
import longevityImg from "../assets/produce-longevity.png";
import farmImg from "../assets/farm-aerial.png";
import labImg from "../assets/team-lab.png";

function useReveal(threshold = 0.1) {
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

const products = [
  {
    tag: "Fruits",
    title: "Avocados",
    desc: "Stay ripe and ready for days longer — reducing waste from farm to table.",
    img: heroImg,
  },
  {
    tag: "Fruits",
    title: "Citrus & Berries",
    desc: "Fresh-picked quality that lasts, with vibrant flavor and texture preserved naturally.",
    img: produceImg,
  },
  {
    tag: "Vegetables",
    title: "Leafy Greens",
    desc: "Crisp and nutrient-rich for longer, so more makes it from store to plate.",
    img: farmImg,
  },
  {
    tag: "Technology",
    title: "Plant-Based Coating",
    desc: "An invisible, tasteless, plant-derived layer that slows water loss and oxidation.",
    img: longevityImg,
  },
  {
    tag: "Supply Chain",
    title: "Shelf-Life Extension",
    desc: "Give retailers and distributors more time — reducing shrink and waste at every stage.",
    img: labImg,
  },
  {
    tag: "Innovation",
    title: "Custom Formulations",
    desc: "Tailored solutions for different produce types, climates, and supply chain needs.",
    img: produceImg,
  },
];

export default function Products() {
  const cardRefs = products.map(() => useReveal(0.08));

  return (
    <main className="products-page">
      {/* Hero */}
      <section className="products-hero">
        <h1>Our Products</h1>
        <p>
          Nature-inspired solutions that keep produce fresher, reduce waste, and
          create a more sustainable food system.
        </p>
      </section>

      {/* Product grid */}
      <section className="products-grid">
        {products.map((p, i) => (
          <div
            key={i}
            className="product-card"
            ref={cardRefs[i]}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="product-img">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="product-info">
              <span className="product-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="how-inner">
          <h2>How It Works</h2>
          <div className="how-steps">
            <div className="how-step">
              <div className="step-number">1</div>
              <h3>Extract</h3>
              <p>
                We extract lipids from plant materials — the same compounds
                found in every fruit and vegetable's natural peel.
              </p>
            </div>
            <div className="how-step">
              <div className="step-number">2</div>
              <h3>Apply</h3>
              <p>
                A thin, invisible layer is applied to produce, creating an extra
                barrier against moisture loss and oxidation.
              </p>
            </div>
            <div className="how-step">
              <div className="step-number">3</div>
              <h3>Protect</h3>
              <p>
                Produce stays fresher for longer — reaching more people, with
                less waste at every point in the supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <h2>Interested in Our Solutions?</h2>
        <p>
          Whether you're a grower, retailer, or distributor — we'd love to show
          you how our technology can work for your supply chain.
        </p>
        <Link to="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}