"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import pureImage from '../../../public/products/pure.png';

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "Pacchar Pure (Biochar)",
    subtitle: "Biochar de alta calidad para mejorar la fertilidad del suelo",
    
    // Descripción
    description: "El bio carbón vegetal, también conocido como biochar, es un producto natural orgánico obtenido a través de la pirólisis. Este proceso transforma la biomasa en carbón, que actúa como enmienda y mejorador del suelo. La aplicación de bio carbón en el suelo ofrece numerosos beneficios. Estudios han demostrado que incrementa significativamente el contenido de materia orgánica y la fertilidad del suelo. Además, mejora la textura, porosidad, y estructura del mismo, creando un ambiente más saludable para los cultivos.",
    benefits: "Beneficios: Mejora la retención de agua y nutrientes, aumenta la actividad microbiana, secuestra carbono de forma estable, reduce la necesidad de fertilizantes químicos.",
    
    // Secciones adicionales
    composition: "Composición",
    compositionText: "Pacchar Pure está compuesto 100% de biochar de alta calidad, producido mediante pirólisis controlada de biomasa vegetal seleccionada. El proceso de producción garantiza un producto con alta porosidad y capacidad de intercambio catiónico.",
    
    application: "Aplicación",
    applicationText: "Se recomienda aplicar Pacchar Pure mezclándolo con el suelo en una proporción de 5-10% por volumen. Para mejores resultados, puede pre-cargar el biochar con compost o fertilizantes líquidos antes de su aplicación.",
    
    specifications: "Especificaciones técnicas",
    specificationsItems: [
      "Contenido de carbono: >70%",
      "pH: 7.5-8.5",
      "Capacidad de retención de agua: Alta",
      "Capacidad de intercambio catiónico: 30-40 cmol/kg",
      "Tamaño de partícula: 1-5mm"
    ],
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Contáctanos"
  },
  en: {
    // Main Titles
    title: "Pacchar Pure (Biochar)",
    subtitle: "High-quality biochar to improve soil fertility",
    
    // Description
    description: "Bio vegetable charcoal, also known as biochar, is an organic natural product obtained through pyrolysis. This process transforms biomass into carbon, which acts as a soil amendment and improver. The application of biochar in soil offers numerous benefits. Studies have shown that it significantly increases the organic matter content and soil fertility. Additionally, it improves the texture, porosity, and structure of the soil, creating a healthier environment for crops.",
    benefits: "Benefits: Improves water and nutrient retention, increases microbial activity, sequesters carbon stably, reduces the need for chemical fertilizers.",
    
    // Additional sections
    composition: "Composition",
    compositionText: "Pacchar Pure is composed of 100% high-quality biochar, produced through controlled pyrolysis of selected plant biomass. The production process ensures a product with high porosity and cation exchange capacity.",
    
    application: "Application",
    applicationText: "It is recommended to apply Pacchar Pure by mixing it with the soil in a proportion of 5-10% by volume. For best results, you can pre-load the biochar with compost or liquid fertilizers before application.",
    
    specifications: "Technical specifications",
    specificationsItems: [
      "Carbon content: >70%",
      "pH: 7.5-8.5",
      "Water retention capacity: High",
      "Cation exchange capacity: 30-40 cmol/kg",
      "Particle size: 1-5mm"
    ],
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Contact us"
  }
};

const PaccharPure = () => {
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

export default PaccharPure;
