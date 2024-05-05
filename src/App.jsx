// // import { motion } from 'framer-motion'
// // import React, { useState } from 'react'

// // const App = () => {
// //   const [a, seta] = useState(false)
// //   return (
  
// // <div className='overflow-hidden relative h-screen w-full bg-zinc-900 text-white font-["gilroy"]'>
// // <nav className='w-full py-5 px-20 flex items-center justify-between'>
// //   <motion.h3 initial={{opacity:0}} animate={{opacity:1}} transition={{ease:[0.76, 0, 0.24, 1], duration:2}} className='font-semibold'>some brand</motion.h3>
// //   <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ease:[0.76, 0, 0.24, 1], duration:2}}id='atag' className='links flex gap-10 text-sm items-center' >
// //   <a  href="#">Home</a>
// //   <a href="#">Contact</a>
// //   <a href="#">Pricing</a>
// //   <a href="#">About</a>
// //   <button onClick={()=>seta(!a)} className='px-6 py-2 bg-zinc-700 rounded-lg capitalize text-xs' >open nav</button>
// //   </motion.div>
  
// // </nav>
// // <motion.aside initial={{x:"100%"}} animate={a?{x:0}:{x:"100%"}} className='w-96 h-screen bg-zinc-800 absolute right-0 top-0 px-10 py-20'>
// // <button className='px-6 py-2 bg-zinc-700 rounded-lg capitalize text-xs' >close nav</button>
// // <a className='block text-5xl mt-8 font-semibold' href="#">Home</a>
// //   <a className='block text-5xl mt-8 font-semibold' href="#">Contact</a>
// //   <a className='block text-5xl mt-8 font-semibold' href="#">Pricing</a>
// //   <a className='block text-5xl mt-8 font-semibold' href="#">About</a>
// // </motion.aside>
// //    </div>

   
// //   )
// // }

// // export default App

// import { motion } from 'framer-motion'
// import React from 'react'

// const App = () => {
//   const parent = {
//     initial:{},
//     animate:{},
//     exit:{},
//   }
//   const child = {
//     initial:{opacity:0, scale:0},
//     animate:{opacity:1,scale:1, transition:{ease:[0.76, 0, 0.24, 1],duration:1}},
//     exit:{opacity:0, scale:0},
//   };
//   return (
    
//    <div className='w-screen h-screen bg-zinc-900'>
//     <motion.div variants={parent} initial="initial" animate="animate" exit="exit" transition= {{staggerChildren:0.2}}className='w-32 h-32 bg-white/50 rounded-3xl flex flex-wrap  gap-3 p-5'>
//       <motion.div variants={child}  className='w-10 h-10 bg-white rounded-full'></motion.div>
//        <motion.div variants={child}  className='w-10 h-10 bg-white rounded-full'></motion.div>
      
//     </motion.div>
//    </div>
   
//   )
  
// }

// export default App


// // framer motion k liye hme phle package install krna hoga
// // fir import
// // then jisko animate krna h usko motion. bnana hoga
// // or agr vo property hm talwind m diye h to use hta kr initial m dena hoga

// // or ease k liye easing.in website m jakr cubic bezier ki value ko copy krna hoga
// // variants kya h -variants ek tareeka jiske through ap khisse bhi motion.element pr animation values de skte ho and wo values automatically us element ke chidrens tak jaati hai to ap chaahe to same values childen par bhi apply kar sakte h,aur apke pass stagger ka control bhi milta h
// // agr ap ke kissi div m ek se jaada elemets h and aap chahte h ki wo saare ek sath naa aye vo baari baari parkat ho motion elemem naye aur uske variants p animation k andr transition k andr stragger de skte ho
//----------------------------------------

//---------Project-----------------//
import React from 'react'
import gsap, { ScrollTrigger } from 'gsap/all'
import Nav from './componets/Nav'
import Landing from './componets/Landing'
import LocomotiveScroll from 'locomotive-scroll';
import About from './componets/About';
import Data from './componets/Data';
import Image from './componets/Image'



const App = () => {
   const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white font-["TWK Lausanne"]'>
    < Nav/>
    <Landing/>
  <About />
  <Data />
  <Image/>
      </div>
  )
}

export default App