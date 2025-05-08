"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Team = ({ params }) => {
  // Detectar el idioma desde los parámetros de la URL
  const lang = params?.lang || 'es';

  // Textos en diferentes idiomas
  const texts = {
    es: {
      title: "Nuestro Equipo",
      subtitle: "Conoce a los profesionales detrás de Pacchar",
      description: "Somos un equipo diverso y apasionado de científicos, ingenieros, agricultores y emprendedores comprometidos con la creación de soluciones climáticas escalables y sostenibles.",
      members: [
        {
          name: "Carlos González",
          position: "CEO",
          education: [
            "Ing. Agroindustrial y Agronegocios - UCSG",
            "Master in Soil and Crop Sciences - Cornell University"
          ]
        },
        {
          name: "Gabriel González",
          position: "Business Developer Agriculture",
          education: [
            "Ing. Agrónomo - EARTH University",
            "Maestría en Agricultura Tropical Sostenible - EAP Zamorano"
          ]
        },
        {
          name: "Alejandro Sánchez",
          position: "Head of Carbon",
          education: []
        },
        {
          name: "Victor Rojas",
          position: "President / CFO",
          education: [
            "Ing. Agropecuario y Agronegocios - UCSG"
          ]
        },
        {
          name: "David Rojas",
          position: "COO / Business Developer Animal Nutrition",
          education: []
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
          position: "CEO",
          education: [
            "Agroindustrial and Agribusiness Engineering - UCSG",
            "Master in Soil and Crop Sciences - Cornell University"
          ]
        },
        {
          name: "Gabriel González",
          position: "Business Developer Agriculture",
          education: [
            "Agricultural Engineering - EARTH University",
            "Master in Sustainable Tropical Agriculture - EAP Zamorano"
          ]
        },
        {
          name: "Alejandro Sánchez",
          position: "Head of Carbon",
          education: []
        },
        {
          name: "Victor Rojas",
          position: "President / CFO",
          education: [
            "Agricultural and Agribusiness Engineering - UCSG"
          ]
        },
        {
          name: "David Rojas",
          position: "COO / Business Developer Animal Nutrition",
          education: []
        }
      ]
    }
  };

  // Seleccionar el idioma correcto
  const t = texts[lang] || texts.es;

  return (
    <div className="py-20 px-4 md:px-12 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-800 mb-6 font-title">
            {t.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 font-title">
            {t.subtitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            {t.description}
          </p>
        </div>

        {/* Miembros del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {t.members.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105"
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
              
              {/* Educación */}
              {member.education.length > 0 && (
                <div className="w-full">
                  <div className="border-t border-gray-200 my-4"></div>
                  <ul className="space-y-2">
                    {member.education.map((edu, eduIndex) => (
                      <li key={eduIndex} className="text-gray-600 text-sm font-body">
                        • {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botón para volver */}
        <div className="mt-16 text-center">
          <Link 
            href={`/${lang}`}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-body"
          >
            {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;