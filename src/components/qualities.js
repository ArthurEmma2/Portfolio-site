import React from 'react'
import light from '../components/svg/light-bulb.png'
import web from '../components/svg/coding (1).png'
import rocket from '../components/svg/rocket.png'


import  Aos  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';



function Qualities() {
  useEffect(() =>{
    Aos.init({duration:3000})
  },[])
    return (
      <section className='h-auto w-full mt-[50px] overflow-hidden'>
      <div className='container'>
          <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
          <div className='px-8'data-aos='fade-left'data-aos-delay="50">
              <img width='50px'  src={rocket} alt='p-img'/>
                  <h3 className='text-3xl font-medium tracking-wider my-5'>Fast Learning</h3>
                  <p className='tracking-wide leading-9 font-medium text-xl'>
                  
                      I rise to the challenge of updating and keeping in touch
                      with the latest in technologies and programming
                      approaches. I am a fast learner and a passionate student,
                      I have a burning desire to always learn more, do more, and
                      be more.
                
                    </p>
              </div>

       
            <div className='px-8' data-aos='fade-left'data-aos-delay="60">
              <img width='50px' src={light} alt='p-img'/>
                  <h3 className='text-3xl font-medium tracking-wider my-5'>Analytical Thinking</h3>
                  <p className='tracking-wide leading-9 font-medium text-xl'>
                      Software Development requires an advance level of
                      problem-solving and analytical thinking. I have the
                      ability to analyze a problem and visualize several
                      possible ways to approach and finally being able to
                      discern the best solution.
                    </p>
            </div>
            <div className='px-8'data-aos='fade-left'data-aos-delay="70">
              <img width='50px' src={web} alt='p-img'/>
                  <h3 className='text-3xl font-medium tracking-wider my-5'>Web development</h3>
                  <p className='tracking-wide leading-9 font-medium text-xl'>
                    I can collabrate with UI/UX designers to raise user 
                    satisfaction and ensure user-based company goals are 
                    reached. Such goals might include increasing newsletter sign-ups and also improving
                     sales conversions 
                    </p>
              </div>
          </div>
            </div>
            </section>
  )
}

export default Qualities