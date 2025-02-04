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
      <div className="w-full min-h-screen md:min-h-[70vh] bg-[url('/src/assets/s3.png')] bg-top bg-cover relative flex items-center justify-center">
    <div className="w-full min-h-full absolute bg-primary bg-opacity-60 flex items-center gap-5 pb-40 justify-center flex-col px-5 md:px-40 md:py-10">
    <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'>Leadership Development: Cultivating Tomorrow’s Leaders</h2>
      <p className='text-center text-sm sm:text-base text-background md:w-[800px]'>Great leaders aren’t born—they are made. Dr. Faz Mehmood’s Leadership Development program is designed to equip emerging and experienced leaders with the skills, mindset, and strategies needed to inspire teams, drive innovation, and create lasting impact. Through expert coaching, participants develop critical thinking, resilience, and decision-making abilities that define exceptional leadership.</p>
    <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
    </div>
    </div>
      {/* Section 2 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s12.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Transformative Leadership Training</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Dr. Faz Mehmood’s leadership development program empowers individuals with the core principles of effective leadership. By focusing on strategic thinking, communication mastery, and problem-solving, leaders learn to navigate challenges, foster collaboration, and elevate their influence within their organizations..</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Unlocking Leadership Potential</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>True leadership is about inspiring and guiding others toward success. Dr. Faz’s program provides hands-on techniques to help leaders cultivate confidence, enhance team dynamics, and drive organizational excellence. With real-world insights and actionable strategies, this program builds leaders who make an impact.</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s13.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full min-h-screen flex flex-col bg-primary">
        {/* sub-sec 1 */}
        <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s14.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Personalized Leadership Growth</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-background'>Every leader has a unique path to success. Dr. Faz’s personalized leadership development approach ensures that each participant receives tailored strategies to refine their leadership style, enhance workplace culture, and achieve measurable growth. Whether you're stepping into a leadership role or seeking to sharpen your skills, this program accelerates your journey to excellence.</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
      </div>
      {/* sub-sec 2 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>The Power of Leadership Development</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-background'>Discover how Dr. Faz’s leadership development program has transformed professionals into visionary leaders. This video showcases real success stories, breakthrough strategies, and the lasting impact of expert leadership coaching.</p>
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
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Elevate Your Leadership Skills</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Step into the world of exceptional leadership with Dr. Faz. This video explores key leadership principles, success strategies, and actionable insights to help you lead with confidence and vision.</p>
        </div>
      </div>
    </div>
  )
}

export default Coaching
