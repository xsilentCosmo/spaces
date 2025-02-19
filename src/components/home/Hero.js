'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Open a Virtual Office in Thrissur',
    description: ['Expand your business presence', 'Get a prime business address', 'Enhance credibility'],
    buttonText: 'Get Started',
    learnMore: false,
    image: '/images/hero/remote-team-animate.svg',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Manage Your Business Calls Professionally!',
    description: [
      'Dedicated phone number',
      'Call forwarding to your mobile',
      'Live call answering in your company’s name',
      'Welcome greeting and IVR menu',
      'Online call tracking & recording',
    ],
    buttonText: 'Learn More',
    learnMore: true,
    image: '/images/hero/calling-animate.svg',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Flexible Meeting Rooms in Thrissur.',
    description: [
      'Plug and Play type Executive Offices',
      'Interview Rooms with reception support',
      'Conference and Training Rooms',
      'HD Video Conferencing Studio'
    ],
    buttonText: 'Start Free Trial',
    learnMore: true,
    image: '/images/hero/shared-workspace-animate.svg',
    bgColor: 'bg-green-50',
  },
];

const listVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      {/* Notification Banner */}
      {isNotificationVisible && (
        <div className="bg-cyan-400 animate-bounce text-black text-center py-2 px-4 absolute top-0 w-full z-10 shadow-md">
          <span className='pt-4'>Special Offer: 20% Off on all plans until the end of the month!</span>
          <button
            onClick={() => setIsNotificationVisible(false)}
            className="absolute top-1 right-2 text-black font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section
        className={`relative w-full h-[500px] flex items-center justify-center overflow-hidden transition-all duration-500 ${slides[currentSlide].bgColor}`}
      >
        {/* Left Navigation Button */}
        <button
          className="absolute left-5 bg-white text-cyan-300 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex w-full max-w-7xl px-6 xl:px-20">
          {/* Left Column: Image */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 flex justify-center items-center"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              width={500}
              height={500}
              className="object-contain"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            key={currentSlide + '-text'}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 flex flex-col justify-center space-y-4"
          >
            <h1 className="text-4xl font-bold text-[#00375e]">{slides[currentSlide].title}</h1>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="list-disc list-inside text-lg text-gray-600 space-y-2"
            >
              {slides[currentSlide].description.map((point, index) => (
                <motion.li key={index} variants={listVariants}>
                  {point}
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-300 text-[#00375e] font-semibold px-6 py-3 rounded-md hover:bg-cyan-400 transition shadow-md"
              >
                {slides[currentSlide].buttonText}
              </motion.button>

              {slides[currentSlide].learnMore && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition shadow-md"
                >
                  Learn More
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Navigation Button */}
        <button
          className="absolute right-5 bg-white text-cyan-300 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <ChevronRight size={24} />
        </button>
      </section>
    </section>
  );
};

export default HeroSection;