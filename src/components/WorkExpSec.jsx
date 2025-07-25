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
                <p className='text-gray-500 leading-[1.65em] tracking-[0.1px] font-roboto text-[15px] mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, provident? Nostrum, ducimus molestiae eos reprehenderit culpa quod dolore pariatur possimus odio exercitationem? Non illum quo voluptate perferendis id unde rerum.</p>
            </div>
        </div>
    </section>

  )
}

export default WorkExpSec
