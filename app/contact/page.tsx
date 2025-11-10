"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 mt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-700 mb-10"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-8 text-left space-y-4"
          >
            <div>
              <label className="block text-xl font-medium text-black mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-black mb-1">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              type="submit"
              className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-800 transition w-full"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-12">
              Get in Touch
            </h3>
            <p className="text-gray-600 max-w-md">
              We'd love to hear from you! Reach out anytime and we’ll respond as
              soon as we can.
            </p>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-center justify-center gap-3">
                <span className="text-blue-600 text-xl">📞</span>
                <p>+977 9800000000</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-blue-600 text-xl">📧</span>
                <p>support@hospital.com</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-blue-600 text-xl">📍</span>
                <p> Kathmandu, Nepal</p>
              </div>
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
