import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
    <div className="w-full mt-[150px] lg:mt-0 min-h-[120vh] md:min-h-screen sm:h-[115vh] lg:h-[100vh] overflow-hidden bg-fixed bg-[url('/src/assets/aboutpage2.png')] contrast-125 relative bg-no-repeat bg-cover">
      <div className="bg-secondary sm:pt-12 relative w-full min-h-full bg-opacity-70 flex flex-col lg:flex-row py-20 lg:py-0 px-2 sm:px-8 md:px-14  items-center justify-center sm:justify-end gap-6 sm:gap-0">
        <div className="flex flex-col gap-4 items-center sm:items-start px-5 sm:px-0 justify-center w-[100%] lg:w-[50%] min-h-full">
          <h2 className='text-center sm:text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'><span className='text-background'>Dr.</span> Faz Mehmood</h2>
          <div className="flex flex-col gap-3 items-start justify-center">
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>Dr. Faz Mehmood is a multilingual diversity expert and global business strategist with 40 years of experience. Having spent 20 years with Fortune 100 companies and another 20 as a dedicated medical professional, he blends strategic insight with a human-centered approach to create transformative results. As a doctor, Fortune 100 executive, and entrepreneur, Dr. Faz inspires leaders, executives, and entrepreneurs worldwide to reach their full potential.</p>
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>As the founder of Learn 2 Grow Rich and Worldwide Success Academy, Dr. Faz offers advanced training in leadership, communication, and human behavior. His expertise lies in diagnosing challenges and providing actionable solutions that lead to personal and organizational breakthroughs. Whether transforming businesses or coaching individuals, Dr. Faz equips people with the tools needed to unlock success and growth.</p>
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>An Executive Director with the John Maxwell Company, Dr. Faz engages audiences with actionable insights, storytelling, and humor. His mission is to help organizations and individuals thrive, whether in Karachi or Pennsylvania. Outside of his professional work, Dr. Faz enjoys gardening, knitting, and re-reading Think and Grow Rich, reflecting his belief that success begins with a vision and is achieved through decisive action.</p>
          </div>
        
        </div>
        <div className="w-[100%] lg:w-[50%] relative h-[500px] md:h-[550px] hidden sm:flex justify-center items-center lg:h-[800px] xl:h-[900px]">
          <img src="/src/assets/aboutpage1.png" className='w-full h-full object-cover' alt="" />
        </div>
      </div>
      </div>
      {/* Section 2 */}
      <div className="w-full min-h-[120vh] bg-[url('/src/assets/aboutnew.jpeg')] contrast-150 relative bg-cover bg-center flex justify-between items-center">
      <div className="w-full min-h-full bg-primary absolute top-0 left-0 bg-opacity-50 z-10"></div>
      <div className="w-full min-h-[120vh] flex items-center justify-center gap-6 flex-col relative z-[18] bg-primary bg-opacity-50 py-10 md:py-0">
        <h2 className='text-center text-4xl sm:text-4xl md:text-5xl text-background font-semibold tracking-wider [text-shadow:_0_4px_2px_#000]'>A Journey of<br />
        <span className='text-tritary '>Early Growth</span></h2>
        <div className="flex flex-col w-full md:w-[50%] px-4 md:px-0 text-center justify-center items-center gap-4 text-background">
          <p className='text-sm md:text-lg'>Dr. Faz Mehmood’s journey is a testament to perseverance, growth, and the pursuit of excellence. With over 20 years of experience in the medical field and another two decades in business and leadership, his early years laid a strong foundation for his future accomplishments. From navigating the complexities of the healthcare industry to embracing the dynamic world of business, Dr. Faz cultivated a unique blend of skills that fueled his passion for leadership and personal development. His commitment to lifelong learning and growth became the cornerstone of his success, inspiring countless individuals along the way.</p>
          <p className='text-sm md:text-lg'>As an International John Maxwell Team Executive Director and Distinguished Toastmaster (DTM), Dr. Faz has dedicated his life to empowering others through transformational coaching and leadership training. His early growth journey reflects a deep desire to help people overcome obstacles, unlock their true potential, and achieve remarkable success. Whether mentoring aspiring leaders or guiding seasoned professionals, Dr. Faz’s experiences serve as a beacon of inspiration, proving that with determination and the right mindset, anything is possible.</p>
        </div>
      </div>
      </div>
      {/* Section 3 */}
      <div className="w-full min-h-screen bg-background flex flex-col md:flex-row justify-between items-center px-5 py-12 md:px-8 md:pl-16 gap-8 md:gap-0">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 justify-center items-center md:items-start">
          <h2 className='text-center md:text-start text-4xl sm:text-4xl md:text-5xl text-white font-bold tracking-wider [text-shadow:_0_2px_8px_#000000]'>
          From Medicine to <span className='text-tritary '>Leadership</span>
          </h2>
          <p className='text-sm md:text-lg text-center md:text-start'>Dr. Faz Mehmood’s transition from medicine to leadership is a powerful story of passion, purpose, and transformation. After earning his MD in Health Sciences and serving as a medical doctor for over 20 years, he realized his true calling lay in helping people grow beyond physical health—to thrive in their personal and professional lives. This realization led him to pursue an MBA in Global Management, combining his medical expertise with business acumen to create a holistic approach to leadership. Today, as the President of Learn 2 Grow Rich and Worldwide Success Academy, Dr. Faz leverages his diverse background to inspire and mentor leaders worldwide.</p>
          <p className='text-sm md:text-lg text-center md:text-start'>His leadership journey spans over a decade of speaking engagements, workshops, and coaching sessions across four continents. Certified as a John Maxwell Coach, Teacher, Trainer, and International Speaker, Dr. Faz has conducted more than 30 full-day workshops and 100+ keynote speeches, both in-person and virtually. His programs focus on leadership development, communication skills, and business growth strategies, designed to equip individuals, teams, and organizations with the tools needed to excel. Through his engaging and impactful training, Dr. Faz continues to transform lives, proving that leadership is not just a role—it’s a way of life.</p>
        </div>
        <div className="w-full md:w-[50%] min-h-full flex justify-center items-center">
          <img src="/src/assets/aboutpage4.jpg" className='w-[320px] md:w-[350px] md:h-[500px] rounded-md h-[450px] object-cover object-center shadow-3xl shadow-thrice' alt="" />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-center md:justify-end items-center px-5 py-16 md:px-8 bg-[url('/src/assets/aboutpage7.png')] bg-fixed bg-no-repeat bg-left mt-20 md:bg-top md:py-28 bg-cover">
      <div className="w-full md:w-[50%] min-h-full flex flex-col gap-5">
      <h2 className='text-center md:text-start text-4xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight [text-shadow:_0_2px_8px_#000000]'>
          Mentor And<span className='text-tritary '> Leader</span>
          </h2>
          <p className='text-sm md:text-lg text-background text-center md:text-start'>Dr. Faz Mehmood is not just a mentor; he is a true visionary leader who has dedicated his life to empowering others to reach their full potential. With a remarkable 40-year career that spans Fortune 100 companies, entrepreneurship, and the medical field, Dr. Faz brings a wealth of experience and wisdom to his mentorship and leadership style. His diverse background allows him to guide professionals from a wide range of industries, equipping them with the tools and mindset needed to excel in both their personal and professional lives.</p>
          <p className='text-sm md:text-lg text-background text-center md:text-start'>As a leader, Dr. Faz exemplifies the power of blending strategic insight with human connection. His approach is deeply rooted in understanding individuals' needs and tailoring solutions that drive lasting results. With a Doctorate, an MBA in Global Management, and a deep commitment to continuous learning, he is a lifelong student of leadership and development. His personal mantra, “Yes YOU Can!”, resonates in every interaction, encouraging those he mentors to embrace challenges and push beyond their limits. His leadership is defined by empathy, actionable insights, and a focus on personal growth.</p>
          <p className='text-sm md:text-lg text-background text-center md:text-start'>Dr. Faz's leadership journey extends beyond his own successes. He is the founder of Learn 2 Grow Rich and Worldwide Success Academy, where he has helped countless individuals and organizations transform their mindsets, improve communication, and develop leadership skills. As an Executive Director with the John Maxwell Company, Dr. Faz uses his platform to mentor others in leadership, specializing in human behavior, communication, and dream building. His leadership style combines strategic vision, motivational storytelling, and humor, making him an engaging and dynamic presence for those seeking to achieve greatness.</p>
          <p className='text-sm md:text-lg text-background text-center md:text-start'>Through his mentorship, Dr. Faz fosters an environment of continuous growth, believing that anyone can achieve their dreams with the right guidance, dedication, and mindset. Whether coaching a Fortune 100 executive or an aspiring entrepreneur, Dr. Faz has the unique ability to identify challenges, create clear strategies, and lead others to actionable solutions. His life’s mission is to help individuals and organizations thrive and unlock their full potential, leaving an enduring impact on those he leads.</p>
      </div>
      </div>
      {/* Section 5 */}
      <div className="w-full min-h-screen flex flex-col gap-6 items-center justify-center px-5 md:px-16 py-16">
      <h2 className='text-center md:text-start text-4xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight [text-shadow:_0_2px_8px_#000000]'>
          My <span className='text-tritary '>Mentors</span>
          </h2>
          <div className="w-full min-h-full flex flex-col md:flex-row gap-16 items-center justify-normal md:justify-center">
            <div className="min-h-[350px] w-full md:w-[40%] flex flex-col items-center md:items-start justify-center gap-4">
              <img src="/src/assets/johnmax.jpg" alt="img" className='w-full h-[400px] object-cover rounded-lg' />
              <h4 className='text-xl md:text-2xl text-center md:text-start text-secondary font-extrabold'>John C Maxwell</h4>
              <p className='text-sm md:text-lg text-center md:text-start'>John C. Maxwell is a world-renowned leadership expert, speaker, and author who has influenced millions of people worldwide through his books, seminars, and coaching. With over 40 years of experience, he is known for his practical, principles-based approach to leadership that empowers individuals to become effective leaders in all aspects of life. Maxwell's teachings focus on the core values of integrity, vision, and personal growth, emphasizing that leadership is about serving others and developing their potential. As a mentor and coach, Maxwell has worked with top executives, athletes, and organizations, helping them create lasting impact through transformational leadership. His work continues to inspire leaders across the globe to lead with purpose and authenticity.</p>
            </div>
            <div className="min-h-[350px] w-full md:w-[40%] flex flex-col items-center md:items-start justify-center gap-4">
              <img src="/src/assets/testimonial1.jpg" alt="img" className='w-full h-[400px] object-cover rounded-lg' />
              <h4 className='text-xl md:text-2xl text-center md:text-start text-secondary font-extrabold'>John C Maxwell</h4>
              <p className='text-sm md:text-lg text-center md:text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, inventore. Neque voluptatem veniam eum rerum hic, nobis voluptates doloribus. Eligendi corrupti tempore veniam quisquam aliquid repellat, blanditiis ipsam quod explicabo eos minus quas laborum, consequuntur quae culpa illo illum ratione voluptates mollitia perferendis nihil recusandae facere excepturi saepe! Autem vitae modi, temporibus, eos ad ullam libero culpa quam quaerat voluptates quasi qui adipisci laborum nihil doloribus iste laudantium deserunt repudiandae alias eveniet, voluptatibus optio ipsam? Soluta provident fuga, itaque excepturi consectetur modi ipsa mollitia, possimus dolorem at ex eum natus corrupti animi cupiditate accusamus blanditiis suscipit voluptatem, dolorum dolores sint.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
