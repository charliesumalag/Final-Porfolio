import React, { useState } from 'react'
import Project1 from "../assets/img/Project1.png";
import clsx from 'clsx';

const Project = ({title, text}) => {
    const [isHover, setIsHover] = useState(false);
  return (
    <div className={clsx('flex mt-8 p-4 gap-6 items-start hover:bg-gray-200 rounded-lg cursor-pointer','max-md:flex-col max-md:items-center')} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className='rounded-lg overflow-hidden border border-gray-300 '>
        <img src={Project1} alt=""  className={clsx('w-[500px]','max-md:h-[200px] max-md:w-[300px]')}/>
      </div>
      <div className={clsx('max-md:text-center')} >
        <p className={isHover ? "text-[15px] leading-[25px] font-poppins font-bold text-[#ff374a]" : "text-[15px] leading-[25px] font-poppins font-bold text-black max-md:font-medium"}>{title} <span><i className={isHover ? "fa-solid fa-arrow-right rotate-[320deg] transition-transform duration-300 translate-x-0.5 -translate-y-0.5 font-extralight text-[12px] pt-4 " : "fa-solid fa-arrow-right rotate-[320deg] font-extralight text-[12px] pt-4"}></i></span></p>
        <p className='text-gray-500 leading-[1.65em] tracking-[0.1px] font-roboto text-[15px] mt-1'>{text}</p>
        <div className={clsx('flex flex-wrap gap-3 my-4', 'max-md:justify-center')}>
          <span className='leading-[1.65em] rounded-sm tracking-[0.1px] py-1 px-2 bg-[#DC4214] text-white font-roboto text-[11px] '>HTML</span>
          <span className='leading-[1.65em] rounded-sm tracking-[0.1px] py-1 px-2 bg-[#36B7F0] text-white font-roboto text-[11px] '>Tailwind CSS</span>
          <span className='leading-[1.65em] rounded-sm tracking-[0.1px] py-1 px-2 bg-[#5ED3F3] text-white font-roboto text-[11px] '>React JS</span>
          <span className='leading-[1.65em] rounded-sm tracking-[0.1px] py-1 px-2 bg-[#F77570] text-white font-roboto text-[11px] '>Laravel</span>
          <span className='leading-[1.65em] rounded-sm tracking-[0.1px] py-1 px-2 bg-[#12618F] text-white font-roboto text-[11px] '>MySQL</span>
        </div>
      </div>
    </div>
  )
}

export default Project
