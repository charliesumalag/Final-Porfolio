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
        <div className='cursor-pointer rounded-lg p-4 border border-gray-600 flex flex-col w-[120px] text-gray-400 items-center justify-center hover:bg-neutral-900 hover:text-white' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <i className={`${icon} text-4xl transition-transform duration-300 ${ isHover ? '-translate-y-1' : '' }`} style={{ color }} />
            <p className=''>{text}</p>
        </div>
    </div>
  )
}

export default TeckStack
