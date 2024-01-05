'use client'
import React from 'react'
import RootLayout from '@/app/layout'
import { ContactIcon, SocialIcons } from '@/data'

const contact = () => {
  return (
   
    <div className='container mx-auto'>
       <div className='w-full text-center'>
        <h1 className='text-[4rem] text-white font-bold'>
          <span className='text-customColor'>CONTACT</span> US
        </h1>
       </div>
      <div className='flex flex-col lg:flex-row justify-between items-center mt-16'>
        <div>
              <h1 className='text-3xl text-white font-extrabold'>Get in touch</h1>
              <p className='mb-12 text-gColor text-1xl mt-3 max-w-[80%]'>Zapraszam do przejrzenia moich projektów i mam nadzieję, że będziemy mieli okazję współpracować. Dziękuję za odwiedzenie mojego portfolio!</p>
              <ul className='grid grid-cols-1 mt-4 gap-y-4'>
                {ContactIcon.map((item, index) => (
                  <li key={index} className='flex flex-row items-start'>
                    <span className='flex items-center justify-center col-span-4 self-center bg-gray-700 text-white w-[4rem] h-[4rem] text-3xl rounded-full'>{item.icon}</span>
                    <span style={{ marginLeft: '12px' }} className='self-center text-gColor text-1xl font-thin'>{item.desc}</span>
                  </li>
                ))}
              </ul>
                <div className='mt-8'>
                  <ul className='flex gap-3'>
                    {
                      SocialIcons.map((item) => (
                        <li className='text-1xl bg-gray-700 p-4 rounded-full text-white hover:bg-customColor transition-all duration-400 cursor-pointer'>
                          {item.icon}
                        </li>
                      ))
                    }
                  </ul>
                </div>
          </div>
            <div className='min-w-[50%] mx-auto'>
            <form className="max-w-full mx-auto border border-gray-700 rounded-lg overflow-hidden shadow-md p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Imię i nazwisko</label>
                <input type="text" id="name" name="name" className=" bg-transparent w-full py-2 border-b border-gray-700" placeholder="Twoje imię i nazwisko" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Adres e-mail</label>
                <input type="email" id="email" name="email" className="bg-transparent w-full py-2 border-b border-gray-700" placeholder="Twój adres e-mail" required />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Wiadomość</label>
                <textarea id="message" name="message" className="bg-transparent w-full py-2 border-b border-gray-700" placeholder="Twoja wiadomość" required></textarea>
              </div>

              <div className="flex items-center justify-end">
                <button type="submit" className="bg-customColor text-white px-4 py-3 rounded-md w-full">Wyślij</button>
              </div>
             </form>
            </div>
        </div>
    </div>

  )
}

export default contact