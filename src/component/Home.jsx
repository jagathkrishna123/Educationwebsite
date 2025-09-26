import React, { useEffect, useState } from 'react'
import Compny1 from "../assets/compny1.png"
import Compny2 from "../assets/compny2.png"
import Compny3 from "../assets/compny3.png"
import Compny4 from "../assets/compny4.png"
import Compny5 from "../assets/compny5.png"
import Compny6 from "../assets/compny6.png"
import Compny7 from "../assets/compny7.png"
import Compny8 from "../assets/compny8.png"
 
const imagecollection = [
  {
    id: 1,
    img: Compny1,
  },
  {
    id: 2,
    img: Compny2,
  },
  {
    id: 3,
    img: Compny3,
  },
  {
    id: 4,
    img: Compny4,
  },
  {
    id: 5,
    img: Compny5,
  },
  {
    id: 6,
    img: Compny6,
  },
  {
    id: 7,
    img: Compny7,
  },
  {
    id: 8,
    img: Compny8,
  },
]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === imagecollection.length - 1 ? 0 : prev + 1
      );
    }, 2000); // change every 2s

    return () => clearInterval(interval);
  }, [imagecollection.length]);

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* wrapper for animation */}
      <div className="flex animate-marquee">
        {/* Duplicate list for seamless loop */}
        {[...imagecollection, ...imagecollection, ...imagecollection].map((image) => (
          <div
            key={image.id + Math.random()}
            className="flex-shrink-0 w-[150px] h-[100px] flex items-center justify-center mx-4"
          >
            <img
              src={image.img}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Home