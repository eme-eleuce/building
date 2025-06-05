"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import mapaEcuador from '../../../public/photos/points/mapa.png';
import manoImage from '../../../public/photos/mano.jpg';

// Textos para internacionalización
const texts = {
  es: {
    // Sección de Mapa
    mapTitle: "Los primeros hijos del Suelo",
    mapDescription: "En Ecuador, el cuidado del suelo es un legado ancestral y un deber nacional reflejado en nuestro himno como un símbolo de identidad y compromiso con la tierra.",
    
    // Sección de Guardianes del Suelo
    guardiansTitle: "Nuestros guardianes del suelo",
    guardiansDescription: "Ecuador es un país megadiverso de 253.370 Km², un 20% de nuestro suelo se utiliza para agricultura, actividad que ha sido el sustento para sus comunidades desde hace siglos. Nuestros Agricultores han sabido llevar la cultura ancestral de producir con cuidado y respeto por la Pachamama (madre tierra), alimentando a sus comunidades y conservando los frágiles ecosistemas que los rodean. Hoy, esta realidad se ve amenazada por la explotación de los suelos a escala industrial enfocada prioritariamente en la rentabilidad.",
    guardiansDescription2: "Pacchar junto a sus agricultores de carbono promueven y ejecutan esta consciencia de hacer agricultura sostenible, regenerando el suelo, la biodiversidad, los servicios ecosistémicos y removiendo carbono de la atmósfera. Siendo actores que fortalecen la seguridad alimentaria y alivian el cambio climático.",
    
    // Sección de Triple Impacto
    tripleImpactTitle: "Triple Impacto",
    tripleImpactDescription: "El biochar y la agricultura climáticamente inteligente implica beneficios en 3 ejes fundamentales de la sostenibilidad:",
    socialTitle: "Sociales:",
    socialImpacts: [
      "Empoderamiento rural",
      "Generación de empleo para la producción de biochar",
      "Redes agrícolas de apoyo comunitario",
      "Capacitaciones y acceso a tecnologías",
      "Mejoras en la salud al reducir las exposiciones a agroquímicos"
    ],
    environmentalTitle: "Ambientales:",
    environmentalImpacts: [
      "Captura de Carbono",
      "Regeneración de los suelos",
      "Eficiencia hídrica",
      "Reducción de contaminación",
      "Conservación de la biodiversidad"
    ],
    financialTitle: "Financieros:",
    financialImpacts: [
      "Acceso a compensaciones por capturar carbono en el suelo",
      "Mejora en la rentabilidad agropecuaria",
      "Atracción de inversiones de fondos de sostenibilidad",
      "Optimización de recursos minimizando el desperdicio"
    ],
    
    provincesTitle: "Provincias donde operamos:",
    provincesList: [
      "Imbabura",
      "Pichincha",
      "Guayas",
      "El Oro"
    ],
    impactTitle: "Impacto Regional",
    impactDescription: "En cada una de estas provincias, trabajamos con agricultores y empresas locales para implementar soluciones de biochar adaptadas a las necesidades específicas de cada región, contribuyendo al desarrollo sostenible y la regeneración de suelos en todo Ecuador."
  },
  en: {
    // Map Section
    mapTitle: "The First Children of the Soil",
    mapDescription: "In Ecuador, caring for the soil is an ancestral legacy and a national duty reflected in our anthem as a symbol of identity and commitment to the land.",
    
    // Soil Guardians Section
    guardiansTitle: "Our soil guardians",
    guardiansDescription: "Ecuador is a megadiverse country of 253,370 km², with 20% of our land used for agriculture, an activity that has sustained its communities for centuries. Our Farmers have maintained the ancestral culture of producing with care and respect for Pachamama (mother earth), feeding their communities and preserving the fragile ecosystems that surround them. Today, this reality is threatened by industrial-scale soil exploitation primarily focused on profitability.",
    guardiansDescription2: "Pacchar, together with its carbon farmers, promotes and implements this consciousness of sustainable agriculture, regenerating the soil, biodiversity, ecosystem services, and removing carbon from the atmosphere. They are actors who strengthen food security and alleviate climate change.",
    
    // Triple Impact Section
    tripleImpactTitle: "Triple Impact",
    tripleImpactDescription: "Biochar and climate-smart agriculture involve benefits in 3 fundamental axes of sustainability:",
    socialTitle: "Social:",
    socialImpacts: [
      "Rural empowerment",
      "Job creation for biochar production",
      "Agricultural networks for community support",
      "Training and access to technologies",
      "Health improvements by reducing exposure to agrochemicals"
    ],
    environmentalTitle: "Environmental:",
    environmentalImpacts: [
      "Carbon capture",
      "Soil regeneration",
      "Water efficiency",
      "Pollution reduction",
      "Biodiversity conservation"
    ],
    financialTitle: "Financial:",
    financialImpacts: [
      "Access to compensation for capturing carbon in the soil",
      "Improvement in agricultural profitability",
      "Attraction of investments from sustainability funds",
      "Resource optimization minimizing waste"
    ],
    
    provincesTitle: "Provinces where we operate:",
    provincesList: [
      "Imbabura",
      "Pichincha",
      "Guayas",
      "El Oro"
    ],
    impactTitle: "Regional Impact",
    impactDescription: "In each of these provinces, we work with local farmers and businesses to implement biochar solutions tailored to the specific needs of each region, contributing to sustainable development and soil regeneration throughout Ecuador."
  }
};

