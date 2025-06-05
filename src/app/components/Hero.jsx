"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {IoIosArrowDown} from 'react-icons/io';
import { MdOutlineConstruction } from "react-icons/md";

// Importando imágenes
import fondoImage from '../../../public/photos/mano.jpg';
import image1 from '../../../public/photos/humo.jpg';
import image3 from '../../../public/photos/3.jpg';
import image4 from '../../../public/photos/4.jpg';
import image5 from '../../../public/photos/fuego.jpg';

const Hero = () => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'es';
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    fondoImage,
    image5,
    image3,
    image1,
    image4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Cambia imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center" >
      {/* Slideshow de imágenes de fondo */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="/"
            fill
            priority={index === 0}
            quality={70}
            className={`object-cover
              transition-all 
              duration-1000 
              ${currentImageIndex === index 
                ? 'opacity-100 brightness-100'
                : 'opacity-0 brightness-60'
              }
            `}
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEQMhMUH/2gAMAwEAAhEDEQA/AJThri3g0R1e5uo0gj4JEMiKfHbHFe1q+OoU4yXxUcvRjRY8eN9gxvzSlT54p//Z"

          />
        ))}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Texto principal */}
      <div className="absolute inset-0 flex flex-col items-left justify-center text-white px-8 md:px-20 md:ml-6 lg:ml-24 xl:ml-30 mt-16 md:mt-20 lg:mt-24">
        <div className="mt-20 md:mt-24 lg:mt-32">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-6 font-title leading-tight uppercase">
            {lang === 'es' ? (
              <>
                DESCARBONIZAMOS LA ATMÓSFERA <br />
                POTENCIANDO LOS SUELOS
              </>
            ) : (
              <>
                DECARBONIZING THE ATMOSPHERE <br />
                BY ENHANCING SOILS
              </>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-left font-body mb-16">
            {lang === 'es' ? 'Empoderando a un agricultor a la vez' : 'Empowering one farmer at a time'}
          </p>
        </div>
      </div>
      
      {/* Flecha de scroll */}
      <div className='absolute justify-center mt-[36rem] lg:mt-[37rem] md:mt-[34rem] text-white cursor-pointer'>
            <Link href='#section1' scroll={true}>
               <IoIosArrowDown size={65}/>
            </Link>
              </div>
    </div>
  );
}

export default Hero