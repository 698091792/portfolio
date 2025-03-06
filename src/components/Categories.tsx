import { useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profilePic.jpg';

const projects = {
  'Web Development': {
    description: 'Build modern web applications using the latest technologies.',
    image: '',
    links: ['https://jpteks.cm'],
  },
  'Data Entry': {
    description: 'Accurate and efficient data entry for businesses.',
    image: 'https://source.unsplash.com/400x300/?data',
    links: ['https://example.com/data-entry'],
  },
  'Content Writing': {
    description: 'Engaging content that drives traffic and boosts SEO.',
    image: 'https://source.unsplash.com/400x300/?writing',
    links: ['https://example.com/content-writing'],
  },
  'LinkedIn Marketing': {
    description: 'Increase brand visibility with strategic LinkedIn marketing.',
    image: 'https://source.unsplash.com/400x300/?marketing',
    links: ['https://example.com/linkedin-marketing'],
  },
  'Digital Strategy': {
    description: 'Crafting digital strategies to enhance online presence.',
    image: 'https://source.unsplash.com/400x300/?strategy',
    links: ['https://example.com/digital-strategy'],
  },
  'Graphic Design': {
    description: 'Creative and compelling visual designs for brands.',
    image: 'https://source.unsplash.com/400x300/?design',
    links: ['https://https://fr.pinterest.com/jeanjuniorbilogue/'],
  }
};

const categories = Object.keys(projects);

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div id="categories" className="text-center bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <h3 className="text-2xl font-semibold text-white mb-8">Categories Project Done</h3>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setSelectedCategory(category);
              document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category 
                ? "bg-purple-600 text-white" 
                : "bg-gray-800/50 text-gray-300 hover:text-purple-500 hover:bg-gray-700/50"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-700 p-6 rounded-lg text-white max-w-xl mx-auto"
        >
          <h4 className="text-xl font-bold mb-4">{selectedCategory}</h4>
          <img 
            src={projects[selectedCategory].image} 
            alt={selectedCategory} 
            className="w-full h-auto rounded-md mb-4 object-cover"
          />
          <p className="mb-4">{projects[selectedCategory].description}</p>
          {projects[selectedCategory].links.length > 0 && (
            <div>
              {projects[selectedCategory].links.map((link, index) => (
                <a 
                  key={index}
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-purple-400 hover:underline font-semibold mb-2"
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
