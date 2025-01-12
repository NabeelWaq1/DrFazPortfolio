import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-[50vh] md:min-h-[45vh] overflow-hidden'>
      <div className="flex flex-col md:flex-row justify-center gap-8 border-t-4 border-b-4 border-primary items-center w-full min-h-[100px] px-4 py-6">
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary [text-shadow:_2px_4px_4px_#fff] text-center md:text-start'>CONNECT WITH Dr. FAZ</h2>
      <div className="flex flex-row flex-wrap gap-2 items-center justify-center w-full md:w-[200px]">
      <i className="ri-instagram-fill w-14 h-14 md:w-10 md:h-10 hover:bg-secondary cursor-pointer transition-all ease-in duration-200 rounded-full text-background bg-primary flex justify-center items-center"></i>
      <i className="ri-facebook-circle-fill w-14 h-14 md:w-10 hover:bg-secondary cursor-pointer transition-all ease-in duration-200 md:h-10 rounded-full text-background bg-primary flex justify-center items-center"></i>
      <i className="ri-youtube-fill w-14 h-14 md:w-10 md:h-10 hover:bg-secondary cursor-pointer transition-all ease-in duration-200 rounded-full text-background bg-primary flex justify-center items-center"></i>
      <i className="ri-linkedin-box-fill w-14 h-14 md:w-10 hover:bg-secondary cursor-pointer transition-all ease-in duration-200 md:h-10 rounded-full text-background bg-primary flex justify-center items-center"></i>
      </div>
      </div>
      <div className="flex flex-col justify-center px-8 md:px-20 items-center w-full min-h-[300px] bg-secondary py-4">
      <div className="flex flex-col md:flex-row justify-center px-8 md:px-20 items-center w-full min-h-[200px] bg-secondary py-6">
        <div className="w-full md:w-[48%] md:flex-row md:justify-start md:items-center min-h-full flex items-center justify-center gap-4 flex-col">
         <div className="w-36 h-36 rounded-full border-2 border-primary"> 
          <img src="/src/assets/footer.jpg" className='w-full h-full object-cover object-center rounded-full' alt="" />
         </div>
         <h1 className='text-3xl font-ligh text-background font-[arms] my-4 mb-14 md:mb-6 mr-2'>Dr. <span className='text-tritary font-[arms]'>Faz</span></h1>
        </div>
        <div className="w-full md:w-[48%] min-h-full flex items-center justify-center md:items-end md:pr-38 flex-col">
        <h4 className='text-xl md:text-2xl font-semibold text-center md:text-start text-background'>Quick Links</h4>
        <ul className='flex flex-col gap-2 mt-4 text-white items-centerjc
        '>
          <li className='list-disc cursor-pointer hover:text-background text-center md:text-start'>Contact Faz</li>
          <li className='list-disc cursor-pointer hover:text-background text-center md:text-start'>About Faz</li>
        </ul>
        </div>
        </div>
        <div className="w-[80%] h-[1px] bg-background mx-auto"></div>
        <div className="flex px-4 md:px-40 mt-4 justify-center flex-col md:flex-row md:justify-between items-center w-full gap-6">
        <p className='text-lg md:text-xl text-center md:text-start text-background font-light'> &copy;, 2024 Dr. Faz</p>
        <div className="flex gap-2 items-center justify-center md:mt-0">
        <p className='text-lg md:text-xl text-center md:text-start cursor-pointer hover:text-white text-background font-light'>Terms of services</p>
        <p className='text-lg md:text-xl text-center md:text-start text-background font-light'>|</p>
        <p className='text-lg md:text-xl text-center md:text-start cursor-pointer hover:text-white text-background font-light'>Privacy Policy</p>
        </div>
        </div>
      </div>
    
    </div>
  )
}

export default Footer
