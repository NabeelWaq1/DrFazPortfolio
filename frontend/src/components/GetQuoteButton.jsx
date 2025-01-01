import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GetQuoteButton = () => {
    useGSAP(()=>{
        gsap.from("button",{
            scale:.95,
            duration:1,
            ease: "back.in",
            repeat:-1
        })
    })
  return (
   <button className='fixed z-20 sm:-right-5 -right-10 top-[9%] sm:top-[50%] bg-thrice text-background sm:text-2xl text-md px-2 py-1 sm:px-5 sm:py-2 text-center rounded-xl font-extrabold border-2 border-background rotate-90'>
    Book a Session
   </button>
  )
}

export default GetQuoteButton
