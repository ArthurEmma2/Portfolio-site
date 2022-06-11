
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import logo from './svg/logo.svg'

function Header(){
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='container md:container w-full h-[80px] flex justify-between items-center px-4  text-black'>
      <div className='mt-5'>
      <img width='100px' src={logo}  alt='name'/>
      </div>

      {/* menu */}
      <ul className='hidden md:flex font-serif  text-center font-bold'>
        <li className='links px-8'>
        <a href='#home'>
            Home
            </a>
        </li>
        <li className='px-8'>
         <a href='#about'>
            About
            </a>
        </li>
        <li className='px-8'>
        <a href='#portfolio'>
            Portfolio
          </a>
        </li>
        <li className='px-8 md:hidden lg:flex xl:flex'>
         <a href='#news'>
            News
            </a>
        </li>
      </ul>
        <div>
          <a href='#footer'>
        <button className='hidden md:hidden lg:flex items-center sm:mr-32 bg-blue-800 tracking-widest mt-6 px-12 py-3  mx-24 text-bold font-serif rounded-xl text-center justify-center text-white shadow-xl animate-bounce hover:bg-blue-200 border-blue-900 border-2 hover:text-black'>Say Hello</button>
        </a>
        </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer mt-5 text-white'>
        {!nav ? <FaBars size={35} /> : <FaTimes size={35} />}
      </div>

      {/* Mobile menu */}

      <ul
        className={
          !nav
            ? 'hidden'
            :  'md:hidden absolute top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center text-white'
        }
      >
        <li className='py-10 text-4xl'>
          <a href='#about'>
            About
            </a>
        </li>
        <li className='py-10 text-4xl'>
        <a href='#portfolio'>
            Portfolio
          </a>
        </li>
        <li className='py-10 text-4xl'>
        <a href='#news'>
            News
            </a>
        </li>
        <div>
          <a href='#footer'>
        <button className=' md:hidden lg:flex items-center bg-blue-800 tracking-widest mt-10 px-12 py-4 text-bold font-serif rounded-xl text-center justify-center text-white shadow-xl animate-bounce hover:bg-slate-900'>Say Hello</button>
        </a>
        </div>
      </ul>
    </div>
  );
}



export default Header
















