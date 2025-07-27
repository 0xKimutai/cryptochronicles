import { motion } from 'framer-motion';
import { categories } from '../data/stories';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? `${category.color} text-white shadow-lg`
              : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter; 