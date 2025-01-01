import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
    <div className="w-full mt-[150px] lg:mt-0 h-screen sm:h-[115vh] lg:h-[120vh] overflow-hidden bg-fixed bg-[url('/src/assets/aboutpage2.png')] contrast-125 relative bg-no-repeat bg-cover">
      <div className="bg-secondary sm:pt-12 relative w-full min-h-full bg-opacity-70 flex flex-col lg:flex-row lg:py-0 px-2 sm:px-8 md:px-14  items-center justify-center pt-4 sm:justify-end gap-6 sm:gap-0">
        <div className="flex flex-col gap-4 items-center sm:items-start px-5 sm:px-0 justify-center w-[100%] lg:w-[50%] min-h-full">
          <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'><span className='text-background'>Dr.</span> Faz Mehmood</h2>
          <div className="flex flex-col gap-3 items-start justify-center">
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque provident laudantium a aspernatur, nulla itaque sed est voluptate placeat ipsam quasi! Vel doloribus quibusdam perferendis, natus ipsa deserunt autem nulla nihil? Beatae iste provident facere maiores laborum natus, possimus perferendis.</p>
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque provident laudantium a aspernatur, nulla itaque sed est voluptate placeat ipsam quasi! Vel doloribus quibusdam perferendis, natus ipsa deserunt autem nulla nihil? Beatae iste provident facere maiores laborum natus, possimus perferendis.</p>
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque provident laudantium a aspernatur, nulla itaque sed est voluptate placeat ipsam quasi! Vel doloribus quibusdam perferendis, natus ipsa deserunt autem nulla nihil? Beatae iste provident facere maiores laborum natus, possimus perferendis.</p>
          </div>
        
        </div>
        <div className="w-[100%] lg:w-[50%] relative h-[500px] md:h-[550px] hidden sm:flex justify-center items-center lg:h-[800px]">
          <img src="/src/assets/aboutpage1.png" className='w-full h-full object-cover' alt="" />
        </div>
      </div>
      </div>
      {/* Section 2 */}
      <div className="w-full h-[80vh] md:min-h-[120vh] bg-[url('/src/assets/aboutpage6.png')] contrast-150 relative bg-cover bg-center flex justify-between items-center">
      <div className="w-full h-full bg-background absolute top-0 left-0 bg-opacity-50 z-10"></div>
      <div className="w-full min-h-full flex items-center justify-center gap-6 flex-col relative z-[18] bg-background bg-opacity-40 md:rounded-3xl">
        <h2 className='text-center text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-wider [text-shadow:_0_6px_8px_#000000]'>A Less than <br />
        <span className='text-tritary '>Ideal Beginning</span></h2>
        <div className="flex flex-col w-full md:w-[50%] px-4 md:px-0 text-center justify-center items-center gap-4">
          <p className='text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus nihil esse facilis perferendis a facere, est rerum deserunt quaerat.</p>
          <p className='text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellendus nihil esse facilis perferendis a facere, est rerum deserunt quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, accusamus?</p>
        </div>
      </div>
      </div>
      {/* Section 3 */}
      <div className="w-full min-h-screen bg-background flex flex-col md:flex-row justify-between items-center px-4 py-8 md:px-8 gap-8 md:gap-0">
        <div className="w-full md:w-[50%] min-h-full flex flex-col gap-4 justify-center items-center md:items-start">
          <h2 className='text-center md:text-start text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-wider [text-shadow:_0_2px_8px_#000000]'>
          From Adversity To <span className='text-tritary '>Accomplished Entrepreneur</span>
          </h2>
          <p className='text-lg md:text-xl text-center md:text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum et reiciendis ratione! Eum ad in fugiat asperiores maxime magni, dicta officia maiores animi. Eligendi animi accusamus nemo reprehenderit alias vel voluptatem illum sunt, odit optio doloribus facilis corporis tempore expedita explicabo magni dolorum exercitationem dolor aspernatur. Voluptatibus, iusto perspiciatis.</p>
          <p className='text-lg md:text-xl text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo cum quo aliquam commodi pariatur odit et cupiditate architecto itaque distinctio corporis, placeat magnam fugiat ipsum incidunt, ipsa, id odio repellendus expedita. Facilis deserunt libero ratione odit voluptatum aspernatur eos fuga rem velit blanditiis, omnis quas beatae amet quidem ducimus!</p>
        </div>
        <div className="w-full md:w-[50%] min-h-full flex justify-center items-center">
          <img src="/src/assets/aboutpage4.jpg" className='w-[320px] md:w-[350px] md:h-[500px] rounded-md h-[450px] object-cover object-center shadow-3xl shadow-thrice' alt="" />
        </div>
      </div>
      {/* Section 4 */}
      
    </div>
  )
}

export default About
