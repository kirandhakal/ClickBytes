'use client'
import { motion } from 'framer-motion'

export default function Service() {
  const services = [
    {
      title: 'Emergency Care',
      desc: '24/7 emergency response with top-tier trauma facilities and trained professionals.',
      icon: '🚑',
    },
    {
      title: 'Cardiology',
      desc: 'Advanced cardiac diagnostics, minimally invasive surgeries, and expert care.',
      icon: '❤️',
    },
    {
      title: 'Diagnostics',
      desc: 'Precision lab tests, imaging, and screening with state-of-the-art technology.',
      icon: '🧬',
    },
  ]

  return (
    <section id="services" className="py-24 bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-700 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: '0px 10px 20px rgba(59,130,246,0.3)',
              }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
