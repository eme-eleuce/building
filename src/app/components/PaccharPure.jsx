"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import pureImage from '../../../public/products/pure.png';
import aliadoImage from '../../../public/photos/aliado.jpg';
import compositionImage from '../../../public/photos/mano.jpg';
import applicationImage from '../../../public/photos/pacchar-2.jpg';

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "Pacchar Biochar",
    subtitle: "Potencie la salud de sus suelos naturalmente",
    
    // Descripción
    description: "Pacchar Biochar es una poderosa enmienda natural para suelos agrícolas. Su alto contenido de carbono y estructura porosa mejoran las propiedades físicas, químicas y biológicas del suelo, que a su vez mejoran el crecimiento, salud y producción de los cultivos. El incremento del carbono orgánico favorece directamente al incremento de la materia orgánica y a la salud general del suelo; al almacenar carbono en el suelo con biochar, usted está contribuyendo también a reducir la emisiones y mitigar el cambio climático.",
    benefits: "Beneficios del suelo:\n Incrementa la capacidad de retención de agua y nutrientes.\n Sus poros favorecen la aireación y la actividad microbiana benéfica.\n Almacena carbono orgánico funcional.\n Puede reducir las necesidades de fertilización.",
    
    // Secciones adicionales
    composition: "Composición",
    compositionText: "Pacchar Biochar está elaborado con 100% biomasa sostenible de bambú gigante seleccionada cuidadosamente y con un riguroso control en la pirólisis obtenemos un biochar de alta calidad con más 70% Carbono Orgánico.",
    
    application: "Aplicación",
    applicationText: "Pacchar biochar es adaptable a diversos sistemas agrícolas, su dosis y método de aplicación dependerán de las condiciones específicas de cada finca. Contáctenos para aprender más y sacar el máximo beneficio.",
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Contáctanos"
  },
  en: {
    // Main Titles
    title: "Pacchar Biochar",
    subtitle: "Naturally boost your soil's health",
    
    // Description
    description: "Pacchar Biochar is a powerful natural soil amendment for agricultural use. Its high carbon content and porous structure enhance the physical, chemical, and biological properties of the soil, leading to improved crop growth, health, and productivity. By increasing organic carbon, biochar directly boosts soil organic matter and overall soil health. Storing carbon in the soil with biochar also helps reduce greenhouse gas emissions, making it a valuable tool in the fight against climate change.",
    benefits: "Soil Benefits:\n Increases water and nutrient retention capacity.\n Its pores promote aeration and beneficial microbial activity.\n Stores functional organic carbon.\n Can reduce fertilization requirements.",
    
    // Additional sections
    composition: "Composition",
    compositionText: "Pacchar Biochar is made from 100% sustainable giant bamboo biomass carefully selected, and with rigorous control in the pyrolysis process, we obtain a high-quality biochar with more than 70% Organic Carbon.",
    
    application: "Application",
    applicationText: "Pacchar biochar is adaptable to various agricultural systems, its dosage and application method will depend on the specific conditions of each farm. Contact us to learn more and get the maximum benefit.",
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Contact us"
  }
};

