import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
          
    {/* <h1>hello</h1> */}

 <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0">
        
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Compassionate Care, Advanced Medicine
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            At ClickBytes Hospital, we bring innovation and empathy together to heal and inspire.
          </p>
         
        </div>
      </section>

    </div>
  );
}
