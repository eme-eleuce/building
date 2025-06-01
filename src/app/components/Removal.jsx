"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import backgroundImage from '../../../public/photos/pacchar-1.jpg';

// Textos para internacionalización
const texts = {
  es: {
    title: "Compensación de CO2",
    subtitle: "Captura carbono, mejora tu suelo y genera ingresos con Pacchar Biochar",
    
    // Sección 1
    section1Title: "Solución natural para mitigar el cambio climático",
    section1Content: [
      "La reducción del carbono atmosférico es crucial para frenar el cambio climático, enfriar el planeta y evitar impactos devastadores en ecosistemas y comunidades. El biochar es una solución eficaz basada en la naturaleza para aliviar el cambio climático al almacenar carbono sólido estable en suelos agrícolas para mejorar la producción de alimentos.",
      "Al producir biochar a través de pirólisis, el carbono de la biomasa que originalmente estaría destinado a volver a la atmósfera se estabiliza y queda almacenado en forma sólida (Biochar) por siglos, evitando su liberación como CO₂. Adoptar el biochar a gran escala puede transformar la agricultura en una práctica regenerativa, contribuyendo significativamente a aliviar el cambio climático."
    ],
    
    // Sección 2
    section2Title: "Remociones de carbono confiables y trazables",
    section2Content: "Diversos estudios científicos han demostrado que el biochar captura y almacena carbono de manera estable por siglos, removiéndolo de la atmósfera. En PACCHAR, empleamos metodologías vanguardistas para garantizar un beneficio climático real, desde el abastecimiento de biomasa, la pirólisis y hasta la aplicación del biochar en suelos agrícolas. Utilizamos herramientas digitales de monitoreo, reporte y verificación, asegurando que cada tonelada de biochar producida contribuya de forma medible y transparente a la compensación de las emisiones globales.",
    
    // Sección 3
    section3Title: "Impacto Socioambiental",
    section3Content: [
      "La adaptación del biochar aporta múltiples beneficios a las comunidades rurales y sus agroecosistemas. El abastecimiento circular y la regeneración de sus suelos mejoran su resiliencia al cambio climático. El aprovechamiento y valorización de residuos que tradicionalmente se queman evita la contaminación del aire. El biochar resultante potencia la salud del suelo para mejorar cosechas, filtración de aguas subterráneas y promover la biodiversidad sosteniblemente. Además de los beneficios agronómicos, los agricultores, habiendo cumplido por un proceso de certificación, pueden acceder a ingresos adicionales por almacenar carbono en sus suelos utilizando Pacchar Biochar."
    ],
    section3ButtonText: "Conoce más",
    
    // Sección 4
    section4Title: "Compense sus emisiones",
    section4Content: "Compense su huella de carbono con Pacchar Biochar y obtenga las siguientes ventajas clave:",
    section4List: [
      { title: "Diferenciación competitiva", content: "Destaque su producto con un sello “CO2 neutral” o “climate-smart” atrayendo consumidores concienciados con el clima." },
      { title: "Valor agregado en marca", content: "Refuerce la identidad de marca con un compromiso real hacia la acción climática y la sostenibilidad." },
      { title: "Alianzas estratégicas", content: "Facilita colaboraciones con empresas y organizaciones alineadas con la sostenibilidad." },
      { title: "Potencial financiero", content: "Puede generar acceso a incentivos fiscales y fondos climáticos internacionales." },
      { title: "Innovación y liderazgo", content: "Posiciona la empresa como pionera en soluciones regenerativas y carbono negativo." }
    ],
    
    buttonText: "Contáctanos para más información"
  },
  en: {
    title: "CO2 Removal",
    subtitle: "Boost your soil, earn more, and capture carbon with Pacchar Biochar",
    
    // Section 1
    section1Title: "Natural solution to mitigate climate change",
    section1Content: [
      "Reducing atmospheric carbon is crucial to slow down climate change, cool the planet, and avoid devastating impacts on ecosystems and communities. Biochar is an effective nature-based solution to alleviate climate change by storing stable solid carbon in agricultural soils to improve food production.",
      "By producing biochar through pyrolysis, carbon from biomass that would originally be destined to return to the atmosphere is stabilized and stored in solid form (Biochar) for centuries, preventing its release as CO₂. Adopting biochar on a large scale can transform agriculture into a regenerative practice, significantly contributing to alleviating climate change."
    ],
    
    // Section 2
    section2Title: "Reliable and traceable carbon removals",
    section2Content: "Various scientific studies have demonstrated that biochar captures and stores carbon stably for centuries, removing it from the atmosphere. At PACCHAR, we employ cutting-edge methodologies to ensure real climate benefit, from biomass sourcing, pyrolysis, to the application of biochar in agricultural soils. We use digital monitoring, reporting, and verification tools, ensuring that each ton of biochar produced contributes measurably and transparently to offsetting global emissions.",
    
    // Section 3
    section3Title: "Socio-environmental Impact",
    section3Content: [
      "The adaptation of biochar brings multiple benefits to rural communities and their agroecosystems. Circular sourcing and soil regeneration improve their resilience to climate change. The use and valorization of waste that is traditionally burned prevents air pollution. The resulting biochar enhances soil health to improve crops, groundwater filtration, and promote biodiversity sustainably. In addition to agronomic benefits, farmers, having completed a certification process, can access additional income by storing carbon in their soils using Pacchar Biochar."
    ],
    section3ButtonText: "Learn more",
    
    // Section 4
    section4Title: "Offset your emissions",
    section4Content: "Offset your carbon footprint with Pacchar Biochar and get the following key advantages:",
    section4List: [
      { title: "Competitive differentiation", content: "Highlight your product with a “CO2 neutral” or “climate-smart” seal attracting climate-conscious consumers." },
      { title: "Added brand value", content: "Reinforce brand identity with a real commitment to climate action and sustainability." },
      { title: "Strategic alliances", content: "Facilitates collaborations with companies and organizations aligned with sustainability." },
      { title: "Financial potential", content: "Can generate access to tax incentives and international climate funds." },
      { title: "Innovation and leadership", content: "Positions the company as a pioneer in regenerative and carbon-negative solutions." }
    ],
    
    buttonText: "Contact us for more information"
  }
};

