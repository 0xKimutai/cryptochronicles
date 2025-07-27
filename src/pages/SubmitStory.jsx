import { useState } from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/stories';

const SubmitStory = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    imageUrl: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Story submitted successfully! (This is a demo - no actual submission)');
      setFormData({
        title: '',
        description: '',
        category: '',
        imageUrl: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-dark-900 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Submit a <span className="text-primary-400">Story</span>
          </h1>
          <p className="text-xl text-gray-300">
            Share the crypto stories that deserve to be told.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Story Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter the story title..."
            />
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Story Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell us the story in detail..."
            />
          </div>

          {/* Category Field */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a category</option>
              {categories.filter(cat => cat.id !== 'all').map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Image URL Field */}
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-2">
              Image URL (Optional)
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-sm text-gray-400 mt-1">
              Provide a URL to an image that represents your story
            </p>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </div>
            ) : (
              'Submit Story'
            )}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-dark-800 rounded-xl border border-dark-700"
        >
          <h3 className="text-lg font-semibold text-white mb-3">Submission Guidelines</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Ensure your story is factual and well-researched</li>
            <li>• Include relevant dates and key figures</li>
            <li>• Provide context for why this story matters</li>
            <li>• Use clear, engaging language</li>
            <li>• All submissions will be reviewed before publication</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SubmitStory; 