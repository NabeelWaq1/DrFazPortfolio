import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col w-full min-h-screen md:h-[130vh] bg-[url("/src/assets/contact.png")] bg-cover bg-right md:bg-center mt-24 px-4 md:px-8 py-8 justify-center items-center relative'>
      <div className="absolute z-[16] w-full min-h-full bg-primary bg-opacity-60"></div>
      <h1 className='md:absolute top-[13%] left-[5%] text-[10vw] md:text-[6vw] text-center font-bold tracking-tight text-tritary md:font-semibold z-[18]'>CONNECT WITH FAZ</h1>
      <div className="md:absolute z-[18] top-[20%] left-[30%] w-full md:w-[700px] min-h-[400px] bg-background bg-opacity-50 rounded-lg flex flex-col gap-8 px-5 py-10 justify-center items-center">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
          <div className="flex flex-col items-start justify-center gap-2 w-full md:w-[48%]">
            <label htmlFor="fname">First Name</label>
            <input type="text" id='fname' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='First Name' />
          </div>
          <div className="flex flex-col items-start justify-center gap-2 w-full md:w-[48%]">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id='lname' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='Last Name' />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
          <div className="flex flex-col items-start justify-center gap-2 w-full md:w-[48%]">
            <label htmlFor="email">Email</label>
            <input type="emial" id='email' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='Email' />
          </div>
          <div className="flex flex-col items-start justify-center gap-2 w-full md:w-[48%]">
          <label htmlFor="phone">Phone</label>
          <input type="number" id='phone' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='Phone' />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
          <div className="flex flex-col items-start justify-center gap-2 w-[98%]">
          <label htmlFor="message">Message</label>
          <textarea type="text" id='message' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='Message' />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
