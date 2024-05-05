import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
 import logo2 from "../video/news-unxd-nft-design.mp4"
const Image = () => {
    
    var imagediv = useRef(null);
    useEffect(()=>{
      
       

      
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(imagediv.current,{
            scrollTrigger:{
                trigger:imagediv.current,
                start:"0 90%",
                scrub:1,
            },
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
           ease:Power4
            
        });
    });
   
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div
         ref={imagediv} style={{clipPath:"polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)"}} className='w-full h-full'>
        <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/2500x1667/5224da023b/exo-ape-studio-mood.jpg/m/1920x1280/filters:format(webp):quality(70)" alt="" />
        </div>
    </div>
    // <div className=' translate-x-10'>
    //   <video  className=' h-[50%]  w-[50%]    block   object-cover  overflow-clip  '     autoPlay='autoplay' loop muted  src={logo2} type="video/mp4"></video>
    // </div>
   
  )
}

export default Image