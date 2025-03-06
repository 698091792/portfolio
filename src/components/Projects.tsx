import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    category: 'Web Development',
    items: [
      {
        title: 'Mentor Guru App',
        description: 'A full-stack app for edutech to manage education in Cameroon.',
        link: '#',
        technologies: [
          { name: 'React', progress: 80 },
          { name: 'Node.js', progress: 70 },
          { name: 'MongoDB', progress: 75 },
          { name: 'Express', progress: 70 },
        ],
      },
     
    ],
  },
  {
    category: 'Graphic Design',
    items: [
      {
        title: 'Brand Logo Design',
        description: 'Modern, minimalist logo designs for brands.',
        link: '#',
        technologies: [
          { name: 'Adobe Illustrator', progress: 90 },
          { name: 'Figma', progress: 85 },
        ],
      },
      {
        title: 'Social Media Banners',
        description: 'Eye-catching graphics for marketing campaigns.',
        link: '#',
        technologies: [
          { name: 'Photoshop', progress: 80 },
          { name: 'Canva', progress: 70 },
        ],
      },
    ],
  },
  {
    category: 'SEO Optimization',
    items: [
      {
        title: 'SEO Audit Report',
        description: 'Comprehensive SEO analysis for better rankings.',
        link: '#',
        technologies: [
          { name: 'Google Analytics', progress: 85 },
          { name: 'SEMrush', progress: 75 },
          { name: 'Ahrefs', progress: 80 },
        ],
      },
      {
        title: 'Keyword Research',
        description: 'Targeted keywords for high search visibility.',
        link: '#',
        technologies: [
          { name: 'Google Keyword Planner', progress: 90 },
          { name: 'Moz', progress: 80 },
        ],
      },
    ],
  },
  {
    category: 'Copywriting',
    items: [
      {
        title: 'Landing Page Copy',
        description: 'High-converting sales pages.',
        link: '#',
        technologies: [
          { name: 'Copywriting', progress: 85 },
          { name: 'Sales Psychology', progress: 80 },
        ],
      },
      {
        title: 'Product Descriptions',
        description: 'Engaging descriptions for e-commerce products.',
        link: '#',
        technologies: [
          { name: 'Content Writing', progress: 80 },
          { name: 'Storytelling', progress: 75 },
        ],
      },
    ],
  },
  
  {
    category: 'SEO Content',
    items: [
      {
        title: 'Tech Blog Posts',
        description: 'In-depth articles optimized for search engines.',
        link: '#',
        technologies: [
          { name: 'SEO Writing', progress: 85 },
          { name: 'Content Optimization', progress: 80 },
        ],
      },
      {
        title: 'Crypto & Finance Blogs',
        description: 'Educational content for crypto and finance industries.',
        link: '#',
        technologies: [
          { name: 'SEO Content Writing', progress: 80 },
          { name: 'Crypto Knowledge', progress: 55 },
        ],
      },
    ],
  },
  {
    category: 'Content Creation',
    items: [
      {
        title: 'YouTube Script Writing',
        description: 'Compelling scripts for video content.',
        link: '#',
        technologies: [
          { name: 'Scriptwriting', progress: 85 },
          { name: 'Audience Engagement', progress: 80 },
        ],
      },
      {
        title: 'Social Media Content',
        description: 'Engaging posts for audience growth.',
        link: '#',
        technologies: [
          { name: 'Social Media Strategy', progress: 80 },
          { name: 'Content Creation', progress: 75 },
        ],
      },
    ],
  },
];

export default function Projects() {
  const [visibleSections, setVisibleSections] = useState(
    projects.reduce((acc, project) => ({ ...acc, [project.category]: true }), {})
  );

  const toggleSection = (category: string) => {
    setVisibleSections((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="py-24 bg-gray-900" id="projectsn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400">Explore my projects across different domains.</p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {projects.map((section, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4">
              {/* Section Header with Toggle */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section.category)}
              >
                <h3 className="text-2xl font-bold text-purple-400">{section.category}</h3>
                <motion.div
                  animate={{ rotate: visibleSections[section.category] ? 0 : -90 }}
                  transition={{ duration: 0.3 }}
                >
                  {visibleSections[section.category] ? '▼' : '▶'}
                </motion.div>
              </div>

              {/* Projects List */}
              {visibleSections[section.category] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {section.items.map((project, i) => (
                    <div
                      key={i}
                      className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition"
                    >
                      <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-400">{project.description}</p>
                      <a href={project.link} className="text-purple-400 hover:underline mt-2 block">
                        View Project
                      </a>
                      {/* Technologies List with Progress Bar */}
                      <div className="mt-4">
                        <p className="text-gray-400">Technologies: </p>
                        <ul className="list-disc list-inside text-gray-300">
                          {project.technologies.map((tech, index) => (
                            <li key={index}>
                              <div className="flex items-center justify-between">
                                <span>{tech.name}</span>
                                <span className="text-gray-400">{tech.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-600 rounded-full mt-2">
                                <div
                                  className="h-2 bg-purple-500 rounded-full"
                                  style={{ width: `${tech.progress}%` }}
                                ></div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
