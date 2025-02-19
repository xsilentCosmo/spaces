'use client'
import { motion } from "framer-motion";
import Link from "next/link";

export default function VirtualOffice() {
  return (
    <section className="w-full bg-white py-10 px-6 md:px-16">
      {/* Logo Row */}
      <div className="flex justify-center mb-4">
        <img src="/logo.png" alt="iiQSpace Logo" className="h-16" />
      </div>

      {/* Tagline Row */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-[#00375e]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Focus on Your Business, Not the Office!
      </motion.h1>

      {/* Short Description */}
      <p className="text-center text-lg text-gray-700 mt-4">
        Let us handle your office needs while you grow your business. Perfect for startups, freelancers, and remote teams.
      </p>

      {/* Buttons Row */}
      <div className="flex justify-center gap-4 mt-6">
        <CustomButton text="View Plans & Pricing" path="/plans-and-pricing" />
        <CustomButton text="Start Free Trial" path="/plans-and-pricing" />
        <CustomButton text="Sign Up Now" path="/" />
      </div>

      <hr className="border-t-2 border-gray-200 my-10" />

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold text-[#00375e]">Virtual Office in Thrissur</h2>
          <p className="text-gray-700">
            iiQSpace offers a prestigious business address in Thrissur at an affordable price. Get a professional image without the high costs of a physical office.
          </p>
          <p className="text-gray-700">
            Impress your clients with a local business address and professional phone services. Enjoy mail handling, call answering, and more.
          </p>
        </motion.div>

        {/* Right Column - Why iiQSpace */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold text-[#00375e]">Why Choose iiQSpace?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Prime business address in Thrissur.</li>
            <li>Cost-effective solution for startups & freelancers.</li>
            <li>Professional call answering services.</li>
            <li>Meeting rooms available on demand.</li>
            <li>Instant activation with no setup delays.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function CustomButton({ text, path }) {
  return (
    <Link href={path}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#00375e] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#91e0ed] hover:text-[#00375e] transition-all"
      >
        {text}
      </motion.button>
    </Link>
  );
}
