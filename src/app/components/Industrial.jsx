"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import aliadoImage from '../../../public/photos/aliado.jpg';
import artisanProImage from '../../../public/products/industrial1.jpg';
import artisanPro1Image from '../../../public/products/industrial2.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "Industrial",
    subtitle: "Sistema de pirólisis industrial para producción de biochar a gran escala",
    
    // Descripción
    description: "Sistemas vanguardistas de pirólisis continua, automatizables y adaptables a las necesidades de cada operación. Ideal para industrias forestales, de cemento o cualquiera que desee valorizar biomasas residuales. Respaldados por Ingenieros internacionales de ARTi y más de 200 estudios, las Unidades de Producción de Biochar (BPU) pueden procesar de 4 a 40 toneladas de biomasa diariamente, generando biochar, bioaceites, bioenergía (térmica o eléctrica) y créditos de carbono para monetizar la compensación de emisiones.",
    
    // Secciones adicionales
    operation: "Operación",
    operationText: "Las Unidades de producción de Biochar (BPU) Industriales vienen en un contenedor de 40 pies y ofrecen una automatización que permite operar el reactor desde un panel de control digital. La operación debe garantizar un suministro de biomasa continuo y la utilización de los productos dentro de la operación empresarial. El proceso puede monitorearse y controlarse remotamente desde un software especializado.",
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Solicitar cotización"
  },
  en: {
    // Main Titles
    title: "Industrial",
    subtitle: "Industrial pyrolysis system for large-scale biochar production",
    
    // Description
    description: "Cutting-edge continuous pyrolysis systems, automatable and adaptable to the needs of each operation. Ideal for forestry industries, cement plants, or any business looking to valorize residual biomass. Backed by international ARTi engineers and over 200 studies, Biochar Production Units (BPU) can process 4 to 40 tons of biomass daily, generating biochar, bio-oils, bioenergy (thermal or electrical), and carbon credits to monetize emission offsets.",
    
    // Additional sections
    operation: "Operation",
    operationText: "The Industrial Biochar Production Units (BPU) come in a 40-foot container and offer automation that allows operating the reactor from a digital control panel. The operation must ensure a continuous biomass supply and the utilization of products within the business operation. The process can be monitored and controlled remotely from specialized software.",
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Request quote"
  }
};

const Industrial = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
  // Estado para el carrusel de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [artisanProImage, artisanPro1Image];
  
  // Funciones para navegar entre imágenes
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  // Variantes para animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
    }
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
    <div className="flex flex-col w-full">
      {/* Encabezado principal */}
      <motion.div 
        className="w-full py-16 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 font-title tracking-tight text-green-700"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-body"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Información principal */}
      <motion.section 
        className="py-12 md:py-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="flex flex-col items-center gap-8">
            {/* Carrusel de imágenes */}
            <motion.div 
              className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto relative rounded-lg overflow-hidden border-4 border-yellow-800 shadow-lg"
              variants={fadeInLeft}
            >
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <Image 
                  src={images[currentImageIndex]} 
                  alt="Industrial - Sistema de pirólisis industrial"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover absolute inset-0"
                  priority
                />
                
                {/* Flechas de navegación */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Imagen anterior"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Siguiente imagen"
                >
                  <FaChevronRight size={20} />
                </button>
                
                {/* Indicadores de posición */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            {/* Contenido debajo de la imagen en layout horizontal */}
            <motion.div 
              className="w-full"
              variants={fadeInRight}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <motion.div className="w-full md:w-2/3" variants={fadeInUp}>
                  <motion.p 
                    className="text-lg text-gray-700 mb-8 font-body text-justify"
                    variants={fadeInUp}
                  >
                    {t.description}
                  </motion.p>
                </motion.div>
                <motion.div className="w-full md:w-1/3 flex flex-col justify-center" variants={fadeInUp}>
                  <motion.div 
                    className="flex flex-col sm:flex-row md:flex-col gap-4 justify-center items-center"
                    variants={fadeInUp}
                  >

                    <Link 
                      href={`/${pathname.includes('/en') ? 'en/contact' : 'es/contacto'}`}
                      className="w-full sm:w-auto md:w-full px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-title text-xl text-center"
                    >
                      {t.contactButton}
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Operación */}
      <motion.section 
        className="py-4 md:py-4" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center">
            {/* Operación */}
            <motion.div className="w-full max-w-3xl" variants={fadeInRight}>
              <motion.h2 
                className="text-5xl md:text-5xl lg:text-7xl font-bold text-green-700 mb-6 md:mb-8 font-title text-center"
                variants={fadeInUp}
              >
                {t.operation}
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.operationText}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Llamada a la acción */}
      <motion.section 
        className="py-24 md:py-32 relative text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 z-0 h-full">
          <Image 
            src={aliadoImage} 
            alt="Background" 
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8 font-title"
            variants={fadeInUp}
          >
            {isEnglish ? "Ready to scale up your biochar production?" : "¿Listo para escalar tu producción de biochar?"}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-10 font-body max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {isEnglish ? "Contact us today to learn more about the Industrial and how it can transform your operation." : "Contáctanos hoy para conocer más sobre el Industrial y cómo puede transformar tu operación."}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              href={`/${pathname.includes('/en') ? 'en/contact' : 'es/contacto'}`}
              className="px-10 py-5 bg-white font-body text-green-700 rounded-lg hover:bg-gray-100 transition-colors font-bold text-xl inline-block shadow-lg"
            >
              {t.contactButton}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Industrial;