import React from 'react'
import google from "../assets/img/googlelogo.jpg";
import Title from "../components/Title";

const WorkExpSec = () => {
  return (
    <section id='work-experience' className='pt-22'>
        <Title text='Work Experience' />
        <div className=' mt-8 flex flex-col gap-1'>
            <div className='flex gap-2'>
                <img src={google} alt="" className='w-[50px] rounded-full' />
                <div className='flex flex-col gap-1'>
                    <p className='text-[15px] leading-[25px] font-poppins font-bold text-black'>Web Developer</p>
                    <div className='flex gap-2'>
                        <p className='text-[#999] uppercase  leading-[14px] tracking-[0.6px] font-roboto text-[11.5px]'>Ocean ThinkIT • 2025</p>
                        <p className='text-[#999] uppercase  leading-[14px] tracking-[0.6px] font-roboto text-[11.5px]'> • Open Job Training</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-gray-500 leading-[1.65em] tracking-[0.1px] font-roboto text-[15px] mt-4'>For the past two years, I have primarily worked with startups, developing products from the ground up. I have led the frontend development of an AI-powered Interview Platform, building a job marketplace for dentists, and creating a system for managing promotional prize games.</p>
            </div>
        </div>
    </section>

  )
}

export default WorkExpSec
