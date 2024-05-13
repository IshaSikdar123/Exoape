import React, { useEffect, useRef } from 'react';
import gsap, { Power4, ScrollTrigger } from 'gsap/all';

function Images() {
  const first= useRef(null);
  const third= useRef(null);
  const parent= useRef(null);
  const second= useRef(null);
  const fourth= useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    var tl =gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top:'0 90%',      
        scrub: 1,
      }
    });
    tl
    .to(first.current, {
      x: "40%",
      ease:Power4.easeInOut
    }, 'm')

    .to(third.current, {
      x: "-40%",
      ease: Power4.easeInOut
    },'m')

    .to(second.current, {
      x: "-40%",
      ease: Power4.easeInOut
    },'m')

    .to(fourth.current, {
      x: "40%",
      ease: Power4.easeInOut
    },'m')
  });

  return (
    <div ref={parent} className='w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden' >
      <div className='w-[40%] sm:w-[20%] sm:h-[70%] h-1/2 relative'>
        <div ref={first} className='absolute w-20 sm:w-40 h-[7rem] sm:h-[15rem] -right-1/3 top-6 '>
          <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />
        </div>
        <div ref={second } className='absolute w-[8rem] sm:w-[20rem] aspect-video -left-1/2 sm:-left-2/3 top-1/4 overflower-hidden'>
          <video autoPlay loop muted className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>
        <div ref={third} className='absolute w-[6rem] sm:w-[17rem] aspect-video -left-[20%] sm:-left-[40%] -bottom-[10%] '>
          <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" />
        </div>
        <div ref={fourth} className='absolute w-[9rem] sm:w-[17rem] aspect-video -right-[40%] sm: -bottom-[28%] sm:-bottom-[20%] overflow-hidden '>
          <video autoPlay loop muted className='w-full h-full absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
        </div>
        <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
      </div>
    </div>
  )
}

export default Images

