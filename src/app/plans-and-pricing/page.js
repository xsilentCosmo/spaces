'use client'
import { motion } from "framer-motion";

const plans = [
  {
    name: "Startup",
    price: "₹1000 / MONTH",
    oldAnnual: "₹12000",
    newAnnual: "₹10000 if paid annually",
    features: [
      "Thrissur Address",
      "Postage & Courier Handling",
      "Business Registration",
      "Free Trial",
    ],
  },
  {
    name: "business",
    price: "₹1500 / MONTH",
    oldAnnual: "₹18000",
    newAnnual: "₹15000 if paid annually",
    features: [
      "Thrissur Address",
      "Postage & Courier Handling",
      "Thrissur Landline Number",
      "Business Registration",
      "Free Trial",
    ],
  },
  {
    name: "premium",
    price: "₹2000 / MONTH",
    oldAnnual: "₹24000",
    newAnnual: "₹20000 if paid annually",
    features: [
      "Thrissur Address",
      "Postage & Courier Handling",
      "Thrissur Landline Number",
      "Live Reception Support",
      "Cheque Posting",
      "Business Registration",
      "Free Trial",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-[#f4f9fc] text-[#00375e] px-6 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
        <p className="text-lg text-gray-600 mb-12">
          Flexible plans tailored to your business needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-3 uppercase">{plan.name}</h3>
              <p className="text-xl font-bold text-cyan-500">{plan.price}</p>
              <p className="text-gray-500 line-through">{plan.oldAnnual} annual</p>
              <p className="text-blue-950 font-medium">{plan.newAnnual}</p>

              <ul className="mt-5 space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2 text-left">
                    <span>&#10004;</span> <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full bg-cyan-500 text-white font-semibold py-2 rounded-xl hover:bg-cyan-600 transition">
                Start Free Trial
              </button>
              <button className="w-full border border-cyan-500 text-cyan-500 font-semibold py-2 rounded-xl hover:bg-cyan-100 transition">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
