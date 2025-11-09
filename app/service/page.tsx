export default function service(){
    return(
        // <h1 className="text-center mt-100"> this is a service page</h1>
        <section id="services" className="py-24 bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
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
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}