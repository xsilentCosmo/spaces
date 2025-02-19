'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is a Virtual Office?",
    answer:
      "A virtual office provides businesses with a professional address and communication services without the need for a physical workspace.",
  },
  {
    question: "Do you offer meeting rooms and coworking spaces?",
    answer: "Yes, we provide fully equipped meeting rooms and coworking spaces in Thrissur. You can book them on-demand for client meetings, interviews, and other business needs.",
  },
  {
    question: "What locations do you offer?",
    answer: "We offer virtual office services in Thrissur.",
  },
  {
    question: "What are the benefits of a Virtual Office?",
    answer:
      "It allows businesses to have a prestigious address, mail handling services, and professional call answering without the overhead costs of a physical office.",
  },
  {
    question: "How quickly can I set up my virtual office?",
    answer:
      "You can set up your virtual office almost instantly after completing the registration and verification process.",
  },
  {
    question: "How much does a virtual office in Thrissur cost?",
    answer: "Our pricing is affordable and flexible, depending on the plan you choose. Contact us for customized pricing based on your business needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-[#f4f9fc] text-[#00375e] px-6 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center font-semibold text-lg py-3 hover:text-cyan-700 transition duration-300"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className={`transition-transform ${openIndex === index ? "text-cyan-500" : "text-gray-400"}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="mt-2 text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
