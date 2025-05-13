"use client";

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import biocharImage from '../../../public/photos/biochar.jpg';
import Comunidad from '../../../public/photos/comunidad.jpg';
import Team from '../../../public/photos/equipo.jpg';
import Aliado from '../../../public/photos/aliado.jpg';

// Importando todos los logos
import artiLogo from '../../../public/photos/logos/arti.jpg';
import campoTrackLogo from '../../../public/photos/logos/campo-track.jpg';
import reLogo from '../../../public/photos/logos/re.png';
import cuencaLogo from '../../../public/photos/logos/cuenca.png';
import ibarraLogo from '../../../public/photos/logos/ibarra.png';
import gyeLogo from '../../../public/photos/logos/logo-gye.png';
import tmaLogo from '../../../public/photos/logos/tma.png';
import pachaFestLogo from '../../../public/photos/logos/pacha-fest.jpg';
import agearthLogo from '../../../public/photos/logos/agearth.jpg';
import asotecaLogo from '../../../public/photos/logos/asoteca.png';
import dhlLogo from '../../../public/photos/logos/dhl.jpg';
import hersheysLogo from '../../../public/photos/logos/hersheys.jpg';
import holcimLogo from '../../../public/photos/logos/holcim.png';
import lindtLogo from '../../../public/photos/logos/lindt.png';
import novopanLogo from '../../../public/photos/logos/novopan.jpg';
import olamLogo from '../../../public/photos/logos/olam.png';
import carbonLogo from '../../../public/photos/logos/carbon.png';
import hempLogo from '../../../public/photos/logos/hemp.png';
import herboreLogo from '../../../public/photos/logos/herbore.png';

