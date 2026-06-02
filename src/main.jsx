import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import favicon from "./assets/Favicon.png";

// Ensure the site uses high-resolution favicon links bundled by Vite
const setFavicons = (href) => {
  const head = document.getElementsByTagName("head")[0];

  // remove existing icon links so we can replace them cleanly
  const oldIcons = head.querySelectorAll(
    "link[rel~='icon'], link[rel='apple-touch-icon']",
  );
  oldIcons.forEach((n) => n.parentNode && n.parentNode.removeChild(n));

  const sizes = [16, 32, 96, 192];
  sizes.forEach((s) => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = `${s}x${s}`;
    link.href = href;
    head.appendChild(link);
  });

  // Add an Apple touch icon for home-screen / pinned contexts
  const apple = document.createElement("link");
  apple.rel = "apple-touch-icon";
  apple.sizes = "180x180";
  apple.href = href;
  head.appendChild(apple);
};

setFavicons(favicon);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