const PaccharPure = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
  // Estado para controlar el slide actual (0: Composición, 1: Aplicación)
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Función para navegar entre slides
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0);
  };
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0);
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
          <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 h-[300px] md:h-[500px] relative rounded-lg overflow-hidden border-4 border-yellow-800 p-2"
              variants={fadeInLeft}
            >
              <Image
                src={pureImage}
                alt="Pacchar Pure Biochar"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              variants={fadeInRight}
            >
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.description}
              </motion.p>
              <motion.div 
                className="text-lg font-semibold text-gray-800 mb-8 font-body"
                variants={fadeInUp}
              >
                <p className="mb-2">{t.benefits.split('\n')[0]}</p>
                <ul className="list-disc pl-6 space-y-1">
                  {t.benefits.split('\n').slice(1).map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit.trim()}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                  {t.dataSheetButton}
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Carrusel de Composición y Aplicación */}
      <motion.section 
        className="py-12 md:py-16 relative" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
          {/* Título del carrusel con flechas de navegación en móvil */}
          <div className="flex items-center justify-between md:hidden mb-8">
            <motion.h2 
              className="text-3xl font-bold text-green-700 font-title"
              variants={fadeInUp}
            >
              {currentSlide === 0 ? t.composition : t.application}
            </motion.h2>
            <div className="flex items-center space-x-3">
              <button 
                onClick={prevSlide}
                className="text-green-700 hover:text-green-800 p-2 transition-all duration-300"
                aria-label="Slide anterior"
              >
                <FaChevronLeft size={18} />
              </button>
              <button 
                onClick={nextSlide}
                className="text-green-700 hover:text-green-800 p-2 transition-all duration-300"
                aria-label="Siguiente slide"
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
          {/* Contenedor del carrusel */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1: Composición */}
              <div className="w-full flex-shrink-0 px-4 md:px-0">
                <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Texto de Composición */}
                  <motion.div 
                    className="w-full md:w-1/2"
                    variants={fadeInLeft}
                  >
                    <motion.h2 
                      className="text-4xl font-bold text-green-700 mb-6 font-title hidden md:block"
                      variants={fadeInUp}
                    >
                      {t.composition}
                    </motion.h2>
                    <motion.p 
                      className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                      variants={fadeInUp}
                    >
                      {t.compositionText}
                    </motion.p>
                  </motion.div>
                  
                  {/* Imagen de Composición */}
                  <motion.div 
                    className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg"
                    variants={fadeInRight}
                  >
                    <Image
                      src={compositionImage}
                      alt="Composición de Pacchar Biochar"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Slide 2: Aplicación */}
              <div className="w-full flex-shrink-0 px-4 md:px-0">
                <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Texto de Aplicación */}
                  <motion.div 
                    className="w-full md:w-1/2"
                    variants={fadeInLeft}
                  >
                    <motion.h2 
                      className="text-4xl font-bold text-green-700 mb-6 font-title hidden md:block"
                      variants={fadeInUp}
                    >
                      {t.application}
                    </motion.h2>
                    <motion.p 
                      className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                      variants={fadeInUp}
                    >
                      {t.applicationText}
                    </motion.p>
                  </motion.div>
                  
                  {/* Imagen de Aplicación */}
                  <motion.div 
                    className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg"
                    variants={fadeInRight}
                  >
                    <Image
                      src={applicationImage}
                      alt="Aplicación de Pacchar Biochar"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Botones de navegación (solo en escritorio) */}
          <button 
            onClick={prevSlide}
            className="hidden md:block absolute md:-left-10 md:top-[45%] transform -translate-y-1/2 text-green-700 hover:text-green-800 md:p-3 z-10 transition-all duration-300"
            aria-label="Slide anterior"
          >
            <FaChevronLeft className="md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="hidden md:block absolute md:-right-10 md:top-[45%] transform -translate-y-1/2 text-green-700 hover:text-green-800 md:p-3 z-10 transition-all duration-300"
            aria-label="Siguiente slide"
          >
            <FaChevronRight className="md:w-6 md:h-6" />
          </button>

          {/* Indicadores de slide */}
          <div className="flex justify-center mt-6 space-x-2">
            <button 
              onClick={() => setCurrentSlide(0)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-green-700 w-6' : 'bg-gray-300'}`}
              aria-label="Ir al slide 1"
            />
            <button 
              onClick={() => setCurrentSlide(1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-green-700 w-6' : 'bg-gray-300'}`}
              aria-label="Ir al slide 2"
            />
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
        <div className="absolute inset-0 z-0 h-full w-full">
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
            {isEnglish ? "Ready to improve your soil?" : "¿Listo para mejorar tu suelo?"}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-10 font-body max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            {isEnglish ? "Contact us today to learn more about Pacchar Biochar and how it can benefit your soil." : "Contáctanos hoy para conocer más sobre Pacchar Biochar y cómo puede beneficiar tu suelo."}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              href={`/${isEnglish ? 'en/contact' : 'es/contacto'}`}
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

export default PaccharPure;
