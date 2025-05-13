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
    title: "Industrial",
    subtitle: "Sistema de pirólisis industrial para producción de biochar a gran escala",
    
    // Descripción
    description: "El Industrial es un sistema de pirólisis avanzado diseñado para la producción de biochar de alta calidad a escala industrial. Ideal para empresas agrícolas, plantas de tratamiento de residuos y operaciones forestales que buscan una solución sostenible y rentable para el manejo de grandes volúmenes de biomasa. Nuestro sistema utiliza tecnología patentada de pirólisis controlada para maximizar la eficiencia y la calidad del biochar producido.",
    benefits: "Beneficios: Alta capacidad de procesamiento, operación continua, recuperación de energía, control automatizado, bajo mantenimiento, producción consistente de biochar de calidad.",
    
    // Secciones adicionales
    specifications: "Especificaciones técnicas",
    specificationsText: "El Industrial está construido con materiales de alta calidad y diseñado para operar continuamente en entornos industriales exigentes. Su sistema de control automatizado permite una operación precisa y consistente, mientras que su diseño modular facilita el mantenimiento y las actualizaciones.",
    
    operation: "Operación",
    operationText: "El sistema opera mediante un proceso de pirólisis continua a temperaturas controladas entre 400°C y 800°C. El sistema automatizado ajusta los parámetros en tiempo real para optimizar la producción según el tipo de biomasa utilizada y las características deseadas del biochar resultante. Incluye recuperación de energía de los gases producidos durante el proceso.",
    
    capacity: "Capacidad y rendimiento",
    capacityItems: [
      "Capacidad de procesamiento: 1-5 toneladas de biomasa por día",
      "Rendimiento de biochar: 25-35% del peso de la biomasa inicial",
      "Operación: Continua (24/7)",
      "Temperatura máxima: 800°C",
      "Recuperación de energía: Sí (calor y electricidad)",
      "Control: Sistema automatizado con monitoreo remoto"
    ],
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Solicitar cotización"
  },
  en: {
    // Main Titles
    title: "Industrial",
    subtitle: "Industrial pyrolysis system for large-scale biochar production",
    
    // Description
    description: "The Industrial is an advanced pyrolysis system designed for high-quality biochar production at an industrial scale. Ideal for agricultural companies, waste treatment plants, and forestry operations looking for a sustainable and cost-effective solution for managing large volumes of biomass. Our system uses patented controlled pyrolysis technology to maximize efficiency and quality of the produced biochar.",
    benefits: "Benefits: High processing capacity, continuous operation, energy recovery, automated control, low maintenance, consistent quality biochar production.",
    
    // Additional sections
    specifications: "Technical specifications",
    specificationsText: "The Industrial is built with high-quality materials and designed to operate continuously in demanding industrial environments. Its automated control system allows for precise and consistent operation, while its modular design facilitates maintenance and upgrades.",
    
    operation: "Operation",
    operationText: "The system operates through a continuous pyrolysis process at controlled temperatures between 400°C and 800°C. The automated system adjusts parameters in real-time to optimize production according to the type of biomass used and the desired characteristics of the resulting biochar. It includes energy recovery from gases produced during the process.",
    
    capacity: "Capacity and yield",
    capacityItems: [
      "Processing capacity: 1-5 tons of biomass per day",
      "Biochar yield: 25-35% of initial biomass weight",
      "Operation: Continuous (24/7)",
      "Maximum temperature: 800°C",
      "Energy recovery: Yes (heat and electricity)",
      "Control: Automated system with remote monitoring"
    ],
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Request quote"
  }
};

const Industrial = () => {
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
              <p className="text-xl font-semibold text-gray-600">Imagen de Industrial</p>
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

export default Industrial;