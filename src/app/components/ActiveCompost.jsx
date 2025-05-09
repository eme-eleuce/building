"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import pureImage from '../../../public/products/pure.png'; // Usando la imagen de Pure como placeholder

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "Active Compost",
    subtitle: "Compost de alta calidad rico en microorganismos beneficiosos",
    
    // Descripción
    description: "Nuestro Active Compost es un compost de alta calidad, rico en materia orgánica y microorganismos beneficiosos. Producido mediante un proceso de compostaje controlado, este producto aporta nutrientes esenciales al suelo de forma inmediata. El compost activo mejora la estructura del suelo, aumenta su capacidad de retención de agua y promueve un ecosistema del suelo saludable y equilibrado.",
    benefits: "Beneficios: Aporte inmediato de nutrientes, mejora de la estructura del suelo, aumento de la biodiversidad, reducción de enfermedades de las plantas, promoción de crecimiento saludable.",
    
    // Secciones adicionales
    composition: "Composición",
    compositionText: "Active Compost está elaborado a partir de residuos vegetales seleccionados, procesados mediante un sistema de compostaje aeróbico controlado. El producto final contiene una rica diversidad de microorganismos beneficiosos, incluyendo bacterias, hongos y actinomicetos que contribuyen a la salud del suelo.",
    
    application: "Aplicación",
    applicationText: "Se recomienda aplicar Active Compost mezclándolo con el suelo en una proporción de 20-30% por volumen para nuevas plantaciones. También puede utilizarse como cobertura superficial (mulch) en una capa de 2-3 cm. Es ideal para todo tipo de plantas, especialmente aquellas con altos requerimientos nutricionales.",
    
    specifications: "Especificaciones técnicas",
    specificationsItems: [
      "Materia orgánica: >70%",
      "pH: 6.5-7.5",
      "Relación C/N: 15-20",
      "Humedad: 40-50%",
      "Densidad aparente: 0.4-0.6 g/cm³",
      "Conductividad eléctrica: 1-3 mS/cm"
    ],
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Contáctanos"
  },
  en: {
    // Main Titles
    title: "Active Compost",
    subtitle: "High-quality compost rich in beneficial microorganisms",
    
    // Description
    description: "Our Active Compost is a high-quality compost, rich in organic matter and beneficial microorganisms. Produced through a controlled composting process, this product provides essential nutrients to the soil immediately. Active compost improves soil structure, increases its water retention capacity, and promotes a healthy and balanced soil ecosystem.",
    benefits: "Benefits: Immediate nutrient supply, improved soil structure, increased biodiversity, reduced plant diseases, promotion of healthy growth.",
    
    // Additional sections
    composition: "Composition",
    compositionText: "Active Compost is made from selected plant residues, processed through a controlled aerobic composting system. The final product contains a rich diversity of beneficial microorganisms, including bacteria, fungi, and actinomycetes that contribute to soil health.",
    
    application: "Application",
    applicationText: "It is recommended to apply Active Compost by mixing it with the soil in a proportion of 20-30% by volume for new plantings. It can also be used as surface coverage (mulch) in a 2-3 cm layer. It is ideal for all types of plants, especially those with high nutritional requirements.",
    
    specifications: "Technical specifications",
    specificationsItems: [
      "Organic matter: >70%",
      "pH: 6.5-7.5",
      "C/N ratio: 15-20",
      "Moisture: 40-50%",
      "Bulk density: 0.4-0.6 g/cm³",
      "Electrical conductivity: 1-3 mS/cm"
    ],
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Contact us"
  }
};

const ActiveCompost = () => {
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
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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
              className="w-full md:w-1/2 h-[300px] md:h-[500px] relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
              variants={fadeInLeft}
            >
              {/* Usando la imagen de Pure como placeholder para Active Compost */}
              <Image
                src={pureImage}
                alt="Active Compost"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain opacity-70"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <p className="text-lg font-medium bg-white/80 px-4 py-2 rounded">Active Compost</p>
              </div>
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Composición y Aplicación */}
      <motion.section 
        className="py-12 md:py-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Composición */}
            <motion.div variants={fadeInRight}>
              <motion.h2 
                className="text-3xl font-bold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.composition}
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.compositionText}
              </motion.p>
            </motion.div>
            
            {/* Aplicación */}
            <motion.div variants={fadeInRight}>
              <motion.h2 
                className="text-3xl font-bold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.application}
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.applicationText}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Especificaciones técnicas */}
      <motion.section 
        className="pt-4 pb-12 md:pt-6 md:pb-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl font-bold text-green-700 mb-8 font-title text-center"
            variants={fadeInUp}
          >
            {t.specifications}
          </motion.h2>
          <motion.div 
            className="bg-gray-50 rounded-xl p-8 shadow-sm"
            variants={fadeInUp}
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.specificationsItems.map((item, index) => (
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
        className="py-16 md:py-20 bg-green-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold mb-8 font-title"
            variants={fadeInUp}
          >
            {isEnglish ? "Ready to improve your soil?" : "¿Listo para mejorar tu suelo?"}
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link 
              href={`/${isEnglish ? 'en/contact' : 'es/contacto'}`}
              className="inline-block bg-white text-green-700 font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:bg-gray-100 hover:scale-105 font-body"
            >
              {t.contactButton}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ActiveCompost;
