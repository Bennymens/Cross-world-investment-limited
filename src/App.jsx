import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Products from "./pages/Products";
import Impact from "./pages/Impact";
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
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/business-plan" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
