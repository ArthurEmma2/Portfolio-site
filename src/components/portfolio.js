import React from 'react'
import image from '../assets/project-pictures/16383455999952.jpg'
import img from '../assets/project-pictures/Web capture_4-6-2022_83045_yhawnoworiesecommerce.netlify.app.jpeg'
import hero from '../assets/project-pictures/hero2.jpeg'
import img2 from '../assets/project-pictures/weather.jpeg'



import HTML from '../assets/lang_icons/html2.png'
import CSS3 from '../assets/lang_icons/css.png'
import JAVASCRIPT from '../assets/lang_icons/javascript.png'
import BOOSTRAP from '../assets/lang_icons/bootstrap-logo.png'
import REACT from '../assets/lang_icons/react.png'
import TAILWIND from '../assets/lang_icons/tailwind.png'


import  Aos  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Portfolio() {
  useEffect(() =>{
    Aos.init({duration:1000})
  },[])
  return (
    <section id='portfolio' className='h-auto w-full'>
    <div className='container'>
        <div className='mt-[150px] sm:text-center md:mt-[250px] text-center'>
          <h1 className='text-3xl md:text-5xl font-bold mb-[24px] tracking-widest text-black mx-auto leading-normal'>My Works</h1>
          <p className='leading-10 text-2xl text-black tracking-widest'data-aos='fade-up'>Kindly checkout this awesome projects and their source code</p>
          <hr className='w-[200px] bg-[#b51b5f] md:bg-[#b51b5f] p-0.5 lg:w-[496px] mx-auto mb-[44px] mt-8 overflow-hidden' />
      </div>
        
      </div>
      <div className="container grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="shadow-lg rounded-lg bg-[#FFEFF6]">  
          <img src={image} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover" />
        <div className='pb-5 w-full px-5'data-aos='flip-up'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'>Fruits Science</h3>
          <p className='font-normal text-black pb-8'>
           This is  educational website builts with HTML, CSS3, Tailwind css and javascript it talks about fruits

          </p>
          <div className="flex flex-col xl:flex-row justify-between pb-[33px] gap-[20px]" >
            <a className='bg-btnColor p-[9px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2'target="_blank" rel="noreferrer" href="https://fruitsscience.netlify.app/">
              View Site
            </a>
            <a className='border-btnColor border-2 rounded-xl p-[9px] text-black text-center hover:bg-btnColor hover:text-white'target="_blank" rel="noreferrer" href="https://github.com/yhawNoworries/FruitsScience">
              Source code
            </a>
          </div>
        </div>
        <div className='flex gap-x-2 mx-auto items-center ml-4 mb-[2px]'>
          <div>
           <img className='w-[20px]' src={HTML}  alt='icon' />
          </div>
          <div>
           <img className='w-[23px]' src={CSS3}  alt='icon' />
          </div>
          <div>
           <img className='w-[23px]' src={JAVASCRIPT}  alt='icon' />
          </div>
          <div>
           <img className='w-[25px]' src={TAILWIND}  alt='icon' />
          </div>
        </div>
        
      </div>
      <div className="shadow-xl rounded-lg bg-[#FFEFF6]">
          <img src={img} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover" />
        <div className='pb-5 w-full px-5' data-aos='flip-up'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'>E-commerce Website</h3>
          <p className='font-normal text-black pb-8'>
           This is an E-commerce website<br></br>with a stunning user interface built with HTML, CSS3 and Boostrap
          </p>
          <div className="flex flex-col xl:flex-row justify-between pb-[33px]  gap-[20px]" >
          <a className='bg-btnColor p-[9px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2'target="_blank" rel="noreferrer" href="https://yhawnoworiesecommerce.netlify.app/">
              View Site
            </a>
            <a className='border-btnColor border-2 rounded-xl p-[9px] text-black text-center hover:bg-btnColor hover:text-white'target="_blank" rel="noreferrer" href="https://github.com/yhawNoworries/E-commerce">
              Source code
            </a>
          </div>
        </div>
        <div className='flex gap-x-2 mx-auto items-center ml-4'>
          <div>
           <img className='w-[20px]' src={HTML}  alt='icon' />
          </div>
          <div>
           <img className='w-[23px]' src={CSS3}  alt='icon' />
          </div>
          <div>
           <img className='w-[30px]' src={BOOSTRAP}  alt='icon' />
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-[#FFEFF6]">
          <img src={img2} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover" />
        <div className='pb-5 w-full px-5' data-aos='flip-up'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'>Weather Application</h3>
          <p className='font-normal text-black pb-8'>
           Weather application built HTML, CSS3 and Javascript that delivers accurate weather informations.
          </p>
          <div className="flex flex-col xl:flex-row justify-between pb-[33px]  gap-[20px]" >
          <a className='bg-btnColor p-[9px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2' href="https://artweatherapp.netlify.app/">
              View Site
            </a>
            <a className='border-btnColor border-2 rounded-xl p-[9px] text-black text-center hover:bg-btnColor hover:text-white' target="blank" rel="noreferrer" href="https://github.com/yhawNoworries/Weather-Application">
              Source code
            </a>
          </div>
        </div>
        <div className='flex gap-x-2 mx-auto items-center ml-4 mt-5'>
          <div>
           <img className='w-[20px]' src={HTML}  alt='icon' />
          </div>
          <div>
           <img className='w-[23px]' src={CSS3}  alt='icon' />
          </div>
          <div>
           <img className='w-[23px]' src={JAVASCRIPT}  alt='icon' />
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-[#FFEFF6]">
          <img src={hero} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover" />
        <div className='pb-5 w-full px-5' data-aos='flip-up'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'>Portfolio Site</h3>
          <p className='font-normal text-black pb-8'>
           i collabrated with one of the most experience UI/UX designers to come out with this amazing project built with React and Tailwind
          </p>
          <div className="flex flex-col xl:flex-row justify-between pb-[33px]  gap-[20px]" >
          <a className='bg-btnColor p-[9px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2' href="https://arthur-emmanuel.netlify.app/">
              View Site
            </a>
            <a className='border-btnColor border-2 rounded-xl p-[9px] text-black text-center hover:bg-btnColor hover:text-white' href="https://github.com/yhawNoworries/Portfolio-site">
              Source code
            </a>
          </div>
        </div>
        <div className='flex gap-x-2 mx-auto items-center ml-4'>
          <div>
           <img className='w-[20px]' src={REACT}  alt='icon' />
          </div>
          <div>
           <img className='w-[23px]' src={TAILWIND}  alt='icon' />
          </div>
        </div>
      </div>
      </div>
      </section>
  )
}

export default Portfolio