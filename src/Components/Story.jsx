import React from 'react';

function Story() {
  return (
    <div className='pt-60 sm:pt-[32%]'>
      <div className='h-[90vh] sm:h-[140vh] bg-black text-white overflow-hidden'>
        <div className='flex items-start justify-evenly py-10 px-5'>
          <div className='flex flex-col items-start justify-start mr-36 sm:mr-[60rem] pt-5 sm:pt-36 z-10 w-full sm:w-auto'>
            <h1 className='text-6xl sm:text-[10rem]'>Our</h1>
            <h1 className='text-6xl sm:text-[10rem]'>Story</h1>
             
          </div>
          <div className='absolute pl-20 sm:pl-[20rem] pt-4 overflow-hidden'>
            <video autoPlay loop muted className='overflow-hidden' src="https://www.exoape.com/video/video-6.mp4"></video>
          </div>
        </div>   
       <div className='px-5 sm:px-28 pt-10 sm:pt-18'>
        <p className=' text-xl sm:text-3xl '>The story behind Exo Ape is one of </p>      
        <p className='text-xl sm:text-3xl'>exploration, creativity and curiosity.</p> 
        </div>       
        <div className='px-5 sm:px-28 pt-5 sm:pt-12 '>
        <a className='border-b-[1px] border-gray-600' href="#">Our story</a>
      </div>
      <div className='px-5 sm:px-28 pt-5'>
        <div className="divi border-b-[2px] border-gray-600 pt-8" data-v-fde92388=""></div>
        </div>
      <div class='absolute hidden sm:flex flex-col items-start justify-start gap-2 px-7 sm:px-[7rem] pt-8'>
    <h1>Willem II Singel 8</h1>
    <h1>6041 HS, Roermond</h1>
    <h1>The Netherlands</h1>
    <a href="#">hello@exoape</a>
    </div>
      
        <div className=' absolute flex flex-col items-start justify-start gap-2 px-8 sm:px-[28rem] pt-8 '>
          <h1>Work</h1>
          <h1>Studio</h1>
          <h1>News</h1>
          <h1>Contact</h1>
        </div>
       
        <div className='flex flex-col place-items-start justify-end pl-44 sm:pl-[44rem] gap-2 pt-8 '>
        <h1>Behance</h1>
        <h1>Dribble</h1>
        <h1>Twitter</h1>
        <h1>Instagram</h1>          
        </div>
        
</div>
    </div>
  );
}

export default Story;