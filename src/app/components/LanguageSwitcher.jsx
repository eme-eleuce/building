"use client";

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { locales } from '@/middleware';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Importar las imágenes de banderas directamente
import banderaEspana from '../../../public/flags/espana.png';
import banderaUSA from '../../../public/flags/estados-unidos.png';

export default function LanguageSwitcher({ currentLocale, scrolled }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Efecto para restaurar la posición de desplazamiento después de la navegación
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      localStorage.removeItem('scrollPosition');
    }
  }, []);
  
  // Function to get the path with the new locale
  const getPathWithNewLocale = (locale) => {
    if (!pathname) return '/';
    
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  
  // Get the opposite locale
  const targetLocale = currentLocale === 'en' ? 'es' : 'en';
  
  // Banderas para ambos idiomas
  const spanishFlag = banderaEspana;
  const englishFlag = banderaUSA;
  
  return (
    <div className="flex items-center gap-2 relative">
      <a 
        onClick={(e) => {
          e.preventDefault();
          // Guardar la posición actual de desplazamiento
          localStorage.setItem('scrollPosition', window.scrollY.toString());
          // Navegar a la nueva URL
          router.push(getPathWithNewLocale(targetLocale));
        }}
        className="flex items-center relative transition-all duration-300 cursor-pointer"
        aria-label={`Cambiar a idioma ${targetLocale === 'es' ? 'español' : 'inglés'}`}
      >
        {/* Bandera de España */}
        <div className="relative">
          <motion.div
            animate={{
              scale: currentLocale === 'es' ? 1 : 0.7,
              opacity: currentLocale === 'es' ? 1 : 0.6,
              x: currentLocale === 'es' ? 0 : -5,
              zIndex: currentLocale === 'es' ? 10 : 5
            }}
            transition={{ duration: 0.3 }}
            className="relative w-10 h-10"
          >
            <Image 
              src={spanishFlag}
              alt="Bandera de España"
              fill
              className={`object-cover rounded-full border-2 ${currentLocale === 'es' ? 'border-green-600 shadow-md' : 'border-white/50'}`}
              priority
            />
          </motion.div>
        </div>
        
        {/* Bandera de Estados Unidos */}
        <div className="relative">
          <motion.div
            animate={{
              scale: currentLocale === 'en' ? 1 : 0.7,
              opacity: currentLocale === 'en' ? 1 : 0.6,
              x: currentLocale === 'en' ? 0 : 5,
              zIndex: currentLocale === 'en' ? 10 : 5
            }}
            transition={{ duration: 0.3 }}
            className="relative w-10 h-10 ml-1"
          >
            <Image 
              src={englishFlag}
              alt="Bandera de Estados Unidos"
              fill
              className={`object-cover rounded-full border-2 ${currentLocale === 'en' ? 'border-green-600 shadow-md' : 'border-white/50'}`}
              priority
            />
          </motion.div>
        </div>
      </a>
    </div>
  );
}
