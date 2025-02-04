import React, { useRef, useState } from 'react'
import Video from '../components/Video.jsx'

const InspirationalTalks = () => {
  const videoRef1 = useRef(null);
  const [isCalendlyOpen, setCalendlyOpen] = useState (false);

  const openCalendly = () => {
    // Open the Calendly widget
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/fazmemon56/drfazal-com?background_color=16425b&text_color=f1efef',
      });

      // Set state to track that the widget is open
      setCalendlyOpen(true);
    }
  };
  return (
  <div className="w-full min-h-screen relative mt-[108px]">
    {/* Section 1 */}
    <div className="w-full min-h-[120vh] md:min-h-screen bg-[url('/src/assets/is1.png')] bg-center bg-cover relative">
    <div className="bg-primary bg-opacity-65 w-full min-h-full absolute flex flex-col gap-8 items-center justify-center px-4 md:px-32 py-14">
    <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background font-bold'>So Much More Than <br />
    <span className='text-tritary'>Selling with Integrity</span></h1>
    <p className='text-center text-base sm:text-lg md:text-xl text-background'>What if your sales could inspire trust, nurture relationships, and create lasting value? Selling with integrity is about more than just closing deals—it’s about fostering connections, building credibility, and offering solutions that genuinely make a difference.</p>
    <p className='text-center text-base sm:text-lg md:text-xl text-background'>Exceeding your sales goals becomes effortless when trust and authenticity form the foundation of your approach. By embracing ethical principles and focusing on meaningful interactions, you can cultivate loyalty, enhance your reputation, and drive impact that goes far beyond transactions. It’s not just about selling; it’s about leading with purpose and creating value that resonates.</p>
    <button onClick={openCalendly} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Me</button>
    </div>
    </div>
    {/* Section 2 */}
    <div className="w-full min-h-[120vh] md:min-h-screen bg-[url('/src/assets/aboutpage6.png')] bg-center bg-cover relative">
    <div className="bg-background bg-opacity-85 w-full min-h-full absolute flex flex-col md:flex-row gap-8 items-center justify-center px-4 md:px-32 py-14">
    <div className="w-full md:w-[50%] min-h-full">
          <img src="/src/assets/co4.jpeg" className='w-[80%] md:w-full mx-auto h-[300px] md:h-[450px] object-cover object-center rounded-3xl' alt="" />
        </div>
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 md:mr-14 items-center md:items-start justify-center">
        <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl text-tritary font-bold [text-shadow:_2px_4px_4px_#000]'>Ignite Transformation with Tailored Talks</h2>
        <p className='text-center sm:text-left text-sm sm:text-base text-secondary'>As a coach, trainer, and speaker, I deliver inspirational talks that resonate with your team’s aspirations and challenges. Whether it’s a quick 10-minute motivational session, a thought-provoking “Lunch and Learn,” or an electrifying keynote speech, my talks are designed to spark action and inspire change. I customize each presentation to align with your organization’s goals, empowering individuals to unlock their potential and embrace new possibilities.</p>
        <button onClick={openCalendly} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Me</button>
        </div>
    </div>
    </div>
     {/* Section 3 */}
     <div className='bg-primary w-full min-h-screen flex flex-col justify-center items-center py-0 pt-20 gap-4 sm:gap-4 md:gap-8 px-2'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl text-center text-tritary font-bold mb-4 sm:mb-0 mx-2'>THE ANSWER YOU HAVE BEEN LOOKING FOR</h2>
      <p className='text-lg sm:text-2xl md:text-3xl text-center text-background font-medium mx-2'>Discover the holistic soltion for positive life</p>
      <div className='w-[80%] md:w-[60%] mx-auto h-[500px]'>
      <Video videoRef={videoRef1} videoSrc={"/src/assets/videos/10.mp4"} />
      </div>
      </div>
      {/* Section 4 */}
    <div className="w-full min-h-[120vh] md:min-h-screen relative">
    <div className="bg-background bg-opacity-85 w-full min-h-full absolute flex flex-col gap-8 items-center justify-center px-4 md:px-32 py-14">
    <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold'>Empowering Leadership Through <br />
    <span className='text-tritary'>Inspiration</span></h1>
    {/* <p className='text-center text-base sm:text-lg md:text-xl text-primary'>What would more sales tomorrow mean to you? More scale, more freedom, more of the things that matter? It all starts with the ability to close more deals.</p> */}
    <p className='text-center text-base sm:text-lg md:text-xl text-primary'>Inspire your team to achieve greatness with talks that build confidence, ignite passion, and foster leadership. My sessions are designed to create a culture of positivity and collaboration, where individuals feel empowered to overcome obstacles and thrive together. By sharing stories of resilience, growth, and success, I aim to leave a lasting impression that fuels both personal and professional transformation.</p>
    <button onClick={openCalendly} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Me</button>
    </div>
    </div>
     {/* Section 6 */}
     <div className="w-full min-h-[70vh] md:min-h-screen bg-[url('/src/assets/4.png')] bg-fixed bg-center bg-cover relative">
    <div className="bg-background bg-opacity-85 w-full min-h-full absolute flex flex-col gap-8 items-center justify-center px-4 md:px-32 py-14">
    <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold'>Meaningfull Messages That <br />
    <span className='text-tritary'>Resonate</span></h1>
    <p className='text-center text-base sm:text-lg md:text-xl text-primary'>My inspirational talks go beyond motivation—they are crafted to align with your organization’s values and vision. From executive retreats to company-wide events, I deliver powerful messages that encourage individuals to think big, act boldly, and achieve their dreams. Let’s create a moment of inspiration that uplifts your team and sets the tone for long-term success.</p>
    <button onClick={openCalendly} className='bg-thrice text-background sm:text-2xl hover:bg-tritary hover:text-primary text-base px-3 py-2 sm:px-12 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Me</button>
    </div>
    </div>
  </div>
  )
}

export default InspirationalTalks