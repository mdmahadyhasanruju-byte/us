import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">meUus</h3>
            <p className="text-gray-400 text-sm">
              Connecting Everything. A permanent institution for human development.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-green-400 text-sm">Home</Link></li>
              <li><Link to="/ecosystem" className="text-gray-400 hover:text-green-400 text-sm">Ecosystem</Link></li>
              <li><Link to="/pillars" className="text-gray-400 hover:text-green-400 text-sm">Pillars</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link to="/join" className="text-gray-400 hover:text-green-400 text-sm">Join Now</Link></li>
              <li><Link to="/dlas" className="text-gray-400 hover:text-green-400 text-sm">DLAS Assessment</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-400 text-sm">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">Mirpur-2, Dhaka, Bangladesh</p>
            <p className="text-gray-400 text-sm mt-2">meuus.org</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 meUus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
