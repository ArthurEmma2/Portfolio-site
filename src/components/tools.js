import React from 'react'


import HTML from '../assets/lang_icons/html2.png'
import CSS3 from '../assets/lang_icons/css.png'
import JAVASCRIPT from '../assets/lang_icons/javascript.png'
import REACT from '../assets/lang_icons/react.png'
import GIT from '../assets/lang_icons/git.png'
import TAILWIND from '../assets/lang_icons/tailwind.png'
import NEXT from '../assets/lang_icons/next.jpg'
import Typescript from '../assets/lang_icons/typescript.png'
import REDUX from '../assets/lang_icons/Redux.png'
import Jest from '../assets/lang_icons/jest.png'
import Node from '../assets/lang_icons/node.png'
import mongo from '../assets/lang_icons/mongo.png'



import  Aos  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';



function Tools() {
  useEffect(() =>{
    Aos.init({duration:3000})
  },[])
  return (
    <section id='about' className='h-auto w-full'>
      <div className='container'>
        <div className='mt-[150px] sm:text-center md:mt-[250px] text-center'>
          <h1 className='text-3xl md:text-5xl font-bold  tracking-widest text-black mx-auto leading-normal'>Tools I work with:</h1>
          <hr className='w-[200px] bg-[#b51b5f] md:bg-[#b51b5f] p-0.5 lg:w-[496px] mx-auto mb-[44px] mt-8 overflow-hidden' />
        </div>
        <div className='grid gap-10 sm:grid-cols-1 md:grid grid-cols-1 lg:flex justify-around items-center md:gap-[104px]'>
        <div>
        <p className='tracking-wide leading-9 font-medium text-xl mb-7'>An Engineer with major focus on JavaScript, TypeScript and React.
               Proficient in HTML5, CSS3, Bootstrap, JavaScript,
             React JS, Redux, Git, Github, Tailwind css and Next js.
                 I always try to be in trend in order to produce  maximally
              innovative, testable, maintainable and stable code.</p>
              
              <p className='pb-32 lg:tracking-wide leading-9 font-medium text-xl pt-[15px]'>Hardworking and reliable web
               developer with strong ability in web designing.
               I'm very passionate about solving 
               problems and eager to learn more skills ahead.<br /><br />I can position my self 
                 in any tech team to support initiatives to ensure we reach our goals.</p>
          </div>
          <div data-aos='flip-up' className='animate-bounce'>
          <h2 className='text-2xl sm:tracking-widest ml-4 mb-5 sm:font-medium md:text-black text-[24px] font-normal tracking-wide text-left '>Skilled in </h2>
            <div className='grid sm:items-left grid-cols-4 sm:w-full md:grid w-full md:grid-cols-4 grid-flow-row gap-x-7 '>
            <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-5 rounded-lg shadow-2xl bg-white' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-center tracking-wide text-black font-bold'>HTML</p>
              </div>
             
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto md:shadow-2xl px-5 py-[25px] rounded-lg bg-white' src={CSS3} alt="css icon" />
                  <p className='my-4 text-center tracking-wide text-black font-bold'>CSS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px] shadow-2xl rounded-lg bg-white' src={JAVASCRIPT} alt="javascript icon" />
                  <p className='my-4 text-center tracking-wide text-black font-bold'>JS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px] shadow-2xl rounded-lg bg-white' src={REACT} alt="react icon" />
                  <p className='my-4 text-center tracking-wide text-black font-bold'>REACT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px] shadow-2xl rounded-lg bg-white' src={REDUX} alt="redux icon" />
                  <p className='my-4 text-center  tracking-wide text-black font-bold'>REDUX</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px] shadow-2xl rounded-lg bg-white' src={TAILWIND} alt="tailwind icon" />
                  <p className='my-4 text-center  tracking-wide text-black font-bold'>TAILWIND</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px]  shadow-2xl rounded-lg bg-white' src={GIT} alt="git icon" />
                  <p className='my-4 text-center tracking-wide text-black font-bold'>GIT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px] rounded-lg bg-white' src={NEXT} alt="next icon" />
                  <p className='my-4 text-center tracking-wide text-black font-bold'>NEXT JS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px] shadow-2xl rounded-lg bg-white' src={Typescript} alt="redux icon" />
                  <p className='my-4 text-center  tracking-wide text-black font-bold'>TS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px] shadow-2xl rounded-lg bg-white' src={Jest} alt="tailwind icon" />
                  <p className='my-4 text-center  tracking-wide text-black font-bold'>JEST</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px]  shadow-2xl rounded-lg bg-white' src={mongo} alt="git icon" />
                  <p className='my-4 text-center tracking-wide text-black font-bold'>Mongo</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='mx-auto w-20 md:w-32 px-5 py-[25px] rounded-lg bg-white' src={Node} alt="next icon" />
                  <p className='my-4 text-center tracking-wide text-black font-bold'>NODE</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Tools


