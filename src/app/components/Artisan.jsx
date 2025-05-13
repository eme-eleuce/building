"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import aliadoImage from '../../../public/photos/aliado.jpg';

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "Artisan Pro",
    subtitle: "Sistema de pirólisis compacto para producción de biochar a pequeña escala",
    
    // Descripción
    description: "El Artisan Pro es un sistema de pirólisis compacto diseñado para la producción de biochar de alta calidad a pequeña escala. Ideal para agricultores, investigadores y emprendedores que buscan incorporar el biochar en sus operaciones. Este sistema utiliza nuestra tecnología patentada de pirólisis controlada para transformar residuos agrícolas y forestales en biochar de manera eficiente y sostenible.",
    benefits: "Beneficios: Fácil de operar, tamaño compacto, alta eficiencia energética, producción consistente de biochar de calidad, captura de gases para uso como combustible.",
    
    // Secciones adicionales
    specifications: "Especificaciones técnicas",
    specificationsText: "El Artisan Pro está diseñado para ofrecer un rendimiento óptimo con un tamaño compacto. Su diseño modular permite una fácil instalación y mantenimiento, mientras que sus controles precisos aseguran una producción consistente de biochar.",
    
    operation: "Operación",
    operationText: "El sistema opera mediante un proceso de pirólisis controlada a temperaturas entre 350°C y 700°C. El usuario puede ajustar los parámetros para optimizar la producción según el tipo de biomasa utilizada y las características deseadas del biochar resultante.",
    
    capacity: "Capacidad y rendimiento",
    capacityItems: [
      "Capacidad de procesamiento: 50-100 kg de biomasa por ciclo",
      "Rendimiento de biochar: 20-30% del peso de la biomasa inicial",
      "Tiempo de ciclo: 4-6 horas",
      "Temperatura máxima: 700°C",
      "Consumo energético: Bajo (utiliza parte de los gases generados)"
    ],
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Solicitar cotización"
  },
  en: {
    // Main Titles
    title: "Artisan Pro",
    subtitle: "Compact pyrolysis system for small-scale biochar production",
    
    // Description
    description: "The Artisan Pro is a compact pyrolysis system designed for high-quality biochar production on a small scale. Ideal for farmers, researchers, and entrepreneurs looking to incorporate biochar into their operations. This system uses our patented controlled pyrolysis technology to efficiently and sustainably transform agricultural and forestry waste into biochar.",
    benefits: "Benefits: Easy to operate, compact size, high energy efficiency, consistent quality biochar production, gas capture for use as fuel.",
    
    // Additional sections
    specifications: "Technical specifications",
    specificationsText: "The Artisan Pro is designed to deliver optimal performance with a compact footprint. Its modular design allows for easy installation and maintenance, while its precise controls ensure consistent biochar production.",
    
    operation: "Operation",
    operationText: "The system operates through a controlled pyrolysis process at temperatures between 350°C and 700°C. The user can adjust parameters to optimize production according to the type of biomass used and the desired characteristics of the resulting biochar.",
    
    capacity: "Capacity and yield",
    capacityItems: [
      "Processing capacity: 50-100 kg of biomass per cycle",
      "Biochar yield: 20-30% of initial biomass weight",
      "Cycle time: 4-6 hours",
      "Maximum temperature: 700°C",
      "Energy consumption: Low (uses part of the generated gases)"
    ],
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Request quote"
  }
};

const Artisan = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
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
              className="w-full md:w-1/2 h-[300px] md:h-[500px] relative rounded-lg overflow-hidden border-4 border-yellow-800 p-2 bg-gray-300 flex items-center justify-center"
              variants={fadeInLeft}
            >
              <p className="text-xl font-semibold text-gray-600">Imagen de Artisan Pro</p>
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
              <motion.p 
                className="text-lg font-semibold text-gray-800 mb-8 font-body"
                variants={fadeInUp}
              >
                {t.benefits}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
              >
                <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                  {t.dataSheetButton}
                </button>
                <Link 
                  href={`/${pathname.includes('/en') ? 'en/contact' : 'es/contacto'}`}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  {t.contactButton}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Especificaciones y Operación */}
      <motion.section 
        className="py-12 md:py-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Especificaciones */}
            <motion.div variants={fadeInRight}>
              <motion.h2 
                className="text-3xl font-bold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.specifications}
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.specificationsText}
              </motion.p>
            </motion.div>
            
            {/* Operación */}
            <motion.div variants={fadeInRight}>
              <motion.h2 
                className="text-3xl font-bold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.operation}
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.operationText}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Capacidad y rendimiento */}
      <motion.section 
        className="pt-4 pb-12 md:pt-6 md:pb-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl font-bold text-green-700 mb-6 font-title text-center"
            variants={fadeInUp}
          >
            {t.capacity}
          </motion.h2>
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-md"
            variants={fadeInUp}
          >
            <ul className="space-y-3">
              {t.capacityItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-lg text-gray-700 font-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
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
              className="px-10 py-5 bg-white text-green-700 rounded-lg hover:bg-gray-100 transition-colors font-bold text-xl inline-block shadow-lg"
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