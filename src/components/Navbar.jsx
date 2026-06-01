import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

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
    return () => { document.body.style.overflow = ""; };
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

            {/* Center Logo */}
            <div className="center">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                <svg viewBox="0 0 120 37" className="logo-svg">
                  <path
                    d="M43.36 23.926h5.055l-2.505-7.481zm.04-12.39h5.085L55.871 31.2h-5.029l-1.192-3.498h-7.569l-1.16 3.488h-4.925zm17.914 12.379c0 3.01 1.456 4.177 3.213 4.18 1.756.001 3.245-1.462 3.248-4.174.002-2.713-1.482-4.149-3.24-4.15-1.758-.003-3.217 1.134-3.221 4.144zm.223-5.314c.946-1.598 2.893-2.302 4.46-2.3 3.76 0 6.404 2.854 6.4 7.624s-2.657 7.643-6.414 7.639c-1.567 0-3.514-.708-4.458-2.309v6.697h-4.463l.021-19.331h4.462zm16.512 3.769h6.298c-.08-1.846-1.347-2.739-3.052-2.74-1.597 0-3.002.808-3.246 2.734zm10.669 4.288c-1.301 3.443-4.358 4.924-7.251 4.924-4.731 0-7.973-2.872-7.967-7.735 0-4.663 3.55-7.64 7.797-7.636 4.838 0 7.782 3.668 7.478 8.874l-10.786-.013c.134 2.089 1.726 3.039 3.349 3.041 1.703 0 2.757-.593 3.282-1.46zm5.825-4.28h6.299c-.08-1.846-1.35-2.739-3.051-2.74-1.597 0-3.002.807-3.248 2.732zm10.669 4.286c-1.301 3.443-4.356 4.924-7.247 4.924-4.731 0-7.973-2.882-7.969-7.735 0-4.665 3.552-7.642 7.797-7.638 4.84 0 7.782 3.67 7.478 8.874H94.485c.134 2.088 1.726 3.038 3.349 3.038 1.703 0 2.759-.593 3.282-1.46zm2.16-15.064-.02 19.658 4.458.004.021-19.657zm5.655.447v-.442l2.382.005v.439h-.976l-.002 2.546-.439-.002.002-2.544zm2.707 2.546h.439l.002-2.598.928 2.6h.527l.934-2.598-.002 2.598h.439l.002-2.985-.788-.002-.837 2.455-.854-2.456-.788-.001zM9.233.414a8.8 8.8 0 0 0 .205 12.411A8.802 8.802 0 0 0 9.233.415M0 13.565a6.25 6.25 0 0 0 8.863-.146A6.252 6.252 0 0 0 0 13.565m26.502 13.237a10.01 10.01 0 0 1-17.559-9.578 10.076 10.076 0 0 1 .8-1.364 10.012 10.012 0 0 1 16.759 10.942zm-.292-15.238a13.27 13.27 0 0 0-18.285 4.565c-.082.143-.16.273-.234.41a13.336 13.336 0 1 0 18.52-4.965"
                    fill="currentColor"
                  />
                </svg>
              </NavLink>
            </div>

            {/* Right Navigation */}
            <div className="right">
              <div className="item">
                <NavLink to="/news" className="link-main relative">
                  <div className="content relative">
                    <div className="inner">
                      <div className="hover-underlinee">
                        <div className="label">Newsroom</div>
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
              <div className="item">
                <a href="https://apeel.substack.com/" target="_blank" rel="noopener noreferrer" className="link-main relative">
                  <div className="content relative">
                    <div className="inner">
                      <div className="hover-underlinee">
                        <div className="label">Subscribe</div>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
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
          <NavLink to="/our-story" onClick={() => setMenuOpen(false)}>Our Story</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/impact" onClick={() => setMenuOpen(false)}>Impact</NavLink>
          <NavLink to="/news" onClick={() => setMenuOpen(false)}>Newsroom</NavLink>
          <NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
          <a href="https://apeel.substack.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Subscribe</a>
        </nav>
      </div>
    </>
  );
}

