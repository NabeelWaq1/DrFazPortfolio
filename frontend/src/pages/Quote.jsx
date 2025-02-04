import React from 'react'

const Quote = () => {
  return (
    <div className='w-full min-h-screen mt-[108px]'>
      {/* Section 01 */}
       {/* <!-- Calendly inline widget begin --> */}
{/* <div class="calendly-inline-widget" data-url="https://calendly.com/nabeelwaqas24" style={{minWidth:"200px",height:"700px"}}></div> */}
<div className="flex flex-col items-center justify-center gap-8 w-full min-h-screen py-16 md:py-20 bg-white">
<iframe
        src="https://calendly.com/fazmemon56/drfazal-com"
        width="90%"
        height="900"
        frameBorder="0"
        title="Calendly Scheduler"
      ></iframe>
      </div>

{/* <!-- Calendly inline widget end --> */}
    </div>
  )
}

export default Quote
