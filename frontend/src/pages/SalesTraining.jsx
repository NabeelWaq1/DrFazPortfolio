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
      <div className="w-full min-h-screen md:min-h-[70vh] bg-[url('/src/assets/s4.png')] bg-top bg-cover relative flex items-center justify-center">
    <div className="w-full min-h-full absolute bg-primary bg-opacity-60 flex items-center gap-5 pb-40 justify-center flex-col px-5 md:px-40 md:py-10">
    <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'>Communication Skills Training: Mastering the Art of Influence</h2>
      <p className='text-center text-sm sm:text-base text-background md:w-[800px]'>Effective communication is the foundation of leadership and success. Dr. Faz Mehmood’s Communication Skills Training equips professionals with the ability to express ideas clearly, build strong relationships, and lead with confidence. Whether in boardrooms, negotiations, or public speaking, powerful communication drives career and business growth.</p>
    <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
    </div>
    </div>
      {/* Section 2 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s9.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Transformative Communication Coaching</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Dr. Faz Mehmood’s training enhances verbal, non-verbal, and written communication skills to ensure clarity and impact. Leaders and professionals learn to deliver compelling messages, actively listen, and engage audiences in meaningful ways, fostering trust and influence.</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>The Power of Effective Communication</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Great leaders are great communicators. This program helps participants develop persuasive speech, improve interpersonal interactions, and handle high-stakes conversations with ease. With expert guidance, you will refine your ability to speak with confidence, build rapport, and navigate professional discussions effectively.</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s11.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full min-h-screen flex flex-col bg-primary">
        {/* sub-sec 1 */}
        <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/s13.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Personalized Training for Lasting Impact</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-background'>Every professional has unique communication challenges. Dr. Faz’s customized coaching helps individuals overcome fears, refine public speaking skills, and strengthen professional conversations. Whether you need to lead meetings, present ideas persuasively, or enhance your executive presence, this training empowers you with practical tools for real-world success.</p>
        <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
        </div>
      </div>
      {/* sub-sec 2 */}
      <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>The Power of Communication Skills</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-background'>Unlock the secrets of effective communication with Dr. Faz. This video highlights real-world success stories, key strategies, and proven techniques to transform how you express, connect, and lead.</p>
        </div>
        <div className="w-full md:w-[50%] min-h-full">
        <Video thumb={'/src/assets/thumb5.png'} videoRef={videoRef1} videoSrc={"/src/assets/videos/4.mp4"} />
        </div>
      </div>
      </div>
       {/* section 5 */}
       <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
       <div className="w-full md:w-[50%] min-h-full">
       <Video thumb={'/src/assets/thumb6.png'} videoRef={videoRef2} videoSrc={"/src/assets/videos/5.mp4"} />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl [text-shadow:_2px_2px_4px_#000]  text-tritary font-bold'>Speak with Confidence & Influence</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Discover how strong communication can accelerate your career. This video explores essential techniques, real-world applications, and success frameworks that help professionals communicate with clarity, confidence, and impact.</p>
        </div>
      </div>
    </div>
  )
}

export default Coaching
