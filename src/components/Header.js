
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import logo from './svg/logo.svg'
import { Link } from 'react-router-dom';

function Header(){
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='container md:container  w-full h-[80px] flex justify-between items-center px-4  text-black'>
      <div className='mt-5'>
      <img width='100px' src={logo}  alt='name'/>
      </div>

      {/* menu */}
      <ul className='hidden md:flex font-serif  text-center font-bold'>
        <li className='links px-16'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='px-16'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='px-16'>
          <Link to='portfolio' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='px-16 md:hidden lg:flex xl:flex'>
          <Link to='news' smooth={true} duration={500}>
            News
          </Link>
        </li>
      </ul>
        <div>
        <button className='hidden md:hidden lg:flex items-center sm:mr-32 bg-blue-800 tracking-widest mt-6 px-12 py-4 mx-24 text-bold font-serif rounded-xl text-center justify-center text-white shadow-xl animate-bounce hover:bg-blue-200 border-blue-900 border-2 hover:text-black'>Say Hello</button>
        </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer mt-5'>
        {!nav ? <FaBars size={35} /> : <FaTimes size={35} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            :  'md:hidden absolute top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center'
        }
      >
        <li className='py-10 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-10 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-10 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='py-10 text-4xl'>
          <Link to='news' smooth={true} duration={500}>
          News
          </Link>
        </li>
        <div>
        <button className=' md:hidden lg:flex items-center bg-blue-800 tracking-widest mt-10 px-12 py-4 text-bold font-serif rounded-xl text-center justify-center text-white shadow-xl animate-bounce hover:bg-slate-900'>Say Hello</button>
        </div>
      </ul>
    </div>
  );
}



export default Header
