// Textos para internacionalización
const texts = {
  es: {
    // Sección 1
    section1Title: "En Pacchar creamos valor a partir de residuos agroforestales",
    section1Description: "Nuestras tecnologías de Pirólisis y Compostaje nos permiten producir biochar, compost y otros productos agroecológicos de alta calidad con materias primas de fuentes responsables.",
    section1Button: "Conoce más sobre el Biochar aquí",
    
    // Sección 2
    section2Title: "Nuestro Modelo de Trabajo con Comunidades",
    section2Description: "Trabajamos directamente con comunidades agrícolas locales, mejorando la salud del suelo al restaurar su carbono orgánico y biodiversidad. Nuestro modelo de negocio inclusivo mejora la producción agrícola, genera alimentos más saludables, agua limpia y reduce la huella de carbono de nuestros aliados.",
    
    // Sección 3 - Stats
    section3Title: "Nuestro Impacto",
    section3Description: "Desde nuestra fundación, hemos logrado hitos significativos en nuestra misión de combatir el cambio climático. Nuestra trayectoria demuestra un crecimiento constante en la captura de carbono, beneficiando a comunidades agrícolas y ecosistemas locales.",
    section3Stat1Label: "Toneladas de CO₂ removidas",
    section3Stat2Label: "Agricultores activos",
    section3Stat3Label: "Número de hectáreas beneficiadas",
    section3Timeline1: "Fundación",
    section3Timeline2: "10 tCO₂",
    section3Timeline3: "500 tCO₂",
    section3Timeline4: "10.000 tCO₂",
    section3Timeline5: "100.000 tCO₂",
    section3Timeline6: "10m tCO₂",
    section3AchievementTitle: "La evolución de Pacchar",
    section3Achievement1: "Iniciamos operaciones con tecnología de pirólisis a pequeña escala",
    section3Achievement2: "Alcanzamos nuestras primeras 10 toneladas de CO₂ capturadas",
    section3Achievement3: "Expandimos nuestro impacto a 500 toneladas y comenzamos a trabajar con comunidades agrícolas",
    section3Achievement4: "Meta: 10.000 toneladas y expansión a nuevas regiones",
    section3Achievement5: "Meta: 100.000 toneladas y reconocimiento internacional",
    section3Achievement6: "Visión a largo plazo: 10 millones de toneladas de CO₂ capturadas",
    
    // Sección 4 - Aliados
    section4Title: "Nuestra red de valor",
    section4Description: "Trabajamos junto a empresas, gobiernos, ONGs y corporaciones para crear un impacto positivo en el medio ambiente y las comunidades locales.",
    section4Category1: "Empresas",
    section4Category2: "GADs",
    section4Category3: "ONGs",
    section4Category4: "Corporaciones",
    section4ContactTitle: "¿Quieres ser parte de nuestra red de aliados?",
    section4ContactDescription: "Trabajamos con empresas, organizaciones y gobiernos comprometidos con la sostenibilidad y la acción climática.",
    section4ContactButton: "Contáctanos",
    section4JoinButton: "Únete a la red",
    
    // Sección 5 - Equipo
    section5Title: "Nuestro Equipo",
    section5Description1: "Somos un equipo diverso y apasionado de científicos, ingenieros, agricultores y emprendedores comprometidos con la creación de soluciones climáticas escalables y sostenibles.",
    section5Description2: "¿Quieres conocer más sobre nuestro viaje hacia soluciones climáticas globales? Haz clic a continuación para descubrir más.",
    section5Button: "Conócenos"
  },
  en: {
    // Section 1
    section1Title: "At Pacchar we create value from agroforestry waste",
    section1Description: "Our Pyrolysis and Composting technologies allow us to produce biochar, compost, and other high-quality agroecological products with raw materials from responsible sources.",
    section1Button: "Learn more about Biochar",
    
    // Section 2
    section2Title: "Our Community Work Model",
    section2Description: "We work directly with local agricultural communities, enhancing soil health by restoring its organic carbon and biodiversity. Our inclusive business model improves agricultural production, generates healthier food, clean water, and reduces the carbon footprint of our allies.",
    
    // Section 3 - Stats
    section3Title: "Our Impact",
    section3Description: "Since our foundation, we have achieved significant milestones in our mission to combat climate change. Our journey demonstrates consistent growth in carbon capture, benefiting agricultural communities and local ecosystems.",
    section3Stat1Label: "Tonnes of CO₂ removed",
    section3Stat2Label: "Active farmers",
    section3Stat3Label: "Number of benefited hectares",
    section3Timeline1: "Founded",
    section3Timeline2: "10 tCO₂",
    section3Timeline3: "500 tCO₂",
    section3Timeline4: "10,000 tCO₂",
    section3Timeline5: "100,000 tCO₂",
    section3Timeline6: "10m tCO₂",
    section3AchievementTitle: "The Pacchar Evolution",
    section3Achievement1: "Started operations with small-scale pyrolysis technology",
    section3Achievement2: "Reached our first 10 tonnes of CO₂ captured",
    section3Achievement3: "Expanded our impact to 500 tonnes and began working with farming communities",
    section3Achievement4: "Goal: 10,000 tonnes and expansion to new regions",
    section3Achievement5: "Goal: 100,000 tonnes and international recognition",
    section3Achievement6: "Long-term vision: 10 million tonnes of CO₂ captured",
    
    // Section 4 - Allies
    section4Title: "Stakeholder Network",
    section4Description: "We work together with companies, governments, NGOs, and corporations to create a positive impact on the environment and local communities.",
    section4Category1: "Companies",
    section4Category2: "GADs",
    section4Category3: "NGOs",
    section4Category4: "Corporations",
    section4ContactTitle: "Want to be part of our network of allies?",
    section4ContactDescription: "We work with companies, organizations, and governments committed to sustainability and climate action.",
    section4ContactButton: "Contact us",
    section4JoinButton: "Join the network",
    
    // Section 5 - Team
    section5Title: "Our Team",
    section5Description1: "We are a diverse and passionate team of scientists, engineers, farmers, and entrepreneurs committed to creating scalable and sustainable climate solutions.",
    section5Description2: "Want to learn more about our journey towards global climate solutions? Click below to find out more.",
    section5Button: "About us"
  }
};

