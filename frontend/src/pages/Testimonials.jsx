import React from 'react'

const Testimonials = () => {
  return (
    <div className='w-full min-h-screen bg-background mt-[100px]'>
      {/* Section 1 */}
      <div className="w-full min-h-[130vh] bg-[url('/src/assets/testimonial1.png')] bg-cover bg-center md:min-h-[85vh] flex flex-col md:flex-row gap-10 md:gap-8 px-4 md:px-8 py-8 justify-center md:justify-between items-center pt-[80px]">
        {/* Left */}
        <div className="flex flex-col items-center justify-center md:items-start gap-2 w-full md:w-[50%]">
          <h4 className='flex justify-center items-center gap-4 text-primary text-lg font-light text-center md:text-start'>TESTIMONIALS <span className='w-10 h-[1px] bg-primary'></span></h4>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center md:text-start'>Uncover the reasons behind <span className='text-tritary'>Faz's worldwide popularity as a trusted partner.</span></h1>
          <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500 mt-4 md:text-start'>View</button>
        </div>
        {/* Right */}
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <iframe className='w-full h-[400px] md:w-[80%] md:h-[300px] rounded-3xl' src="https://www.youtube.com/embed/lvLcAjbwi3U?si=QDWuiByIMt_2WY53" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      {/* Section 2 */}
      <div className="slider py-16 min-h-screen grid items-center m-auto relative w-[90%]">
        <div className="slide-track flex w-[cal(250px * 9)]">

          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/2.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/3.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/4.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/2.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/3.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/4.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>

        </div>
        <div reverse="true" className="slide-track flex w-[cal(250px * 9)]">

          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/2.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/3.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/4.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/2.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/3.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/4.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>

        </div>
      </div>

{/* Section 3 */}
      <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 py-8 gap-4">
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/1.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/2.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/3.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/4.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/5.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/6.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/7.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/8.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/9.mp4"></video>
        <video controls className='w-[80%] mx-auto border-2 shadow-4xl shadow-thrice border-black rounded-xl h-[300px]' src="/src/assets/videos/10.mp4"></video>
      </div>
    </div>
  )
}

export default Testimonials
