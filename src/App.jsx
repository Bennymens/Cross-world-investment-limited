import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import "./App.css";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Products from "./pages/Products";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import LegalPage from "./pages/LegalPage";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/business-plan" element={<Contact />} />
          <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/terms-of-service" element={<LegalPage type="terms" />} />
          <Route path="/esg/ethics-corporate-compliance" element={<LegalPage type="compliance" />} />
          <Route path="/cookie-policy" element={<LegalPage type="cookie" />} />
          <Route path="/general-terms-and-conditions-of-sale" element={<LegalPage type="sales-terms" />} />
        </Routes>
      </div>

      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
