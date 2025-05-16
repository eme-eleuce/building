"use client";

import React, { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import terraPretaImage from '../../../public/photos/petra.png';
import biocharHandImage from '../../../public/photos/mano.jpg';
import pyrolysisImage from '../../../public/photos/fuego.jpg';
import verdeImage from '../../../public/photos/verde.jpg';
import aliadoImage from '../../../public/photos/aliado.jpg';
import biocharGif from '../../../public/gif/muestra.gif';

// Textos para internacionalización
const texts = {
  es: {
    // Sección de Historia
    historyTitle: "Historia del Biochar",
    historyContent: "El biochar tiene raíces ancestrales en la terra preta, suelos fértiles creados por los aborígenes amazónicos hace más de mil años. Ellos mezclaban carbón vegetal con residuos orgánicos, mejorando la productividad agrícola y almacenando carbono de manera sostenible. Con ello inspiramos nuestras soluciones modernas de Biochar para regenerar los suelos, reducir emisiones y adaptar la agricultura al cambio climático.",
    historySubtitle: "Sabiduría Ancestral con tecnología moderna",
    historyExtra: "El biochar es la reinvención moderna de la terra preta, nuestras tecnologías vanguardistas de pirólisis pueden certificarse para generar adicionalmente certificados de captura de carbono.",
    
    // Sección de Qué es
    whatIsTitle: "¿Qué es el Biochar?",
    whatIsContent: "Es un tipo de carbón vegetal creado mediante PIRÓLISIS, que es la conversión termoquímica de biomasas (vegetales, maderas, estiércol, etc.) calentándose en ambientes con poco o sin oxígeno. A diferencia del carbón común, el biochar se usa para mejorar las propiedades físicas, químicas y biológicas de suelos agrícolas, como aditivo para cementos, sistemas de sanitización, entre otras aplicaciones.",
    whatIsSubtitle: "Estructura altamente porosa",
    whatIsExtra: "Con un sistema de micro y mesoporos que mejoran la retención de agua, aire y nutrientes en el suelo. Estos poros también favorecen la actividad microbiana, promoviendo la biodiversidad y movimiento de nutrientes en el suelo.",
    whatIsVideo: "/videos/biochar.mp4",
    
    // Sección de Cómo se hace
    howTitle: "¿Cómo se hace el Biochar?",
    howContent: "Mediante pirólisis, un proceso en el que la biomasa residual se calienta a temperaturas entre 400°C y 700°C en ausencia de oxígeno. Este proceso transforma la materia orgánica en Biochar (carbono estable), Bioaceites y energía térmica. En Pacchar utilizamos tecnologías artesanales e industriales de pirólisis diseñadas a la necesidad de cada cliente, para así maximizar la eficiencia y circularidad de cada proceso.",
    howSubtitle: "Proceso de producción sostenible",
    howExtra: "El biochar es una simple y poderosa estrategia de adaptación al cambio climático para la agricultura, pues utiliza residuos para convertirlos en un fertilizante además captura carbono. El modelo de economía circular Implica triple beneficio: Agricultores, Ambiente y Empresas Agroindustriales.",
    
    // Sección de Beneficios
    benefitsTitle: "¿Cómo te beneficia el Biochar?",
    benefitsContent: "Pacchar Biochar ofrece múltiples beneficios tanto para agricultores como para el medio ambiente:",
    benefitsList: [
      "Aprovechamiento de residuos con modelos de economía circular",
      "Mejora la retención de agua y nutrientes en el suelo",
      "Reduce la necesidad de fertilizantes y agroquímicos",
      "Aumenta la actividad microbiana y la salud general del suelo",
      "Incrementa el rendimiento y calidad de los cultivos",
      "Almacena carbono de forma estable por cientos de años, reduciendo la huella",
      "Mejora la eficiencia del compostaje"
    ],
    benefitsSubtitle: "Solución climática escalable",
    benefitsExtra: "Pacchar almacena carbono de manera estable en el suelo, evitando su liberación a la atmósfera. Su producción puede adaptarse a diversos sistemas agropecuarios o fuentes de biomasa, permitiendo ingresos adicionales por servicios ambientales. Además, al mejorar la salud del suelo y optimizar cultivos mejora la eficiencia económica y climática de las industrias agropecarias.",
    
    // Llamada a la acción
    ctaTitle: "¿Listo para transformar tu suelo?",
    ctaButton: "Contáctanos"
  },
  en: {
    // History Section
    historyTitle: "History of Biochar",
    historyContent: "Biochar has ancestral roots in terra preta, fertile soils created by Amazonian aborigines more than a thousand years ago. They mixed charcoal with organic residues, improving agricultural productivity and storing carbon sustainably. With this, we inspire our modern Biochar solutions to regenerate soils, reduce emissions, and adapt agriculture to climate change.",
    historySubtitle: "Ancient Wisdom with Modern Technology",
    historyExtra: "Biochar is the modern reinvention of terra preta. Our cutting-edge pyrolysis technologies can be certified to additionally generate carbon capture certificates.",
    
    // What Is Section
    whatIsTitle: "What is Biochar?",
    whatIsContent: "It is a type of charcoal created through PYROLYSIS, which is the thermochemical conversion of biomass (plants, wood, manure, etc.) heated in environments with little or no oxygen. Unlike common charcoal, biochar is used to improve the physical, chemical, and biological properties of agricultural soils, as an additive for cement, sanitation systems, among other applications.",
    whatIsSubtitle: "Highly porous structure",
    whatIsExtra: "With a system of micro and mesopores that improve the retention of water, air, and nutrients in the soil. These pores also favor microbial activity, promoting biodiversity and nutrient movement in the soil.",
    whatIsVideo: "/videos/biochar.mp4",
    
    // How It's Made Section
    howTitle: "How is Biochar Made?",
    howContent: "Through pyrolysis, a process in which residual biomass is heated to temperatures between 400°C and 700°C in the absence of oxygen. This process transforms organic matter into Biochar (stable carbon), Bio-oils, and thermal energy. At Pacchar, we use artisanal and industrial pyrolysis technologies designed to meet the needs of each client, to maximize the efficiency and circularity of each process.",
    howSubtitle: "Sustainable production process",
    howExtra: "Biochar is a simple and powerful climate change adaptation strategy for agriculture, as it uses waste to convert it into a fertilizer and also captures carbon. The circular economy model implies a triple benefit: Farmers, Environment, and Agro-industrial Companies.",
    
    // Benefits Section
    benefitsTitle: "How Does Biochar Benefit You?",
    benefitsContent: "Pacchar Biochar offers multiple benefits for both farmers and the environment:",
    benefitsList: [
      "Utilization of waste with circular economy models",
      "Improves water and nutrient retention in soil",
      "Reduces the need for fertilizers and agrochemicals",
      "Increases microbial activity and overall soil health",
      "Enhances crop yields and quality",
      "Stores carbon stably for hundreds of years, reducing footprint",
      "Improves composting efficiency"
    ],
    benefitsSubtitle: "Scalable climate solution",
    benefitsExtra: "Pacchar stores carbon stably in the soil, preventing its release into the atmosphere. Its production can be adapted to various agricultural systems or biomass sources, allowing additional income from environmental services. Additionally, by improving soil health and optimizing crops, it enhances the economic and climate efficiency of agricultural industries.",
    
    // Call to Action
    ctaTitle: "Ready to transform your soil?",
    ctaButton: "Contact Us"
  }
};

const Biochar = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
  // Variantes para animaciones (todas verticales para evitar problemas en móvil)
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  // Reemplazamos las animaciones horizontales por verticales con diferentes retrasos
  const fadeInLeft = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
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
      {/* Título principal creativo */}
      <motion.div 
        className="w-full py-16 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 font-title tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          > 
            <span className="inline-block text-green-600">Pacchar</span>
            <span className="inline-block mx-4 text-yellow-500">&</span>
            <span className="inline-block text-gray-800">Biochar</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-body "
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {isEnglish ? "Ancient wisdom reinvented with modern technology" : "Sabiduría ancestral reinventada con tecnología moderna"}
          </motion.p>
        </div>
      </motion.div>
      {/* Historia del Biochar */}
      <motion.section 
        className="py-12 md:py-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 md:order-1 flex flex-col"
              variants={fadeInLeft}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.historyTitle}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.historyContent}
              </motion.p>
              <motion.h3 
                className="text-2xl font-bold text-green-600 mb-4 font-title"
                variants={fadeInUp}
              >
                {t.historySubtitle}
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700 font-body mb-8 md:mb-0 text-justify"
                variants={fadeInUp}
              >
                {t.historyExtra}
              </motion.p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden md:order-2"
              variants={fadeInRight}
            >
              <Image
                src={terraPretaImage}
                alt="Terra Preta - Tierra negra amazónica"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Qué es el Biochar */}
      <motion.section 
        className="py-12 md:py-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Primera parte: Qué es el Biochar */}
          <motion.div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 mb-12">
            <motion.div 
              className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden"
              variants={fadeInLeft}
            >
              <Image
                src={biocharHandImage}
                alt="Biochar en mano"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              variants={fadeInRight}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.whatIsTitle}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.whatIsContent}
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Segunda parte: Estructura porosa */}
          <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              variants={fadeInLeft}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.whatIsSubtitle}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.whatIsExtra}
              </motion.p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 relative rounded-lg overflow-hidden h-[250px] md:h-[500px]"
              variants={fadeInRight}
            >
              <div className="relative w-full h-full flex items-center justify-center bg-white">
                <Image
                  src={biocharGif}
                  alt="Biochar structure animation"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cómo se hace el Biochar */}
      <motion.section 
        className="py-12 md:py-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 md:order-1 flex flex-col"
              variants={fadeInLeft}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.howTitle}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.howContent}
              </motion.p>
              <motion.h3 
                className="text-2xl font-bold text-green-600 mb-4 font-title"
                variants={fadeInUp}
              >
                {t.howSubtitle}
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700 font-body mb-8 md:mb-0 text-justify"
                variants={fadeInUp}
              >
                {t.howExtra}
              </motion.p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden md:order-2"
              variants={fadeInRight}
            >
              <Image
                src={pyrolysisImage}
                alt="Proceso de pirólisis"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Beneficios del Biochar */}
      <motion.section 
        className="py-12 md:py-16" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden"
              variants={fadeInLeft}
            >
              <Image
                src={verdeImage}
                alt="Beneficios agrícolas del biochar"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              variants={fadeInRight}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.benefitsTitle}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.benefitsContent}
              </motion.p>
              <motion.ul 
                className="list-disc pl-6 mb-6 space-y-2 text-justify"
                variants={fadeInUp}
              >
                {t.benefitsList.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="text-lg text-gray-700 font-body"
                    variants={fadeInUp}
                    custom={index}
                  >
                    {benefit}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.h3 
                className="text-2xl font-bold text-green-600 mb-4 font-title"
                variants={fadeInUp}
              >
                {t.benefitsSubtitle}
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700 font-body"
                variants={fadeInUp}
              >
                {t.benefitsExtra}
              </motion.p>
            </motion.div>
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
            className="text-5xl md:text-6xl font-extrabold mb-8 font-title"
            variants={fadeInUp}
          >
            {isEnglish ? "Ready to transform your soil?" : "¿Listo para transformar tu suelo?"}
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link 
              href={`/${isEnglish ? 'en/contact' : 'es/contacto'}`}
              className="inline-block bg-white text-green-700 font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:bg-gray-100 hover:scale-105 font-body"
            >
              {isEnglish ? "Contact Us" : "Contáctanos"}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Biochar;