import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import FAQ from '@/pages/FAQ';
import ToS from '@/pages/ToS';
import Privacy from '@/pages/Privacy';
import Contact from '@/pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tos" element={<ToS />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;