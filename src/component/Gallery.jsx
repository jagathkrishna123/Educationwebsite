import React from "react";
import { motion } from "motion/react";

// Import your local images
import slideimg1 from "../assets/slideimg1.jpg";
import slideimg2 from "../assets/slideimg2.jpg";
import slideimg3 from "../assets/slideimg3.jpg";
import slideimg4 from "../assets/slideimg4.jpg";
import slideimg5 from "../assets/slideimg5.jpg";
import slideimg6 from "../assets/slideimg6.jpg";

const Gallery = () => {
  return (
    <main className="bg-slate-950 text-white">
      {/* === Sticky Intro Section === */}
      <section className=" w-full grid place-content-center sticky top-0 z-10 mt-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[length:54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="flex flex-col items-center justify-center text-center mt-12">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center font-hind font-medium text-[14px] sm:text-[16px] text-cyan-700 bg-cyan-500/10 border border-cyan-700/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 w-fit mx-auto"
      >
        Gallery
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-lexend text-[22px] md:text-[36px] text-center font-bold text-gray-800 mt-2"
      >
        Explore Our <span className="text-green-600">Showcase</span>
      </motion.p>
    </div>
      </section>

      {/* === Gallery Section === */}
      <section className="w-full bg-slate-950 pb-20 mt-6">
        <div className="grid grid-cols-12 gap-4 px-4 md:px-8">
          {/* === Left Column === */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
            {[slideimg1, slideimg2, slideimg3].map((img, i) => (
              <figure key={i} className="overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`Gallery-${i}`}
                  loading="lazy"
                  className="w-full h-80 object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </figure>
            ))}
          </div>

          {/* === Center Column (Sticky) === */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4 sticky top-0 h-screen">
            {[slideimg4, slideimg5, slideimg6].map((img, i) => (
              <figure key={i} className="h-full overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`Gallery-Sticky-${i}`}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </figure>
            ))}
          </div>

          {/* === Right Column === */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
            {[slideimg3, slideimg2, slideimg1].map((img, i) => (
              <figure key={i} className="overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`Gallery-Right-${i}`}
                  loading="lazy"
                  className="w-full h-80 object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* === Footer Style Section === */}
      <footer className="bg-slate-950">
        <h1 className="text-[15vw] leading-none uppercase font-semibold text-center bg-gradient-to-r from-gray-500 to-gray-800 bg-clip-text text-transparent opacity-50">
          Scanntek Edu
        </h1>
        <div className="bg-black h-40 grid place-content-center text-2xl rounded-t-full">
          <p className="text-gray-400 text-sm tracking-widest">
            Excellence in Education
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Gallery;