const CoRemoval = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
    <motion.section 
      className="py-10 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-12"
        variants={staggerContainer}
      >
        <motion.div 
          className="flex flex-col items-center rounded-2xl shadow-xl overflow-hidden"
          variants={fadeInUp}
        >
          {/* Imagen de fondo con título superpuesto */}
          <motion.div 
            className="w-full relative"
            variants={fadeIn}
          >
            <motion.div 
              className="w-full h-[500px] md:h-[650px] lg:h-[700px] relative"
              variants={fadeIn}
            >
              <Image
                src={backgroundImage}
                alt="CO2 Removal Background"
                fill
                className="object-cover brightness-75 object-center"
                priority
              />
              
              {/* Título principal superpuesto - posicionado mucho más abajo */}
              <div className="absolute inset-x-0 bottom-[-180px] md:bottom-[-170px] lg:bottom-[-190px] flex flex-col items-center justify-end p-6">
                <div className="bg-[#f8f8f8] py-4 px-6 md:px-10 rounded-t-2xl max-w-4xl w-full z-10 ">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center mb-6 md:mb-8 font-title text-green-700">
                    {t.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-center font-body text-gray-800">
                    {t.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
            
          </motion.div>
          
          {/* Contenido de texto centrado */}
          <motion.div 
            className="w-full p-8 pt-40 md:p-12 md:pt-36 lg:pt-40 flex flex-col items-center relative z-0"
            variants={staggerContainer}
          >
            {/* Sección 1: Solución natural */}
            <motion.div 
              className="w-full max-w-4xl mb-16 mt-20 md:mt-24 lg:mt-30"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-8 font-title">
                {t.section1Title}
              </h2>
              <div className="space-y-4">
                {t.section1Content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 font-body text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
            
            {/* Sección 2: Remociones de carbono */}
            <motion.div 
              className="w-full max-w-4xl mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-8 font-title">
                {t.section2Title}
              </h2>
              <p className="text-lg text-gray-700 font-body text-justify">
                {t.section2Content}
              </p>
            </motion.div>
            
            {/* Sección 3: Impacto Socioambiental */}
            <motion.div 
              className="w-full max-w-4xl mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-8 font-title">
                {t.section3Title}
              </h2>
              <div className="space-y-4 mb-6">
                {t.section3Content.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 font-body text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex justify-start mt-6">
                <Link 
                  href={`/${isEnglish ? 'en' : 'es'}/red/alianza`}
                  className="bg-yellow-900 hover:bg-yellow-950 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 font-body text-lg flex items-center"
                >
                  {t.section3ButtonText}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Sección 4: Compense sus emisiones */}
            <motion.div 
              className="w-full max-w-4xl mb-16"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-8 font-title">
                {t.section4Title}
              </h2>
              <p className="text-lg text-gray-700 text-justify font-body mb-4">
                {t.section4Content}
              </p>
              <ul className="list-disc pl-6 space-y-4">
                {t.section4List.map((item, index) => (
                  <li key={index} className="text-lg text-gray-700 font-body text-justify">
                    <span className="font-bold text-green-700">{item.title}:</span> {item.content}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Llamado a la acción */}
            <motion.div 
              className="w-full max-w-4xl mt-12 mb-8 text-center"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 font-title">
                {isEnglish ? "Ready to offset your carbon footprint?" : "¿Listo para compensar su huella de carbono?"}
              </h2>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link 
                  href={`/${isEnglish ? 'en' : 'es'}/nosotros/rainforest-enterprise`}
                  className="bg-yellow-900 hover:bg-yellow-950 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 font-body text-xl flex items-center"
                >
                  {isEnglish ? "Learn about our alliance" : "Conoce nuestra alianza"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CoRemoval;