import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {

    return (
   
        <footer>
  <div className="max-w-[1240px] px-2 py-8 mx-auto space-y-8 sm:px-4 lg:space-y-10 lg:px-3">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Parte izquierda (logo, información y redes sociales) */}
      <div className="lg:ml-8">
        {/* Logo */}
        <div>
          <Image
                            src="/pachar-h.png"
                            alt="/"
                            width={300}
                            height={300}
                            className="w-[230px] h-[130px] lg:w-[270px] lg:h-[150px]"
                          />
        </div>

        {/* Información */}
        <div className="max-w-xs ml-8 lg:ml-0 text-gray-500 text-left md:text-left">
          <p className='text-xl font-bold'>Av. Francisco de Orellana #111 y Av. Plaza Dañín, Oficina 52</p>
          <p className='text-lg'>Guayaquil, Ecuador</p>
          <p className="flex items-center justify-start">
            <FaPhoneSquareAlt size={20} className="mr-2"/> +593 93 9928517
          </p>
        </div>

        {/* Redes sociales */}
        <ul className="flex gap-6 mt-8 ml-8 lg:ml-0 items-center">
          <li>
            <a
              href="https://www.linkedin.com/company/pacchar/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <BsLinkedin size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pacchar.ec/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <BsInstagram size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Derechos de autor */}
    <p className="text-sm font-bold text-[#006535] lg:ml-5">
      &copy; Pacchar. All rights reserved.
    </p>
  </div>
</footer>

    );
}

export default Footer;