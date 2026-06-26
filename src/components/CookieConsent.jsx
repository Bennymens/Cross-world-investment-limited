import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CookieConsent.css";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner slightly for better entry animation feel
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    dismissBanner();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    dismissBanner();
  };

  const dismissBanner = () => {
    setIsClosing(true);
    // Wait for the slide-out animation to finish before removing from DOM
    setTimeout(() => {
      setShowBanner(false);
      setIsClosing(false);
    }, 400); // matches CSS transition duration
  };

  if (!showBanner) return null;

  return (
    <div className={`cookie-consent-banner ${isClosing ? "slide-out" : "slide-in"}`}>
      <div className="cookie-content">
        <div className="cookie-icon-wrapper">
          <svg
            className="cookie-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5h.01" />
            <path d="M16.5 16.5h.01" />
            <path d="M12 12h.01" />
            <path d="M7.5 14.5h.01" />
            <path d="M14.5 9.5h.01" />
          </svg>
        </div>
        <div className="cookie-text-group">
          <h4 className="cookie-title">We value your privacy</h4>
          <p className="cookie-description">
            We use cookies to optimize your browsing experience, analyze site traffic, and deliver personalized content. 
            View our{" "}
            <Link to="/cookie-policy" className="cookie-link">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
        </div>
      </div>
      <div className="cookie-buttons">
        <button onClick={handleDecline} className="cookie-btn cookie-btn-decline">
          Decline
        </button>
        <button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
          Accept All
        </button>
      </div>
    </div>
  );
}
