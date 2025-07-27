import { motion } from 'framer-motion';
import { categories } from '../data/stories';

const StoryCard = ({ story }) => {
  const category = categories.find(cat => cat.id === story.category);

  return (
    <motion.div
      className="card card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative">
        <img
          src={story.imageUrl}
          alt={story.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white ${category.color}`}>
          {category.name}
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white line-clamp-2">
          {story.title}
        </h3>
        
        <p className="text-gray-300 text-sm line-clamp-3">
          {story.summary}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <span className="text-xs text-gray-400">
            {new Date(story.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          
          <a
            href="#"
            className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors duration-200"
          >
            Read more →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryCard; 