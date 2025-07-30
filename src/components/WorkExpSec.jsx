import React from 'react'
import google from "../assets/img/googlelogo.jpg";
import Title from "../components/Title";
import clsx from 'clsx';

const WorkExpSec = () => {
  return (
    <section id='work-experience' className={clsx('pt-22','max-md:text-center')}>
        <Title text='Work Experience' />
        <div className=' mt-8 flex flex-col gap-1'>
            <div className={clsx('flex gap-2','max-md:items-center max-md:flex-col')}>
                <img src={google} alt="" className='w-[50px] rounded-full' />
                <div className='flex flex-col gap-1'>
                    <p className='text-[14px] leading-[25px] font-poppins font-medium text-gray-900'>Web Developer</p>
                    <div className='flex gap-2'>
                        <p className='text-[#999] uppercase  leading-[14px] tracking-[0.6px] font-roboto text-[11.5px]'>Ocean ThinkIT • 2025</p>
                        <p className='text-[#999] uppercase  leading-[14px] tracking-[0.6px] font-roboto text-[11.5px]'> • Open Job Training</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={clsx('text-gray-500 leading-[1.65em] tracking-[0.1px] font-roboto text-[15px] mt-4','max-md:text-center')}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, provident? Nostrum, ducimus molestiae eos reprehenderit culpa quod dolore pariatur possimus odio exercitationem? Non illum quo voluptate perferendis id unde rerum.</p>
            </div>
        </div>
    </section>

  )
}

export default WorkExpSec
