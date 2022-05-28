import React from 'react'
import image from '../assets/project-pictures/16383455999952.jpg'
import img from '../assets/project-pictures/Web capture_16-9-2021_73133_.jpeg'

function portfolio() {
  return (
    <section className='h-auto w-full'>
    <div className='container'>
        <div className='mt-[150px] sm:text-center md:mt-[250px] text-center'>
          <h1 className='text-3xl md:text-5xl font-bold mb-[24px] tracking-widest text-black mx-auto leading-normal'>My Works</h1>
          <p className='leading-10 text-2xl text-black tracking-widest'>Kindly checkout this awesome projects and their source code</p>
          <hr className='w-[200px] bg-[#b51b5f] md:bg-[#b51b5f] p-0.5 lg:w-[496px] mx-auto mb-[44px] mt-8 overflow-hidden' />
      </div>
        
      </div>
      <div className="container grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="shadow-lg rounded-lg bg-[#FFEFF6]">
        <a href="#">
          <img src={image} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover" />
        </a>
        <div className='pb-5 w-full px-5'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'><a href="#">E-commerce Website</a></h3>
          <p className='text-xl font-normal text-black pb-8'>
           This is an E-commerce website<br></br>with a stunning user interface
          </p>
          <div className="flex flex-col xl:flex-row justify-between pb-[33px]" >
            <a className='bg-btnColor rounded-xl py-4 px-4 my-2 text-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2' href="#">
              View Site
            </a>
            <a className='border-btnColor border-2 rounded-xl text-xl  pt-4 pb-2 px-4 my-2 text-black text-center hover:bg-btnColor hover:text-white' href="#">
              Source code
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-[#FFEFF6]">
        <a href="#">
          <img src={img} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover" />
        </a>
        <div className='pb-5 w-full px-5'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'><a href="#">E-commerce Website</a></h3>
          <p className='text-xl font-normal text-black pb-8'>
           This is an E-commerce website<br></br>with a stunning user interface
          </p>
          <div className="flex flex-col xl:flex-row justify-between pb-[33px]" >
            <a className='bg-btnColor rounded-xl py-4 px-4 my-2 text-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2' href="#">
              View Site
            </a>
            <a className='border-btnColor border-2 rounded-xl text-xl  pt-4 pb-2 px-4 my-2 text-black text-center hover:bg-btnColor hover:text-white' href="#">
              Source code
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-[#FFEFF6]">
        <a href="#">
          <img src={img} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover" />
        </a>
        <div className='pb-5 w-full px-5'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'><a href="#">E-commerce Website</a></h3>
          <p className='text-xl font-normal text-black pb-8'>
           This is an E-commerce website<br></br>with a stunning user interface
          </p>
          <div className="flex flex-col xl:flex-row justify-between pb-[33px]" >
            <a className='bg-btnColor rounded-xl py-4 px-4 my-2 text-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2' href="#">
              View Site
            </a>
            <a className='border-btnColor border-2 rounded-xl text-xl  pt-4 pb-2 px-4 my-2 text-black text-center hover:bg-btnColor hover:text-white' href="#">
              Source code
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-xl rounded-lg bg-[#FFEFF6]">
        <a href="#">
          <img src={img} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover" />
        </a>
        <div className='pb-5 w-full px-5'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'><a href="#">E-commerce Website</a></h3>
          <p className='text-xl font-normal text-black pb-8'>
           This is an E-commerce website<br></br>with a stunning user interface
          </p>
          <div className="flex flex-col xl:flex-row justify-between pb-[33px]" >
            <a className='bg-btnColor rounded-xl py-4 px-4 my-2 text-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2' href="#">
              View Site
            </a>
            <a className='border-btnColor border-2 rounded-xl text-xl  pt-4 pb-2 px-4 my-2 text-black text-center hover:bg-btnColor hover:text-white' href="#">
              Source code
            </a>
          </div>
        </div>
      </div>
      </div>
      </section>
  )
}

export default portfolio