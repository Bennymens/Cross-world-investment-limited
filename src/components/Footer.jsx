import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../assets/Logo.png";

const navPrimaryLinks = [
  { to: "/our-story", label: "Our Story" },
  { to: "/products", label: "Products" },
  { to: "/impact", label: "Impact" },
  { to: "/news", label: "Media" },
  { to: "/faq", label: "FAQs" },
  { to: "/news-center", label: "News Center" },
  { href: "https://apeel.substack.com/", label: "Subscribe" },
];

const navSecondaryLinks = [
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-of-service", label: "Terms of Service" },
  { to: "/esg/ethics-corporate-compliance", label: "Compliance" },
  { to: "/cookie-policy", label: "Cookie Policy" },
  {
    to: "/general-terms-and-conditions-of-sale",
    label: "General Terms and Conditions of Sale",
  },
];

const socialLinks = [
  {
    href: "https://www.youtube.com/c/ApeelSciences",
    label: "YouTube",
    icon: "youtube",
  },
  {
    href: "https://twitter.com/apeelsciences",
    label: "Twitter",
    icon: "twitter",
  },
  {
    href: "https://www.pinterest.com/apeelsciences/",
    label: "Pinterest",
    icon: "pinterest",
  },
  {
    href: "https://www.instagram.com/apeel_sciences",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.linkedin.com/company/apeel",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://www.facebook.com/Apeel/",
    label: "Facebook",
    icon: "facebook",
  },
];

const SocialIcon = ({ icon }) => {
  const icons = {
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136c.5-1.884.5-5.814.5-5.814s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    pinterest: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.204 0 1.031.397 2.138.893 2.738a.395.395 0 01.09.375c-.099.408-.321 1.302-.365 1.479-.057.234-.19.284-.438.17-1.63-.759-2.651-3.14-2.651-5.057 0-4.119 2.993-7.902 8.625-7.902 4.528 0 8.048 3.228 8.048 7.54 0 4.5-2.837 8.118-6.777 8.118-1.324 0-2.571-.688-2.999-1.503 0 0-.655 2.498-.814 3.104-.294 1.127-1.085 2.54-1.614 3.402 1.126.331 2.316.51 3.548.51 6.621 0 11.988-5.367 11.988-11.989C24.005 5.368 18.638 0 12.017 0z" />
      </svg>
    ),
    instagram: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 11-4.63-4" />
        <circle cx="17.5" cy="6.5" r="1.5" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554V14.84c0-1.336-.024-3.055-1.86-3.055-1.86 0-2.145 1.45-2.145 2.948v5.719H9.334V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.368-1.848 3.602 0 4.267 2.369 4.267 5.451v6.288zM5.337 7.433a2.058 2.058 0 110-4.117 2.058 2.058 0 010 4.117zM6.559 20.452H3.935V9h2.624v11.452z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.142v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
  };
  return icons[icon] || null;
};

const FooterLink = ({ to, href, label }) => {
  const common = (
    <div className="hover-underlinee">
      <span className="label">{label}</span>
      <div className="line" />
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="link-main">
        {common}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-main"
    >
      {common}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="the-footer">
      <div className="footer-inner">
        {/* Column 1: Title & Logo */}
        <div className="footer-column footer-col-left">
          <div className="footer-title">Stay fresh.</div>
          <div className="footer-bottom-section footer-logo-container">
            <Link to="/" className="footer-logo-link">
              <img src={Logo} alt="Cross World Logo" className="footer-logo-icon" />
              <div className="footer-brand-text">
                <span className="footer-logo-brand">Cross World™</span>
                <span className="footer-logo-sub">Investment Limited</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Column 2: Primary Links & Address + Socials */}
        <div className="footer-column footer-col-middle">
          <div className="footer-nav-primary">
            {navPrimaryLinks.map((link, idx) => (
              <FooterLink
                key={idx}
                to={link.to}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>

          <div className="footer-bottom-section footer-address-container">
            <div className="footer-address-block">
              <div className="address-title">Ghana</div>
              <div className="address-details">
                No. 14 Liberation Road
                <br />
                Cantonments, Accra
              </div>
            </div>

            <div className="footer-social">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Secondary Links & Legal + Copyright */}
        <div className="footer-column footer-col-right">
          <div className="footer-nav-secondary">
            {navSecondaryLinks.map((link, idx) => (
              <FooterLink key={idx} to={link.to} label={link.label} />
            ))}
          </div>

          <div className="footer-bottom-section footer-legal-container">
            <div className="footer-nav-legal">
              {legalLinks.map((link, idx) => (
                <FooterLink key={idx} to={link.to} label={link.label} />
              ))}
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()}, Cross World Investment Limited.
              <br />
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
