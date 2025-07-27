import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-dark-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-primary-400">CryptoChronicles</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your gateway to the most compelling stories that shaped the cryptocurrency revolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              CryptoChronicles is dedicated to preserving and sharing the most significant 
              events in cryptocurrency history. From the early days of Bitcoin to the latest 
              developments in DeFi and NFTs, we curate stories that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">What We Cover</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Notorious scams and frauds</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Groundbreaking innovations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Historical milestones</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-dark-800 rounded-xl border border-dark-700"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Why These Stories Matter</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The cryptocurrency space is built on a foundation of innovation, risk, and sometimes 
            controversy. By understanding these pivotal moments, we can better navigate the future 
            of digital finance and learn from both the successes and failures that have shaped 
            this revolutionary technology.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you're a crypto veteran or just beginning your journey, these stories provide 
            valuable insights into the forces that drive the market and the lessons we can learn 
            from the past.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#home"
            className="btn-primary inline-block"
          >
            Explore Stories
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 