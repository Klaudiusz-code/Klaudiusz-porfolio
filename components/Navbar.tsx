"use client"
import React, { useEffect, useState } from 'react';
import MenuLinks from '@/data';
import { usePathname } from 'next/navigation';
import { IconBase } from 'react-icons';
import Link from 'next/link';

const Navbar = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState<string | null>('/');

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <nav className='container mx-auto flex items-center justify-between pt-6 pb-9'>
      <h1 className='text-2xl text-white'>
        Klaud<span className='text-customColor text-2xl'>iusz</span>.
      </h1>
      <div className='flex justify-center items-center border-2 border-customColor w-[150px] h-10 rounded-sm'>
        <span className='text-gColor font-medium text-[0.7rem]'>
          adamaszek404gmail.com
        </span>
      </div>
      <div className='flex gap-y-10 xl:flex-col items-center xl:justify-center justify-between w-full absolute bottom-0 md:right-0 lg:right-0 rounded-none lg:w-12 xl:w-12 md:px-40 xl:px-0 h-[80px] xl:h-max xl:right-4 xl:top-1/4 py-8 lg:rounded-2xl bg-navcolor'>
        {isRouting}
        {MenuLinks.map((link, index) => (
          <div key={index} className='group relative'>
            <Link href={link.link}>
              <div className={`text-3xl text-white hover:text-customColor transition-all group-hover:opacity-100 ${path === link.link ? 'text-red-500' : ''}`}>  
                {link.icon}
              </div>
            </Link>
            <div className='absolute pr-4 right-0 hidden xl:group-hover:flex'>
              <div className='bg-zinc-100 transition-all mt-2 realtive flex items-center p-[8px] rounded-sm'>
                <div className='text-[15px] font-medium'>{link.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
