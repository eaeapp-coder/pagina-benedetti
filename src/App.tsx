/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Professionals from './pages/Professionals';
import Specialties from './pages/Specialties';
import SpecialtyDetail from './pages/SpecialtyDetail';
import ProfessionalProfile from './pages/ProfessionalProfile';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Insurances from './pages/Insurances';
import BlogArchive from './pages/BlogArchive';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import { motion, AnimatePresence } from 'motion/react';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/profesionales" element={<Professionals />} />
        <Route path="/profesionales/:id" element={<ProfessionalProfile />} />
        <Route path="/especialidades" element={<Specialties />} />
        <Route path="/especialidades/:id" element={<SpecialtyDetail />} />
        <Route path="/obras-sociales" element={<Insurances />} />
        <Route path="/blog" element={<BlogArchive />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/turnos" element={<Booking />} />
        {/* Fallback routes for demo */}
        <Route path="/nosotros" element={<Home />} />
        <Route path="/privacidad" element={<Home />} />
        <Route path="/terminos" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-[#0088CC]">
        <Header />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}


