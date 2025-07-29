import clsx from 'clsx'
import React from 'react'

const Title = ({text}) => {
  return (
    <>
        <h3 className={clsx('font-bold text-[#333] text-[15px] tracking-[0.6px] uppercase font-roboto leading-[16px]','max-md:text-center')}>{text}</h3>
    </>
  )
}

export default Title
