"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsBuilding } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const Contact = ({ params }) => {
  // Detectar el idioma desde la ruta
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'es';
  
  // Textos en diferentes idiomas
  const texts = {
    es: {
      title: "Contacto",
      subtitle: "Estamos aquí para ayudarte",
      description: "Ponte en contacto con nosotros para más información sobre nuestros productos y servicios. Estaremos encantados de atenderte.",
      officesTitle: "Nuestras Oficinas",
      guayaquilTitle: "Guayaquil",
      quitoTitle: "Quito",
      contactTitle: "Información de Contacto",
      whatsapp: "WhatsApp",
      email: "Correo Electrónico",
      sendMessage: "Enviar Mensaje",
      formName: "Nombre",
      formEmail: "Correo Electrónico",
      formSubject: "Asunto",
      formMessage: "Mensaje",
      formSubmit: "Enviar"
    },
    en: {
      title: "Contact",
      subtitle: "We're here to help",
      description: "Get in touch with us for more information about our products and services. We'll be happy to assist you.",
      officesTitle: "Our Offices",
      guayaquilTitle: "Guayaquil",
      quitoTitle: "Quito",
      contactTitle: "Contact Information",
      whatsapp: "WhatsApp",
      email: "Email",
      sendMessage: "Send Message",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Submit"
    }
  };

  // Seleccionar el idioma correcto
  const t = texts[lang] || texts.es;

  return (
    <div className="py-20 px-4 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-gray-800 mb-8 font-title">
            {t.title}
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6 font-title">
            {t.subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-body leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        {/* Secciones de Contacto */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Sección Guayaquil */}
          <motion.div 
            className="bg-[#f8f8f8] rounded-xl shadow-xl p-8 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center mb-6">
              <BsBuilding className="text-green-600 text-4xl mr-4" />
              <h3 className="text-3xl font-bold text-gray-800 font-title">{t.guayaquilTitle}</h3>
            </div>
            
            {/* Dirección */}
            <div className="mb-8">
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="text-amber-800 text-2xl mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-2 font-title">{t.officesTitle}</h4>
                  <p className="text-gray-600 text-lg font-body">Av. Francisco de Orellana #111 y Av. Plaza Dañín, Oficina 52</p>
                </div>
              </div>
            </div>
            
            {/* Información de contacto */}
            <h4 className="text-xl font-semibold text-gray-700 mb-4 font-title">{t.contactTitle}</h4>
            
            {/* WhatsApp */}
            <div className="flex items-center mb-4">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <FaWhatsapp className="text-green-600 text-2xl" />
              </div>
              <div>
                <p className="text-base text-gray-500 font-body">{t.whatsapp}</p>
                <p className="text-lg font-medium text-gray-700 font-body">+593 98 765 4321</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <MdEmail className="text-amber-800 text-2xl" />
              </div>
              <div>
                <p className="text-base text-gray-500 font-body">{t.email}</p>
                <p className="text-lg font-medium text-gray-700 font-body">guayaquil@pacchar.com</p>
              </div>
            </div>
          </motion.div>

          {/* Sección Quito */}
          <motion.div 
            className="bg-[#f8f8f8] rounded-xl shadow-xl p-8 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="flex items-center mb-6">
              <BsBuilding className="text-green-600 text-4xl mr-4" />
              <h3 className="text-3xl font-bold text-gray-800 font-title">{t.quitoTitle}</h3>
            </div>
            
            {/* Dirección */}
            <div className="mb-8">
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="text-amber-800 text-2xl mr-3 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-2 font-title">{t.officesTitle}</h4>
                  <p className="text-gray-600 text-lg font-body">Av. De Los Shyris E9-38 y Bélgica</p>
                  <p className="text-gray-600 text-lg font-body">Edificio Shyris Century, Piso 12, Oficina 12 B</p>
                </div>
              </div>
            </div>
            
            {/* Información de contacto */}
            <h4 className="text-xl font-semibold text-gray-700 mb-4 font-title">{t.contactTitle}</h4>
            
            {/* WhatsApp */}
            <div className="flex items-center mb-4">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <FaWhatsapp className="text-green-600 text-2xl" />
              </div>
              <div>
                <p className="text-base text-gray-500 font-body">{t.whatsapp}</p>
                <p className="text-lg font-medium text-gray-700 font-body">+593 99 876 5432</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center">
              <div className="bg-green-50 p-3 rounded-full mr-4">
                <MdEmail className="text-amber-800 text-2xl" />
              </div>
              <div>
                <p className="text-base text-gray-500 font-body">{t.email}</p>
                <p className="text-lg font-medium text-gray-700 font-body">quito@pacchar.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Botón para volver */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Link 
            href={`/${lang}`}
            className="inline-block bg-green-600 hover:bg-amber-800 text-[#f8f8f8] font-bold text-2xl md:text-3xl py-4 md:py-5 px-10 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 font-body shadow-lg"
          >
            {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;