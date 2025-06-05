"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import aliadoImage from '../../../public/photos/aliado.jpg';
import artisanProImage from '../../../public/products/artisan-pro.jpg';
import artisanPro1Image from '../../../public/products/artisan-pro1.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "Artisan Pro",
    subtitle: "Sistema de pirólisis compacto para producción de biochar a pequeña escala",
    
    // Descripción
    description: "El Artisan Pro es un sistema de pirólisis compacto y transportable, diseñado para la producción de biochar por lotes a escala artesanal. Ideal para agrupaciones de pequeños y medianos agricultores, investigadores y emprendedores que buscan incorporar los beneficios del biochar en sus operaciones agropecuarias. Este sistema de pirólisis es simple, eficiente y certificable en cada granja. Adoptarlo le permite ingresar a la Red de Agricultores de Carbono, donde se comparten asesorías, entrenamientos y otros beneficios por almacenar carbono en sus suelos y transicionar hacia agricultura climáticamente inteligente.",
    
    // Secciones adicionales
    operation: "Operación",
    operationText: "El sistema ARTISAN PRO tiene capacidad de procesar 1.5 m3 de biomasa en aproximadamente 4 horas con una persona, generando alrededor de 0.75 m3 de biochar. Se brindan capacitaciones complementarias para implementar la producción artesanal de biochar en las granjas, desde la selección y pretratamiento de la biomasa, técnicas de la pirólisis y la aplicación del biochar en los cultivos.",
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Solicitar cotización"
  },
  en: {
    // Main Titles
    title: "Artisan Pro",
    subtitle: "Compact pyrolysis system for small-scale biochar production",
    
    // Description
    description: "The Artisan Pro is a compact and transportable pyrolysis system, designed for batch biochar production at an artisanal scale. Ideal for groups of small and medium farmers, researchers, and entrepreneurs looking to incorporate the benefits of biochar into their agricultural operations. This pyrolysis system is simple, efficient, and certifiable on each farm. Adopting it allows you to join the Carbon Farmers Network, where advice, training, and other benefits are shared for storing carbon in your soils and transitioning to climate-smart agriculture.",
    
    // Additional sections
    operation: "Operation",
    operationText: "The ARTISAN PRO system has the capacity to process 1.5 m3 of biomass in approximately 4 hours with one person, generating around 0.75 m3 of biochar. Complementary training is provided to implement artisanal biochar production on farms, from biomass selection and pretreatment, to pyrolysis techniques and biochar application in crops.",
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Request quote"
  }
};

const Artisan = () => {
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
            {/* Imagen más ancha y horizontal */}
            <motion.div 
              className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto relative rounded-lg overflow-hidden border-4 border-yellow-800 shadow-lg"
              variants={fadeInLeft}
            >
              {/* Carrusel de imágenes */}
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <Image 
                  src={images[currentImageIndex]} 
                  alt="Artisan Pro - Sistema de pirólisis compacto"
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
            <motion.div variants={fadeInRight} className="max-w-3xl">
              <motion.h2 
                className="text-5xl md:text-5xl lg:text-7xl font-bold text-green-700 mb-6 md:mb-8 font-title text-center"
                variants={fadeInUp}
              >
                {t.operation}
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 mb-8 font-body text-justify"
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
            {isEnglish ? "Ready to transform your waste into a valuable resource?" : "¿Listo para transformar tus residuos en un recurso valioso?"}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-10 font-body max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {isEnglish ? "Contact us today to learn more about the Artisan Pro and how it can benefit your operation." : "Contáctanos hoy para conocer más sobre el Artisan Pro y cómo puede beneficiar tu operación."}
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

export default Artisan;