const Section1 = () => {
  const [t, setT] = useState(texts.es);
  const pathname = usePathname();
  
  // Referencia para la fila de logos
  const logosRowRef = useRef(null);

  // Función para desplazar la fila hacia la izquierda
  const scrollLeft = () => {
    if (logosRowRef.current) {
      logosRowRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Función para desplazar la fila hacia la derecha
  const scrollRight = () => {
    if (logosRowRef.current) {
      logosRowRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Detectar el idioma basado en la URL
    if (pathname.includes('/en')) {
      setT(texts.en);
    } else {
      setT(texts.es);
    }
  }, [pathname]); // Fallback to Spanish if language not found
  
  // Referencias para elementos animados
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  
  // Valores finales para los contadores
  const finalCount1 = 12998;
  const finalCount2 = 8;
  const finalCount3 = 125;
  
  // Función para verificar si un elemento está visible en la pantalla
  const checkVisibility = () => {
    if (!statsRef.current) return;
    
    const rect = statsRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible && !isStatsVisible) {
      setIsStatsVisible(true);
    }
  };
  
  // Efecto para detectar cuando el elemento está visible
  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar visibilidad inicial
    
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);
  
  // Efecto para animar los contadores cuando el elemento es visible
  useEffect(() => {
    if (!isStatsVisible) return;
    
    // Duración de la animación en ms
    const duration = 2000;
    const interval = 20;
    
    // Calcular incrementos por intervalo
    const increment1 = Math.ceil(finalCount1 / (duration / interval));
    const increment2 = Math.ceil(finalCount2 / (duration / interval));
    const increment3 = Math.ceil(finalCount3 / (duration / interval));
    
    // Animar contador 1
    const timer1 = setInterval(() => {
      setCount1(prev => {
        const newValue = prev + increment1;
        return newValue >= finalCount1 ? finalCount1 : newValue;
      });
    }, interval);
    
    // Animar contador 2
    const timer2 = setInterval(() => {
      setCount2(prev => {
        const newValue = prev + increment2;
        return newValue >= finalCount2 ? finalCount2 : newValue;
      });
    }, interval);
    
    // Animar contador 3
    const timer3 = setInterval(() => {
      setCount3(prev => {
        const newValue = prev + increment3;
        return newValue >= finalCount3 ? finalCount3 : newValue;
      });
    }, interval);
    
    // Limpiar intervalos
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [isStatsVisible]);
  return (
    <div className="w-full">
      {/* Primera Sección - Pantalla Completa */}
      <section id="section1" className="min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-12 bg-white relative">
        {/* Imagen de fondo (visible en móvil) */}
        <div className="absolute inset-0 md:hidden w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image 
              src={biocharImage} 
              alt="Biochar Image" 
              fill
              priority
              quality={70}
              className="object-cover brightness-[0.6]"
            />
          </div>
        </div>
        
        {/* Imagen de fondo para desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image 
              src={biocharImage} 
              alt="Biochar Image" 
              fill
              priority
              quality={70}
              className="object-cover brightness-[0.7]"
            />
          </div>
        </div>
        
        {/* Contenedor principal con padding para mantener espacio en blanco en los bordes */}
        <div className="w-full max-w-7xl mx-auto relative z-10 px-4 md:px-12 flex justify-end">
          {/* Texto en el lado derecho encima de la imagen */}
          <div className="w-full p-6 md:p-10 flex flex-col justify-center items-center md:items-start bg-white/80 backdrop-blur-md rounded-xl shadow-lg max-w-2xl">
            {/* Contenedor con fondo semitransparente y blur */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-600 mb-8 font-title text-center md:text-left">
              {t.section1Title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-body text-justify">
              {t.section1Description}
            </p>
            <div className="mt-8 self-center md:self-start">
              <Link 
                href={`/${pathname.includes('/en') ? 'en/biochar' : 'es/biochar'}`}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg font-body"
              >
                {t.section1Button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda Sección - Servicio */}
      <section id="section2" className="py-20 px-4 md:px-12 bg-white">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center">
          {/* Texto en el lado izquierdo */}
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-green-600 mb-8 text-center md:text-left font-title">
              {t.section2Title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-body text-justify mb-8">
              {t.section2Description}
            </p>
            
            {/* Botón para unirse a la red */}
            <div className="flex justify-center md:justify-start mt-6">
              <Link 
                href={`/${pathname.includes('/en') ? 'en/contact' : 'es/contacto'}`}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-body text-lg"
              >
                {t.section4JoinButton}
              </Link>
            </div>
          </div>
          
          {/* Imagen en el lado derecho */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src={Comunidad} 
                alt="Biochar Image" 
                fill
                priority
                quality={70}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tercera Sección - Estadísticas */}
      <section 
        id="section3" 
        className="py-20 px-4 md:px-12 bg-amber-50"
        ref={statsRef}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center text-green-600 mb-12 transition-all duration-1000 font-title ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {t.section3Title}
          </h2>
          <p className="text-lg text-center mb-10 max-w-3xl mx-auto font-body">
            {t.section3Description}
          </p>
          <div className={`bg-yellow-950 rounded-3xl p-8 shadow-lg text-white transition-all duration-1000 ${isStatsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <style jsx global>{`
              .text-shadow-sm {
                text-shadow: 1px 1px 2px rgba(100, 100, 100, 0.5);
              }
            `}</style>
            
            {/* Contenedor de estadísticas */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              {/* Primera estadística */}
              <div className="text-center mb-8 md:mb-0">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-title">{count1.toLocaleString()}</h3>
                <p className="text-center text-white mt-2 text-shadow-sm font-body">
                  {t.section3Stat1Label.split('CO₂').map((part, i, arr) => 
                    i < arr.length - 1 ? 
                      <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                      part
                  )}
                </p>
              </div>
              
              {/* Segunda estadística */}
              <div className="text-center mb-8 md:mb-0">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-title">{count2}</h3>
                <p className="text-center text-white mt-2 text-shadow-sm font-body">
                  {t.section3Stat2Label}
                </p>
              </div>
              
              {/* Tercera estadística */}
              <div className="text-center">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-title">{count3}</h3>
                <p className="text-center text-white mt-2 text-shadow-sm font-body">
                  {t.section3Stat3Label}
                </p>
              </div>
            </div>
            
            {/* Barra de progreso */}
            <div className="relative h-4 bg-yellow-900 rounded-full overflow-hidden mb-6">
              <div 
                className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-2000 ease-out"
                style={{ 
                  width: isStatsVisible ? '60%' : '0%',
                  boxShadow: isStatsVisible ? '0 0 10px 2px rgba(74, 222, 128, 0.5)' : 'none',
                  animation: isStatsVisible ? 'pulse 2s infinite' : 'none'
                }}
              ></div>
            </div>
            
            {/* Estilos para la animación de pulso */}
            <style jsx global>{`
              @keyframes pulse {
                0% {
                  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
                }
                70% {
                  box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
                }
                100% {
                  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
                }
              }
            `}</style>
            
            {/* Timeline */}
            <div className={`flex justify-between text-sm text-white text-shadow-sm font-body transition-all duration-1000 delay-500 ${isStatsVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-center">
                <p>{t.section3Timeline1}</p>
                <p>2021</p>
              </div>
              <div className="text-center">
                <p>{t.section3Timeline2.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
                <p>2022</p>
              </div>
              <div className="text-center">
                <p>{t.section3Timeline3.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
                <p>2023</p>
              </div>
              <div className="text-center">
                <p>{t.section3Timeline4.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
                <p>2024</p>
              </div>
              <div className="text-center">
                <p>{t.section3Timeline5.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
                <p>2025</p>
              </div>
              <div className="text-center">
                <p>{t.section3Timeline6.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
                <p>2030</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logros y Metas */}
        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center text-green-600 font-title">
            {t.section3AchievementTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                <p className="font-semibold text-lg">2020 - {t.section3Timeline1}</p>
              </div>
              <p className="text-gray-700 font-body">{t.section3Achievement1}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                <p className="font-semibold text-lg">2022 - {t.section3Timeline2.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
              </div>
              <p className="text-gray-700 font-body">{t.section3Achievement2}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                <p className="font-semibold text-lg">2023 - {t.section3Timeline3.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
              </div>
              <p className="text-gray-700 font-body">{t.section3Achievement3}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-yellow-600 rounded-full mr-3"></div>
                <p className="font-semibold text-lg">2024 - {t.section3Timeline4.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
              </div>
              <p className="text-gray-700 font-body">{t.section3Achievement4}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-yellow-600 rounded-full mr-3"></div>
                <p className="font-semibold text-lg">2025 - {t.section3Timeline5.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
              </div>
              <p className="text-gray-700 font-body">{t.section3Achievement5}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-3">
                <div className="w-4 h-4 bg-yellow-600 rounded-full mr-3"></div>
                <p className="font-semibold text-lg">2030 - {t.section3Timeline6.split('CO₂').map((part, i, arr) => 
                  i < arr.length - 1 ? 
                    <React.Fragment key={i}>{part}CO<sub>2</sub></React.Fragment> : 
                    part
                )}</p>
              </div>
              <p className="text-gray-700 font-body">{t.section3Achievement6}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuarta Sección - Aliados y Colaboradores */}
      <section id="section4" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center text-green-600 mb-12 font-title">
            {t.section4Title}
          </h2>
          <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto font-body">
            {t.section4Description}
          </p>
          
          {/* Logos con carrusel infinito - una sola fila */}
          <div className="bg-[#f8f8f8] rounded-xl shadow-lg p-8 mb-12 md:mx-[-2%] lg:mx-[-4%] xl:mx-[-5%]">
            {/* Título eliminado para evitar repetición */}
            
            {/* Carrusel infinito con una sola fila */}
            <div className="logos-container">

              <div className="logos-row-wrapper">
                <div ref={logosRowRef} className="logos-row infinite-scroll">
                  {/* Primera instancia de logos */}
                  {[
                    { src: artiLogo, alt: "Arti" },
                    { src: campoTrackLogo, alt: "Campo Track" },
                    { src: reLogo, alt: "RE" },
                    { src: cuencaLogo, alt: "Cuenca" },
                    { src: ibarraLogo, alt: "Ibarra" },
                    { src: gyeLogo, alt: "Guayaquil" },
                    { src: tmaLogo, alt: "TMA" },
                    { src: pachaFestLogo, alt: "Pacha Fest" },
                    { src: agearthLogo, alt: "Agearth" },
                    { src: asotecaLogo, alt: "Asoteca" },
                    { src: dhlLogo, alt: "DHL" },
                    { src: hersheysLogo, alt: "Hersheys" },
                    { src: holcimLogo, alt: "Holcim" },
                    { src: lindtLogo, alt: "Lindt" },
                    { src: novopanLogo, alt: "Novopan" },
                    { src: olamLogo, alt: "Olam" },
                    { src: carbonLogo, alt: "Carbon" },
                    { src: hempLogo, alt: "Hemp" },
                    { src: herboreLogo, alt: "Herbore" },
                  ].map((logo, index) => (
                    <div 
                      key={`logo-${index}`} 
                      className="logo-container mx-3 p-4 bg-white rounded-lg h-24 md:h-28 min-w-[150px] md:min-w-[180px] lg:min-w-[190px] shadow-sm flex justify-center items-center"
                    >
                      <Image 
                        src={logo.src} 
                        alt={logo.alt} 
                        width={120} 
                        height={80}
                        className="object-contain max-h-16 md:max-h-20"
                      />
                    </div>
                  ))}
                  
                  {/* Repetición de logos para efecto infinito */}
                  {[
                    { src: artiLogo, alt: "Arti" },
                    { src: campoTrackLogo, alt: "Campo Track" },
                    { src: reLogo, alt: "RE" },
                    { src: cuencaLogo, alt: "Cuenca" },
                    { src: ibarraLogo, alt: "Ibarra" },
                    { src: gyeLogo, alt: "Guayaquil" },
                    { src: tmaLogo, alt: "TMA" },
                    { src: pachaFestLogo, alt: "Pacha Fest" },
                    { src: agearthLogo, alt: "Agearth" },
                    { src: asotecaLogo, alt: "Asoteca" },
                    { src: dhlLogo, alt: "DHL" },
                    { src: hersheysLogo, alt: "Hersheys" },
                    { src: holcimLogo, alt: "Holcim" },
                    { src: lindtLogo, alt: "Lindt" },
                    { src: novopanLogo, alt: "Novopan" },
                    { src: olamLogo, alt: "Olam" },
                    { src: carbonLogo, alt: "Carbon" },
                    { src: hempLogo, alt: "Hemp" },
                    { src: herboreLogo, alt: "Herbore" },
                  ].map((logo, index) => (
                    <div 
                      key={`logo-dup-${index}`} 
                      className="logo-container mx-3 p-4 bg-white rounded-lg h-24 md:h-28 min-w-[150px] md:min-w-[180px] lg:min-w-[190px] shadow-sm flex justify-center items-center"
                    >
                      <Image 
                        src={logo.src} 
                        alt={logo.alt} 
                        width={120} 
                        height={80}
                        className="object-contain max-h-16 md:max-h-20"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Flechas de navegación eliminadas */}
            </div>
          </div>
          
          {/* Sección de contacto */}
          <div className="text-center mt-24 mb-16 relative rounded-xl shadow-xl overflow-hidden max-w-6xl mx-auto">
            <div className="absolute inset-0 z-0">
              <Image 
                src={Aliado} 
                alt="Biochar Background" 
                fill
                className="object-cover brightness-50"
              />
            </div>
            <div className="relative z-10 p-16 md:p-20 text-[#f8f8f8]">
              <h3 className="text-5xl md:text-6xl font-extrabold mb-10 text-center font-title">
                {t.section4ContactTitle}
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed mb-12 text-center font-body max-w-3xl mx-auto">
                {t.section4ContactDescription}
              </p>
              <div className="flex justify-center">
                <Link 
                  href={`/${pathname.includes('/en') ? 'en/contact' : 'es/contacto'}`}
                  className="bg-[#f8f8f8] text-green-600 font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 shadow-lg hover:bg-green-600 hover:text-[#f8f8f8] hover:scale-105 font-body"
                >
                  {t.section4ContactButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quinta Sección - Equipo */}
      <section id="section5" className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Imagen del lado izquierdo */}
          <div className="w-full md:w-1/2 p-4 md:p-8">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src={Team} 
                alt="Biochar Team" 
                fill
                priority
                quality={70}
                className="object-cover object-center"
              />
            </div>
          </div>
          
          {/* Texto del lado derecho */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 font-title">
              {t.section5Title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-body text-justify">
              {t.section5Description1}
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-body text-justify">
              {t.section5Description2}
            </p>
            <div className="mt-4">
              <Link 
                href={`/${pathname.includes('/en') ? 'en/equipo' : 'es/equipo'}`}
                className="inline-block bg-lime-300 hover:bg-lime-400 text-green-950 font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105 font-body"
              >
                {t.section5Button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1