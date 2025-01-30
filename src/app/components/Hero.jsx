

import Image from 'next/image';
import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';
import fondo from '@/app/photos/fondoi.jpg';
import { MdOutlineConstruction } from "react-icons/md";
import logo from '@/app/photos/landing.png';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center" >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={fondo}
          alt="/"
          fill
          objectFit="cover"
          priority
          quality={70}
          placeholder='blur'
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10">
        <Image
          src={logo}
          alt="/"
          width={400}
          height={400}
          className="w-[350px] h-[200px] md:w-78 md:h-78 lg:w-[620px] lg:h-[350px] mb-10 lg:mb-[10rem]"
        />
      </div>
      <div className='absolute justify-center mt-[20rem] lg:mt-[25rem] md:mt-[34rem] px-3'>
      <p className='text-white text-xl md:text-2xl font-bold flex items-center gap-2 text-center'>
            Sitio en construcción <MdOutlineConstruction size={47} />
      </p>
      </div>
      <div className='absolute justify-center mt-[26rem] lg:mt-[30rem] md:mt-[34rem] px-3'>
        <p className='text-white text-xl md:text-2xl font-bold flex items-center text-center gap-2 '>¡Pronto habrá mucho más para ti!</p>
        </div>
      <div className='absolute justify-center mt-[36rem] lg:mt-[37rem] md:mt-[34rem] text-white cursor-pointer'>
            <Link href='#section1' scroll={true}>
               <IoIosArrowDown size={60}/>
            </Link>
              </div>
    </div>
  );
}

export default Hero