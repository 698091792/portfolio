import Scene from '../components/Scene';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 mix-blend-multiply" />
          <Scene />
        </div>

        <div className="relative z-10 text-center px-4 mt-48 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Digital Solutions
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto"
          >
            Web Development • Transcription • Data Entry • Content Creation • Graphic Design
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            {[
              { Icon: Github, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Twitter, href: '#' },
              { Icon: Mail, href: '#' }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-purple-500" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
