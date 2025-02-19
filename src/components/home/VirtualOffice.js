'use client';

import { motion } from 'framer-motion';
import { Building, Phone, Users } from 'lucide-react';

const features = [
  {
    icon: <Building size={40} className="text-sky-600" />,
    title: 'Prestigious Business Address',
    description:
      'Get a prime business address in Thrissur to enhance your company’s credibility and professionalism.',
  },
  {
    icon: <Phone size={40} className="text-green-600" />,
    title: 'Dedicated Virtual Phone',
    description:
      'Secure a local landline number with IVR, call forwarding, voicemail, and call recording features.',
  },
  {
    icon: <Users size={40} className="text-purple-600" />,
    title: 'Live Receptionist Service',
    description:
      'Ensure professional call handling with our trained receptionists who answer in your company’s name.',
  },
];

const VirtualOffice = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00375e]">Virtual Office Solutions in Thrissur</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Establish a strong business presence without the cost of a physical office. Enjoy a professional address,
          virtual phone, and receptionist services at an affordable price.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualOffice;
