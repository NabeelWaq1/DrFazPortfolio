import React from 'react'

const KeyNoteSpeaking = () => {
  return (
    <div className="w-full min-h-screen bg-background relative mt-[108px]">

{/* Section 1 */}
    <div className='w-full h-screen flex flex-col md:flex-row bg-background relative'>
      <img src="/src/assets/testimonial1.jpg" alt="img" className='w-full md:w-[50%] h-[50%] md:h-full object-cover' />
      <img src="/src/assets/4.png" alt="img" className='w-full md:w-[50%] h-[50%] md:h-full object-cover' />
      <div className="absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] bg-background bg-opacity-60 w-[90%] md:w-[50%] min-h-[50%] rounded-xl flex flex-col py-8 px-8 items-center gap-4 justify-center">
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight [text-shadow:_0_2px_8px_#000000]'>
          Book Dr. <span className='text-tritary '>Faz To Speak</span>
          </h1>
          <p className='text-base md:text-lg text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem blanditiis iusto temporibus vel, facere nam quia ducimus in, voluptatibus reiciendis fuga distinctio, deleniti deserunt magnam voluptatem officiis quam numquam quibusdam.</p>
          <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Book Faz To Speak</button>
      </div>
    </div>

    {/* Section 2 */}
    <div className="w-full min-h-screen flex flex-col gap-8 py-16 px-12 items-center justify-normal md:items-start md:justify-center">
    <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-wider [text-shadow:_0_2px_8px_#000000]'>
    Top 5 Reasons why Meeting Planners Hire Dr. Faz
          </h2>
          <ol type='1' className='w-full flex flex-col text-center md:text-start gap-4'>
            <li><b>Expertise:</b> Michael Pope is a technology expert and business coach with extensive experience in simplifying complex technological concepts and making them easy to understand and relevant for business success.</li>
            <li><b>Actionable Steps:</b> Michael offers practical and actionable steps that bring results. He provides valuable insights and tips on how to systematize your business, build your brand, create a strong online presence, and use technology for marketing success.</li>
            <li><b>Audience Engagement:</b> Michael is an inspiring and practical presenter who engages his audience with his relatable and insightful content. He presents his content in an organized and concise manner that is easily digestible for his audience.</li>
            <li><b>Customizable Content:</b> Michael can customize his content to fit your specific event and audience needs. He works closely with event planners to ensure that his content aligns with the event theme, goals, and objectives.</li>
            <li><b>Caring and Empowering:</b> Michael is not only knowledgeable but also caring and empowering. He cares about his audience's technology success and provides them with the tools and resources they need to succeed. He makes technology easy and understandable, breaking down barriers and empowering his audience to achieve their business goals.</li>
          </ol>
    </div>

    {/* Section 3 */}
    

    </div>
  )
}

export default KeyNoteSpeaking
