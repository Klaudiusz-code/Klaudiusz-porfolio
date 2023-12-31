import React from 'react'
import MenuLinks from '@/data'
import { useRouter } from 'next/router';
import { IconBase } from 'react-icons';
import Link from 'next/link';

const Navbar = () => {

  // const router = useRouter();
  // const pathname = router.pathname;

  return (      
    <nav className='max-w-[1400px] mx-auto flex justify-between items-center pt-4'>
        <img src='./Logo.png' alt="logo"
        width={65}
        height={65}
        />

      <div className='flex gap-12 items-center'>
        
      {MenuLinks.map((link, index) => (
          <div key={index} className="group relative">
            <Link href={link.link}>
              <div className='text-3xl text-customColor hover:text-white transition-all group-hover:opacity-100'>
                {link.icon}
              </div>
            </Link>
            <div className='absolute pr-6 hidden xl:group-hover:flex'>
              <div className='bg-zinc-100 transition-all mt-2 realtive flex items-center p-[8px] rounded-sm'>
                <div className="text-[15px] font-medium ">{link.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;