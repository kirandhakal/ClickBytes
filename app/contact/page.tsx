export default function contact(){
    return(
        // <h2 className="text-center mt-100">hello this is contact page</h2>
        <section id="contact" className="py-24 mt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <form className="bg-white shadow-lg rounded-2xl p-8 text-left space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>

            <div className="flex flex-col justify-center items-center">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1592514051414!2d85.31751687540798!3d27.712007676187045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191c1c1c1c1b%3A0xfedbe587c9565c90!2sHospital!5e0!3m2!1sen!2snp!4v1687444444444!5m2!1sen!2snp"
                width="100%"
                height="350"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              ></iframe> */}
            </div>
          </div>
        </div>
      </section>
    )
}