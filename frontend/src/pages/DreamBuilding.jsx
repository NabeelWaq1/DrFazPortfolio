import React, { useRef } from 'react'
import Video from '../components/Video'
import { useNavigate } from 'react-router-dom';

const Coaching = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen relativ mt-[108px]'>
      {/* Section 1 */}
      <div className="w-full min-h-screen md:min-h-[70vh] bg-[url('/src/assets/s5.png')] bg-center bg-cover relative flex items-center justify-center">
    <div className="w-full min-h-full absolute bg-primary bg-opacity-60 flex items-center gap-5 pb-40 justify-center flex-col px-5 md:px-40 md:py-10">
    <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'>Dream Building Program: Turn Aspirations into Reality</h2>
      <p className='text-center text-sm sm:text-base text-background md:w-[800px]'>Success starts with a vision, but achieving it requires the right mindset, strategy, and action plan. Dr. Faz Mehmood’s Dream Building Program helps individuals and entrepreneurs define their goals, overcome barriers, and create a roadmap to success. Through expert guidance, you’ll gain the clarity, confidence, and skills needed to transform your dreams into tangible achievements.</p>
  <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
    </div>
    </div>
      {/* Section 2 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s13.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>From Vision to Victory</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Dreaming big is the first step, but making those dreams a reality requires strategic planning and execution. Dr. Faz Mehmood provides a structured approach to goal setting, time management, and overcoming self-doubt, ensuring you stay on track to achieve your aspirations.</p>
      <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Breaking Barriers, Building Success</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Challenges and setbacks are part of the journey, but they don’t have to stop you. Dr. Faz’s coaching helps individuals identify obstacles, develop resilience, and cultivate a success-driven mindset. Learn how to turn setbacks into stepping stones and build momentum toward your goals.</p>
      <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s6.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full min-h-screen flex flex-col bg-primary">
        {/* sub-sec 1 */}
        <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s8.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>A Personalized Roadmap to Achieve Your Dreams</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-background'>No two dreams are alike, and that’s why customized strategies are essential. Whether you aim to build a thriving business, advance in your career, or create a fulfilling personal life, Dr. Faz’s program provides the tailored guidance and tools needed to make it happen.</p>
      <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
      </div>
      {/* sub-sec 2 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>The Power of Dream Building</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-background'>Discover how the Dream Building Program has empowered countless individuals to turn their visions into reality. This video highlights real-life success stories, key strategies, and transformational journeys guided by Dr. Faz.</p>
        </div>
        <div className="w-full md:w-[50%] min-h-full">
        <Video thumb={'/src/assets/thumb2.png'} videoRef={videoRef1} videoSrc={"/src/assets/videos/1.mp4"} />
        </div>
      </div>
      </div>
       {/* section 5 */}
       <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
       <div className="w-full md:w-[50%] min-h-full">
       <Video thumb={'/src/assets/thumb3.png'} videoRef={videoRef2} videoSrc={"/src/assets/videos/2.mp4"} />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Designing Your Dream Life</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Success starts with a plan. In this video, Dr. Faz shares practical steps, mindset shifts, and proven techniques to help you create and execute a life-changing strategy for achieving your dreams.</p>
        </div>
      </div>
    </div>
  )
}

export default Coaching
