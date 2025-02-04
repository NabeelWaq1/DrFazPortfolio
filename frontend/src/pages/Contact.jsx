import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s45cryv', 'template_ld419vx', form.current, {
        publicKey: 'yfQw3dd8CwB6ArZZo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFname('');
          setLname('');
          setPhone('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='flex flex-col w-full min-h-[130vh] md:h-[130vh] bg-[url("/src/assets/contact.png")] bg-cover bg-right md:bg-center mt-24 px-4 md:px-8 py-8 justify-center items-center relative'>
      <div className="absolute z-[16] w-full min-h-full bg-primary bg-opacity-60"></div>
      <h1 className='md:absolute top-[10%] md:top-[8%] left-[5%] text-[10vw] md:text-[5.5vw] text-center font-bold tracking-tight text-tritary md:font-semibold z-[18]'>CONNECT WITH FAZ</h1>
      <form ref={form} onSubmit={sendEmail} className="md:absolute z-[18] top-[20%] left-[10%] w-full md:w-[700px] min-h-[400px] bg-background rounded-lg flex flex-col gap-8 px-5 py-10 justify-center items-center">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
          <div className="flex flex-col items-start justify-center gap-2 w-full md:w-[48%]">
            <label htmlFor="fname">First Name</label>
            <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" id='fname' name='f_name' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='First Name' />
          </div>
          <div className="flex flex-col items-start justify-center gap-2 w-full md:w-[48%]">
          <label htmlFor="lname">Last Name</label>
          <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} id='lname' name='l_name' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='Last Name' />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
          <div className="flex flex-col items-start justify-center gap-2 w-full md:w-[48%]">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='from_email' id='email' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='Email' />
          </div>
          <div className="flex flex-col items-start justify-center gap-2 w-full md:w-[48%]">
          <label htmlFor="phone">Phone</label>
          <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} id='phone' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='Phone' />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
          <div className="flex flex-col items-start justify-center gap-2 w-[98%]">
          <label htmlFor="message">Message</label>
          <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} id='message' name='message' className='w-full border-b-2 border-primary p-2 outline-none bg-transparent' placeholder='Message' />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
