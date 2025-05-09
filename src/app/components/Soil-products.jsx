"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import pureImage from '../../../public/products/pure.png';
import combiImage from '../../../public/products/combi.png';

// Textos para internacionalización
const texts = {
  es: {
    // Títulos principales
    title: "Productos para Enmienda de Suelos",
    subtitle: "Soluciones naturales para mejorar la calidad y fertilidad de su suelo",
    
    // Pacchar Pure
    pureTitle: "Pacchar Pure (Biochar)",
    pureDescription: "El bio carbón vegetal, también conocido como biochar, es un producto natural orgánico obtenido a través de la pirólisis. Este proceso transforma la biomasa en carbón, que actúa como enmienda y mejorador del suelo. La aplicación de bio carbón en el suelo ofrece numerosos beneficios. Estudios han demostrado que incrementa significativamente el contenido de materia orgánica y la fertilidad del suelo. Además, mejora la textura, porosidad, y estructura del mismo, creando un ambiente más saludable para los cultivos.",
    pureBenefits: "Beneficios: Mejora la retención de agua y nutrientes, aumenta la actividad microbiana, secuestra carbono de forma estable, reduce la necesidad de fertilizantes químicos.",
    
    // COMBI
    combiTitle: "COMBI",
    combiDescription: "COMBI es nuestra mezcla especial de biochar y compost activo, diseñada para proporcionar una solución completa para la salud del suelo. Esta combinación potencia los beneficios de ambos componentes: la estructura porosa y estable del biochar con la riqueza nutricional y biológica del compost. El resultado es un producto superior que mejora rápidamente la calidad del suelo y promueve un crecimiento vegetal más vigoroso y saludable.",
    combiBenefits: "Beneficios: Efecto inmediato y a largo plazo, mayor diversidad microbiana, mejor estructura del suelo, mayor capacidad de retención de nutrientes, reducción de lixiviación.",
    
    // Active Compost
    compostTitle: "Active Compost",
    compostDescription: "Nuestro Active Compost es un compost de alta calidad, rico en materia orgánica y microorganismos beneficiosos. Producido mediante un proceso de compostaje controlado, este producto aporta nutrientes esenciales al suelo de forma inmediata. El compost activo mejora la estructura del suelo, aumenta su capacidad de retención de agua y promueve un ecosistema del suelo saludable y equilibrado.",
    compostBenefits: "Beneficios: Aporte inmediato de nutrientes, mejora de la estructura del suelo, aumento de la biodiversidad, reducción de enfermedades de las plantas, promoción de crecimiento saludable.",
    
    // Botones
    dataSheetButton: "Ver ficha técnica",
    contactButton: "Contáctanos"
  },
  en: {
    // Main Titles
    title: "Soil Amendment Products",
    subtitle: "Natural solutions to improve the quality and fertility of your soil",
    
    // Pacchar Pure
    pureTitle: "Pacchar Pure (Biochar)",
    pureDescription: "Bio vegetable charcoal, also known as biochar, is an organic natural product obtained through pyrolysis. This process transforms biomass into carbon, which acts as a soil amendment and improver. The application of biochar in soil offers numerous benefits. Studies have shown that it significantly increases the organic matter content and soil fertility. Additionally, it improves the texture, porosity, and structure of the soil, creating a healthier environment for crops.",
    pureBenefits: "Benefits: Improves water and nutrient retention, increases microbial activity, sequesters carbon stably, reduces the need for chemical fertilizers.",
    
    // COMBI
    combiTitle: "COMBI",
    combiDescription: "COMBI is our special blend of biochar and active compost, designed to provide a complete solution for soil health. This combination enhances the benefits of both components: the porous and stable structure of biochar with the nutritional and biological richness of compost. The result is a superior product that quickly improves soil quality and promotes more vigorous and healthy plant growth.",
    combiBenefits: "Benefits: Immediate and long-term effect, greater microbial diversity, better soil structure, increased nutrient retention capacity, reduced leaching.",
    
    // Active Compost
    compostTitle: "Active Compost",
    compostDescription: "Our Active Compost is a high-quality compost, rich in organic matter and beneficial microorganisms. Produced through a controlled composting process, this product provides essential nutrients to the soil immediately. Active compost improves soil structure, increases its water retention capacity, and promotes a healthy and balanced soil ecosystem.",
    compostBenefits: "Benefits: Immediate nutrient supply, improved soil structure, increased biodiversity, reduced plant diseases, promotion of healthy growth.",
    
    // Buttons
    dataSheetButton: "View data sheet",
    contactButton: "Contact us"
  }
};

const SoilProducts = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
  // Variantes para animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

      {/* Pacchar Pure */}
      <motion.section 
        id="pacchar-pure"
        className="py-16 md:py-24" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden"
              variants={fadeInUp}
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
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.pureTitle}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.pureDescription}
              </motion.p>
              <motion.p 
                className="text-lg font-semibold text-gray-800 mb-8 font-body"
                variants={fadeInUp}
              >
                {t.pureBenefits}
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

      {/* COMBI */}
      <motion.section 
        id="combi"
        className="py-16 md:py-24" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.combiTitle}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.combiDescription}
              </motion.p>
              <motion.p 
                className="text-lg font-semibold text-gray-800 mb-8 font-body"
                variants={fadeInUp}
              >
                {t.combiBenefits}
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
            <motion.div 
              className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden"
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
          </motion.div>
        </div>
      </motion.section>

      {/* Active Compost */}
      <motion.section 
        id="active-compost"
        className="py-16 md:py-24" style={{ backgroundColor: '#f8f8f8' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
              variants={fadeInUp}
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
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.compostTitle}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-6 font-body text-justify"
                variants={fadeInUp}
              >
                {t.compostDescription}
              </motion.p>
              <motion.p 
                className="text-lg font-semibold text-gray-800 mb-8 font-body"
                variants={fadeInUp}
              >
                {t.compostBenefits}
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

export default SoilProducts;