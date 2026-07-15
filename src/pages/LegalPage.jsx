import { Link } from "react-router-dom";
import { legalData } from "./legalData";
import "./LegalPage.css";

export default function LegalPage({ type }) {
  const data = legalData[type];

  if (!data) {
    return (
      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-hero-content">
            <h1 className="legal-hero-title">Page Not Found</h1>
          </div>
        </section>
        <div className="legal-content-scroll">
          <div className="legal-container">
            <p>The requested legal page does not exist.</p>
            <Link to="/" className="back-link">Return to Home</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="legal-page">
      {/* ===== HERO BANNER ===== */}
      <section className="legal-hero">
        {/* Organic Corner Blobs (similar style to FAQ page) */}
        <div className="legal-blob legal-blob-left" />
        <div className="legal-blob legal-blob-right" />
        
        <div className="legal-hero-content">
          <h1 className="legal-hero-title">{data.title}</h1>
        </div>
      </section>

      {/* ===== CONTENT SCROLL WRAPPER ===== */}
      <div className="legal-content-scroll">
        <div className="legal-container">
          {/* Sidebar */}
          <div className="legal-sidebar">
            <div className="sidebar-meta">
              <span className="meta-label">Last Updated</span>
              <span className="meta-value">{data.lastUpdated}</span>
            </div>
            <div className="sidebar-meta">
              <span className="meta-label">Entity</span>
              <span className="meta-value">CrossWorld Investment Ltd</span>
            </div>
            <div className="sidebar-actions">
              <Link to="/contact" className="sidebar-contact-btn">
                Contact Compliance
              </Link>
            </div>
          </div>

          {/* Legal Body Text */}
          <div className="legal-body">
            {data.sections.map((section, idx) => (
              <div className="legal-section" key={idx}>
                <h2 className="legal-section-title">{section.title}</h2>
                {section.content.map((pText, pIdx) => (
                  <p className="legal-paragraph" key={pIdx}>
                    {pText}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
