import React, { useState } from 'react'

const Enterpreneurship = () => {
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
    <div className='w-full relative min-h-screen mt-[108px]'>
      {/* Section 1 */}
      <div className="relative w-full min-h-[140vh] sm:min-h-screen flex justify-center bg-[url('/src/assets/leadership1.png')] bg-cover bg-left md:bg-top bg-fixed md:justify-end items-center px-4 md:px-6 py-16">
        <div className="w-full sm:w-[80%] md:w-[50%] min-h-full bg-primary bg-opacity-50 px-4 md:px-8 py-10 rounded-lg flex flex-col gap-5 justify-center items-center md:items-start">
          <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-background [text-shadow:_0_6px_8px_#000000] text-center md:text-start'>Inspire. Lead. Transform.</h1>
          <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-background'>Explore transformative workshops and keynotes packed with actionable insights to elevate your team, cultivate impactful leaders, and drive lasting change.</h4>
          <p className='text-lg md:text-xl text-center md:text-start text-background font-light'>Unlock leadership excellence with Dr. Faz Mehmood, a global authority in leadership, communication, and personal growth. With 40+ years of experience across Fortune 100 companies, entrepreneurship, and international speaking, Dr. Faz empowers individuals and organizations to achieve extraordinary success.</p>
          <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-background'>Start your journey today.</h4>
        </div>
      </div>
      {/* Section 2 */}
    
        <div className="relative w-full min-h-full px-4 md:px-12 py-14 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start bg-primary gap-6">
          <div className="w-full relative md:w-[48%] h-[400px] flex items-center justify-center">
            <img src="/src/assets/lw1.png" className='w-full md:w-[80%] h-[80%] md:h-[80%] object-cover rounded-lg' alt="" />
          </div>
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center">
            <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-background [text-shadow:_0_6px_8px_#000000] text-center md:text-start'>Empowering Leaders on a Global Stage</h1>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-background'>Dr. Faz Mehmood recently conducted an international workshop in his hometown, Philadelphia, at a prestigious John Maxwell Group event. Drawing on decades of leadership expertise, he inspired attendees with actionable strategies to excel in their personal and professional journeys.</h4>
            <p className='text-lg md:text-xl text-center md:text-start text-background font-light'>His engaging session highlighted the principles of transformative leadership, effective communication, and unlocking potential—hallmarks of his collaboration with global leaders and organizations.</p>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-background'>Join the legacy of impactful leadership.</h4>
          </div>
        </div>

      {/* Section 3 */}
      <div className="w-full px-4 md:px-24 py-16 min-h-screen flex flex-col md:flex-row gap-6 justify-between md:justify-center items-center bg-background">
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center">
            <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary [text-shadow:_0_6px_8px_#fff] text-center md:text-start'>Leading with Purpose: Karachi Gymkhana Workshop</h1>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-primary [text-shadow:_0_6px_8px_#fff]'>Dr. Faz Mehmood recently addressed an inspiring workshop at Karachi Gymkhana, where he shared his expertise on “How to Set Goals” and achieve them with purpose-driven leadership.</h4>
            <p className='text-lg md:text-xl text-center md:text-start text-primary font-light'>Drawing from his vast experience, Dr. Faz empowered participants with practical tools to define clear objectives, stay focused, and align their goals with their personal and organizational visions. His dynamic session left attendees motivated to lead with clarity and confidence.</p>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-primary [text-shadow:_0_6px_8px_#fff]'>Discover the power of goal-oriented leadership..</h4>
          </div>
        <div className="w-full md:w-[48%] min-h-full flex justify-center items-center">
          <img src="/src/assets/lw3.png" alt="img" className='w-[90%] h-[300px] md:h-[400px] rounded-lg object-cover' />
        </div>
      </div>

      {/* Section 4 */}
      <div className="relative w-full min-h-full px-4 md:px-12 py-14 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start bg-primary gap-6">
          <div className="w-full relative md:w-[48%] h-[400px] flex items-center justify-center">
            <img src="/src/assets/lw2.png" className='w-full md:w-[80%] h-[80%] md:h-[100%] object-cover rounded-lg' alt="" />
          </div>
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center">
            <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-background [text-shadow:_0_6px_8px_#000000] text-center md:text-start'>Driving Business Growth: FPCCI Workshop</h1>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-background'>At a workshop hosted by the FPCCI (Federation of Pakistan Chambers of Commerce and Industry), Dr. Faz Mehmood shared his insights on Business Growth through Marketing Strategies and Consumer-Centric Production.</h4>
            <p className='text-lg md:text-xl text-center md:text-start text-background font-light'>With a focus on practical solutions, he guided participants on crafting impactful marketing strategies, understanding consumer behavior, and leveraging innovation to boost business success. His session empowered entrepreneurs and business leaders with actionable steps to thrive in competitive markets.</p>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-background'>Elevate your business with strategic expertise.</h4>
          </div>
        </div>

         {/* Section 5 */}
      <div className="w-full px-4 md:px-24 py-16 min-h-screen flex flex-col md:flex-row gap-6 justify-between md:justify-center items-center bg-background">
          <div className="relative w-full md:w-[48%] h-full flex flex-col gap-4 items-center md:items-start justify-center">
            <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary [text-shadow:_0_6px_8px_#fff] text-center md:text-start'>Inspiring Change: APPNA Winter Meeting 2024</h1>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-primary [text-shadow:_0_6px_8px_#fff]'>At the APPNA Winter Meeting 2024, Dr. Faz Mehmood captivated audiences with his expertise in Leadership, Communication, and Personal Growth.</h4>
            <p className='text-lg md:text-xl text-center md:text-start text-primary font-light'>Through his thought-provoking session, he empowered attendees to embrace change, set impactful goals, and lead with purpose in both personal and professional spheres. His dynamic presentation left a lasting impression, inspiring action and transformation among participants.</p>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-primary [text-shadow:_0_6px_8px_#fff]'>Shape your future with visionary leadership.</h4>
          </div>
        <div className="w-full md:w-[48%] min-h-full flex justify-center items-center">
          <img src="/src/assets/co3.jpeg" alt="img" className='w-[90%] h-[300px] md:h-[400px] rounded-lg object-cover' />
        </div>
      </div>

      {/* Section 6 */}
      {/* <div className="relative w-full min-h-screen flex justify-center bg-[url('/src/assets/4.png')] bg-cover bg-left md:bg-top md:justify-end items-center px-4 md:px-6 py-16">
        <div className="w-full min-h-full bg-background opacity-75 absolute top-0 left-0 z-10"></div>
        <div className="w-full sm:w-[80%] md:w-[50%] min-h-[600px] px-4 md:px-8 py-10 rounded-lg flex flex-col gap-5 justify-center items-center md:items-start relative z-[15]">
            <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[40px] text-primary [text-shadow:_0_6px_8px_#fff] text-center md:text-start'>Leading with Purpose: Karachi Gymkhana Workshop</h1>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-primary [text-shadow:_0_6px_8px_#fff]'>Dr. Faz Mehmood recently addressed an inspiring workshop at Karachi Gymkhana, where he shared his expertise on “How to Set Goals” and achieve them with purpose-driven leadership.</h4>
            <p className='text-lg md:text-xl text-center md:text-start text-primary font-light'>Drawing from his vast experience, Dr. Faz empowered participants with practical tools to define clear objectives, stay focused, and align their goals with their personal and organizational visions. His dynamic session left attendees motivated to lead with clarity and confidence.</p>
            <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-primary [text-shadow:_0_6px_8px_#fff]'>Discover the power of goal-oriented leadership..</h4>
          </div>
      </div> */}

      {/* Section 7 */}
      <div className="w-full min-h-screen md:min-h-[60vh] bg-[url('/src/assets/3.png')] bg-cover bg-center relative flex items-center justify-center md:justify-start">
        <div className="absolute w-full min-h-full bg-primary bg-opacity-70 z-10"></div>
        <div className="relative z-[18] flex flex-col gap-4 items-center justify-center md:items-start w-full md:w-[70%] px-4 md:px-40 py-10">
          <h2 className='w-full text-2xl md:text-3xl lg:text-4xl font-extrabold text-background [text-shadow:_2px_4px_4px_#000] text-center md:text-start'>Book Faz Now To Make Your Life Positive</h2>
          <p className='text-lg md:text-xl text-center md:text-start text-background font-light'>Empowering leaders with the skills to excel in leadership, teamwork, and success in today’s competitive world.</p>
          <button onClick={openCalendly} className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
        </div>
      </div>

    </div>
  )
}

export default Enterpreneurship
