import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-[270vh]  bg-zinc-900 relative overflow-hidden'>
        <img data-scroll data-scroll-speed="-1.2" className='w-full h-full object-cover opacity-80' src="https://a.storyblok.com/f/133769/2500x2626/63a902ce2b/exo-ape-studio-hero.jpg/m/1920x2017/filters:format(webp):quality(70)" alt="" />
        <div className='container ml-20 w-full h-full absolute top-[15%]  left-0'>
            
           <div className='maintex'> 
           <h1 className='text-[12vw] leading-none tracking-tight font-regular'>Building</h1>
            <h1 className='text-[10vw] leading-none tracking-tight font-regular' >Digital</h1>
            <h1 className='text-[10vw] leading-none tracking-tight font-regular' >Presence</h1>
            <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <p className='text-4xl w-1/3 leading-[2.7vw]  absolute right-3 bottom-[30%] font-semibold' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis unde nemo rerum laboriosam voluptates nobis laborum molestias nostrum fugit, similique illum nulla, consequuntur, molestiae fugiat hic quam neque ratione distinctio quibusdam tempora.</p>
        </div>
    </div>
  )
}

export default Landing