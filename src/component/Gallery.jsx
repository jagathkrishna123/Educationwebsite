// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/thumbs";
// import "swiper/css/navigation";

// // Import your images
// import slideimg1 from "../assets/slideimg1.jpg";
// import slideimg2 from "../assets/slideimg2.jpg";
// import slideimg3 from "../assets/slideimg3.jpg";
// import slideimg4 from "../assets/slideimg4.jpg";
// import slideimg5 from "../assets/slideimg5.jpg";
// import slideimg6 from "../assets/slideimg6.jpg";
// import { motion } from "motion/react";

// const Gallery = () => {
//   const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

//   const images = [slideimg1, slideimg2, slideimg3, slideimg4, slideimg5, slideimg6];

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-10 mt-16">
//         <div className="flex w-full  items-center justify-center">
//                   <motion.p
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="flex font-hind font-medium text-[16px] text-gray-700 bg-gray-300 px-3 rounded-sm"
//                   >
//                     Gallery
//                   </motion.p>
//                 </div>
//                 <div className="flex items-center justify-center  text-center mb-5">
//                           <motion.p
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                             className="font-lexend text-[22px] md:text-[36px] font-bold text-gray-800"
//                           >
//                             Explore Our <span className="text-green-600">Showcase</span>{" "}
//                           </motion.p>
//                         </div>
//       {/* Main Image Slider */}
//       {/* <Swiper
//         loop={true}
//         spaceBetween={10}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[Autoplay, Thumbs]}
//         className="rounded-2xl overflow-hidden shadow-lg"
//       > */}
//       <Swiper
//   loop={true}
//   spaceBetween={10}
//   autoplay={{
//     delay: 2000,
//     disableOnInteraction: false,
//   }}
//   speed={1000}  //  makes each slide take 1s to transition
//   thumbs={{ swiper: thumbsSwiper }}
//   modules={[Autoplay, Thumbs]}
//   className="rounded-2xl overflow-hidden shadow-lg bg-transparent"
// >
//         {images.map((src, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative w-full h-[500px]">
//               {/* Background Image */}
//               <img
//                 src={src}
//                 alt={`slide-${i}`}
//                 className="w-full h-full object-cover"
//               />
//               {/* Black Shade Layer */}
//               <div className="absolute inset-0 bg-black/30"></div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnail Queue */}
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         watchSlidesProgress={true}
//         modules={[Thumbs]}
//         className="mt-4"
//       >
//         {images.map((src, i) => (
//           <SwiperSlide key={i}>
//             <img
//               src={src}
//               alt={`thumb-${i}`}
//               className="h-28 w-full object-cover rounded-lg cursor-pointer opacity-90 hover:opacity-100 transition"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Gallery;

// import React from "react";
// import { motion } from "motion/react";

// Import your images
// import slideimg1 from "../assets/slideimg1.jpg";
// import slideimg2 from "../assets/slideimg2.jpg";
// import slideimg3 from "../assets/slideimg3.jpg";
// import slideimg4 from "../assets/slideimg4.jpg";
// import slideimg5 from "../assets/slideimg5.jpg";
// import slideimg6 from "../assets/slideimg6.jpg";

// const Gallery = () => {
//   const images = [slideimg1, slideimg2, slideimg3, slideimg4, slideimg5, slideimg6];

//   return (
//     <div className="container mx-auto px-5 py-10 lg:px-32 lg:pt-20 mt-16">
//       {/* === Section Title === */}
//       <div className="flex w-full items-center justify-center mb-4">
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex font-hind font-medium text-[16px] text-gray-700 bg-gray-300 px-3 rounded-sm"
//         >
//           Gallery
//         </motion.p>
//       </div>

//       <div className="flex items-center justify-center text-center mb-8">
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="font-lexend text-[22px] md:text-[36px] font-bold text-gray-800"
//         >
//           Explore Our <span className="text-green-600">Showcase</span>
//         </motion.p>
//       </div>

//       {/* === Gallery Layout === */}
//       <div className="-m-1 flex flex-wrap md:-m-2">
//         {/* Left Column */}
//         <div className="flex w-1/2 flex-wrap">
//           <div className="w-1/2 p-1 md:p-2">
//             <img
//               alt="gallery"
//               className="block h-full w-full rounded-lg object-cover object-center"
//               src={images[0]}
//             />
//           </div>
//           <div className="w-1/2 p-1 md:p-2">
//             <img
//               alt="gallery"
//               className="block h-full w-full rounded-lg object-cover object-center"
//               src={images[1]}
//             />
//           </div>
//           <div className="w-full p-1 md:p-2">
//             <img
//               alt="gallery"
//               className="block h-full w-full rounded-lg object-cover object-center"
//               src={images[2]}
//             />
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex w-1/2 flex-wrap">
//           <div className="w-full p-1 md:p-2">
//             <img
//               alt="gallery"
//               className="block h-full w-full rounded-lg object-cover object-center"
//               src={images[3]}
//             />
//           </div>
//           <div className="w-1/2 p-1 md:p-2">
//             <img
//               alt="gallery"
//               className="block h-full w-full rounded-lg object-cover object-center"
//               src={images[4]}
//             />
//           </div>
//           <div className="w-1/2 p-1 md:p-2">
//             <img
//               alt="gallery"
//               className="block h-full w-full rounded-lg object-cover object-center"
//               src={images[5]}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React from "react";
import { motion } from "motion/react";

// Import your images
import slideimg1 from "../assets/slideimg1.jpg";
import slideimg2 from "../assets/slideimg2.jpg";
import slideimg3 from "../assets/slideimg3.jpg";
import slideimg4 from "../assets/slideimg4.jpg";
import slideimg5 from "../assets/slideimg5.jpg";
import slideimg6 from "../assets/slideimg6.jpg";

const Gallery = () => {
  const images = [slideimg1, slideimg2, slideimg3, slideimg4, slideimg5, slideimg6];

  return (
    <div className="w-full flex justify-center mt-16">
      <div className="container max-w-7xl mx-auto px-5 py-10 lg:px-32 lg:pt-20">
        {/* === Section Title === */}
        <div className="flex w-full items-center justify-center mb-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex font-hind font-medium text-[16px] text-gray-700 bg-gray-300 px-3 rounded-sm"
          >
            Gallery
          </motion.p>
        </div>

        <div className="flex items-center justify-center text-center mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-lexend text-[22px] md:text-[36px] font-bold text-gray-800"
          >
            Explore Our <span className="text-green-600">Showcase</span>
          </motion.p>
        </div>

        {/* === Gallery Layout === */}
        <div className="-m-1 flex flex-wrap md:-m-2">
          {/* Left Column */}
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform transition-transform duration-500 ease-in-out hover:scale-110"
                src={images[0]}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform transition-transform duration-500 ease-in-out hover:scale-110"
                src={images[1]}
              />
            </div>
            <div className="w-full p-1 md:p-2 overflow-hidden rounded-lg">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform transition-transform duration-500 ease-in-out hover:scale-110"
                src={images[2]}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 overflow-hidden rounded-lg">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform transition-transform duration-500 ease-in-out hover:scale-110"
                src={images[3]}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform transition-transform duration-500 ease-in-out hover:scale-110"
                src={images[4]}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform transition-transform duration-500 ease-in-out hover:scale-110"
                src={images[5]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
