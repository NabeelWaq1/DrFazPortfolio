import React, { useEffect, useState } from 'react'
import GetQuoteButton from '../components/GetQuoteButton.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core.js'
import Marquee from "react-fast-marquee";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    {
      url: '/src/assets/1.png'
    },
    {
      url: '/src/assets/2.png'
    },
    {
      url: '/src/assets/3.png'
    },
    {
      url: '/src/assets/4.png'
    },
  ]

  const infinite = [
    {
      url:'/src/assets/software.svg',
      title:'Software Engineering'
    },
    {
      url:'/src/assets/software.svg',
      title:'Software Engineering'
    },
    {
      url:'/src/assets/software.svg',
      title:'Software Engineering'
    },
    {
      url:'/src/assets/software.svg',
      title:'Software Engineering'
    },
    {
      url:'/src/assets/software.svg',
      title:'Software Engineering'
    }
  ]

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastIndex = slides.length - 1;
    const newIndex = isLastIndex === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency array ensures proper updates



  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <GetQuoteButton/>
      {/* Carousel */}
      <div className='w-full h-screen m-auto relative group mt-[108px]'>
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full bg-cover bg-center duration-500"></div>
      {/* Left icon */}
      <i onClick={prevSlide} className="ri-arrow-left-circle-fill block group-hover:block absolute top-[50%] -translate-x-0 left-2 cursor-pointer hover:scale-105 translate-y-[-50%] text-3xl sm:text-5xl font-bold text-tritary"></i>
      {/* Right icon */}
      <i onClick={nextSlide} className="ri-arrow-right-circle-fill block group-hover:block absolute top-[50%] -translate-x-0 right-2  cursor-pointer hover:scale-105 translate-y-[-50%] text-3xl sm:text-5xl font-bold text-tritary"></i>
      <div className="flex justify-center bottom-5 left-[50%] -translate-x-[50%] py-2 gap-5 absolute">
        {
          slides.map((slide, index) => (
            <div key={index} onClick={() => setCurrentIndex(index)} className={` rounded-full w-5 h-5 ${index === currentIndex ? "bg-white": "bg-black"}`}></div>
          ))
        }
      </div>
      </div>
      {/* Section 2 */}
      <div style={{backgroundImage:"url('/src/assets/homesec2.png')"}} className="relative w-full min-h-screen bg-cover bg-no-repeat bg-left brightness-75 flex justify-end items-center py-10">
      <div className="w-full h-full absolute bg-blue-400 bg-opacity-45 z-10"></div>
      <div className="w-[100%] sm:w-[90%] md:w-[60%] min-h-[90%] z-20 bg-background bg-opacity-45 rounded-xl p-5 flex flex-col gap-4 mx-5 sm:mr-32">
        <h1 className='w-full text-3xl md:text-4xl lg:text-5xl font-extrabold '>THE INSPIRATIONAL SPEAKER <br /><span className='text-tritary'>YOU'VE ALWAYS WANTED.</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit illo eligendi minus error, expedita voluptates molestiae commodi at quaerat! Repellat nam sapiente quibusdam vel, quam molestiae! Ducimus adipisci ut non eos quaerat repellat harum ratione cum? Quidem aut iure eos quas! Recusandae laudantium, delectus quis vero suscipit consequatur placeat fugit architecto asperiores provident debitis pariatur dolorum repudiandae eos est quam enim nihil officia? Voluptates, temporibus! Dolorem beatae, commodi maiores porro odio labore nobis laboriosam laborum voluptate eos ab modi voluptatibus dignissimos quis quidem iure ad sed accusantium. Ipsam aut aliquam ex, non velit, rem sunt maiores reprehenderit omnis odi</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus quam ad aliquam voluptate accusantium, aperiam ipsa libero rerum aliquid mollitia eligendi eos repellat perferendis cupiditate officia dignissimos architecto quisquam asperiores! Aperiam doloribus est facere veniam quam molestias? Ad omnis molestiae voluptate sunt, repellat cum quam suscipit illo accusamus. Ea corporis consequuntur voluptatum sequi, voluptas earum nesciunt nihil voluptatem dolor sunt tempore, asperiores libero mollitia possimus error facilis eaque ducimus eum beatae! Est non dolor officiis impedit, ratione, aperiam blanditiis ipsa eius optio tenetur iste esse facere recusandae sequi fuga quos doloremque vel. Sed veritatis porro placeat, repellendus officia dolorem!</p>
      </div>
      </div>
      {/* Section 3 */}
      <div className='bg-background w-full min-h-screen flex flex-col justify-center items-center py-20 gap-0 sm:gap-4 md:gap-8'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl text-center text-tritary font-bold mb-4 sm:mb-0 mx-2'>THE ANSWER YOU HAVE BEEN LOOKING FOR</h2>
      <p className='text-lg sm:text-2xl md:text-3xl text-center text-black font-medium mx-2'>Discover the holistic soltion for positive life</p>
      <video poster='/src/assets/4.png' className='w-[800px] h-[300px] sm:h-[500px] px-2'controls src="/src/assets/drFazVideo.mp4"></video>
  <div className="flex flex-col gap-4 justify-center items-center w-full bg-primary py-4 px-2 mt-10 relative">
     <h3 className='text-lg sm:text-xl text-background font-semibold text-center'>HAS WORKED WITH PROFESSIONALS IN</h3>
     <div className='infinte-scroller'>
      <Marquee>
     {
      [...infinite,...infinite].map((item,index) => (
        <div key={index} className="brand flex-nowrap flex-shrink-0 ml-2 mr-2 text-background flex flex-col items-center justify-center gap-1">
        <img src={item.url} className='w-16 text-background' alt="" />
       <h4>{item.title}</h4>
       </div>
      ))
     }
