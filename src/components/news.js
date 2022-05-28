import React from 'react'
import newsImage1 from '../assets/project-pictures/p-4.jpg'
import newsImage2 from '../assets/project-pictures/c-1.jpg'
import newsImage3 from '../assets/project-pictures/istockphoto.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi';

function news() {
  return (
    <section className='h-auto w-full'>
    <div className='container'>
        <div className='mt-[150px] sm:text-center md:mt-[250px] text-center'>
          <h1 className='text-3xl md:text-5xl font-bold mb-[24px] tracking-widest text-black uppercase mx-auto leading-normal'>News</h1>
          <p className='leading-10 text-2xl text-black tracking-widest'>Favorite articles I read everyday</p>
          <hr className='w-[200px] bg-[#b51b5f] md:bg-[#b51b5f] p-0.5 lg:w-[496px] mx-auto mb-[44px] mt-8 overflow-hidden' />
        </div>
        <div className='sm:grid grid-cols-1 md:grid-cols-1 grid lg:grid-cols-3  justify-between items-center pt-10 gap-20'>
        <div className=''>
            <img className='w-full hover:scale-110 duration-500' src={newsImage1} alt='img' />
            <h3 className='text-2xl font-medium py-4 pt-4 tracking-wider leading-7'>How to be a great programmer</h3>
            <a href="https://www.freecodecamp.org/news/how-to-be-a-great-programmer-34939494996d/" target="_blank" rel='noreferrer'>
            <div>
            <button className='text-black px-6 py-3 my-2 flex items-center hover:text-blue-600 text-xl font-medium'>
            read more
            <span>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
            </a>
          </div>
          
          <div className=''>
            <img className='w-full hover:scale-110 duration-500' src={newsImage3} alt='img' />
            <h3 className='text-2xl font-medium py-4 pt-4 tracking-wider md:mt-4'>10 ways that IT pros and developers can keep their tech skills up to date</h3>
            <a href="https://www.techrepublic.com/article/10-ways-that-it-pros-and-developers-can-keep-their-tech-skills-up-to-date/" target="_blank" rel='noreferrer'>
            <div>
          <button className='text-black px-6 py-3 my-2 flex items-center hover:text-blue-600 text-xl font-medium'>
            read more
            <span>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
            </a>
          </div>
          
          <div className=''>
            <img className='w-full hover:scale-110 duration-500' src={newsImage2} alt='img' />
            <h3 className='text-2xl font-medium py-4 pt-4 tracking-wider md:mt-4'>  Understanding your client's business and needs</h3>
            <a href="https://www.digiteum.com/understanding-client-needs/" target="_blank" rel='noreferrer'>
            <div>
            <button className='text-black px-6 py-3 my-2 flex items-center hover:text-blue-600 text-xl font-medium'>
            read more
            <span className=''>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
            </a>
           </div>
         
        </div>
          </div>
    </section>
  )
}

export default news







