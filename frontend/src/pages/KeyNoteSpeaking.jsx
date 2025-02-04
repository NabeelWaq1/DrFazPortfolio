import React, { useEffect, useRef, useState } from 'react'
import Video from '../components/Video';

const KeyNoteSpeaking = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const [isCalendlyOpen, setCalendlyOpen] = useState(false);

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
    <div className="w-full min-h-screen bg-background relative mt-[108px]">

      {/* Section 1 */}
      <div className='w-full h-[150vh] md:h-screen flex flex-col md:flex-row bg-background relative'>
        <img src="/src/assets/ks1.png" alt="img" className='w-full h-full md:h-full object-cover object-[20%]' />
        {/* <img src="/src/assets/4.png" alt="img" className='w-full md:w-[50%] h-[50%] md:h-full object-cover object-left' /> */}
        <div className="absolute top-1/2 md:top-[40%] -translate-y-[50%] left-1/2 -translate-x-[50%] md:-translate-x-[unset] md:left-[unset] md:right-[-15%] bg-background bg-opacity-60 w-[90%] md:w-[50%] min-h-[80%] md:min-h-[50%] rounded-xl flex flex-col py-8 px-8 items-center gap-4 justify-center">
          <h1 className='text-center text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight [text-shadow:_0_2px_8px_#000000]'>
            Book Dr. <span className='text-tritary '>Faz To Inspire and Transform</span>
          </h1>
          <p className='text-base md:text-lg text-white text-center'>Looking for an inspiring speaker to energize your audience and deliver impactful insights? Dr. Faz Mehmood brings a wealth of experience as a global strategist, leadership coach, and visionary mentor. With over 40 years of expertise across Fortune 100 companies, entrepreneurship, and transformational coaching, Dr. Faz connects with audiences through engaging storytelling and actionable strategies that spark change and inspire growth. Whether it’s a corporate event, leadership summit, or motivational session, Dr. Faz delivers a powerful message tailored to empower and uplift.</p>
          <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500' onClick={openCalendly}>Book Faz To Speak</button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full min-h-screen flex flex-col gap-8 py-16 px-12 items-center justify-normal md:items-start md:justify-center">
        <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-wider [text-shadow:_0_2px_8px_#000000]'>
          5 Powerful Reasons to Choose Dr. Faz for Your Next Event
        </h2>
        <ol type='1' className='w-full flex flex-col text-center md:text-start gap-4'>
          <li><b>Unmatched Expertise Across Industries:</b>With over 40 years of experience spanning Fortune 100 companies, medical practice, and entrepreneurial ventures, Dr. Faz brings a wealth of knowledge and insight. His unique background allows him to connect with diverse audiences, offering strategies that resonate across industries.</li>
          <li><b>Inspirational and Transformative Leadership:</b>Dr. Faz is not just a speaker; he’s a visionary leader who motivates audiences to unlock their potential. His personal mantra, "Yes YOU Can!", empowers individuals to embrace change, overcome challenges, and achieve excellence in their personal and professional lives.</li>
          <li><b>Engaging and Memorable Presentations:</b>Known for his storytelling, humor, and actionable insights, Dr. Faz keeps audiences captivated from start to finish. Whether addressing small teams or large conferences, his ability to inspire and educate ensures your event will be a lasting success.</li>
          <li><b>Customized Solutions for Real-World Challenges:</b>Dr. Faz doesn’t deliver cookie-cutter speeches. He tailors every presentation to the needs of your audience, diagnosing their challenges and offering practical, results-driven solutions to help them thrive.</li>
          <li><b>A Global Perspective with a Personal Touch:</b>As a multicultural and multilingual expert, Dr. Faz connects with diverse audiences and brings a global perspective to every engagement. His warm, approachable style and ability to build genuine connections ensure every participant feels seen, heard, and inspired.</li>
        </ol>
      </div>

      {/* Section 3 */}
      <div className="w-full min-h-screen flex flex-col gap-4 py-16 justify-center items-center bg-white pb-0 md:justify-start relative">
        <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-primary font-bold tracking-wider'>
          SPEAKING TOPICS
        </h2>
        <h4 className='text-xl md:text-2xl text-center md:text-start text-secondary px-4'>Dr Faz speaks on MPT (Marketing, Personal Growth and Technology)</h4>
        <div className="relative w-full min-h-full px-4 md:px-12 py-16 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start bg-primary gap-6">
          <div className="w-full relative md:w-[48%] h-[400px] md:h-[800px] flex items-start justify-center">
            <img src="/src/assets/kl1.png" className='w-full md:w-[80%] h-[80%] md:h-[50%] rounded-lg object-cover object-left' alt="" />
          </div>
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center">
            <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-background font-bold tracking-wider'>

              STOP NOT WORKING, START NETWORKING

            </h2>
            <p className='text-base md:text-lg text-background text-center md:text-start' >How far you go depends on the connections you build. Whether you're looking to advance your career or grow your business, mastering the art of networking will open doors to endless opportunities and accelerate your success in every aspect of life.</p>

            <h4 className='text-lg md:text-xl text-center md:text-start text-background'>Format :</h4>
            <ul className='mb-4'>
              <li className='text-background list-disc'>30 to 60 Minutes</li>
              <li className='text-background list-disc'>Keynote or Virtual Presentation</li>
            </ul>
            <h4 className='text-lg md:text-xl text-center md:text-start text-background'>Perfect For:</h4>
            <ul className='mb-4'>
              <li className='text-background list-disc'>Entrepreneurs and Business Owners:</li>
              <li className='text-background list-disc'>Emerging leaders</li>
              <li className='text-background list-disc'>Success-Driven Individuals</li>
              <li className='text-background list-disc'>Corporate professionals</li>
              <li className='text-background list-disc'>Coaches and Consultants</li>
            </ul>
            <p className='text-base md:text-lg text-background text-center md:text-start' >In this engaging and transformative session, participants will gain actionable strategies to build meaningful connections, navigate multicultural environments, and leverage networking opportunities like never before. Dr. Faz Mehmood, an expert with 40 years of experience in global leadership, will empower you to unlock the true potential of networking for unparalleled personal and professional growth.</p>
            <button onClick={openCalendly} className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full min-h-[90vh] flex flex-col gap-4 py-0 mt-16 justify-center items-center md:justify-start relative md:pl-24">

        <div className="relative w-full min-h-full px-4 md:px-12 py-16 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start bg-background gap-0">
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center px-6">
            <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-primary font-bold tracking-wider'>
              SELLING WITH INTEGRITY
            </h2>

            <h4 className='text-lg md:text-xl text-center md:text-start text-primary'>Format :</h4>
            <ul className='mb-4'>
              <li className='text-primary list-disc'>Interactive Virtual or In-Person Workshop (45 minutes to 1 hour with activities)</li>
            </ul>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >Great leaders know that actions speak louder than words. This workshop is designed to help participants refine their communication style, enabling them to genuinely connect and engage with their teams and audiences. Whether you aim to boost business outcomes, expand your influence, or improve your effectiveness as a communicator, this transformative session offers practical insights and actionable techniques.</p>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >Drawing from the teachings of John C. Maxwell, the workshop focuses on 2 key principles for connecting and 2 practical approaches to building meaningful relationships. Participants will learn how to bridge communication gaps, inspire trust, and foster collaboration in professional environments.</p>
            <h4 className='text-lg md:text-xl text-center md:text-start text-primary'>Perfect For:</h4>
            <ul className='mb-4'>
              <li className='text-primary list-disc'>Coaches</li>
              <li className='text-primary list-disc'>Teachers</li>
              <li className='text-primary list-disc'>Professionals</li>
              <li className='text-primary list-disc'>Collegiate Professionals</li>
              <li className='text-primary list-disc'>Entry-Level Professionals</li>
            </ul>
            <h4 className='text-lg md:text-xl text-center md:text-start text-primary'>The audience will leave with:</h4>
            <ul className='mb-4'>
              <li className='text-primary list-disc'>Enhanced communication skills.</li>
              <li className='text-primary list-disc'>A clear understanding of principles and practices for connecting.</li>
              <li className='text-primary list-disc'>Life-changing, inspirational, and educational insights.</li>
              <li className='text-primary list-disc'>Engaging activities that encourage interaction and practical application.</li>
            </ul>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >This program is ideal for professionals in Human Resources, Marketing, Communications, and Meetings Technology, seeking to elevate their communication game while maintaining integrity at the core of their actions.</p>
            <button onClick={openCalendly} className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
          </div>
          <div className="w-full relative md:w-[50%] h-[400px] md:h-[1200px] flex items-start justify-center">
            <img src="/src/assets/kr1.png" className='w-full md:w-[80%] h-[80%] md:h-[50%] rounded-lg object-cover object-right' alt="" />
          </div>
        </div>
      </div>


      {/* Section 5 */}
      <div className="w-full min-h-screen flex flex-col gap-4 py-16 justify-center items-center md:justify-start relative">

        <div className="relative w-full min-h-full px-4 md:px-12 py-16 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start bg-primary gap-6">
          <div className="w-full relative md:w-[48%] min-h-full flex items-start justify-center">
            <img src="/src/assets/kl2.png" className='w-full md:w-[80%] h-[60%] md:h-[50%] rounded-lg' alt="" />
          </div>
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center">
            <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-background font-bold tracking-wider'>
              How To Gain Respect With Zero Talent
            </h2>
            <h4 className='text-lg md:text-xl text-center md:text-start text-background'>Format :</h4>
            <ul className='mb-4'>
              <li className='text-background list-disc'>60-Minute Workshop</li>
            </ul>
            <p className='text-base md:text-lg text-background text-center md:text-start' >Respect isn’t about talent—it’s about attitude, character, and action. In this transformative workshop, participants will uncover simple yet powerful strategies that require no special skills but can immediately elevate the respect they earn in both personal and professional settings.</p>

            <h4 className='text-lg md:text-xl text-center md:text-start text-background'>Perfect For:</h4>
            <ul className='mb-4'>
              <li className='text-background list-disc'>Students</li>
              <li className='text-background list-disc'>Youngsters</li>
            </ul>
            <p className='text-base md:text-lg text-background text-center md:text-start' >With practical, down-to-earth principles, this session inspires participants to embrace habits that foster trust, integrity, and positive influence, leaving them empowered to make meaningful changes in their daily lives.</p>
            <button onClick={openCalendly} className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full min-h-[90vh] flex flex-col gap-4 py-0 border-b-2 border-black justify-center items-center md:justify-start relative md:pl-24">

        <div className="relative w-full min-h-full px-4 md:px-12 py-16 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start bg-background gap-0">
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center px-6">
            <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-primary font-bold tracking-wider'>
            Market Matchmaker Training
            </h2>

            <h4 className='text-lg md:text-xl text-center md:text-start text-primary'>Format :</h4>
            <ul className='mb-4'>
              <li className='text-primary list-disc'>Virtual Program (Workshop Style)</li>
            </ul>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >Unlock the secrets to business growth with the "Market Matchmaker Training" program, an immersive and results-driven workshop designed to empower professionals, entrepreneurs, and organizations with cutting-edge strategies for identifying and connecting with the right markets.</p>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >Led by the renowned Dr. Faz Mehmood, this program dives deep into the art and science of market matchmaking, helping participants master key areas such as market research, customer segmentation, competitive analysis, and value proposition development. Through engaging case studies, interactive sessions, and real-world examples, attendees will learn how to identify market opportunities, tailor their offerings, and position themselves effectively against competitors.</p>
            <h4 className='text-lg md:text-xl text-center md:text-start text-primary'>This program is perfect for:</h4>
            <ul className='mb-4'>
              <li className='text-primary list-disc'>Entrepreneurs and Business Owners</li>
              <li className='text-primary list-disc'>Marketing and Sales Professionals</li>
              <li className='text-primary list-disc'>Business Strategists</li>
            </ul>
            <h4 className='text-lg md:text-xl text-center md:text-start text-primary'>The audience will leave with:</h4>
            <ul className='mb-4'>
              <li className='text-primary list-disc'>Practical insights into identifying and analyzing target markets.</li>
              <li className='text-primary list-disc'>Proven strategies for developing tailored marketing approaches.</li>
              <li className='text-primary list-disc'>Essential skills in networking and building relationships with market players.</li>
              <li className='text-primary list-disc'>Confidence to implement actionable market matchmaking techniques.</li>
            </ul>
            <p className='text-base md:text-lg text-primary text-center md:text-start' >Don't miss your chance to become a master at connecting with the right markets and take your business to unprecedented heights. Join Dr. Faz Mehmood and transform the way you approach market matchmaking today!</p>
            <button onClick={openCalendly} className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
          </div>
          <div className="w-full relative md:w-[50%] h-[400px] md:h-[1200px] flex items-start justify-center">
            <img src="/src/assets/kr2.png" className='w-full md:w-[80%] h-[80%] md:h-[50%] rounded-lg object-cover object-right' alt="" />
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className="w-full px-4 md:px-12 py-16 min-h-[50vh] md:pl-24 flex flex-col md:flex-row gap-6 justify-between md:justify-center items-center bg-background">
        <div className="w-full md:w-[48%] min-h-full flex flex-col gap-3 items-center md:items-start justify-center">
          <h4 className='text-xl md:text-2xl text-center md:text-start text-primary font-semibold'>
          The Art of Impactful Keynote Speaking
          </h4>
          <p className='text-base md:text-lg text-secondary text-center md:text-start' >Experience the transformative power of Dr. Faz’s keynote speeches that have inspired audiences across four continents. This video showcases dynamic presentations, heartfelt stories, and strategies that ignite motivation, foster leadership, and drive personal and professional growth.</p>
        </div>
        <div className="w-full md:w-[48%] min-h-full flex justify-center items-center">
        <Video thumb={'/src/assets/co3.jpeg'} videoRef={videoRef1} videoSrc={"/src/assets/videos/fazal2.mp4"} />
        </div>
      </div>

      {/* Section 8 */}
      <div className="w-full px-4 md:px-12 min-h-screen md:min-h-[50vh] flex flex-col md:flex-row gap-6 justify-center md:justify-center items-center bg-background">
        <div className="w-full md:w-[48%] min-h-full flex justify-center items-center">
        <Video videoRef={videoRef2} videoSrc={"/src/assets/videos/Fazal.mp4"} />
        </div>
        <div className="w-full md:w-[48%] min-h-full flex flex-col gap-3 items-center md:items-start justify-center">
          <h4 className='text-xl md:text-2xl text-center md:text-start text-primary font-semibold'>
          Elevate, Empower, Excel
          </h4>
          <p className='text-base md:text-lg text-secondary text-center md:text-start' >Discover how Dr. Faz crafts speeches that go beyond words to create lasting change. In this video, he reveals his approach to connecting with diverse audiences, delivering actionable insights, and leaving a lasting impact that empowers individuals to lead with purpose and passion.</p>
        </div>
      </div>

      {/* Section 9 */}
      <div className="w-full min-h-[60vh] bg-primary grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-10 py-10 px-4 md:px-12 mt-16">
        <img className='object-cover rounded-xl h-[200px] w-full' src="/src/assets/2.png" alt="" />
        <img className='object-cover rounded-xl h-[200px] w-full' src="/src/assets/3.png" alt="" />
        <img className='object-cover rounded-xl h-[200px] w-full' src="/src/assets/2.png" alt="" />
        <img className='object-cover rounded-xl h-[200px] w-full' src="/src/assets/4.png" alt="" />
        <img className='object-cover rounded-xl h-[200px] w-full' src="/src/assets/testimonial1.jpg" alt="" />
        <img className='object-cover rounded-xl h-[200px] w-full' src="/src/assets/1.png" alt="" />
        <img className='object-cover rounded-xl h-[200px] w-full' src="/src/assets/3.png" alt="" />
        <img className='object-cover rounded-xl h-[200px] w-full' src="/src/assets/aboutpage2.png" alt="" />
      </div>

    </div>
  )
}

export default KeyNoteSpeaking
