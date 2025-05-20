"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import reLogo from '../../../public/photos/logos/re.png';
import paccharLogo from '../../../public/photos/renew-pacchar.png';
import biocharImage from '../../../public/photos/biochar.jpg';
import gorilla from '../../../public/photos/oso.jpg';

// Textos para internacionalización
const texts = {
  es: {
    title: "Alianza estratégica de apoyo técnico y financiero para la captura de Carbono y restauración de ecosistemas",
    description: "Pacchar y Rainforest Enterprise han unido fuerzas en una alianza estratégica para acelerar la captura de carbono y la restauración de ecosistemas en Ecuador. Esta colaboración combina la experiencia técnica de Pacchar en biochar y soluciones basadas en la naturaleza con la capacidad financiera y de escalamiento de Rainforest Enterprise, permitiéndonos implementar proyectos de mayor impacto y alcance. Juntos, estamos desarrollando soluciones innovadoras que benefician tanto a las comunidades locales como al medio ambiente global.",
    buttonText: "Visitar Rainforest Enterprise"
  },
  en: {
    title: "Strategic alliance for technical and financial support for Carbon capture and ecosystem restoration",
    description: "Pacchar and Rainforest Enterprise have joined forces in a strategic alliance to accelerate carbon capture and ecosystem restoration in Ecuador. This collaboration combines Pacchar's technical expertise in biochar and nature-based solutions with Rainforest Enterprise's financial and scaling capabilities, allowing us to implement projects with greater impact and reach. Together, we are developing innovative solutions that benefit both local communities and the global environment.",
    buttonText: "Visit Rainforest Enterprise"
  }
};

const RainforestAlliance = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="py-20 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-12"
        variants={staggerContainer}
      >
        <motion.div 
          className="flex flex-col items-center bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={fadeInUp}
        >
          {/* Imagen de fondo con logo superpuesto */}
          <motion.div 
            className="w-full relative"
            variants={fadeIn}
          >
            <motion.div 
              className="w-full h-[300px] md:h-[400px] relative"
              variants={fadeIn}
            >
              <Image
                src={gorilla}
                alt="Biochar Image"
                fill
                className="object-cover brightness-75"
                priority
              />
            </motion.div>
            
            {/* Logos superpuestos en rectángulo con bordes */}
            <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-2xl p-4 w-[380px] h-[150px] flex items-center justify-center overflow-hidden">
                <div className="flex items-center justify-center w-full h-full bg-white">
                  {/* Logo de Pacchar */}
                  <div className="relative w-[120px] h-[120px] mx-2">
                    <Image
                      src={paccharLogo}
                      alt="Pacchar Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Símbolo + */}
                  <div className="text-5xl font-bold text-green-700 mx-3">
                    +
                  </div>
                  
                  {/* Logo de Rainforest Enterprise */}
                  <div className="relative w-[120px] h-[120px] mx-2">
                    <Image
                      src={reLogo}
                      alt="Rainforest Enterprise Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contenido de texto centrado */}
          <motion.div 
            className="w-full p-8 pt-12 md:p-12 md:pt-16 mt-2 flex flex-col items-center"
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-700 mb-8 font-title text-center max-w-4xl"
              variants={fadeInUp}
            >
              {t.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 mb-10 font-body text-justify max-w-4xl mt-4"
              variants={fadeInUp}
            >
              {t.description}
            </motion.p>
            <motion.div 
              className="flex justify-center"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="https://rainforestenterprise.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-900 hover:bg-yellow-950 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 font-body text-lg flex items-center"
                >
                {t.buttonText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default RainforestAlliance;
