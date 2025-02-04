import React, { useRef } from 'react'
import VideoTestimonial from '../components/VideoTestimonial';

const Testimonials = () => {

   const videoRef1 = useRef(null);
   const videoRef2 = useRef(null);
   const videoRef3 = useRef(null);
   const videoRef4 = useRef(null);
   const videoRef5 = useRef(null);
   const videoRef6 = useRef(null);
   const videoRef7 = useRef(null);
   const videoRef8 = useRef(null);
   const videoRef9 = useRef(null);
   const videoRef10 = useRef(null);

  
  
  
   
  return (
    <div className='w-full min-h-screen bg-background mt-[100px]'>
      {/* Section 1 */}
      <div className="w-full min-h-[130vh] bg-[url('/src/assets/testimonial1.png')] bg-cover bg-center md:min-h-[85vh] flex flex-col md:flex-row gap-10 md:gap-8 px-4 md:px-8 py-8 justify-center md:justify-between items-center pt-[80px]">
        {/* Left */}
        <div className="flex flex-col items-center justify-center md:items-start gap-2 w-full md:w-[50%]">
          <h4 className='flex justify-center items-center gap-4 text-primary text-lg font-light text-center md:text-start'>TESTIMONIALS <span className='w-10 h-[1px] bg-primary'></span></h4>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center md:text-start'>Uncover the reasons behind <span className='text-tritary'>Faz's worldwide popularity as a trusted partner.</span></h1>
          {/* <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500 mt-4 md:text-start'>View</button> */}
        </div>
        {/* Right */}
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <iframe className='w-full h-[400px] md:w-[80%] md:h-[300px] rounded-3xl' src="https://www.youtube.com/embed/lvLcAjbwi3U?si=QDWuiByIMt_2WY53" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      {/* Section 2 */}
      <div className="slider py-10 min-h-[80vh] grid items-center m-auto relative w-[90%]">
        <div className="slide-track flex w-[cal(250px * 9)] mt-10">

          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test10.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test9.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test8.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test7.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test6.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test10.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test9.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test8.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test7.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test6.png" alt="" />
          </div>

        </div>
        <div reverse="true" className="slide-track flex w-[cal(250px * 9)]">

        <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test5.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test4.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test3.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test2.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test1.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test5.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test4.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test3.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test2.png" alt="" />
          </div>
          <div className="slide rounded-xl h-[250px] w-[350px] flex items-center p-[15px]">
            <img className='w-full h-full rounded-xl object-cover' src="/src/assets/test1.png" alt="" />
          </div>

        </div>
      </div>

{/* Section 3 */}
      <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 py-20 gap-4 bg-white">

        <VideoTestimonial thumb={'/src/assets/thumb1.png'} videoRef={videoRef1} videoSrc={"/src/assets/videos/10.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb2.png'} videoRef={videoRef2} videoSrc={"/src/assets/videos/1.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb3.png'} videoRef={videoRef3} videoSrc={"/src/assets/videos/2.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb4.png'} videoRef={videoRef4} videoSrc={"/src/assets/videos/3.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb5.png'} videoRef={videoRef5} videoSrc={"/src/assets/videos/4.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb6.png'} videoRef={videoRef6} videoSrc={"/src/assets/videos/5.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb7.png'} videoRef={videoRef7} videoSrc={"/src/assets/videos/6.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb8.png'} videoRef={videoRef8} videoSrc={"/src/assets/videos/7.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb9.png'} videoRef={videoRef9} videoSrc={"/src/assets/videos/8.mp4"} />
        <VideoTestimonial thumb={'/src/assets/thumb10.png'} videoRef={videoRef10} videoSrc={"/src/assets/videos/9.mp4"} />
       
      </div>
    </div>
  )
}

export default Testimonials
