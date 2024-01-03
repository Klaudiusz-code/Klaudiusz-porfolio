'use client'
import React from 'react'
import { Learn, MySkills } from '@/data'
import { MyServices } from '@/data'

const services = () => {
  return (
    <div className='container mx-auto h-screen  flex flex-wrap justify-center'>
      <div className='w-full mx-auto text-center'>
        <h1 className='text-[4rem] text-white font-extrabold'>
          <span className='text-customColor'>MY</span> SERVICE
        </h1>
        <div className='flex flex-wrap justify-center mt-14 gap-x-4'>
          <div className='flex flex-col border border-gColor rounded-lg w-[361px] text-left min-h-[600px]'>
            <div className='ml-10 mt-8'>
              <div>
                <h1 className='text-[20px] font-bold text-white'>
                  <span className='text-customColor'>WHAT</span> CAN I DO?
                </h1>
                <ul className='list-none text-white mt-4'>
                  {MySkills.map((skill, index) => (
                    <li key={index} className='flex items-center mb-2 font-bold text-[15px]'>
                      <span className='mr-2 font-extrabold'>{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className='text-[20px] font-bold text-white'>
                  <span className='text-customColor'>WHAT</span> DO I LEARN?
                </h1>
                <ul className='list-none text-white mt-4'>
                  {Learn.map((skill, index) => (
                    <li key={index} className='flex items-center mb-2 font-bold text-[15px]'>
                      <span className='mr-2 font-extrabold'>{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-y-6'>
            {MyServices.map((service, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-white border border-gColor rounded-md w-[361px] min-h-[183px] transition-all hover:bg-customColor'
              >
                <span className='text-[2.3rem] pt-2'>{service.icon}</span>
                <h1 className='mt-2 text-[23px] font-bold'>{service.name}</h1>
                <p className='w-full text-white font-light'>{service.desc},</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default services;
