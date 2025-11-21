// // import React from 'react'
// // import Title from './Title'
// // import { ourSpecsData } from '@/assets/assets'

// // const OurSpecs = () => {

// //     return (
// //         <div className='px-6 my-20 max-w-6xl mx-auto'>
// //             <Title visibleButton={false} title='Our Specifications' description="We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free." />

// //             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-10 mt-26'>
// //                 {
// //                     ourSpecsData.map((spec, index) => {
// //                         return (
// //                             <div className='relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg group' style={{ backgroundColor: spec.accent + 10, borderColor: spec.accent + 30 }} key={index}>
// //                                 <h3 className='text-slate-800 font-medium'>{spec.title}</h3>
// //                                 <p className='text-sm text-slate-600 mt-3'>{spec.description}</p>
// //                                 <div className='absolute -top-5 text-white size-10 flex items-center justify-center rounded-md group-hover:scale-105 transition' style={{ backgroundColor: spec.accent }}>
// //                                     <spec.icon size={20} />
// //                                 </div>
// //                             </div>
// //                         )
// //                     })
// //                 }
// //             </div>

// //         </div>
// //     )
// // }

// // export default OurSpecs
// import { useState } from "react";

// function InputExample() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//         placeholder="Type something..."
//       />
//       <p>You typed: {text}</p>
//     </div>
//   );
// }

// export default InputExample;


// <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, delay: 1 }}
//         className="absolute w-[200px] h-auto p-2 border rounded-lg bg-green-400 mt-[100px] hidden md:flex z-10 shadow-md"
//       >
//         <div className="flex flex-col w-full items-center justify-center">
//           <div className="bg-blue-400 items-center justify-center p-2 rounded-full">
//             <img src={Scholar} alt="" className="w-[50px]" />
//           </div>
//           <p className="text-[14px] font-hind text-[#39557E]">Placements</p>
//           <p className="text-[30px] font-lexend font-bold text-[#082A5E]">
//             8000+
//           </p>
//         </div>
//       </motion.div>

import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch data when component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // empty array → run once on mount

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name} {item.username}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default UserList;

