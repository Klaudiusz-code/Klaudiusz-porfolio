import React from 'react'
import ButtonContact from './ButtonContact'

const ContactBaner = () => {
  return (
    <div className="h-[300px] flex items-center justify-center bg-cover mt-32 mb-12 bg-center bg-contactBanner rounded-lg">
    <div className="text-center text-white">
      <h2 className="text-4xl font-bold mb-4">POROZMAWIAJMY O TWOIM <span className='text-customColor'>PROJEKCIE</span></h2>
      <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <ButtonContact/>
    </div>
  </div>
  )
}

export default ContactBaner