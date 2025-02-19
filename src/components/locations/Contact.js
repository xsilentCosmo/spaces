'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      setIsSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', mobile: '', message: '' }); // Reset form fields
    }, 2000);
  };

  return (
    <motion.section
      className="bg-white py-12 mt-8 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-[#00375e] text-center">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
        </p>

        {isSubmitted ? (
          <div className="mt-6 text-center text-lg text-green-600">
            <p>Your message has been sent successfully!</p>

            {/* Mock Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] md:w-[400px] text-center">
                <h3 className="text-xl font-semibold text-[#00375e]">Thank you for contacting us!</h3>
                <p className="mt-2 text-gray-600">We'll get back to you shortly. Meanwhile, feel free to explore our website.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 bg-cyan-300 text-[#00375e] font-semibold py-2 px-4 rounded-md hover:bg-cyan-400 focus:outline-none"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#00375e]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-cyan-300 focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#00375e]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-cyan-300 focus:outline-none"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-lg font-medium text-[#00375e]">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-cyan-300 focus:outline-none"
                placeholder="Your Mobile Number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-[#00375e]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:ring-cyan-300 focus:outline-none"
                placeholder="Your Message"
                rows={5}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-cyan-300 text-[#00375e] font-semibold py-3 px-6 rounded-md shadow-md hover:bg-cyan-400 focus:outline-none disabled:bg-gray-400"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default ContactForm;