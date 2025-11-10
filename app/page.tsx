'use client'

import Image from "next/image"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black mt-24">
      {/* Hero Section */}
      <section className="relative bg-blue-400 text-white py-32 px-6 text-center flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to Our Hospital
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          Providing compassionate and advanced healthcare for everyone.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
        >
          <a
            href="/service"
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Us
          </a>
        </motion.div>

      
      </section>
    </div>
  )
}
