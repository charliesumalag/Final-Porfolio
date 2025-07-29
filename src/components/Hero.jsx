import React from 'react'
import profile from "../assets/img/profile.png";
import clsx from "clsx";

const Hero = () => {
  return (
    <div className={clsx("flex gap-6 my-14","max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4")}>
      <div>
        <img src={profile} alt="" className={clsx('rounded-md w-[250px]','max-md:w-[150px]')} />
      </div>
      <div className={clsx('pr-18 flex flex-col gap-4','max-md:pr-0 max-md:gap-1')}>
        <div className={clsx('flex justify-between', 'max-md:flex-col max-md:items-center gap-1')}>
          <h1 className='text-[18px] leading-[25px] font-poppins font-bold text-black'>Hi, I am Charlie Sumalag</h1>
          <ul className={clsx('flex gap-2')}>
            <li> <a href="https://www.linkedin.com/in/charlie-sumalag-9a38142a4/" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-linkedin text-[15px] hover:text-[#ff374a] transition-all duration-300 ease-in-out"></i> </a> </li>
            <li> <a href="https://github.com/charliesumalag" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-square-github text-[15px] hover:text-[#ff374a] transition-all duration-300 ease-in-out"></i> </a> </li>
            <li> <a href="https://github.com/charliesumalag" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-square-facebook text-[15px] leading-1 hover:text-[#ff374a] transition-all duration-300 ease-in-out"></i> </a> </li>
          </ul>
        </div>
        <div className='relative'>
          <span className={clsx("w-1.5 h-1.5 bg-black rounded-full absolute left-0 -translate-x-[15%] top-[-3px]",'max-md:hidden')} />
          <div className={clsx("h-px w-[30%] bg-gradient-to-r from-gray-300 to-white",'max-md:hidden')}></div>
          <p className={clsx('leading-[1.65em] tracking-[0.1px] font-roboto text-[15px] text-[#737373] pr-14 mt-4', 'max-md:pr-0 max-md:mt-0 max-md:px-6')}>Im a BSIT graduate passionate about web development and writing clean, efficient code to build intuitive digital experiences.</p>
        </div>
        <div>
          <span className='leading-[1.65em] rounded-sm tracking-[0.1px] py-[7px] px-3 bg-[#ff374a] text-white font-roboto text-[13px] cursor-pointer font-bold'>Resume <i className="fa-solid fa-chevron-right text-[8px]"></i></span>
        </div>
      </div>
    </div>
  )
}
export default Hero
