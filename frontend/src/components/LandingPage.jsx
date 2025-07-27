// src/pages/LandingPage.jsx or src/LandingPage.jsx

import { motion } from 'framer-motion';
import { Leaf, BarChart, Users, AlertTriangle } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 p-6 flex flex-col justify-center items-center">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 drop-shadow-md">
          🌱 Green Return Assistant
        </h1>
        <p className="text-lg text-gray-700 mb-6 px-4">
          Empowering eco-conscious returns with AI for a sustainable future in retail.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg shadow-lg"
          >
            Explore Dashboard
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-green-600 text-green-700 hover:bg-green-100 px-6 py-3 rounded-xl text-lg"
          >
            Login
          </motion.button>
        </div>

        {/* Features Section */}
        <div className="flex gap-4 justify-center flex-wrap">
          <FeatureCard
            icon={<Leaf className="w-8 h-8 text-green-600" />}
            title="Eco Score Analysis"
            description="Analyze product sustainability with AI-powered insights."
          />
          <FeatureCard
            icon={<BarChart className="w-8 h-8 text-green-600" />}
            title="Real-Time Dashboard"
            description="Visualize environmental impact in an interactive way."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-green-600" />}
            title="User-Centered Design"
            description="Intuitive, responsive, and built for all users."
          />
        </div>

        {/* Sustainability Score Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 bg-white/90 p-6 rounded-xl shadow-lg border border-green-200"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">♻️ Product Sustainability Scores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ScoreCard
              product="Eco-Friendly Toothbrush"
              score={92}
              status="Sustainable"
              color="bg-green-100 text-green-700 border-green-300"
            />
            <ScoreCard
              product="Plastic Water Bottle"
              score={25}
              status="Not Sustainable"
              color="bg-red-100 text-red-700 border-red-300"
              icon={<AlertTriangle className="text-red-500 w-5 h-5 inline ml-2" />}
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 w-72 m-2 border border-green-200 transition-transform"
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-green-700 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}

// Score Card Component
function ScoreCard({ product, score, status, color, icon }) {
  return (
    <div className={`p-4 rounded-lg border ${color} shadow-md`}>
      <h3 className="text-lg font-semibold">{product}</h3>
      <p className="text-sm mt-1">
        Score: <strong>{score}/100</strong> {icon && icon}
      </p>
      <span className="text-xs mt-2 inline-block font-medium uppercase">{status}</span>
    </div>
  );
}
