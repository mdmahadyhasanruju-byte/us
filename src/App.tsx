import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-navy-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to meUus</h1>
        <p className="text-xl text-gray-300">Connecting Everything - Platform for Human Development</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-navy-900 to-slate-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}
