import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

// Import your images
import slideimg1 from "../assets/slideimg1.jpg";
import slideimg2 from "../assets/slideimg2.jpg";
import slideimg3 from "../assets/slideimg3.jpg";
import slideimg4 from "../assets/slideimg4.jpg";
import slideimg5 from "../assets/slideimg5.jpg";
import slideimg6 from "../assets/slideimg6.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import { motion } from "motion/react";

const images = [
  { id: 1, src: slideimg1, title: "Image 1" },
  { id: 2, src: slideimg2, title: "Image 2" },
  { id: 3, src: slideimg3, title: "Image 3" },
  { id: 4, src: slideimg4, title: "Image 4" },
  { id: 5, src: slideimg5, title: "Image 5" },
  { id: 6, src: slideimg6, title: "Image 6" },
  { id: 7, src: img15, title: "Image 7" },
  { id: 8, src: img16, title: "Image 8" },
  { id: 9, src: img17, title: "Image 9" },
  { id: 10, src: img18, title: "Image 10" },
  { id: 11, src: img19, title: "Image 11" },
];

export default function Gallerycomp() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br p-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mt-12">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex font-hind font-medium text-[16px] text-center items-center justify-center text-gray-700 bg-gray-300 px-3 rounded-sm w-fit"
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

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mt-10">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className="break-inside-avoid relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(img.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedImage(img)}
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-purple-500/50 hover:scale-[1.02]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t to-transparent transition-opacity duration-300 ${
                    hoveredId === img.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {img.title}
                    </h3>
                    <div className="flex items-center text-purple-200">
                      <ZoomIn className="w-5 h-5 mr-2" />
                      <span>Click to view</span>
                    </div>
                  </div> */}
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors duration-200 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <div
              className="relative max-w-5xl max-h-[90vh] animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h2 className="text-white text-2xl font-bold">
                  {selectedImage.title}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
