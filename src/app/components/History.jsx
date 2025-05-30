"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Textos para internacionalización
const texts = {
  es: {
    title: "Nuestra Historia",
    subtitle: "Trayectoria de innovación, sostenibilidad y proyección hacia el futuro",
    timeline: [
      {
        year: "2021",
        title: "Fundación",
        description: "Iniciamos operaciones de biochar artesanal en Piñas, El Oro. Con la confianza y apoyo de Hacienda Rovall."
      },
      {
        year: "2022",
        title: "R&D",
        description: "Se realizaron pruebas agronómicas en diversos cultivos de Ecuador, incluyendo Rosas, Cannabis, Cacao, Brócoli, Bananas, para validar la funcionalidad del biochar en el suelo."
      },
      {
        year: "2023",
        title: "Primeras Ventas",
        description: "Pacchar Biochar entra al mercado agrícola ecuatoriano y recibe reconocimientos \"Premios Verdes X Edición\" en Categoría \"Agricultura y Alimentos Sostenibles\" y el primer lugar en la Cumbre de Emprendimiento de EAP Zamorano."
      },
      {
        year: "2024",
        title: "Crecimiento",
        description: "Juntamos esfuerzos con Rainforest Enterprise formalizando un joint-venture de apoyo técnico y financiero para la captura de carbono con biochar y ecosistemas. Creación de la red de agricultores. Ventas corporativas."
      },
      {
        year: "2025",
        title: "Inicio y Expansión",
        description: "Certificación de Captura de Carbono. Agregación de productos y Servicios. Reconocimiento de 2do lugar Cumbre de sostenibilidad. Emprendimientos con idea de negocio validada."
      },
      {
        year: "2030",
        title: "Visión",
        description: "Contar con al menos 10 comunidades en nuestra red de carbono. Producir 5000 toneladas de biochar artesanal por año para capturar más de 10000 toneladas de CO2-eq. Y beneficiar diversos cultivos."
      }
    ]
  },
  en: {
    title: "Our History",
    subtitle: "A journey of innovation, sustainability and vision for the future",
    timeline: [
      {
        year: "2021",
        title: "Foundation",
        description: "We started artisanal biochar operations in Piñas, El Oro. With the trust and support of Hacienda Rovall."
      },
      {
        year: "2022",
        title: "R&D",
        description: "Agronomic tests were conducted on various crops in Ecuador, including Roses, Cannabis, Cacao, Broccoli, Bananas, to validate the functionality of biochar in the soil."
      },
      {
        year: "2023",
        title: "First Sales",
        description: "Pacchar Biochar enters the Ecuadorian agricultural market and receives \"Green Awards X Edition\" in the \"Sustainable Agriculture and Food\" Category and first place at the EAP Zamorano Entrepreneurship Summit."
      },
      {
        year: "2024",
        title: "Growth",
        description: "We joined forces with Rainforest Enterprise, formalizing a joint venture for technical and financial support for carbon capture with biochar and ecosystems. Creation of the farmer network. Corporate sales."
      },
      {
        year: "2025",
        title: "Start and Expansion",
        description: "Carbon Capture Certification. Product and Service aggregation. Recognition of 2nd place Sustainability Summit. Entrepreneurships with validated business idea."
      },
      {
        year: "2030",
        title: "Vision",
        description: "Have at least 10 communities in our carbon network. Produce 5000 tons of artisanal biochar per year to capture more than 10000 tons of CO2-eq. And benefit various crops."
      }
    ]
  }
};

const History = () => {
  // Determinar el idioma actual
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en/');
  const t = isEnglish ? texts.en : texts.es;
  
  // Animaciones para la línea de tiempo
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-100px 0px'
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const getItemVariants = (index) => ({
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.2
      }
    }
  });

  return (
    <div className="flex flex-col w-full">
      {/* Encabezado principal */}
      <motion.div 
        className="w-full py-16 mt-24 md:mt-32"
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

      {/* Línea de tiempo */}
      <motion.section
        ref={ref}
        className="py-16 md:py-24 bg-[#f8f8f8]"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 to-yellow-700"></div>
            
            {/* Eventos de la línea de tiempo */}
            {t.timeline.map((event, index) => (
              <motion.div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center md:items-start mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                variants={getItemVariants(index)}
              >
                {/* Punto en la línea */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-green-600' : 'bg-yellow-700'} border-4 border-[#f8f8f8] shadow-lg z-10`}></div>
                
                {/* Contenido */}
                <div className={`w-10/12 md:w-5/12 mx-auto md:mx-0 px-0 md:px-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-[#f8f8f8] p-6 md:p-8 rounded-lg shadow-md md:shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3 justify-start md:justify-start">
                      <span className={`text-3xl md:text-4xl font-bold mr-3 font-title ${index % 2 === 0 ? 'text-green-700' : 'text-yellow-800'}`}>{event.year}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-title">{event.title}</h3>
                    </div>
                    <p className="text-gray-700 text-justify text-base md:text-lg font-body">{event.description}</p>
                  </div>
                </div>
                
                {/* Espacio para alinear */}
                <div className="w-0 md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default History;