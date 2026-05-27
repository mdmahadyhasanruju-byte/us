import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            meUus
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Connecting Everything
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            A permanent institution for human development built on Islamic principles, real operations, and honest framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Join the Founding
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500/10 rounded-full text-lg font-semibold transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
