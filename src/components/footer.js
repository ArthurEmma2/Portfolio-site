import React from 'react'

import facebook from '../assets/social icons/facebook.png'
import twitter from '../assets/social icons/twitter.png'
import linkedin from '../assets/social icons/linkedin.jpg'
import github from '../assets/social icons/github.jpg'


import  Aos  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


function Footer() {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[])
  return (
    <section id='footer' className='h-auto w-full'>
    <div className='container'>
      <div className='mt-[150px] sm:text-center md:mt-[250px] text-center'>
        <h1 className='text-3xl md:text-5xl font-bold mb-[24px] tracking-widest text-black mx-auto leading-normal'>Get in touch with me:</h1>
        <hr className='w-[200px] bg-[#b51b5f] md:bg-[#b51b5f] p-0.5 lg:w-[496px] mx-auto mb-[44px] mt-8 overflow-hidden' />
      </div>
      <div className='grid  sm:grid-cols-1 md:grid grid-cols-1 lg:flex flex-row-reverse justify-between items-center gap-10'>
      <div>
            <p className='tracking-wide leading-9 font-medium text-xl' data-aos='fade-up'>New technology such as Blockchain, Big data, and Augmented Reality excites me .</p>
            
            <p className='tracking-wide leading-9 font-medium text-xl pt-[20px]'  data-aos='fade-up'> i hope to apply my skills to harness the power of
              innovations to help create a better future for everyone</p>
            <p className='tracking-wide leading-9 font-medium text-xl pt-[20px]'data-aos='fade-up'>i'm available for work you can email me directly at: <span className='text-blue-700'>emmanuel2002arthur@gmail.com</span></p>
          </div>
          <div className='mr-3 md:mr-24' >
          <h2 className='text-2xl sm:tracking-widest ml-4 sm:font-medium md:text-black text-[24px] font-normal tracking-wide text-left mb-7 uppercase'>Find me on </h2>
            <div className='grid sm:items-center grid-cols-4 sm:w-full md:grid w-full md:grid-cols-4 grid-flow-row mt-3 gap-7'>
            <div className='hover:scale-110 duration-500'>
              <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/arthur-emmanuel-06b7b9210/'>
                  <img className='mx-auto w-20 p-4 md:w-28 shadow-2xl md:p-5 rounded-lg bg-white' src={linkedin} alt="react icon" />
                  </a>
                  <p className='my-4 text-center tracking-wide text-black font-bold'>Linkedin</p>
              </div>
            <div className='hover:scale-110 duration-500 cursor-pointer'>
              <a target='_blank' rel="noreferrer" href='https://web.facebook.com/arthuremmanuel.nyarkoyaw'>
                  <img className='w-20 md:w-28 px-5 py-5 rounded-lg shadow-2xl bg-white' src={facebook} alt="HTML icon" />
                  </a>
                  <p className='my-4 text-center tracking-wide text-black font-bold'>Facebook</p>
              </div>
            <div className='hover:scale-110 duration-500 cursor-pointer'>
              <a target='_blank' rel="noreferrer" href='https://twitter.com/NoworriesDev'>
                  <img className='mx-auto md:w-28 px-5 py-5 rounded-lg shadow-2xl bg-white' src={twitter} alt="HTML icon" />
                  </a>
                  <p className='my-4 text-center tracking-wide text-black font-bold'>Twitter</p>
              </div>
              <div className='hover:scale-110 duration-500 cursor-pointer'>
                <a target='_blank' rel="noreferrer" href='https://github.com/ArthurEmma2' >
                <img className='mx-auto w-20 md:w-28 px-5 py-5 rounded-lg shadow-2xl bg-white' src={github} alt="HTML icon" />
                </a>
                  <p className='my-4 text-center tracking-wide text-black font-bold'>Github</p>
              </div>
              </div>
              </div>
      </div>
    </div>
     <footer className='mt-24 w-full bg-blue-400 '>
                   <h3 className='text-center text-white py-7 rounded-xl'> This website was design in Figma and built using React by Arthur Emmanuel
                   <p className='mt-5'>All Rights Reserved &reg; copyright &copy; 2023<br/>Arthur Emmanuel</p>
                   </h3>
                   
              </footer>
  </section>
)
}


export default Footer