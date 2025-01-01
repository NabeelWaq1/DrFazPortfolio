import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const NavBar = () => {
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
gsap.registerPlugin(ScrollTrigger);

     useGSAP(() => {
      if(dropdown1){
      gsap.from(".dropdown1",{
        y:100,
        opacity:0,
        duration:.5,
        ease:"power3.inOut"
      })}
      if(dropdown2){
        gsap.from(".dropdown2",{
          y:100,
          opacity:0,
          duration:.5,
          ease:"power3.inOut"
        })}
     },[dropdown1, dropdown2])

     useGSAP(() => {
      gsap.from("#desktop-menu",{
        y:-100,
        duration:1,
        opacity:0,
        ease:"power1.out"
      })

      gsap.to("#desktop-menu .logo",{
        width:"100px",
        height:"80px",
        duration:.5,
        scrollTrigger:{
          trigger:"#desktop-menu img",
          scroller:"body",
          start:"top -90%",
          end:"bottom 80%",
          scrub:2,
        }
      })
      gsap.to("#desktop-menu img",{
        width:"130px",
        height:"120px",
        duration:.5,
        scrollTrigger:{
          trigger:"#desktop-menu",
          scroller:"body",
          start:"top -90%",
          end:"bottom 80%",
          scrub:2,
        }
      })

      gsap.to("#desktop-menu",{
        duration:.5,
        backgroundColor:"#2f6690",
        scrollTrigger:{
          trigger:"#desktop-menu",
          scroller:"body",
          start:"top -90%",
          end:"bottom 80%",
          scrub:2,
        }
      })
     },[])

     useGSAP(() => {
      if (showMenu) {
        gsap.fromTo(
          "#mobile-menu",
          { y: "-100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.7, ease: "power4.out" }
        );
      } else {
        gsap.fromTo(
          "#mobile-menu",
          { y: "0%", opacity: 1 },
          { y: "-100%", opacity: 0, duration: 0.7, ease: "power4.in" }
        );
      }
    }, [showMenu]);

    


  return (
    <>
    {/* Desktop menu */}
  <nav id='desktop-menu' className='hidden z-20 fixed top-0 left-0 bg-primary w-full lg:flex items-center justify-center gap-8  px-10 text-white border-b-8 border-tritary'>
   <NavLink onClick={() => {
    setDropdown1(false);
    setDropdown2(false);
   }} className={"text-lg text-center hover:text-tritary"} to={"/"}>Home</NavLink>
   <NavLink onClick={() => {
    setDropdown1(false);
    setDropdown2(false);
   }} className={"text-lg text-center hover:text-tritary"} to={"/about"}>About Me</NavLink>
   <NavLink onClick={() => {
    setDropdown1(false);
    setDropdown2(false);
   }} className={"text-lg text-center hover:text-tritary"} to={"/contact"}>Contact</NavLink>
   <div className="relative w-[150px] h-[100px] p-0 m-0 logo">
  <img 
    src="/src/assets/logo.png" 
    className="absolute top-0 w-[150px] h-[180px] rounded-full object-cover p-0 m-0" 
    alt="Logo" 
  />
</div>

   <NavLink onClick={() => {
    setDropdown1(false);
    setDropdown2(false);
   }} className={"text-lg text-center hover:text-tritary"} to={"/testimonials"}>Testimonials</NavLink>
   <div className="relative">
  <h4 onClick={() => {setDropdown1(!dropdown1); setDropdown2(false)}} className={"text-lg text-center hover:text-tritary cursor-pointer flex items-center justify-center"}>Speaking Engagements <span><i className="ri-arrow-drop-down-line"></i></span></h4>
  <ul className={`dropdown1 flex flex-col items-start justify-center absolute top-10 left-0 min-w-[200px] bg-white shadow-lg rounded-xl overflow-hidden border border-tealLight text-tealLight ${dropdown1 ? "block" : "hidden" }`}>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} to={'/keynotespeaking'} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Keynote Speeches</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} to={"/enterpreneurship"} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Leadership Workshops</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Corporate Training</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Inspirational Talks</NavLink>
  </ul>
</div>

<div className="relative">
  <h4 onClick={() => {setDropdown2(!dropdown2); setDropdown1(false)}} className={"text-lg text-center hover:text-tritary cursor-pointer flex items-center justify-center"}>Services <span><i className="ri-arrow-drop-down-line"></i></span></h4>
  <ul className={`dropdown2 flex flex-col items-start justify-center absolute top-10 -left-12 min-w-[200px] bg-white shadow-lg rounded-xl overflow-hidden border border-tealLight text-tealLight ${dropdown2 ? "block" : "hidden" }`}>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} to={"/coaching"} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Executive Coaching</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} to={"/enterpreneurship"} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Leadership Development</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Communication Skills Training</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Business Growth Strategies</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Dream Building Programs</NavLink>
  </ul>
