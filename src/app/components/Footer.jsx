"use client";
import { FaPhoneSquareAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoPacchar from '../../../public/photos/pacchar3.png';

const Footer = ({ dict }) => {
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'es';
    
    // Obtener el año actual para el copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#f8f8f8] shadow-inner relative pt-1 px-8 md:px-4">
            <div className="absolute top-0 left-0 right-0 mx-auto w-[90%] md:w-[80%] lg:w-[70%] border-t-4 border-green-600"></div>
            <div className="max-w-[1240px] mx-auto py-10 md:py-12">
                {/* Contenedor principal */}
                <div className="flex flex-col space-y-8">
                    {/* Logo y direcciones */}
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div>
                            <Image
                                src={logoPacchar}
                                alt="Pacchar Logo"
                                width={300}
                                height={100}
                                className="w-[220px] h-auto lg:w-[250px] object-contain"
                                priority
                            />
                            <p className="text-gray-600 mt-2 max-w-md font-body">
                                {lang === 'es' ? 'Soluciones climáticas escalables y sostenibles para un futuro mejor.' : 'Scalable and sustainable climate solutions for a better future.'}
                            </p>
                        </div>
                        
                        {/* Línea de separación vertical (solo en escritorio) */}
                        <div className="hidden md:block h-28 w-1 bg-green-600 mx-6 self-center mt-4"></div>
                        
                        {/* Direcciones (versión escritorio) */}
                        <div className="hidden md:flex md:flex-row md:space-x-12 md:self-end mt-8">
                            {/* Dirección Guayaquil */}
                            <div>
                                <div className="flex items-center mb-3">
                                    <FaMapMarkerAlt className="text-yellow-700 mr-2 text-xl" />
                                    <h4 className="text-lg font-bold text-gray-800 font-title">Guayaquil</h4>
                                </div>
                                <p className="text-base text-gray-700 font-body">
                                    Av. Francisco de Orellana #111 y Av. Plaza Dañín, Oficina 52
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
                    </div>

                    {/* Direcciones (versión móvil) */}
                    <div className="md:hidden flex flex-col bg-green-50 p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-green-700 mb-4 font-title">
                            {lang === 'es' ? 'Nuestras oficinas' : 'Our offices'}
                        </h3>
                        
                        {/* Dirección Guayaquil */}
                        <div className="mb-8">
                            <div className="flex items-center mb-3">
                                <FaMapMarkerAlt className="text-yellow-700 mr-2 text-xl" />
                                <h4 className="text-lg font-bold text-gray-800 font-title">Guayaquil</h4>
                            </div>
                            <p className="text-base text-gray-700 font-body">
                                Av. Francisco de Orellana #111 y Av. Plaza Dañín, Oficina 52
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

                    {/* Contacto y redes sociales */}
                    <div className="flex flex-col md:flex-row justify-between items-start pt-2">
                        {/* Información de contacto */}
                        <div>
                            <h3 className="text-xl font-bold text-green-700 mb-4 font-title">
                                {lang === 'es' ? 'Contacto' : 'Contact'}
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <FaPhoneSquareAlt className="text-green-600 mr-3 text-xl" />
                                    <p className="text-gray-700 font-body">+593 99 123 4567</p>
                                </div>
                                <div className="flex items-center">
                                    <MdEmail className="text-green-600 mr-3 text-xl" />
                                    <p className="text-gray-700 font-body">info@pacchar.com</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Redes sociales */}
                        <div className="mt-8 md:mt-0">
                            <h3 className="text-xl font-bold text-green-700 mb-4 font-title">
                                {lang === 'es' ? 'Síguenos' : 'Follow us'}
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/company/pacchar/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="p-2 text-gray-700 hover:text-green-600 transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <BsLinkedin size={22} />
                                </a>
                                <a
                                    href="https://www.instagram.com/pacchar.ec/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="p-2 text-gray-700 hover:text-green-600 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <BsInstagram size={22} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-200 pt-4 mt-2">
                        <p className="text-sm text-gray-600 font-body text-center">
                            &copy; {currentYear} Pacchar. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;