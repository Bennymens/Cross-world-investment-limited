import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate API Submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
      alert("Thank you! Your message has been sent successfully.");
    }, 1200);
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
                <a href="tel:+233202007160" className="detail-link">+233 20 200 7160</a>
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
                <a href="mailto:info@crossworldinvestments.com" className="detail-link">info@crossworldinvestments.com</a>
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
                  No. 14 Liberation Road<br />
                  Cantonments, Accra, Ghana
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
                placeholder="Tony Assan"
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
                placeholder="tony@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
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

            <button
              id="submit-message-btn"
              type="submit"
              className={`submit-btn ${submitted ? "submitting" : ""}`}
              disabled={submitted}
            >
              {submitted ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}