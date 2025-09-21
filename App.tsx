import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AccessibilityControls from './components/AccessibilityControls';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import GenerateAgreement from './pages/GenerateAgreement';
import './styles/accessibility.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AccessibilityControls />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/generate-agreement" element={<GenerateAgreement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;