import Button from '@/components/Button'
import Image from 'next/image'


export default function Home() {
  return (
      <main className='max-w-full xl:max-w-[1400px] h-screen mx-auto flex flex-col'>
      <div className='flex flex-col items-center mt-24 p-16 bg-repeat-x bg-center'>
        <div>
          <h2 className='text-customColor text-[0.9rem] font-semibold lg:text-[1.3rem] xl:text-[2em]'>
          &lt;Klaudiusz Adamaszek/&gt;
          </h2>
        </div>
        <div className='w-full mx-auto text-center mt-2'>
            <h1 className='text-customColor font-extrabold text-[2.8rem] lg:text-[4rem] xl:text-[6rem]'>
              Web Developer
            </h1>
        </div>
        <div className='w-full sm:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] mx-auto mt-2 xl:mt-1'>
          <p className='text-gColor font-extralight text-[0.9rem] text-center xl:text-[1rem] '>
          Od dwóch lat zgłębiam tajniki front-endu i back-endu, rozwijając swoje umiejętności i projektując własne aplikacje. Choć moja droga zawodowa dopiero się zaczyna, jestem pełen zapału do nauki i tworzenia. Przyjrzyj się mojemu portfolio, aby zobaczyć, jak rozwijam się jako programista!
          </p>
        </div>
        <div className='mt-6'>
          <Button/>
        </div>
      </div>
    </main>
  )
}
