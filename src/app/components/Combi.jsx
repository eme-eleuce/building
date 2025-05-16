"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import combiImage from '../../../public/products/combi.png';
import aliadoImage from '../../../public/photos/aliado.jpg';

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "COMBI",
    subtitle: "La combinación perfecta de biochar y compost activo",
    
    // Descripción
    description: "COMBI es nuestra mezcla especial de biochar y compost activo, diseñada para proporcionar una solución completa para la salud del suelo. Esta combinación potencia los beneficios de ambos componentes: la estructura porosa y estable del biochar con la riqueza nutricional y biológica del compost. El resultado es un producto superior que mejora rápidamente la calidad del suelo y promueve un crecimiento vegetal más vigoroso y saludable.",
    benefits: "Beneficios: Efecto inmediato y a largo plazo, mayor diversidad microbiana, mejor estructura del suelo, mayor capacidad de retención de nutrientes, reducción de lixiviación.",
    
    // Secciones adicionales
    composition: "Composición",
    compositionText: "COMBI está compuesto por una mezcla cuidadosamente equilibrada de biochar de alta calidad (60%) y compost activo (40%). Esta proporción ha sido desarrollada tras extensas pruebas para maximizar los beneficios de ambos componentes, creando un producto sinérgico superior a la suma de sus partes.",
    
    application: "Aplicación",
    applicationText: "Se recomienda aplicar COMBI mezclándolo con el suelo en una proporción de 10-20% por volumen. Es ideal para la preparación de nuevos jardines, macetas, o para la recuperación de suelos degradados. Su efecto es inmediato y continúa mejorando con el tiempo.",
    
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
    subtitle: "The perfect combination of biochar and active compost",
    
    // Description
    description: "COMBI is our special blend of biochar and active compost, designed to provide a complete solution for soil health. This combination enhances the benefits of both components: the porous and stable structure of biochar with the nutritional and biological richness of compost. The result is a superior product that quickly improves soil quality and promotes more vigorous and healthy plant growth.",
    benefits: "Benefits: Immediate and long-term effect, greater microbial diversity, better soil structure, increased nutrient retention capacity, reduced leaching.",
    
    // Additional sections
    composition: "Composition",
    compositionText: "COMBI is composed of a carefully balanced mixture of high-quality biochar (60%) and active compost (40%). This proportion has been developed after extensive testing to maximize the benefits of both components, creating a synergistic product superior to the sum of its parts.",
    
    application: "Application",
    applicationText: "It is recommended to apply COMBI by mixing it with the soil in a proportion of 10-20% by volume. It is ideal for preparing new gardens, pots, or for the recovery of degraded soils. Its effect is immediate and continues to improve over time.",
    
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
            <motion.div variants={fadeInUp}>
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
            <motion.div variants={fadeInUp}>
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
