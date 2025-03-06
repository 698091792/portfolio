import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_g70bubi',  // Remplace avec ton Service ID
      'template_r85ge88', // Remplace avec ton Template ID
      e.target,
      'sQQEvE6OYYVurxyRB' // Remplace avec ton User ID
    )
    .then((result) => {
      console.log('Email envoyé:', result.text);
      setSuccessMessage('Message envoyé avec succès !');
      e.target.reset();
    })
    .catch((error) => {
      console.error('Erreur:', error.text);
      setSuccessMessage('Une erreur est survenue, veuillez réessayer.');
    });
  };

  return (
    <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can work together to achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full rounded-md bg-gray-800/50 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full rounded-md bg-gray-800/50 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="mt-1 block w-full rounded-md bg-gray-800/50 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800/50 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Send Message
              </motion.button>
              {successMessage && <p className="text-center text-green-400 mt-4">{successMessage}</p>}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Location</h3>
                <p className="mt-1 text-gray-400">Douala, Logpom</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="mt-1 text-gray-400">juniorbilogue@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="mt-1 text-gray-400">+237 698091792 / 681307798</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">WhatsApp</h3>
                <p className="mt-1 text-gray-400">
                  <a
                    href="https://wa.me/237698091792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
