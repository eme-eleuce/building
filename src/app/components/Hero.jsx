

import Image from 'next/image';
import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';
<<<<<<< HEAD
import fondo from '@/app/photos/fondoi.jpg';
=======
>>>>>>> 54d6bfab51bdf31fb646e0018adada258b4df666



const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center" >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
<<<<<<< HEAD
          src={fondo}
          alt="/"
          fill
          objectFit="cover"
          priority
          quality={70}
          placeholder='blur'
=======
          src="/fondoi.jpg"
          alt="/"
          layout="fill"
          objectFit="cover"
          quality={100}
>>>>>>> 54d6bfab51bdf31fb646e0018adada258b4df666
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10">
        <Image
          src="/pacchar.jpg"
          alt="/"
          width={400}
          height={400}
          className="w-[300px] h-[300px] md:w-78 md:h-78 lg:w-[450px] lg:h-[450px]"
        />
      </div>
      <div className='absolute justify-center mt-[36rem] lg:mt-[34.5rem] md:mt-[34rem] text-white cursor-pointer'>
            <Link href='#section1' scroll={true}>
               <IoIosArrowDown size={60}/>
            </Link>
              </div>
    </div>
  );
}

export default Hero