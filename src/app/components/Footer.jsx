import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-white px-8 md:px-4">
            <div className="max-w-[1240px] mx-auto py-8">
                {/* Contenedor principal */}
                <div className="flex flex-col space-y-8">
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

                    {/* Direcciones */}
                    <div className="flex flex-col md:flex-row md:space-x-16">
                        {/* Dirección Guayaquil */}
                        <div className="mb-12 md:mb-0">
                            <p className="text-xl font-bold text-gray-800">
                                Av. Francisco de Orellana #111 y Av. Plaza Dañín, Oficina 52
                            </p>
                            <p className="text-lg text-gray-800 mt-2">
                                Guayaquil, Ecuador
                            </p>
                        </div>

                        {/* Dirección Quito */}
                        <div>
                            <p className="text-xl font-bold text-gray-800">
                                Av. De Los Shyris E9-38 y Bélgica
                            </p>
                            <p className="text-xl font-bold text-gray-800">
                                Edificio Shyris Century, Piso 12, Oficina 12 B
                            </p>
                            <p className="text-lg text-gray-800 mt-2">
                                Quito, Ecuador
                            </p>
                        </div>
                    </div>

                    {/* Teléfono */}
                    

                    {/* Redes sociales */}
                    <div className="flex space-x-6">
                        <a
                            href="https://www.linkedin.com/company/pacchar/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:opacity-75"
                        >
                            <BsLinkedin size={25} />
                        </a>
                        <a
                            href="https://www.instagram.com/pacchar.ec/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gray-700 transition hover:opacity-75"
                        >
                            <BsInstagram size={25} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm font-bold text-[#006535]">
                        &copy; Pacchar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;