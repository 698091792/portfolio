import { motion } from 'framer-motion';
import { Code2, PenTool, Search, Linkedin, BookOpen, Cpu, Palette } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Creating responsive, modern web applications with cutting-edge technologies.'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO Optimization',
    description: 'Improving website visibility and search engine rankings.'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Copywriting',
    description: 'Compelling content that engages and converts.'
  },
  {
    icon: <Linkedin className="w-8 h-8" />,
    title: 'LinkedIn Ghostwriting',
    description: 'Professional LinkedIn content that builds your personal brand.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'SEO Content',
    description: 'SEO-optimized content that drives organic traffic.'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Graphic Design',
    description: 'Creative designs that enhance brand identity and user experience.'
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-gray-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all"
            >
              <div className="text-purple-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