</div>
  </nav>

  {/* Mobile Menu */}
  <nav className='fixed  z-20 top-0 left-0 bg-primary w-full flex lg:hidden flex-col justify-center items-center px-5 py-2'>
  <i onClick={() => setShowMenu(true)} className="ri-menu-5-line text-background text-4xl cursor-pointer hover:text-tritary"></i>
  <div className="relative w-[150px] h-[100px] p-0 m-0">
  <img 
    src="/src/assets/logo.png" 
    className="absolute -top-2 w-[150px] h-[180px] rounded-full object-cover p-0 m-0" 
    alt="Logo" 
  />
</div>
  </nav>
  <div
        id="mobile-menu"
        className="absolute top-0 w-full min-h-screen  bg-primary text-background z-40 flex flex-col lg:hidden items-center justify-center gap-4 px-5 py-10"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <i
          onClick={() => setShowMenu(false)}
          className="ri-close-circle-line text-background text-4xl cursor-pointer hover:text-tritary"
        ></i>
        <div className="flex flex-col gap-2 justify-center items-center text-background text-xl">
        <NavLink onClick={() => {
          setDropdown1(false);
          setDropdown2(false);
        }} className={"text-lg text-center hover:text-tritary"} to={"/"}>Home</NavLink>
   <NavLink onClick={() => {
    setDropdown1(false);
    setDropdown2(false);
   }} className={"text-lg text-center hover:text-tritary"} to={"/about"}>About Me</NavLink>
   <NavLink onClick={() => {
    setDropdown1(false);
    setDropdown2(false);
   }} className={"text-lg text-center hover:text-tritary"} to={"/contact"}>Contact</NavLink>
   <NavLink onClick={() => {
    setDropdown1(false);
    setDropdown2(false);
   }} className={"text-lg text-center hover:text-tritary"} to={"/testimonials"}>Testimonials</NavLink>

   <div className="relative">
  <h4 onClick={() => {setDropdown1(!dropdown1); setDropdown2(false)}} className={"text-lg text-center hover:text-tritary cursor-pointer flex items-center justify-center"}>Speaking Engagements <span><i className="ri-arrow-drop-down-line"></i></span></h4>
  <ul className={`dropdown1 flex flex-col items-start justify-center text-lg text-center m-5 min-w-[200px] bg-white shadow-lg rounded-xl overflow-hidden border border-tealLight text-tealLight ${dropdown1 ? "block" : "hidden" }`}>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} to={'/keynotespeaking'} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Keynote Speeches</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} to={"/enterpreneurship"} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Leadership Workshops</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Corporate Training</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Inspirational Talks</NavLink>
  </ul>
</div>

<div className="relative">
  <h4 onClick={() => {setDropdown2(!dropdown2); setDropdown1(false)}} className={"text-lg text-center hover:text-tritary cursor-pointer flex items-center justify-center"}>Services <span><i className="ri-arrow-drop-down-line"></i></span></h4>
  <ul className={`dropdown2 flex flex-col items-start justify-center mt-5 min-w-[200px] bg-white shadow-lg rounded-xl overflow-hidden border border-tealLight text-tealLight text-center text-lg ${dropdown2 ? "block" : "hidden" }`}>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} to={"/coaching"} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Executive Coaching</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} to={"/enterpreneurship"} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Leadership Development</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Communication Skills Training</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="border-b border-tealLight p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Business Growth Strategies</NavLink>
    <NavLink onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
    }} className="p-4 w-full hover:bg-tealLight hover:text-white transition duration-300">Dream Building Programs</NavLink>
  </ul>
</div>
        </div>
      </div>

  </>
  )
}

export default NavBar

