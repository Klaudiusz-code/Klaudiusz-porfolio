'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import hero_img from '@/public/lap2.png'

export default function Home() {
  return (
  
    <section className=" relative container mx-auto mt-24 lg:flex lg:items-center text-center md:text-left">
      <div className="lg:w-7/12 lg:pr-8 mt-32">
          <h1 className="text-customColor text-5xl xl:text-6xl font-extrabold mb-4">Klaudiusz Adamaszek</h1>
          <h2 className='text-gColor font-bold text-2xl xl:text-3xl'>Web Developer</h2>
          <p className="lg:w-9/12 text-gColor mt-4 mb-2 font-light text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] leading-7">
            Pasjonat Full Stack JavaScript, łączący potęgę Node.js na backendzie z elegancją React na froncie. Tworzę innowacyjne rozwiązania, które przekształcają koncepcje w kod. Moje projekty wyróżniają się nie tylko techniczną precyzją, ale także dbałością o doświadczenie użytkownika.
          </p>
          <Button/>
      </div>
  </section>

  )
}




