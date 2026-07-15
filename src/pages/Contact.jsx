import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Guard: parse JSON only if the response actually contains JSON
      let data = {};
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      }

      if (!res.ok) {
        throw new Error(
          data.error ||
          `Request failed (${res.status}). Please try again or email us directly.`
        );
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send. Please email us directly at info@crossinvestgh.com.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        {/* Info Column */}
        <div className="contact-info-panel">
          <span className="contact-eyebrow">Get In Touch</span>
          <h1 className="contact-title">Start a Conversation</h1>
          <p className="contact-description">
            Whether you are an investor seeking viability reports, a prospective distributor, or have general queries about our cassava starch operations, our administration is ready to assist.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="detail-content">
                <span className="detail-label">Phone</span>
                <a href="tel:+233275909000" className="detail-link">+233 27 590 9000</a>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="detail-content">
                <span className="detail-label">Email</span>
                <a href="mailto:info@crossinvestgh.com" className="detail-link">info@crossinvestgh.com</a>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="detail-content">
                <span className="detail-label">Headquarters</span>
                <p className="detail-text">
                  D30 Manet Court<br />
                  Spintex Road, Accra, Ghana
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name-input" className="form-label">Full Name *</label>
              <input
                id="name-input"
                type="text"
                name="name"
                className="form-input"
                placeholder="John Scott"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email-input" className="form-label">Email Address *</label>
              <input
                id="email-input"
                type="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service-input" className="form-label">Service Required *</label>
              <select
                id="service-input"
                name="service"
                className="form-input form-select"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a service...</option>
                <option value="Premium Cassava Starch Supply">Premium Cassava Starch Supply</option>
                <option value="Out-take & Contract Farming">Out-take &amp; Contract Farming Partnership</option>
                <option value="Investment Inquiries">Investment &amp; Feasibility Inquiries</option>
                <option value="Distribution Opportunities">Starch Distribution Inquiries</option>
                <option value="General Inquiries">General Business Inquiries</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subject-input" className="form-label">Subject</label>
              <input
                id="subject-input"
                type="text"
                name="subject"
                className="form-input"
                placeholder="Investment Query"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message-input" className="form-label">Message *</label>
              <textarea
                id="message-input"
                name="message"
                className="form-input form-textarea"
                placeholder="How can we assist you with our cassava starch business..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status === "error" && (
              <div className="form-error-banner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              id="submit-message-btn"
              type="submit"
              className={`submit-btn ${status === "sending" ? "submitting" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {status === "success" && (
        <div className="contact-modal-overlay" onClick={() => setStatus("idle")}>
          <div className="contact-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={() => setStatus("idle")} aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="form-success-banner">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-text">
                Thank you for reaching out. We've sent a confirmation to your inbox and will get back to you within 1–2 business days.
              </p>
              <button
                className="submit-btn"
                onClick={() => setStatus("idle")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}