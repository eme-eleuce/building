"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const Team = ({ params }) => {
  // Detectar el idioma desde la ruta
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'es';
  
  console.log('Current pathname:', pathname);
  console.log('Detected language:', lang);

  // Textos en diferentes idiomas
  const texts = {
    es: {
      title: "Nuestro Equipo",
      subtitle: "Conoce a los profesionales detrás de Pacchar",
      description: "Somos un equipo diverso y apasionado de científicos, ingenieros, agricultores y emprendedores comprometidos con la creación de soluciones climáticas escalables y sostenibles.",
      members: [
        {
          name: "Carlos González",
          position: "CEO"
        },
        {
          name: "Gabriel González",
          position: "Business Developer Agriculture - Head of Science"
        },
        {
          name: "Alejandro Sánchez",
          position: "Head of Carbon"
        },
        {
          name: "Victor Rojas",
          position: "President / CFO"
        },
        {
          name: "David Rojas",
          position: "COO / Business Developer Animal Nutrition"
        }
      ]
    },
    en: {
      title: "Our Team",
      subtitle: "Meet the professionals behind Pacchar",
      description: "We are a diverse and passionate team of scientists, engineers, farmers, and entrepreneurs committed to creating scalable and sustainable climate solutions.",
      members: [
        {
          name: "Carlos González",
          position: "CEO"
        },
        {
          name: "Gabriel González",
          position: "Business Developer Agriculture - Head of Science"
        },
        {
          name: "Alejandro Sánchez",
          position: "Head of Carbon"
        },
        {
          name: "Victor Rojas",
          position: "President / CFO"
        },
        {
          name: "David Rojas",
          position: "COO / Business Developer Animal Nutrition"
        }
      ]
    }
  };

  // Seleccionar el idioma correcto
  const t = texts[lang] || texts.es;

  return (
    <div className="py-20 px-4 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-800 mb-6 font-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {t.title}
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 font-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            {t.subtitle}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {t.description}
          </motion.p>
        </div>

        {/* Miembros del equipo */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {t.members.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 1 + index * 0.2,
              }}
              // Se eliminó el efecto hover según lo solicitado
            >
              {/* Foto (placeholder circular gris) */}
              <div className="w-48 h-48 bg-gray-300 rounded-full mb-6 overflow-hidden relative">
                {/* Cuando tengas fotos reales, descomenta esto y agrega las imágenes */}
                {/* <Image 
                  src={`/photos/team/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
                  alt={member.name}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Información */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center font-title">
                {member.name}
              </h3>
              <p className="text-xl text-green-700 font-semibold mb-4 text-center font-title">
                {member.position}
              </p>
              
              {/* LinkedIn */}
              <div className="mt-4">
                <Link 
                  href="https://www.linkedin.com/company/pacchar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin className="text-xl" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón para volver */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link 
            href={`/${lang}`}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-xl md:text-2xl py-4 md:py-5 px-10 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 font-body shadow-lg"
          >
            {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
