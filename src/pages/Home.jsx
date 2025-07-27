import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StoryCard from '../components/StoryCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import { stories } from '../data/stories';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStories = useMemo(() => {
    let filtered = stories;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(story => story.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(story =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const featuredStories = stories.filter(story => story.featured);

  return (
    <div className="min-h-screen bg-dark-900">
      <Hero />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Featured Stories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <StoryCard story={story} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Stories Section */}
          <div id="stories">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                All Stories
              </h2>
            </motion.div>

            {/* Search and Filter */}
            <div className="mb-8">
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
              <CategoryFilter 
                selectedCategory={selectedCategory} 
                onCategoryChange={setSelectedCategory} 
              />
            </div>

            {/* Stories Grid */}
            {filteredStories.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {filteredStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <StoryCard story={story} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-400 text-lg">
                  No stories found matching your criteria.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 