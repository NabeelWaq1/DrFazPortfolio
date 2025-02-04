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
      <div className="w-full min-h-screen md:min-h-[70vh] bg-[url('/src/assets/s2.png')] bg-center bg-cover relative flex items-center justify-center">
    <div className="w-full min-h-full absolute bg-primary bg-opacity-60 flex items-center gap-5 pb-40 justify-center flex-col px-5 md:px-40 md:py-10">
    <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'>Executive Coaching: Unlocking Leadership Excellence</h2>
      <p className='text-center text-sm sm:text-base text-background md:w-[800px]'>In today’s fast-paced business world, strong leadership is the key to success. Our executive coaching program empowers leaders with the skills, mindset, and strategies needed to drive growth, enhance decision-making, and lead with confidence. Through personalized guidance, we help executives navigate challenges, improve team dynamics, and achieve their full potential. Elevate your leadership journey with expert coaching tailored to your unique goals.</p>
    <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
    </div>
    </div>
      {/* Section 2 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s9.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Transformative Executive Coaching</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Dr. Faz Mehmood’s executive coaching program is designed to elevate leaders, empowering them with proven strategies to enhance decision-making, leadership effectiveness, and personal growth. Through tailored guidance, executives develop the confidence, clarity, and communication skills needed to drive their organizations forward with impact.</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Leadership Excellence with Dr. Faz</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Great leadership isn’t just about managing people—it’s about inspiring them. Dr. Faz’s executive coaching equips leaders with the mindset and tools to navigate complex challenges, build high-performing teams, and create lasting success. His hands-on approach fosters strategic thinking and resilience in today’s competitive business world.</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s10.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full min-h-screen flex flex-col bg-primary">
        {/* sub-sec 1 */}
        <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s11.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Personalized Growth for Executive Success</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-background'>No two leaders are the same, and that’s why Dr. Faz’s executive coaching is fully customized to fit your unique leadership journey. Whether you seek to refine your skills, improve workplace culture, or achieve personal breakthroughs, his coaching provides the clarity and strategies needed for transformational growth.</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
      </div>
      {/* sub-sec 2 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>The Power of Executive Coaching</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-background'>Discover how Dr. Faz’s executive coaching has transformed leaders and businesses worldwide. This video highlights real success stories, breakthrough moments, and the impact of personalized leadership coaching.</p>
        </div>
        <div className="w-full md:w-[50%] min-h-full">
        <Video thumb={'/src/assets/thumb7.png'} videoRef={videoRef1} videoSrc={"/src/assets/videos/6.mp4"} />
        </div>
      </div>
      </div>
       {/* section 5 */}
       <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
       <div className="w-full md:w-[50%] min-h-full">
       <Video thumb={'/src/assets/thumb8.png'} videoRef={videoRef2} videoSrc={"/src/assets/videos/7.mp4"} />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Elevate Your Leadership Potential</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Step into the world of high-impact leadership with Dr. Faz. This video explores key coaching insights, success frameworks, and practical steps to unlock your full executive potential.</p>
        </div>
      </div>
    </div>
  )
}

export default Coaching
