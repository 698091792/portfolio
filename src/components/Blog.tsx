import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
    mediumUrl: 'https://medium.com/@yourprofile/future-of-web-development-2024'
  },
  {
    title: 'Mastering SEO: A Complete Guide for 2024',
    excerpt: 'Learn the essential strategies and techniques to improve your website visibility and ranking in search engines.',
    date: 'Mar 12, 2024',
    readTime: '7 min read',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2074',
    mediumUrl: 'https://medium.com/@yourprofile/mastering-seo-2024'
  },
  {
    title: 'Building Your Personal Brand on LinkedIn',
    excerpt: 'Discover how to leverage LinkedIn to build a strong personal brand and attract professional opportunities.',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    category: 'LinkedIn',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=2070',
    mediumUrl: 'https://medium.com/@yourprofile/building-your-personal-brand-linkedin'
  }
];

const categories = [
  'Web Development',
  'Computer Engineering',
  'Data Entry',
  'Content Writing',
  'LinkedIn Marketing',
  'Digital Strategy',
  'Graphic Design'
];

export default function Blog() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the latest trends, tips, and insights in web development, SEO, and digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-300">{post.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <span className="text-purple-500 font-medium flex items-center">
                      Read on Medium <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8"></h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={`#${category.toLowerCase().replace(' ', '-')}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 hover:text-purple-500 hover:bg-gray-700/50 transition-all"
               >
               
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
