import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="the-nav">
        <div className="the-container relative">
          <nav className={`bar flex-center${scrolled ? " scrolled" : ""}`}>
            {/* Background Layer */}
            <div className="bg"></div>

            {/* Left Navigation */}
            <div className="left">
              <NavLink to="/our-story" className="link-main relative">
                <div className="content relative">
                  <div className="inner">
                    <div className="hover-underlinee">
                      <div className="label">Our Story</div>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/products" className="link-main relative">
                <div className="content relative">
                  <div className="inner">
                    <div className="hover-underlinee">
                      <div className="label">Products</div>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/impact" className="link-main relative">
                <div className="content relative">
                  <div className="inner">
                    <div className="hover-underlinee">
                      <div className="label">Impact</div>
                      <div className="line"></div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            {/* Center Logo & Brand Name */}
            <div className="center">
              <NavLink to="/" onClick={() => setMenuOpen(false)} className="navbar-logo-link">
                <img src={Logo} alt="CrossWorld Logo" className="logo-svg" />
                <div className="navbar-brand-text">
                  <span className="navbar-logo-brand">CrossWorld™</span>
                  <span className="navbar-logo-sub">Investment Limited</span>
                </div>
              </NavLink>
            </div>

            {/* Right Navigation */}
            <div className="right">
              <div className="item">
                <NavLink to="/contact" className="link-main relative">
                  <div className="content relative">
                    <div className="inner">
                      <div className="hover-underlinee">
                        <div className="label">Contact</div>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="item">
                <NavLink to="/faq" className="link-main relative">
                  <div className="content relative">
                    <div className="inner">
                      <div className="hover-underlinee">
                        <div className="label">FAQ</div>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              {/* Subscribe link removed per request */}
            </div>

            {/* Hamburger (mobile only) */}
            <button
              className={`hamburger${menuOpen ? " is-open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        <nav className="mobile-nav">
          <NavLink to="/our-story" onClick={() => setMenuOpen(false)}>
            Our Story
          </NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/impact" onClick={() => setMenuOpen(false)}>
            Impact
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </NavLink>
          {/* Subscribe link removed from mobile menu per request */}
        </nav>
      </div>
    </>
  );
}