</Marquee>
    </div>
  </div>
      </div>
      {/* About */}
      <div className="w-full h-screen sm:h-[115vh] lg:h-[120vh] overflow-hidden bg-fixed bg-[url('/src/assets/4.png')] relative bg-no-repeat bg-cover">
      <div className="bg-primary relative w-full min-h-full bg-opacity-70 flex flex-col lg:flex-row lg:py-0 px-2 sm:px-8 md:px-14  items-center justify-center pt-4 sm:justify-end gap-6 sm:gap-0">
        <div className="flex flex-col gap-4 items-center sm:items-start px-5 sm:px-0 justify-center w-[100%] lg:w-[50%] min-h-full">
          <h2 className='text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-tritary font-bold'><span className='text-background'>Dr.</span> Faz Mehmood</h2>
          <div className="flex flex-col gap-3 items-start justify-center">
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque provident laudantium a aspernatur, nulla itaque sed est voluptate placeat ipsam quasi! Vel doloribus quibusdam perferendis, natus ipsa deserunt autem nulla nihil? Beatae iste provident facere maiores laborum natus, possimus perferendis.</p>
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque provident laudantium a aspernatur, nulla itaque sed est voluptate placeat ipsam quasi! Vel doloribus quibusdam perferendis, natus ipsa deserunt autem nulla nihil? Beatae iste provident facere maiores laborum natus, possimus perferendis.</p>
            <p className='text-center sm:text-left text-sm sm:text-base text-background'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque provident laudantium a aspernatur, nulla itaque sed est voluptate placeat ipsam quasi! Vel doloribus quibusdam perferendis, natus ipsa deserunt autem nulla nihil? Beatae iste provident facere maiores laborum natus, possimus perferendis.</p>
          </div>
          <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Read More</button>
        </div>
        <div className="w-[100%] lg:w-[50%] relative h-[500px] md:h-[550px] hidden sm:flex justify-center items-center lg:h-[800px]">
          <img src="/src/assets/about2.png" className='w-full h-full object-cover' alt="" />
        </div>
      </div>
      </div>
      {/* Resource */}
      <div className="flex flex-col gap-8 py-8 px-2 items-center justify-center w-full min-h-screen mb-4 md:mb-0">
        <div className="flex flex-col w-full items-center justify-center gap-2">
          <h2 className='text-center text-3xl sm:text-4xl md:text-5xl text-tritary font-bold'>Find Your Next Breakthrough</h2>
          <h4 className='text-base sm:text-lg text-gray-600 text-center'>Explore some of Dr.Faz best thoughts and content.</h4>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-center items-center md:items-center px-4">
        <iframe className='rounded-xl w-full h-[180px] md:w-[23%] md:h-[200px]' src="https://www.youtube.com/embed/5YDcklQCXZU?si=FUJEsPPqOEbwVQOP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className='rounded-xl w-full h-[150px] md:w-[23%] md:h-[200px]' src="https://www.youtube.com/embed/5YDcklQCXZU?si=FUJEsPPqOEbwVQOP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className='rounded-xl w-full h-[150px] md:w-[23%] md:h-[200px]' src="https://www.youtube.com/embed/5YDcklQCXZU?si=FUJEsPPqOEbwVQOP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold transition-all ease-in-out duration-500'>More Videos</button>
        <button></button>
      </div>
      {/* Testimonial */}
      <div className="w-full h-screen bg-fixed bg-[url('/src/assets/aboutpage6.png')] bg-cover relative">
      <div className="z-10 absolute w-full h-full bg-background bg-opacity-30"></div>
      <div className="relative z-[18] flex w-full h-full flex-col items-center justify-center gap-8 px-6 md:px-2 py-5 ">
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl text-tritary font-bold'>IT'S POSSIBLE TO LIVE THE <br />
        LIFE OF YOUR DREAMS</h1>
        <iframe className='w-full h-[400px] md:w-[60%] md:h-[60%] rounded-3xl' src="https://www.youtube.com/embed/lvLcAjbwi3U?si=QDWuiByIMt_2WY53" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col items-center justify-center gap-8 w-full min-h-screen py-16 md:py-20">
        <div className="text-center w-full sm:w-[60%] md:whitespace-nowrap flex justify-center items-center px-4 sm:px-0">
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold '>WHY DO SALES EXECUTIVES WORLDWIDE <br />
        <span className='text-tritary'>LOVE WORKING WITH PAUL?</span></h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 w-full min-h-full px-6 md-px-0">
        <div className="flex w-full md:w-[80%] justify-between flex-col md:flex-row items-center gap-8">
          <img src="/src/assets/testimonial1.jpg" className='w-48 h-48 rounded-full object-cover' alt="" />
          <div className="flex flex-col justify-center items-center md:items-start gap-2">
            <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold font-[Raleway]'>Albert</h2>
            <p className='text-center md:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi alias libero recusandae maxime soluta tempora excepturi. Architecto sunt cupiditate saepe animi, ullam cumque doloremque illum.</p>
          </div>
        </div>
        <div className="flex w-full md:w-[80%] justify-between flex-col md:flex-row items-center gap-8">
          <img src="/src/assets/testimonial1.jpg" className='w-48 h-48 rounded-full object-cover' alt="" />
          <div className="flex flex-col justify-center items-center md:items-start gap-2">
            <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold font-[Raleway]'>Albert</h2>
            <p className='text-center md:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi alias libero recusandae maxime soluta tempora excepturi. Architecto sunt cupiditate saepe animi, ullam cumque doloremque illum.</p>
          </div>
        </div>
        <div className="flex w-full md:w-[80%] justify-between flex-col md:flex-row items-center gap-8">
          <img src="/src/assets/testimonial1.jpg" className='w-48 h-48 rounded-full object-cover' alt="" />
          <div className="flex flex-col justify-center items-center md:items-start gap-2">
            <h2 className='text-xl sm:text-2xl md:text-3xl font-extrabold font-[Raleway]'>Albert</h2>
            <p className='text-center md:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi alias libero recusandae maxime soluta tempora excepturi. Architecto sunt cupiditate saepe animi, ullam cumque doloremque illum.</p>
          </div>
        </div>
          </div>
          <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500 mt-8'>View More</button>
        </div>
      </div>
  )
}

export default Home
