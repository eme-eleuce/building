"use client";

import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import backgroundImage from '../../../public/photos/pacchar-1.jpg';
import removal1Image from '../../../public/photos/removal-co2/removal1.jpg';
import removal2Image from '../../../public/photos/removal-co2/removal2.jpg';
import removal3Image from '../../../public/photos/removal-co2/removal3.jpg';

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

const Removal = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;
  
  // Referencias para animaciones al hacer scroll
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const ctaRef = useRef(null);
  
  // Estados de visibilidad para cada sección
  const section1IsInView = useInView(section1Ref, { once: true, amount: 0.3 });
  const section2IsInView = useInView(section2Ref, { once: true, amount: 0.3 });
  const section3IsInView = useInView(section3Ref, { once: true, amount: 0.3 });
  const ctaIsInView = useInView(ctaRef, { once: true, amount: 0.3 });
  
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
    <div className="overflow-hidden">
      {/* Hero Section con imagen de fondo */}
      <motion.section 
        className="relative h-screen w-full flex items-center justify-center px-4 md:px-8 py-6 md:py-10 mt-28 md:mt-28"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Imagen de fondo con padding */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt="CO2 Removal Background"
            fill
            className="object-cover brightness-[0.65] object-center"
            priority
          />
        </div>
        
        {/* Contenido superpuesto */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 md:mb-16 font-title mx-4 md:mx-20"
            variants={fadeInUp}
          >
            {t.title}
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-white font-body max-w-[90%] md:max-w-3xl mx-auto px-2 md:px-0"
            variants={fadeInUp}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.section>
      {/* Contenido de texto centrado */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            className="w-full flex flex-col items-center"
            variants={staggerContainer}
          >
            {/* Sección 1: Solución natural */}
            <motion.div 
              ref={section1Ref}
              className="w-full max-w-4xl mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={section1IsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-8 font-title">
                {t.section1Title}
              </h2>
              <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12">
                {/* Título y contenido en columna (móvil) o derecha (escritorio) */}
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  {/* Imagen visible solo en móvil, después del título */}
                  <div className="relative w-full aspect-square mb-8 md:hidden">
                    <Image 
                      src={removal1Image} 
                      alt="Solución natural para mitigar el cambio climático" 
                      fill 
                      className="object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {t.section1Content.map((paragraph, index) => (
                      <motion.p 
                        key={index} 
                        className="text-lg text-gray-700 font-body text-justify"
                        initial={{ opacity: 0, y: 20 }}
                        animate={section1IsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>
                
                {/* Imagen en columna izquierda (solo en escritorio) */}
                <div className="w-full md:w-1/2 order-2 md:order-1 hidden md:block">
                  <div className="relative w-full aspect-square">
                    <Image 
                      src={removal1Image} 
                      alt="Solución natural para mitigar el cambio climático" 
                      fill 
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Sección 2: Remociones de carbono */}
            <motion.div 
              ref={section2Ref}
              className="w-full max-w-4xl mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={section2IsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-8 font-title">
                {t.section2Title}
              </h2>
              <motion.p 
                className="text-lg text-gray-700 font-body text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={section2IsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t.section2Content}
              </motion.p>
            </motion.div>
            
            {/* Sección 3: Impacto Socioambiental */}
            <motion.div 
              ref={section3Ref}
              className="w-full max-w-4xl mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={section3IsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Título con imagen de fondo */}
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 overflow-hidden rounded-lg">
                <Image 
                  src={removal2Image} 
                  alt="Impacto Socioambiental" 
                  fill 
                  className="object-cover brightness-[0.65]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-title px-4 text-center">
                    {t.section3Title}
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {t.section3Content.map((paragraph, index) => (
                  <motion.p 
                    key={index} 
                    className="text-lg text-gray-700 font-body text-justify"
                    initial={{ opacity: 0, y: 20 }}
                    animate={section3IsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              <div className="flex justify-center mt-6">
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
            
            {/* Call to Action con imagen de fondo */}
            <motion.div 
              ref={ctaRef}
              className="w-full max-w-4xl mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={ctaIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image 
                  src={removal3Image} 
                  alt="Compensación de carbono" 
                  fill 
                  className="object-cover brightness-[0.6]" 
                  priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-10 font-title text-center max-w-3xl">
                    {isEnglish ? "Ready to offset your carbon footprint?" : "¿Listo para compensar su huella de carbono?"}
                  </h2>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Link 
                      href={`/${isEnglish ? 'en' : 'es'}/nosotros/rainforest-enterprise`}
                      className="bg-yellow-900 hover:bg-yellow-950 text-white font-bold py-2 px-10 rounded-full transition-all duration-300 font-body text-xl flex items-center"
                    >
                      {isEnglish ? "Learn about our alliance" : "Conoce nuestra alianza"}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Removal;