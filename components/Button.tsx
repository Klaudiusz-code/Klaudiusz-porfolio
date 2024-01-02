import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <button className='bg-customColor mt-6 text-white max-w-[120px] md:max-w-[130px] p-2 xl:min-w-[150px] h-12 rounded-md transitio hover:text-customColor hover:bg-zinc-100'>
      <Link href='/' passHref>
        <span className='text-[12px] xl:text-[18px]'>
          View Project
        </span>
      </Link>
    </button>
    
  )
}

export default Button;