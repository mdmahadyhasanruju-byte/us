import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import Pillars from './pages/Pillars';
import PillarDetail from './pages/PillarDetail';
import Global from './pages/Global';
import Join from './pages/Join';
import DLASPage from './pages/DLAS';
import About from './pages/About';
import FAQ from './pages/FAQ';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-navy-900 to-slate-900 text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/pillars" element={<Pillars />} />
          <Route path="/pillars/:slug" element={<PillarDetail />} />
          <Route path="/global" element={<Global />} />
          <Route path="/join" element={<Join />} />
          <Route path="/dlas" element={<DLASPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}
