import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
