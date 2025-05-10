"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import terraPretaImage from '../../../public/photos/petra.png';
import biocharHandImage from '../../../public/photos/mano.jpg';
import pyrolysisImage from '../../../public/photos/fuego.jpg';

// Textos para internacionalización
const texts = {
  es: {
    // Sección de Historia
    historyTitle: "Historia del Biochar",
    historyContent: "Varios estudios arqueológicos encontraron Antrosoles (suelos modificados por el hombre) con carbono de más 2.500 años de antigüedad, los aborígenes amazónicos beneficiaron así su producción de alimentos. El biochar es una técnica ancestral reinventada con ciencia y tecnología moderna y se ha también calculado su durabilidad en el suelo por al menos 100 años.",
    historySubtitle: "Sabiduría ancestral con tecnología moderna",
    historyExtra: "La 'Terra Preta' o tierra negra amazónica es un ejemplo de cómo las civilizaciones antiguas utilizaban el carbón vegetal para mejorar la fertilidad del suelo. Estos suelos siguen siendo extremadamente fértiles hasta el día de hoy.",
    
    // Sección de Qué es
    whatIsTitle: "¿Qué es el Biochar?",
    whatIsContent: "El biochar es un tipo de carbón vegetal producido mediante la descomposición térmica de biomasa (residuos vegetales, madera, etc.) en un ambiente con poco o ningún oxígeno, un proceso conocido como pirólisis. A diferencia del carbón común, el biochar está específicamente diseñado para ser utilizado como enmienda del suelo, mejorando sus propiedades físicas, químicas y biológicas.",
    whatIsSubtitle: "Estructura porosa única",
    whatIsExtra: "La estructura altamente porosa del biochar proporciona un hábitat ideal para microorganismos beneficiosos y aumenta la capacidad del suelo para retener agua y nutrientes.",
    
    // Sección de Cómo se hace
    howTitle: "¿Cómo se hace el Biochar?",
    howContent: "El biochar se produce mediante pirólisis, un proceso en el que la biomasa se calienta a temperaturas entre 300°C y 700°C en ausencia de oxígeno. Este proceso transforma la materia orgánica en carbón estable, gases y bio-aceites. En Pacchar utilizamos tecnología avanzada de pirólisis que maximiza la eficiencia y minimiza las emisiones, convirtiendo residuos agrícolas y forestales en un recurso valioso.",
    howSubtitle: "Proceso de producción sostenible",
    howExtra: "Nuestra tecnología de pirólisis no solo produce biochar de alta calidad, sino que también captura los gases y bio-aceites generados durante el proceso, que pueden utilizarse como fuente de energía renovable.",
    
    // Sección de Beneficios
    benefitsTitle: "¿Cómo te beneficia el Biochar?",
    benefitsContent: "El biochar ofrece múltiples beneficios tanto para agricultores como para el medio ambiente:",
    benefitsList: [
      "Mejora la retención de agua y nutrientes en el suelo",
      "Reduce la necesidad de fertilizantes químicos",
      "Aumenta la actividad microbiana y la salud del suelo",
      "Incrementa el rendimiento de los cultivos",
      "Secuestra carbono de forma estable por cientos de años",
      "Reduce las emisiones de gases de efecto invernadero",
      "Ayuda a remediar suelos contaminados",
      "Mejora la eficiencia del compostaje"
    ],
    benefitsSubtitle: "Solución climática escalable",
    benefitsExtra: "Al incorporar biochar en el suelo, no solo mejoramos la productividad agrícola, sino que también contribuimos a la lucha contra el cambio climático mediante el secuestro de carbono a largo plazo.",
    
    // Llamada a la acción
    ctaTitle: "¿Listo para transformar tu suelo?",
    ctaButton: "Contáctanos"
  },
  en: {
    // History Section
    historyTitle: "History of Biochar",
    historyContent: "Various archaeological studies have found Anthrosols (human-modified soils) with carbon dating back more than 2,500 years, which Amazonian aborigines used to benefit their food production. Biochar is an ancestral technique reinvented with modern science and technology, and its durability in soil has been calculated to last at least 100 years.",
    historySubtitle: "Ancient wisdom with modern technology",
    historyExtra: "'Terra Preta' or Amazonian black earth is an example of how ancient civilizations used charcoal to improve soil fertility. These soils remain extremely fertile to this day.",
    
    // What Is Section
    whatIsTitle: "What is Biochar?",
    whatIsContent: "Biochar is a type of charcoal produced through the thermal decomposition of biomass (plant residues, wood, etc.) in an environment with little or no oxygen, a process known as pyrolysis. Unlike common charcoal, biochar is specifically designed to be used as a soil amendment, improving its physical, chemical, and biological properties.",
    whatIsSubtitle: "Unique porous structure",
    whatIsExtra: "The highly porous structure of biochar provides an ideal habitat for beneficial microorganisms and increases the soil's ability to retain water and nutrients.",
    
    // How It's Made Section
    howTitle: "How is Biochar Made?",
    howContent: "Biochar is produced through pyrolysis, a process in which biomass is heated to temperatures between 300°C and 700°C in the absence of oxygen. This process transforms organic matter into stable carbon, gases, and bio-oils. At Pacchar, we use advanced pyrolysis technology that maximizes efficiency and minimizes emissions, converting agricultural and forestry waste into a valuable resource.",
    howSubtitle: "Sustainable production process",
    howExtra: "Our pyrolysis technology not only produces high-quality biochar but also captures the gases and bio-oils generated during the process, which can be used as a source of renewable energy.",
    
    // Benefits Section
    benefitsTitle: "How Does Biochar Benefit You?",
    benefitsContent: "Biochar offers multiple benefits for both farmers and the environment:",
    benefitsList: [
      "Improves water and nutrient retention in soil",
      "Reduces the need for chemical fertilizers",
      "Increases microbial activity and soil health",
      "Enhances crop yields",
      "Sequesters carbon stably for hundreds of years",
      "Reduces greenhouse gas emissions",
      "Helps remediate contaminated soils",
      "Improves composting efficiency"
    ],
    benefitsSubtitle: "Scalable climate solution",
    benefitsExtra: "By incorporating biochar into the soil, we not only improve agricultural productivity but also contribute to the fight against climate change through long-term carbon sequestration.",
    
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
            <span className="inline-block text-gray-800">Biochar</span>
            <span className="inline-block mx-4 text-yellow-500">&</span>
            <span className="inline-block text-green-600">Pacchar</span>
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
          <motion.div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
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
              <motion.h3 
                className="text-2xl font-bold text-green-600 mb-4 font-title"
                variants={fadeInUp}
              >
                {t.whatIsSubtitle}
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700 font-body"
                variants={fadeInUp}
              >
                {t.whatIsExtra}
              </motion.p>
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
              className="w-full md:w-1/2 h-[300px] md:h-[400px] bg-gray-300 rounded-lg"
              variants={fadeInLeft}
            >
              {/* Placeholder para imagen */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <span className="text-xl font-semibold">Imagen de beneficios agrícolas</span>
              </div>
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
        className="py-16 md:py-20 bg-green-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold mb-8 font-title"
            variants={fadeInUp}
          >
            {t.ctaTitle}
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link 
              href={`/${isEnglish ? 'en/contact' : 'es/contacto'}`}
              className="inline-block bg-white text-green-700 font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:bg-gray-100 hover:scale-105 font-body"
            >
              {t.ctaButton}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Biochar;