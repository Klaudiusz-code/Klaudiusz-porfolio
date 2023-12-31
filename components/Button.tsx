import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <button className='bg-customColor text-white max-w-[120px] md:max-w-[130px] p-2 xl:min-w-[150px] h-12 rounded-md transitio hover:text-customColor hover:bg-zinc-100'>
      <Link href='https://drive.google.com/file/d/1vMAvH0h7gqUht4VmI6LbULjYNBzGehtx/view' passHref>
        <span className='text-[12px] xl:text-[18px]'>
          Download CV
        </span>
      </Link>
    </button>
    
  )
}

export default Button;