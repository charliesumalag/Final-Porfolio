import React, { useState } from 'react'

const TeckStack = ({icon, text, color}) => {
    const [isHover, setIsHover] = useState(false);

  const mouseEnter = () => {
    setIsHover(true);
    console.log('mouse enter');

  }
  const mouseLeave = () => {
    setIsHover(false);
  }
  return (
    <div className=''>
        <div className='cursor-pointer rounded-lg p-2 border border-gray-300 flex flex-col w-[80px] text-gray-400 items-center justify-center hover:bg-gray-100 hover:text-white' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <i className={`${icon} text-4xl transition-transform duration-300 ${ isHover ? '-translate-y-1' : '' }`} style={{ color }} />
            <p className='leading-[1.65em] tracking-[0.1px] font-roboto text-[14px] text-[#737373]'>{text}</p>
        </div>
    </div>
  )
}

export default TeckStack
