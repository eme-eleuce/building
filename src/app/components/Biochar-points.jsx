"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import mapaEcuador from '../../../public/photos/points/mapa.png';

// Textos para internacionalización
const texts = {
  es: {
    // Sección de Mapa
    mapTitle: "Nuestra Presencia en Ecuador",
    mapDescription: "Pacchar opera activamente en varias provincias de Ecuador, llevando soluciones sostenibles a diferentes regiones del país.",
    provincesTitle: "Provincias donde operamos:",
    provincesList: [
      "Imbabura",
      "Pichincha",
      "Guayas",
      "El Oro"
    ],
    impactTitle: "Impacto Regional",
    impactDescription: "En cada una de estas provincias, trabajamos con agricultores y empresas locales para implementar soluciones de biochar adaptadas a las necesidades específicas de cada región, contribuyendo al desarrollo sostenible y la regeneración de suelos en todo Ecuador."
  },
  en: {
    // Map Section
    mapTitle: "Our Presence in Ecuador",
    mapDescription: "Pacchar actively operates in several provinces of Ecuador, bringing sustainable solutions to different regions of the country.",
    provincesTitle: "Provinces where we operate:",
    provincesList: [
      "Imbabura",
      "Pichincha",
      "Guayas",
      "El Oro"
    ],
    impactTitle: "Regional Impact",
    impactDescription: "In each of these provinces, we work with local farmers and businesses to implement biochar solutions tailored to the specific needs of each region, contributing to sustainable development and soil regeneration throughout Ecuador."
  }
};

const BiocharPoints = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
  // Variantes para animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Mapa de Ecuador */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-6xl md:text-7xl lg:text-8xl  font-extrabold text-green-700 mb-8 text-center font-title"
            variants={fadeInUp}
          >
            {t.mapTitle}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-12 text-center max-w-4xl mx-auto font-body"
            variants={fadeInUp}
          >
            {t.mapDescription}
          </motion.p>
          
          <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Mapa de Ecuador */}
            <motion.div 
              className="w-full md:w-1/2 relative rounded-lg overflow-hidden h-[350px] md:h-[500px] order-2 md:order-1"
              variants={fadeInLeft}
            >
              <Image
                src={mapaEcuador}
                alt="Mapa de Ecuador con provincias resaltadas"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            {/* Texto de provincias */}
            <motion.div 
              className="w-full md:w-1/2 order-1 md:order-2"
              variants={fadeInRight}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-green-600 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.provincesTitle}
              </motion.h3>
              <motion.ul 
                className="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700 font-body"
                variants={fadeInUp}
              >
                {t.provincesList.map((province, index) => (
                  <motion.li 
                    key={index}
                    className="font-semibold"
                    variants={fadeInUp}
                  >
                    {province}
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-green-600 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.impactTitle}
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700 font-body text-justify"
                variants={fadeInUp}
              >
                {t.impactDescription}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BiocharPoints;