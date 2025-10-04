import React, { useState } from "react";
import Contactimg from "../assets/contact.jpg";
import { PiPhone } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "motion/react";


const Contactwithus = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // ✅ Replace with your own Web3Forms access key
    formData.append("access_key", "d20d5659-cb0c-4043-ac6c-0de884faf194");
    formData.append("to_email", "jagathkrishna900@gmail.com"); 
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
   <div className="w-full flex flex-col mb-5 mt-8 overflow-x-hidden">
  {/* Hero Section */}
  <section
    className="w-full h-[300px] bg-cover bg-center flex items-center justify-start px-6"
    style={{ backgroundImage: `url(${Contactimg})` }}
  >
    <h1 className="text-white text-[36px] md:text-[50px] font-mont w-full md:w-7xl px-2 md:px-3">
      Contact With Us
    </h1>
  </section>

  {/* Content Wrapper */}
  <div className="max-w-7xl w-full flex flex-col md:flex-row mx-auto p-4 gap-6">
    {/* Left Section */}
    <div className="flex flex-col gap-6 w-full md:w-2/5 p-2 pt-6">
      <motion.h1
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration: 0.5}}
       className="text-[28px] md:text-[32px] font-bold font-lexend text-[#082A5E]">
        Keep In Touch With Us
      </motion.h1>
      <motion.p
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.6, duration: 0.5}}
       className="font-hind text-[14px] text-[#39557E]">
        If you require clarifications on any of the courses or the admission
        process, we are happy to help.
      </motion.p>

      {/* Phone */}
      <div className="flex flex-row gap-4">
        <motion.div
          initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.1, duration: 0.6}}
         className="my-auto border border-gray-300 rounded-md p-3">
          <PiPhone className="text-[28px] md:text-[32px] text-blue-900" />
        </motion.div>
        <motion.div
          initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.2, duration: 0.6}}
         className="flex flex-col">
          <p className="font-lexend text-[16px] md:text-[18px] text-[#082A5E] font-semibold">
            Call us on:
          </p>
          <p className="font-hind text-[13px] md:text-[14px] text-[#39557E]">
            Kochi ( H Q ): 91 8086 651 651 <br /> Trivandrum: +91 6235651651
            <br />
            Calicut: +91 8086 531 531, 0495 - 3573001 <br /> Thrissur: 7025651651
          </p>
        </motion.div>
      </div>

      {/* Email */}
      <div className="flex flex-row gap-4">
        <motion.div
          initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.1, duration: 0.6}}
         className="my-auto border border-gray-300 rounded-md p-3">
          <MdOutlineMail className="text-[28px] md:text-[32px] text-blue-900" />
        </motion.div>
        <motion.div
          initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.2, duration: 0.6}}
         className="flex flex-col">
          <p className="font-lexend text-[16px] md:text-[18px] text-[#082A5E] font-semibold">
            Email us at:
          </p>
          <p className="font-hind text-[13px] md:text-[14px] text-[#39557E]">
            Enquiry: contact@luminartechnolab.com <br />
            Placement Cell: hr@luminartechnolab.com
          </p>
        </motion.div>
      </div>

      {/* Location */}
      <div className="flex flex-row gap-4">
        <motion.div
          initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.1, duration: 0.6}}
         className="my-auto border border-gray-300 rounded-md p-3">
          <IoLocationOutline className="text-[28px] md:text-[32px] text-blue-900" />
        </motion.div>
        <motion.div
          initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.2, duration: 0.6}}
         className="flex flex-col">
          <p className="font-lexend text-[16px] md:text-[18px] text-[#082A5E] font-semibold">
            Locate us on (H Q):
          </p>
          <p className="font-hind text-[13px] md:text-[14px] text-[#39557E]">
            Luminar Technolab Pvt Ltd, Ground Floor, K7 REALTY, <br /> Juma
            Masjid Road, Seaport - Airport Rd, <br /> Opp: District Panchayat,
            Kakkanad, Kochi, Kerala - 682030
          </p>
        </motion.div>
      </div>

      {/* WhatsApp */}
      <div className="flex flex-row gap-4">
        <motion.div
          initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.1, duration: 0.6}}
         className="my-auto border border-gray-300 rounded-md p-3">
          <FaWhatsapp className="text-[28px] md:text-[32px] text-blue-900" />
        </motion.div>
        <motion.div
          initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.2, duration: 0.6}}
         className="flex flex-col">
          <p className="font-lexend text-[16px] md:text-[18px] text-[#082A5E] font-semibold">
            Connect Us on:
          </p>
          <p className="font-hind text-[13px] md:text-[14px] text-[#39557E]">
            Kochi ( H Q ): 91 8086 651 651 <br /> Trivandrum: +91 6235651651
            <br />
            Calicut: +91 8086 531 531, 0495 - 3573001 <br /> Thrissur: 7025651651
          </p>
        </motion.div>
      </div>
    </div>

    {/* Right div */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{staggerChildren: 0.2}}
     className="w-full md:w-3/5 mx-auto shadow rounded-lg p-6 md:p-12 bg-slate-100 border border-gray-300 mt-6 md:mt-12">
      <motion.h2
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:0.5, duration: 0.5}}
       className="text-2xl font-semibold mb-4 text-[#082A5E]">Get in Touch</motion.h2>
      <div className="h-0.5 w-16 bg-purple-600 mb-6"></div>

      <motion.form
        initial={{opacity:0}}
        whileInView={{opacity: 1}}
        transition={{duration:0.5, delay:0.9}}
       onSubmit={onSubmit} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.input
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.1, duration: 0.6}}
            type="text"
            name="name"
            placeholder="Name *"
            required
            className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.input
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.2, duration: 0.6}}
            type="email"
            name="email"
            placeholder="E-mail *"
            required
            className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.input
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.1, duration: 0.6}}
            type="text"
            name="phone"
            placeholder="Phone *"
            required
            className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.input
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{delay:1.2, duration: 0.6}}
            type="text"
            name="city"
            placeholder="City *"
            required
            className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Course Dropdown */}
        <motion.select
          initial={{y: 10, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay:1.3, duration: 0.6}}
          name="course"
          required
          className="w-full border rounded-lg text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Choose a course...</option>
          <option value="MERN">MERN Stack</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Python">Python</option>
        </motion.select>

        {/* Message */}
        <motion.textarea
          initial={{y: 10, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay:1.4, duration: 0.6}}
          name="message"
          rows="4"
          placeholder="Message"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></motion.textarea>

        {/* Button */}
        <motion.button
          initial={{y: 10, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            whileHover={{scale: 1.05}}
            transition={{delay:1.5, duration: 0.6}}
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          SEND MESSAGE
        </motion.button>

        {/* Status */}
        <p className="text-sm mt-2">{result}</p>
      </motion.form>
    </motion.div>
  </div>
</div>

  );
};

export default Contactwithus;
