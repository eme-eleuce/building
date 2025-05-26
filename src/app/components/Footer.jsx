"use client";
import { FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoPacchar from '../../../public/photos/logos/logo-nuevo.png';

const Footer = ({ dict }) => {
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'es';
    
    // Obtener el año actual para el copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#f8f8f8] shadow-inner relative pt-1 px-8 md:px-4">
            <div className="absolute top-0 left-0 right-0 mx-auto w-[90%] md:w-[80%] lg:w-[85%] border-t-4 border-green-700"></div>
            <div className="max-w-[1240px] mx-auto py-2 md:py-4">
                {/* Contenedor principal */}
                <div className="flex flex-col space-y-6">
                    {/* Logo y direcciones */}
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="w-full md:w-auto flex flex-col items-center md:items-start justify-center md:self-center">
                            <Image
                                src={logoPacchar}
                                alt="Pacchar Logo"
                                width={300}
                                height={100}
                                className="w-[270px] h-auto lg:w-[300px] object-contain"
                                priority
                            />
                        </div>
                        
                        {/* Línea de separación vertical (solo en escritorio) */}
                        <div className="hidden md:block h-28 w-1 mx-6 self-center mt-4" style={{ backgroundColor: '#854d0e' }}></div>
                        
                        {/* Direcciones (versión escritorio) */}
                        <div className="hidden md:flex md:flex-row md:space-x-28 md:self-end mt-8">
                            {/* Dirección Guayaquil */}
                            <div>
                                <div className="flex items-center mb-3">
                                    <FaMapMarkerAlt className="text-green-700 mr-2 text-xl" />
                                    <h4 className="text-lg font-bold text-gray-800 font-title">La Aurora (Guayas)</h4>
                                </div>
                                <p className="text-base text-gray-700 font-body">
                                    Av. Ricardo Paredez #09
                                </p>
                            </div>

                            {/* Dirección Quito */}
                            <div>
                                <div className="flex items-center mb-3">
                                    <FaMapMarkerAlt className="text-green-700 mr-2 text-xl" />
                                    <h4 className="text-lg font-bold text-gray-800 font-title">Quito</h4>
                                </div>
                                <p className="text-base text-gray-700 font-body">
                                    Av. De Los Shyris E9-38 y Bélgica
                                </p>
                                <p className="text-base text-gray-700 font-body">
                                    Edificio Shyris Century, Piso 12, Oficina 12 B
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Direcciones (versión móvil) */}
                    <div className="md:hidden flex flex-col p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-green-700 mb-4 font-title">
                            {lang === 'es' ? 'Nuestras oficinas' : 'Our offices'}
                        </h3>
                        
                        {/* Dirección Guayaquil */}
                        <div className="mb-8">
                            <div className="flex items-center mb-3">
                                <FaMapMarkerAlt className="text-yellow-700 mr-2 text-xl" />
                                <h4 className="text-lg font-bold text-gray-800 font-title">La Aurora (Guayas)</h4>
                            </div>
                            <p className="text-base text-gray-700 font-body">
                            Av. Ricardo Paredez #09
                            </p>
                        </div>

                        {/* Dirección Quito */}
                        <div>
                            <div className="flex items-center mb-3">
                                <FaMapMarkerAlt className="text-yellow-700 mr-2 text-xl" />
                                <h4 className="text-lg font-bold text-gray-800 font-title">Quito</h4>
                            </div>
                            <p className="text-base text-gray-700 font-body">
                                Av. De Los Shyris E9-38 y Bélgica
                            </p>
                            <p className="text-base text-gray-700 font-body">
                                Edificio Shyris Century, Piso 12, Oficina 12 B
                            </p>
                        </div>
                    </div>

                    {/* Redes sociales (centrado) */}
                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-green-700 mb-4 font-title">
                                {lang === 'es' ? 'Síguenos' : 'Follow us'}
                            </h3>
                            <div className="flex space-x-6 justify-center">
                                <a
                                    href="https://www.linkedin.com/company/pacchar/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="p-2 text-gray-700 hover:text-green-600 transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <BsLinkedin size={26} />
                                </a>
                                <a
                                    href="https://www.instagram.com/pacchar.ec/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="p-2 text-gray-700 hover:text-green-600 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <BsInstagram size={26} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-200 mt-2">
                        <p className="text-sm text-gray-600 pt-2 font-body text-center">
                            &copy; {currentYear} Pacchar. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;