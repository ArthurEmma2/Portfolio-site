import React from 'react'
import img from '../assets/project-pictures/Web capture_4-6-2022_83045_yhawnoworiesecommerce.netlify.app.jpeg'
import hero from '../assets/project-pictures/hero3.jpeg'
import img2 from '../assets/project-pictures/weather.jpeg'
import img4 from '../assets/project-pictures/WEB2.jpeg'
import img3  from '../assets/project-pictures/aptos.jpeg'
import Slider from 'react-slick';




import  Aos  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Portfolio() {
  const settings = {
      slidesToShow: 3,
      speed: 2000,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  useEffect(() =>{
    Aos.init({duration:1000})
  },[])
  return (
    <section id='portfolio' className='h-auto w-full container'>
        <div className='mt-[150px] text-center md:mt-[250px]'>
          <h1 className='text-3xl md:text-5xl font-bold mb-[24px] tracking-widest text-black leading-normal'>My Works</h1>
          <p className='leading-10 text-2xl text-black tracking-widest'data-aos='fade-up mx-auto'>Kindly checkout this awesome projects and their source code</p>
          <hr className='w-[200px] bg-[#b51b5f] md:bg-[#b51b5f] p-0.5 lg:w-[496px] mx-auto mb-[44px] mt-8 overflow-hidden' />
      </div>


    
      <div className='App'>
      <Slider {...settings}>
      <div className="shadow-lg rounded-lg bg-[#FFEFF6] h-[370px] md:h-[370px] lg:h-[450px] w-full">  
          <img loading='lazy' src={img4} alt='products'/>
        <div className='w-full'data-aos='flip-up'>
          <div className='mx-4 mt-2'>
          <h3 className='text-center text-xl font-bold md:text-center text-btnColor my-4'>Star Trade</h3>
          <p className='font-normal text-black text-[14px] lg:text-[18px]'>
          Star Trade is an NFT marketplace built over Tezos with high-quality user-friendly interface.     
          </p>
          </div>
         
          <div className="flex flex-col md:flex-row justify-around pb-[33px] mt-[38px] md:mt-[44px] gap-[12px] md:gap-0  mx-3 md:mx-0" >
            <a className='bg-btnColor md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2'target="_blank" rel="noreferrer" href="https://starnftmarketplace.netlify.app/">
            <p className='text-center mx-auto md:mt-[3px] lg:mt-[9px]'> View Site</p>
            </a>
            <a className='border-btnColor border-2 rounded-xl md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px] text-black text-center hover:bg-btnColor hover:text-white'target="_blank" rel="noreferrer" href="https://github.com/yhawNoworries/Star-NFT">
            <p className='text-center mx-auto md:mt-[3px] lg:mt-[9px]'>  Source code</p>
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg bg-[#FFEFF6]  h-[370px] md:h-[370px] lg:h-[450px] w-full">
          <img loading='lazy' src={img3} alt='products' />
          <div className='w-full'data-aos='flip-up'>
          <div className='mx-4 mt-[4px]'>
          <h3 className='text-center text-xl font-bold md:text-center text-btnColor my-4'>Aptos More</h3>
          <p className='font-normal text-[14px] lg:text-[18px] text-black'>
           An open source community platform to explore everything about the Aptos ecosystem.
          </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-around pb-[33px] mt-4 md:mt-[40px] gap-[12px] md:gap-0 mx-3 md:mx-0 " >
          <a className='bg-btnColor md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2'target="_blank" rel="noreferrer" href="https://aptosmore.netlify.app/">
          <p className='text-center mt-auto md:mt-[3px] lg:mt-[9px]'> View Site</p>
            </a>
            <a className='border-btnColor border-2 rounded-xl md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px]  text-black text-center hover:bg-btnColor hover:text-white'target="_blank" rel="noreferrer" href="https://github.com/ArthurEmma2/Aptos-More">
            <p className='text-center mt-auto md:mt-[3px] lg:mt-[9px] '>  Source code</p>
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg bg-[#FFEFF6]  h-[370px] md:h-[370px] lg:h-[450px] w-full">
          <img loading='lazy' src={img} alt='products' />
          <div className='w-full'data-aos='flip-up'>
          <div className='mx-4 mt-[4px]'>
          <h3 className='text-center text-xl font-bold md:text-center text-btnColor my-4'>E-commerce</h3>
          <p className='font-normal text-[14px] lg:text-[18px] text-black'>
          An E-commerce website with a stunning user interface built with HTML, CSS3 and Boostrap
          </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-around pb-[33px] mt-7 md:mt-[35px] gap-[12px] md:gap-0  mx-3 md:mx-0" >
          <a className='bg-btnColor md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2'target="_blank" rel="noreferrer" href="https://yhawnoworiesecommerce.netlify.app/">
          <p className='text-center mt-auto md:mt-[3px] lg:mt-[9px]'> View Site</p>
            </a>
            <a className='border-btnColor border-2 rounded-xl md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px]  text-black text-center hover:bg-btnColor hover:text-white'target="_blank" rel="noreferrer" href="https://github.com/yhawNoworries/E-commerce">
            <p className='text-center mt-auto md:mt-[3px] lg:mt-[9px] '>  Source code</p>
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg bg-[#FFEFF6]  h-[370px] md:h-[370px] lg:h-[450px] w-full">
          <img src={img2} alt='products' />
          <div className='w-full'data-aos='flip-up'>
          <div className='mx-4 mt-[4px]'>
          <h3 className='text-center text-xl font-bold md:text-center text-btnColor my-4'>Hello Weather</h3>
          <p className='font-normal text-[14px] lg:text-[18px] text-black'>
          Weather application built HTML, CSS3, Javascript and Rest API. It delivers accourate information
          
          </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-around pb-[33px] mt-[30px] md:mt-[55px] gap-[12px] md:gap-0  mx-3 md:mx-0" >
          <a className='bg-btnColor md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2'target="_blank" rel="noreferrer" href="https://artweatherapp.netlify.app/">
          <p className='text-center mt-auto md:mt-[3px] lg:mt-[9px]'> View Site</p>
            </a>
            <a className='border-btnColor border-2 rounded-xl md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px]  text-black text-center hover:bg-btnColor hover:text-white'target="_blank" rel="noreferrer" href="https://github.com/yhawNoworries/Weather-Application">
            <p className='text-center mt-auto md:mt-[3px] lg:mt-[9px] '>  Source code</p>
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg bg-[#FFEFF6]  h-[370px] md:h-[370px] lg:h-[450px] w-full">
          <img loading='lazy' src={hero} alt='products' />
          <div className='w-full'data-aos='flip-up'>
          <div className='mx-4 mt-[4px]'>
          <h3 className='text-center text-xl font-bold md:text-center text-btnColor my-4'>Portfolio</h3>
          <p className='font-normal text-[14px] lg:text-[18px] text-black'>
          i collabrated with a UI/UX designers to come out with this amazing project built with React and Tailwind
          </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-around pb-[33px] mt-6 md:mt-[54px] gap-[12px] md:gap-[0px] mx-3 md:mx-0" >
          <a className='bg-btnColor w-full h-full md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2'target="_blank" rel="noreferrer" href="https://arthur-emmanuel.netlify.app/">
          <p className='text-center mt-auto md:mt-[3px] lg:mt-[9px]'> View Site</p>
            </a>
            <a className='border-btnColor border-2 rounded-xl w-full h-full md:w-[120px] md:h-[35px] lg:h-[45px] lg:w-[140px]  text-black text-center hover:bg-btnColor hover:text-white'target="_blank" rel="noreferrer" href="https://github.com/ArthurEmma2/Portfolio-site">
            <p className='text-center mt-auto md:mt-[3px] lg:mt-[9px] '>  Source code</p>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="shadow-xl rounded-lg bg-[#FFEFF6]">
          <img src={img} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover slider_img" />
        <div className='pb-5 w-full px-5' data-aos='flip-up'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'>E-commerce Website</h3>
          <p className='font-normal text-[14px] text-black pb-8'>
            An E-commerce website with a stunning user interface built with HTML, CSS3 and Boostrap
          </p>
          <div className="flex flex-col xl:flex-row justify-around pb-[33px]" >
          <a className='bg-btnColor  w-full h-[32px]  lg:h-[45px] lg:w-[140px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2'target="_blank" rel="noreferrer" href="https://yhawnoworiesecommerce.netlify.app/">
          <p className='text-center mt-[9px]'> View Site</p>
            </a>
            <a className='border-btnColor border-2 rounded-xl w-full h-full lg:h-[45px] lg:w-[140px] mt-3 lg:mt-0  text-black text-center hover:bg-btnColor hover:text-white'target="_blank" rel="noreferrer" href="https://github.com/yhawNoworries/E-commerce">
            <p className='text-center mt-[9px]'>  Source code</p>
            </a>
          </div>
        </div>
      </div>

     
      <div className="shadow-2xl w-2 rounded-lg bg-[#FFEFF6]">
          <img src={img2} alt='products' className="rounded-tl-lg rounded-tr-lg object-cover slider_img" />
        <div className='pb-5 w-full px-5' data-aos='flip-up'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'>Weather Application</h3>
          <p className='font-normal text-black pb-8'>
           Weather application built HTML, CSS3 and Javascript it delivers accurate weather informations.
          </p>
          <div className="flex flex-col xl:flex-row justify-around pb-[33px]" >
          <a className='bg-btnColor w-full h-[32px] lg:h-[45px] lg:w-[140px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2' href="https://artweatherapp.netlify.app/">
             <p className='text-center mt-[9px]'> View Site</p>
            </a>
            <a className='border-btnColor w-full h-full lg:h-[45px] lg:w-[140px] border-2 rounded-xl mt-3 lg:mt-0   text-black text-center hover:bg-btnColor hover:text-white' target="blank" rel="noreferrer" href="https://github.com/yhawNoworries/Weather-Application">
              <p className='text-center mt-[9px]'>  Source code</p>
            </a>
          </div>
        </div>
      </div> 
      <div className="shadow-xl rounded-lg bg-[#FFEFF6]">
          <img src={hero}  alt='products' className="rounded-tl-lg rounded-tr-lg object-cover slider_img" />
        <div className='pb-5 w-full px-5' data-aos='flip-up'>
          <h3 className='sm:text-center pb-[24px] pt-[31px] text-xl font-bold md:text-center text-btnColor'>Portfolio Site</h3>
          <p className='font-normal text-black pb-8'>
           i collabrated with a UI/UX designers to come out with this amazing project built with React and Tailwind
          </p>
          <div className="flex flex-col xl:flex-row justify-around pb-[33px]" >
          <a className='bg-btnColor  w-full h-[32px] lg:h-[45px] lg:w-[140px] rounded-xl text-center text-white hover:bg-[#FFEFF6] hover:text-black border-btnColor border-2' href="https://arthur-emmanuel.netlify.app/">
          <p className='text-center mt-auto lg:mt-[9px] '> View Site</p>
            </a>
            <a className='border-btnColor border-2 rounded-xl w-full h-full lg:h-[45px] lg:w-[140px] mt-3 lg:mt-0  text-black text-center hover:bg-btnColor hover:text-white' href="https://github.com/yhawNoworries/Portfolio-site">
            <p className='text-center  mt-auto lg:mt-[9px]'>  Source code</p>
            </a>
          </div>
        </div>
      </div> */}
      </Slider>
      </div>
     
  
      
      </section>

    // <section className='container'>
    //      <div className='App'>
    //           <Slider {...settings}>
    //     <div>
    //       <img className='slider_img' src={img}  alt=''/>
    //     </div>
    //     <div>
    //       <img className='slider_img' src={img}  alt=''/>
    //     </div>
    //     <div>
    //       <img className='slider_img' src={img}  alt=''/>
    //     </div>
    //     <div>
    //       <img className='slider_img' src={img}  alt=''/>
    //     </div>
    //   </Slider>
    //   </div>
    // </section>
  )
}

export default Portfolio