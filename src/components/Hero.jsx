import React from 'react'
import profile from "../assets/img/profile.png";

const Hero = () => {
  return (
    <div className="flex gap-12 items-center my-22">
            <div className="rounded-full p-[3px] w-[230px] bg-gradient-to-r from-orange-500 to-violet-600">
              <img src={profile} alt="" className=" rounded-full object-cover border-4 border-white" />
            </div>
             <div className='pr-12 flex flex-col gap-8 '>
              <h1 className='text-[28px] font-bold text-gray-400'><span className='text-white'>Hey, I'm Charlie. </span> I'm a Full Stack Web Developer. <span className='text-xs bg-[#113321] py-1 px-2 font-medium rounded-2xl'>Open to work</span> </h1>
              <div className='flex justify-between pr-14'>
                <div className='flex items-center gap-2'>
                  <i className="fa-solid fa-location-dot text-gray-300"></i> <span className='font-normal text-[15px] text-gray-400'>Manila, Philippines</span>
                </div>
                <div className='flex gap-4'>
                  <div className='flex items-center gap-1'>
                    <i className="fa-brands fa-linkedin-in text-gray-300"></i>
                    <a href="https://www.linkedin.com/in/charlie-sumalag-9a38142a4/" target='_blank'><span className='font-normal text-[15px] text-gray-400'>LinkedIn</span></a>
                  </div>
                  <div className='flex items-center gap-1'>
                    <i className="fa-brands fa-github text-gray-300"></i>
                    <a href="https://github.com/charliesumalag" target='_blank'><span className='font-normal text-[15px] text-gray-400'>GitHub</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Hero
