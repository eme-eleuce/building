"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import combiImage from '../../../public/products/combi.png';
import aliadoImage from '../../../public/photos/aliado.jpg';
import compositionImage from '../../../public/photos/pacchar-3.jpg';
import applicationImage from '../../../public/photos/pacchar-4.jpg';

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "COMBI",
    subtitle: "La combinación perfecta de biochar y compost bioactivo",
    
    // Descripción
    description: "COMBI es nuestra mezcla balanceada de biochar y compost bioactivo, diseñada para proporcionar una solución completa para la salud del suelo. Esta combinación potencia los beneficios de ambos componentes: la estructura porosa y estable del biochar con la riqueza nutricional y biológica del compost. El resultado es COMBI, un producto superior que mejora rápidamente la calidad del suelo aportando materia orgánica, nutrientes y microorganismos para promover un crecimiento vegetal más vigoroso y saludable.",
    benefits: "Beneficios del suelo:\n Efectos positivos a corto y largo plazo.\n Producto de origen natural.\n Aporte de minerales, materia orgánica y microorganismos.\n Compatible con todos los fertilizantes.",
    
    // Secciones adicionales
    composition: "Composición",
    compositionText: "COMBI está compuesto por una mezcla cuidadosamente equilibrada de biochar de alta calidad, compost bioactivo de porcinaza, mezclas de minerales y microorganismos benéficos. Resultando en un abono natural y completo para potenciar la salud de sus suelos y cultivos.",
    
    application: "Aplicación",
    applicationText: "Pacchar COMBI es adaptable a diversos sistemas agrícolas, su dosis y método de aplicación dependerán de las condiciones específicas de cada finca. Contáctenos para aprender más y sacar el máximo beneficio.",
    
    specifications: "Especificaciones técnicas",
    specificationsItems: [
      "Contenido de carbono: >40%",
      "Materia orgánica: >60%",
      "pH: 7.0-7.8",
      "Capacidad de retención de agua: Muy alta",
      "Diversidad microbiana: Alta",
      "Nutrientes disponibles: Medio-alto"
    ],
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Contáctanos"
  },
  en: {
    // Main Titles
    title: "COMBI",
    subtitle: "The perfect combination of biochar and bioactive compost",
    
    // Description
    description: "COMBI is our balanced blend of biochar and bioactive compost, crafted to deliver a complete solution for soil health. By combining the porous and stable structure of biochar with the rich nutritional and microbial content of compost, COMBI enhances soil quality rapidly by adding organic matter, essential nutrients, and beneficial microorganisms to promote healthier, more vigorous plant growth.",
    benefits: "Soil Benefits:\n Positive effects in the short and long term.\n Product of natural origin.\n Provides minerals, organic matter, and microorganisms.\n Compatible with all fertilizers.",
    
    // Additional sections
    composition: "Composition",
    compositionText: "COMBI is composed of a carefully balanced blend of high-quality biochar, bioactive compost made from pig manure, mineral mixes, and beneficial microorganisms. The result is a natural and complete soil amendment designed to enhance the health of your soil and crops.",
    
    application: "Application",
    applicationText: "Pacchar COMBI is adaptable to a wide range of agricultural systems, with its dosage and application method depending on the specific conditions of each farm. Contact us to learn more and get the most out of its benefits.",
    
    specifications: "Technical specifications",
    specificationsItems: [
      "Carbon content: >40%",
      "Organic matter: >60%",
      "pH: 7.0-7.8",
      "Water retention capacity: Very high",
      "Microbial diversity: High",
      "Available nutrients: Medium-high"
    ],
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Contact us"
  }
};

const Combi = () => {
  // Determinar el idioma actual
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en/');
  const t = isEnglish ? texts.en : texts.es;
  
  // Estado para el carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Funciones para navegar entre slides
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : 1);
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
              variants={fadeInUp}
            >
              <Image
                src={combiImage}
                alt="COMBI - Biochar and Compost Mix"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              variants={fadeInUp}
            >
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.description}
              </motion.p>
              <motion.div
                className="mb-8"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 font-body">
                  {isEnglish ? "Soil Benefits:" : "Beneficios del suelo:"}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {isEnglish ? (
                    <>
                      <li className="text-lg text-gray-700 font-body font-bold">Positive effects in the short and long term.</li>
                      <li className="text-lg text-gray-700 font-body font-bold">Product of natural origin.</li>
                      <li className="text-lg text-gray-700 font-body font-bold">Provides minerals, organic matter, and microorganisms.</li>
                      <li className="text-lg text-gray-700 font-body font-bold">Compatible with all fertilizers.</li>
                    </>
                  ) : (
                    <>
                      <li className="text-lg text-gray-700 font-body font-bold">Efectos positivos a corto y largo plazo.</li>
                      <li className="text-lg text-gray-700 font-body font-bold">Producto de origen natural.</li>
                      <li className="text-lg text-gray-700 font-body font-bold">Aporte de minerales, materia orgánica y microorganismos.</li>
                      <li className="text-lg text-gray-700 font-body font-bold">Compatible con todos los fertilizantes.</li>
                    </>
                  )}
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

      {/* Composición y Aplicación - Carrusel */}
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
                    variants={fadeInUp}
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
                    variants={fadeInUp}
                  >
                    <Image
                      src={compositionImage}
                      alt="Composición de COMBI"
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
                    variants={fadeInUp}
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
                    variants={fadeInUp}
                  >
                    <Image
                      src={applicationImage}
                      alt="Aplicación de COMBI"
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
            {isEnglish ? "Contact us today to learn more about COMBI and how it can benefit your soil." : "Contáctanos hoy para conocer más sobre COMBI y cómo puede beneficiar tu suelo."}
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

export default Combi;