const BiocharPoints = () => {
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
  
  const fadeInLeft = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
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
    <div className="overflow-hidden">
      {/* Mapa de Ecuador */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-green-700 mb-8 text-center font-title"
            variants={fadeInUp}
          >
            {isEnglish ? (
              <>
                The First Children of the <span className="text-yellow-700">Soil</span>
              </>
            ) : (
              <>
                Los primeros hijos del <span className="text-yellow-700">Suelo</span>
              </>
            )}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto font-body"
            variants={fadeInUp}
          >
            {t.mapDescription}
          </motion.p>
          
          <motion.div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            {/* Columna izquierda - Mapa y Provincias */}
            <motion.div 
              className="w-full md:w-1/2 order-1 md:order-1 flex flex-col"
              variants={fadeInLeft}
            >
              {/* Mapa de Ecuador */}
              <motion.div 
                className="w-full relative rounded-lg overflow-hidden h-[350px] md:h-[500px] mb-8"
                variants={fadeInUp}
              >
                <Image
                  src={mapaEcuador}
                  alt="Mapa de Ecuador con provincias resaltadas"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
            
            {/* Columna derecha - Solo Guardianes del Suelo */}
            <motion.div 
              className="w-full md:w-1/2 order-2 md:order-2"
              variants={fadeInRight}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-green-600 mb-6 font-title"
                variants={fadeInUp}
              >
                {t.guardiansTitle}
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700 font-body text-justify mb-6"
                variants={fadeInUp}
              >
                {t.guardiansDescription}
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 font-body text-justify mb-8"
                variants={fadeInUp}
              >
                {t.guardiansDescription2}
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Triple Impacto - Centrado en la página completa */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 mb-16 flex flex-col items-center w-full"
          >
            <motion.h3 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-600 mb-8 font-title text-center"
              variants={fadeInUp}
            >
              {t.tripleImpactTitle}
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-700 font-body mb-8 text-center max-w-3xl"
              variants={fadeInUp}
            >
              {t.tripleImpactDescription}
            </motion.p>
            
            {/* Impactos en una fila horizontal */}
            <div className="mb-8 w-full max-w-5xl">
              <div className="flex flex-col md:flex-row gap-6 md:justify-center">
                {/* Impactos Sociales */}
                <motion.div variants={fadeInUp} className="w-full md:w-1/4">
                  <motion.h4 
                    className="text-xl font-semibold text-green-600 mb-3 font-title text-center"
                    variants={fadeInUp}
                  >
                    {t.socialTitle}
                  </motion.h4>
                  <motion.div 
                    className="flex flex-wrap gap-2 justify-center"
                    variants={fadeInUp}
                  >
                    {t.socialImpacts.map((impact, index) => (
                      <motion.span 
                        key={index} 
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-md font-medium text-center font-body"
                        variants={fadeInUp}
                      >
                        {impact}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Impactos Ambientales - Más ancho */}
                <motion.div variants={fadeInUp} className="w-full md:w-2/4">
                  <motion.h4 
                    className="text-xl font-semibold text-green-600 mb-3 font-title text-center"
                    variants={fadeInUp}
                  >
                    {t.environmentalTitle}
                  </motion.h4>
                  <motion.div 
                    className="flex flex-wrap gap-2 justify-center"
                    variants={fadeInUp}
                  >
                    {t.environmentalImpacts.map((impact, index) => (
                      <motion.span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-md font-medium text-center font-body"
                        variants={fadeInUp}
                      >
                        {impact}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Impactos Financieros */}
                <motion.div variants={fadeInUp} className="w-full md:w-1/4">
                  <motion.h4 
                    className="text-xl font-semibold text-green-600 mb-3 font-title text-center"
                    variants={fadeInUp}
                  >
                    {t.financialTitle}
                  </motion.h4>
                  <motion.div 
                    className="flex flex-wrap gap-2 justify-center"
                    variants={fadeInUp}
                  >
                    {t.financialImpacts.map((impact, index) => (
                      <motion.span 
                        key={index} 
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-md font-medium text-center font-body"
                        variants={fadeInUp}
                      >
                        {impact}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Operaciones actuales - Tabla de provincias y cultivos */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 mb-16 flex flex-col items-center w-full"
          >
            <motion.h3 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-600 mb-8 font-title text-center"
              variants={fadeInUp}
            >
              {isEnglish ? "Current Operations" : "Operaciones actuales"}
            </motion.h3>
            
            <motion.div 
              className="w-full max-w-4xl overflow-x-auto"
              variants={fadeInUp}
            >
              <table className="min-w-full rounded-lg overflow-hidden shadow-lg font-body text-lg">
                <thead className="bg-yellow-800 text-white">
                  <tr>
                    <th className="py-4 px-5 text-center text-xl font-bold font-title">{isEnglish ? "Province" : "Provincia"}</th>
                    <th className="py-4 px-5 text-center text-xl font-bold font-title">{isEnglish ? "Improved Crops" : "Cultivos mejorados"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-5 text-gray-800 font-bold text-center text-lg">Imbabura</td>
                    <td className="py-4 px-5 text-gray-700 text-center font-body text-lg">{isEnglish ? "Forestry, Roses, Vegetables" : "Forestales, Rosas, Hortalizas"}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-5 text-gray-800 font-bold text-center text-lg">Pichincha</td>
                    <td className="py-4 px-5 text-gray-700 text-center font-body text-lg">{isEnglish ? "Roses, Cannabis (CBD), Potatoes" : "Rosas, Cannabis (CBD), Papas"}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-5 text-gray-800 font-bold text-center text-lg">Guayas</td>
                    <td className="py-4 px-5 text-gray-700 text-center font-body text-lg">{isEnglish ? "Cocoa, Banana, Mangoes" : "Cacao, Banano, Mangos"}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-5 text-gray-800 font-bold text-center text-lg">El Oro</td>
                    <td className="py-4 px-5 text-gray-700 text-center font-body text-lg">{isEnglish ? "Cocoa, Banana" : "Cacao, Banano"}</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
          
          {/* Texto final de llamado a la acción */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 mb-2 flex flex-col items-center w-full"
          >
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 font-body text-center max-w-4xl mx-auto px-4 font-bold"
              variants={fadeInUp}
            >
              {isEnglish ? 
                "At PACCHAR, we are building a carbon agriculture movement that cleans the atmosphere and enhances soils. We want to add your community, your province, and your crops to our network to promote sustainable practices and generate real impact." : 
                "En PACCHAR, estamos construyendo un movimiento de agricultura del carbono que limpia la atmósfera y potencia los suelos. Queremos sumar a tu comunidad, tu provincia y cultivo a nuestra red de trabajo para promover prácticas sostenibles y generar impacto real."}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Sección de llamado a la acción con imagen de fondo */}
      <motion.section 
        className="py-24 md:py-28 relative text-white rounded-lg overflow-hidden my-8 mx-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 z-0 h-full">
          <Image 
            src={manoImage} 
            alt="Background" 
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 font-title"
            variants={fadeInUp}
          >
            {isEnglish ? "If you are a producer and want to contribute to mitigating climate change with biochar, we are enthusiastically waiting for you!" : "Si eres productor y buscas contribuir a mitigar el cambio climático con biochar, ¡te esperamos con entusiasmo!"}
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Link 
              href={`/${pathname.includes('/en') ? 'en/contact' : 'es/contacto'}`}
              className="px-10 py-5 bg-white font-body text-green-700 rounded-lg hover:bg-gray-100 transition-colors font-bold text-xl inline-block shadow-lg"
            >
              {isEnglish ? "Contact Us" : "Contáctanos"}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BiocharPoints;