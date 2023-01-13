import React from 'react'
import Hero from '../assets/project-pictures/profile-removebg-preview2.png'



import  Aos  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Section() {
  useEffect(() =>{
    Aos.init({duration:5000})
  },[])
  return (
    <>
      <div id='home' className='sm:grid pt-20 grid-cols-1 md:grid-cols-1 grid lg:flex container justify-between items-center md:pt-40'>
        <div>
        <h1 className= 'text-3xl  md:text-5xl text-heroColor pb-4 font-bold text-left pt-6 lg:pb-10'><span className='text-black' >Howdy, I am</span> Arthur  Emmanuel.</h1><br></br>

          <p className='leading-10 sm:text-xl md:leading-10 text-2xl tracking-wide font-normal
           text-left pb-12 mb-7 '>
              A Web Engineer with a keen interest in building high performance web <br />
             applications focused on simplicity and elegance. Passionate about
       <br /> solving problems using modern technologies</p>
        
        </div>
   
        <div classname='md:mt-96 overflow-x-hidden' data-aos='fade-right'>
        <img className='hidden w-[400px] lg:flex'src={Hero} alt='img' />
        </div>
        
   
      </div>
      <div className='container text-left md:my-5 flex lg:-mt-10 pb-6'>
        <a href='#portfolio'>
        <button className=' shadow-slate-400 h-[50px] w-[150px] md:w-[200px] md:h-[52px] text-[10px] md:text-[17px] text-white bg-blue-800 rounded-xl px-10 shadow-xl hover:bg-blue-200 border-blue-900 border-2 hover:text-black'>See my works</button>
        </a>
        <a href='#footer'>
         <button className=' h-[50px] w-[150px] md:w-[200px] md:h-[52px] text-[10px] md:text-[17px] tracking-widest ml-6 bg-blue-200 border-blue-900 border-2 rounded-xl  px-12 shadow-xl hover:bg-blue-800 hover:text-white transition-shadow'>Resume</button>
         </a>
         </div>
    </>

  )
}

export default Section