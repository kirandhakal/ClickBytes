export default function about(){
    return(
        // <h1 className="text-center mt-10"> this is a about page</h1>
        <section id="about" className="py-24 bg-white mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
          
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">About Our Hospital</h2>
            <p className="text-gray-600 mb-4">
              ClickBytes Hospital has been at the forefront of healthcare innovation, delivering
              world-class treatments with a compassionate touch. Our mission is to provide
              patient-centered care while upholding the highest standards of medical excellence.
            </p>
            <p className="text-gray-600">
              From diagnostics to rehabilitation, we are committed to making every patient's
              journey one of comfort, trust, and healing.
            </p>
          </div>
        </div>
      </section>
    )
}