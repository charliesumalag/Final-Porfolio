import React, { useState } from 'react'

const Certificate = ({text, title, image, link}) => {
    const [isHover, setIsHover] = useState(false);
  return (
    <a href={link} target='_blank'>
    <div className='flex mt-8 mb-10 p-4 gap-6 items-start hover:bg-gray-200 rounded-lg cursor-pointer' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <div className='rounded-lg overflow-hidden border border-gray-300 '>
            <img src={image} alt=""  className='w-[650px]'/>
        </div>
        <div className='' >
            <p className={isHover ? "text-[15px] leading-[25px] font-poppins font-bold text-[#ff374a]" : "text-[15px] leading-[25px] font-poppins font-bold text-black"}>{title} <span><i className={isHover ? "fa-solid fa-arrow-right rotate-[320deg] transition-transform duration-300 translate-x-0.5 -translate-y-0.5 font-extralight text-[12px] pt-4 " : "fa-solid fa-arrow-right rotate-[320deg] font-extralight text-[12px] pt-4"}></i></span></p>
            <p className='text-gray-500 leading-[1.65em] tracking-[0.1px] font-roboto text-[15px] mt-1'>{text}</p>
        </div>
    </div>
    </a>
  )
}

export default Certificate
