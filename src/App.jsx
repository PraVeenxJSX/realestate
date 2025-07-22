import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingChatButtons from './components/FloatingChatButtons';
import About from './components/About';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import PropertyListings from './components/PropertyListings';
import WhyChooseUs from './components/WhyChooseUs';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ProjectsPage = () => (
  <div>
    <PropertyListings />
    <WhyChooseUs />
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChatButtons />
      </div>
    </Router>
  );
}

export default App;