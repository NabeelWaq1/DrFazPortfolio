import React, { useRef } from 'react'
import Video from '../components/Video';
import { useNavigate } from 'react-router-dom';

const Business = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen relativ mt-[108px]'>
    {/* Section 1 */}
    <div className="w-full min-h-screen md:min-h-[70vh] bg-[url('/src/assets/s1.png')] bg-top bg-cover relative flex items-center justify-center">
    <div className="w-full min-h-full absolute bg-primary bg-opacity-60 flex items-center gap-5 pb-40 justify-center flex-col px-5 md:px-40 md:py-10">
    <h2 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'>Business Growth Strategies: Unlocking Sustainable Success</h2>
      <p className='text-center text-sm sm:text-base text-background md:w-[800px]'>Achieving long-term business success requires more than just ambition—it demands a well-defined growth strategy. Dr. Faz Mehmood’s Business Growth Strategies program provides entrepreneurs, executives, and business owners with proven techniques to scale operations, enhance profitability, and dominate their industries. With expert guidance, you’ll develop data-driven strategies, optimize resources, and drive sustainable expansion.</p>
   <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
    </div>
    </div>
    {/* Section 2 */}
    <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
      <div className="w-full md:w-[50%] min-h-full">
        <img src="/src/assets/s6.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
      </div>
      <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
      <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl text-tritary [text-shadow:_2px_2px_4px_#000] font-bold'>Strategic Growth for Lasting Success</h2>
      <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>In a competitive market, growth isn’t accidental—it’s strategic. Dr. Faz Mehmood helps businesses identify opportunities, streamline processes, and implement result-driven strategies to accelerate expansion. Learn how to leverage innovation, optimize performance, and outpace competitors with expert-backed insights.</p>
     <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
      </div>
    </div>
    {/* Section 3 */}
    <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
      <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
      <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl text-tritary [text-shadow:_2px_2px_4px_#000] font-bold'>Scaling Smart: The Key to Business Expansion</h2>
      <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Scaling a business requires more than just increasing revenue—it involves building a resilient foundation, managing risks, and maintaining operational excellence. Dr. Faz’s coaching ensures businesses adapt to market changes, optimize workflows, and implement scalable solutions for sustainable success.</p>
     <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
      </div>
      <div className="w-full md:w-[50%] min-h-full">
        <img src="/src/assets/s7.png" className='w-[80%] mx-auto h-[400px] object-cover object-center rounded-3xl' alt="" />
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
      <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl text-tritary [text-shadow:_2px_2px_4px_#000] font-bold'>Personalized Strategies for Maximum Impact</h2>
      <p className='text-center sm:text-left text-sm sm:text-base text-background'>Every business is unique, and one-size-fits-all strategies don’t work. Dr. Faz tailors his coaching to fit your specific industry, challenges, and goals. Whether you’re a startup looking for rapid growth or an established company aiming for market dominance, his insights will help you navigate challenges and seize new opportunities.</p>
     <button onClick={() => navigate('/contact')} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Contact Faz</button>
      </div>
    </div>
    {/* sub-sec 2 */}
    <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
      <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:ml-14 items-center md:items-start justify-center">
      <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl text-tritary [text-shadow:_2px_2px_4px_#000] font-bold'>The Blueprint for Business Growth</h2>
      <p className='text-center sm:text-left text-sm sm:text-base text-background'>Discover the fundamental pillars of business growth with Dr. Faz. This video breaks down key frameworks, real-world success stories, and expert strategies that have transformed businesses globally.</p>
      </div>
      <div className="w-full md:w-[50%] min-h-full">
      <Video thumb={'/src/assets/thumb1.png'} videoRef={videoRef1} videoSrc={"/src/assets/videos/10.mp4"} />
      </div>
    </div>
    </div>
     {/* section 5 */}
     <div className="w-full min-h-[65vh] flex flex-col md:flex-row py-16 md:py-6 px-4 justify-center items-center gap-6">
     <div className="w-full md:w-[50%] min-h-full">
     <Video thumb={'/src/assets/thumb9.png'} videoRef={videoRef2} videoSrc={"/src/assets/videos/8.mp4"} />
      </div>
      <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
      <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl text-tritary [text-shadow:_2px_2px_4px_#000] font-bold'>Scaling Your Business with Confidence</h2>
      <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>Learn how to take your business to the next level. This video explores scaling strategies, innovation techniques, and sustainable growth models that help businesses thrive in competitive markets.</p>
      </div>
    </div>
  </div>
  )
}

export default Business
