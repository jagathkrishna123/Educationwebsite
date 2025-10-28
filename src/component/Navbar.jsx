import React, { useEffect, useState } from "react";
import Luminarlogo from "../assets/lumlogo.png";
import { Link } from "react-router-dom";
import ScanntekLogo from "./ScanntekLogo";
import { motion, AnimatePresence } from "framer-motion";
// import Scannteklogo from "../assets/scanntek.png"

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Placements", path: "/" },
    { name: "Blog", path: "/" },
    { name: "About", path: "/aboutus" },
    { name: "Contact", path: "/contactus" },
    { name: "Gallery", path: "/gallery" },
    { name: "Gallery2", path: "/gallerycom" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(() => {
  //   if (isContactOpen) {
  //     document.body.style.overflow = "hidden"; // prevent scrolling
  //   } else {
  //     document.body.style.overflow = "auto"; // restore scrolling
  //   }

  //   // cleanup on unmount
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isContactOpen]);
  //prevent scroll
  useEffect(() => {
    if (isContactOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isContactOpen]);

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d20d5659-cb0c-4043-ac6c-0de884faf194");
    formData.append("to_email", "jagathkrishna900@gmail.com");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Web3Forms Response:", data);

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong: " + data.message);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // className={`fixed top-0 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-12 transition-all duration-500 z-50 ${
      //   isScrolled
      //     ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
      //     : "py-4 md:py-3"
      // }`}
      className={`fixed top-0 left-0 bg-green-700 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-12 z-50 ${
        isScrolled
          ? "bg-white/40 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4 transition-[background-color,box-shadow,backdrop-filter,padding] duration-500"
          : "py-4 md:py-3 transition-[background-color,box-shadow,backdrop-filter,padding] duration-500"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="outline-none border-none focus:outline-none focus:border-none"
      >
        {/* <img
          src={Scannteklogo}
          alt="logo"
          className={`h-16 border-none outline-none ${isScrolled && "opacity-80 invert"}`}
        /> */}
        <div className="py-3">
          <div className="flex items-center space-x-1">
            <span className="text-3xl font-extrabold tracking-wide text-[#242a35]">
              Scanntek
            </span>
            <div
              className={` px-3 py-1 rounded-lg h-fit shadow-xl  ${
                isScrolled ? "bg-green-600" : "bg-white"
              }`}
            >
              <span
                className={` text-lg font-bold -tracking-normal ${
                  isScrolled ? "text-white" : "text-green-700"
                }`}
              >
                Edu
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8 font-lexend font-light text-[16px] hover:text-[#9116A1]">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 hover:text-yellow-500 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
        {/* <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        New Launch
                    </button> */}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <svg
          className={`h-6 w-6 text-white transition-all duration-500 ${
            isScrolled ? "invert" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {/* <button className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>
                    <button className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button> */}
        <button
          className="text-white rounded-lg px-3 py-2 font-medium text-[15px]
             bg-gradient-to-b from-cyan-600 to-cyan-800
             transition-all duration-300 ease-out
             hover:from-cyan-400 hover:to-cyan-600
             hover:scale-105 hover:shadow-lg"
        >
          ENQUIRE NOW
        </button>

        <button
          onClick={() => setIsContactOpen(true)}
          className="relative overflow-hidden text-white rounded-lg px-4 py-2.5 font-medium text-[15px]
             bg-gradient-to-b from-cyan-600 to-cyan-800
             transition-all duration-300 ease-out
             hover:from-cyan-400 hover:to-cyan-600
             hover:scale-105 hover:shadow-lg"
        >
          BOOK A CALLBACK
        </button>
      </div>
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-hind"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6 relative"
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-4 font-lexend text-[#082A5E] text-[20px]">
                Callback Request
              </h2>

              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  name="message"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-900"
                >
                  Send Message
                </button>

                <p className="text-gray-800 text-[14px]">{result}</p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-[22px]  flex flex-col md:hidden items-center justify-center gap-8 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
          New Launch
        </button>

        <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
          Login
        </button>
      </div>
    </motion.nav>
  );
};
export default Navbar;
