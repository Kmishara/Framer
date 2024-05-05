import { motion } from 'framer-motion';
import React from 'react'

const Data = () => {
  return (
    
    <div    className='w-full py-32'> 

    <div  className='w-1/2 mx-auto'>
    {['Data','Informs', 'Emotions', 'Converters'].map((i,index)=>{
      return (
         <div className='masker overflow-hidden'>
      <motion.h1 initial={{y:"100%"}} whileInView={{y:0}}  transition ={{ease:[0.76, 0, 0.24,1], duration:1, delay:.1}}className='text-[10vw] leading-[9vw] tracking-tighter flex items-center'>
        {index === 2 && (<span className='inline-block w-32 h-5 mt-10 bg-zinc-100'></span>)}
        {i}</motion.h1>
      </div>
      );
    })}
     
     
      </div>
    </div>
  )
}

export default Data