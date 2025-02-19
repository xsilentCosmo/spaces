import React from 'react';
import ContactUsForm from '../../components/locations/Contact';

export const LocationData = () => {
  return (
    <>
      <section className="relative bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#00375e] text-center">Our Location</h1>

          <p className="mt-4 text-lg text-gray-600 text-center">
            We are located at a prime business address in Thrissur. Feel free to visit us or
            reach out for more details.
          </p>

          {/* Two-column layout */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Google Map Embed */}
            <div className="relative w-full h-[20rem] rounded-lg shadow-lg max-h-80">
              <iframe
                className="absolute w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.655923675443!2d76.2167651!3d10.527743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf17942223d786c9%3A0xaeef903a0b245704!2siiQ%20space!5e0!3m2!1sen!2sin!4v1739603250907!5m2!1sen!2sin"
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>

            {/* Right Column: Location Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#00375e]">Location Details</h2>
              <div className="text-lg text-gray-600">
                <p>
                  <strong>Address:</strong> 7th floor, Capital City, Round North, Thrissur, Kerala 680020
                </p>
                <p>
                  <strong>Phone:</strong> +91 9656250000
                </p>
                <p>
                  <strong>Whatsapp:</strong> +91 9656250000
                </p>
                <p>
                  <strong>Email:</strong> contact@iiqspace.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
