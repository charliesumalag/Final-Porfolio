import React from 'react'
import profile from "../assets/img/profile.png";

const Hero = () => {
  return (
    <div className="flex gap-6 my-14">
      <div>
        <img src={profile} alt="" className=' rounded-md w-[250px]' />
      </div>
      <div className='pr-18 flex flex-col gap-4 '>
        <div className='flex justify-between'>
          <h1 className='text-[18px] leading-[25px] font-poppins font-bold text-black'>Hi, I am Charlie Sumalag</h1>
          <ul className='flex gap-2'>
            <li> <a href="https://www.linkedin.com/in/charlie-sumalag-9a38142a4/" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-linkedin text-[15px] hover:text-[#ff374a] transition-all duration-300 ease-in-out"></i> </a> </li>
            <li> <a href="https://github.com/charliesumalag" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-square-github text-[15px] hover:text-[#ff374a] transition-all duration-300 ease-in-out"></i> </a> </li>
            <li> <a href="https://github.com/charliesumalag" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-square-facebook text-[15px] leading-1 hover:text-[#ff374a] transition-all duration-300 ease-in-out"></i> </a> </li>
          </ul>
        </div>
        <div className='relative'>
          <span className="w-1.5 h-1.5 bg-black rounded-full absolute left-0 -translate-x-[15%] top-[-3px]" />
          <div className="h-px w-[30%] bg-gradient-to-r from-gray-300 to-white"></div>
          <p className='leading-[1.65em] tracking-[0.1px] font-roboto text-[15px] text-[#737373] pr-14 mt-4'>Im a BSIT graduate passionate about web development and writing clean, efficient code to build intuitive digital experiences.</p>
        </div>
        <div>
          <span className='leading-[1.65em] rounded-sm tracking-[0.1px] py-[5px] px-3 bg-[#ff374a] text-white font-roboto text-[13px] cursor-pointer font-bold'>Resume <i className="fa-solid fa-chevron-right text-[8px]"></i></span>
        </div>
      </div>
    </div>
  )
}
export default Hero
