"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import redBackgroundImage from '../../../public/photos/red/red1.jpg';
import red2Image from '../../../public/photos/red/red2.jpg';
import red3Image from '../../../public/photos/red/red3.jpg';
import red4Image from '../../../public/photos/red/red4.jpg';
import equipoImage from '../../../public/photos/equipo.jpg';

// Animaciones
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

// Textos para internacionalización
const texts = {
  es: {
    // Sección principal
    title: "¿Listo para valorizar sus residuos con Pacchar?",
    subtitle: "¡Únete a nuestra comunidad de agricultores de carbono y genera ingresos por potenciar tus suelos!",
    
    // Por qué unirse
    whyJoinTitle: "¿Por qué unirse?",
    whyJoinText1: "En Pacchar sentimos pasión por la agricultura del carbono, contamos con 5 años de experiencia, un equipo profesional comprometido y una red de apoyo técnico, financiero y comercial que facilita la implementación del biochar de forma sencilla, agradable y eficiente.",
    whyJoinText2: "Como agricultor, su activo más importante es su suelo, junto a Pacchar tiene la oportunidad de mejorarlo sosteniblemente y almacenar carbono, generando ingresos adicionales por mejores cosechas y ayudar a combatir el cambio climático.",
    whyJoinText3: "Usted tiene los ingredientes, nosotros la receta. ¡Devolvamos juntos el carbono a sus suelos!",
    
    // Nuestra Comunidad
    communityTitle: "Nuestra Comunidad",
    communityText1: "Varias asociaciones y comunidades agrícolas de Ecuador, así como GADs y empresas privadas se han sumado al movimiento de Pacchar, concientizando la importancia de cuidar los suelos, producir alimentos sostenibles y remover carbono atmosférico.",
    communityText2: "La unión hace la fuerza, al igual que compartir conocimientos y experiencias, nuestra comunidad se basa en formar relaciones de apoyo duraderas entre sus miembros, a quienes Pacchar les brinda soporte constantemente.",
    
    // Requisitos
    requirementsTitle: "Requisitos",
    requirementsText1: "El biochar es un proceso sencillo; para que funcione eficientemente, debemos tener la disposición de organizar y preparar la biomasa residual del cultivo, recolectarla y colocarla en un sitio centralizado, donde se pueda secar a menos del 20% de humedad. En caso de ser biomasas muy gruesas, es necesario cortarlas en trozos de 15 centímetros o menos.",
    requirementsText2: "El proceso funciona con dos personas, se necesita un espacio de 16 m2 (similar al estacionamiento de una camioneta) y una fuente de agua o líquidos residuales, como orina de animales.",
    requirementsText3: "Finalmente, ¡Su compromiso de aplicar el biochar de regreso en su cultivo!",
    
    // Flujo de trabajo
    workflowTitle: "Flujo de trabajo",
    workflowStep1Number: "1.",
    workflowStep1Title: "Diseño",
    workflowStep1Text: "Visita y Evaluación de las condiciones de cada granja. Estudio de Factibilidad técnica y económica. Desarrollo contratos.",
    workflowStep2Number: "2.",
    workflowStep2Title: "Implementación",
    workflowStep2Text: "Entrega de equipos de producción. Entrenamiento en producción, aplicación y sistema dMRV.",
    workflowStep3Number: "3.",
    workflowStep3Title: "Acompañamiento",
    workflowStep3Text: "Asesoramiento en biochar y agronomía. Varias compensaciones por almacenar carbono.",
    
    // Contacto
    contactTitle: "Queremos conocerte",
    contactButton: "Contáctanos"
  },
  en: {
    // Main section
    title: "Ready to add value to your waste with Pacchar?",
    subtitle: "Join our community of carbon farmers and generate income by enhancing your soils!",
    
    // Why join
    whyJoinTitle: "Why join?",
    whyJoinText1: "At Pacchar, we are passionate about carbon agriculture. We have 5 years of experience, a committed professional team, and a technical, financial, and commercial support network that facilitates the implementation of biochar in a simple, pleasant, and efficient way.",
    whyJoinText2: "As a farmer, your most important asset is your soil. With Pacchar, you have the opportunity to improve it sustainably and store carbon, generating additional income from better harvests and helping to combat climate change.",
    whyJoinText3: "You have the ingredients, we have the recipe. Let's return carbon to your soils together!",
    
    // Our Community
    communityTitle: "Our Community",
    communityText1: "Various agricultural associations and communities in Ecuador, as well as local governments and private companies, have joined the Pacchar movement, raising awareness about the importance of caring for soils, producing sustainable food, and removing atmospheric carbon.",
    communityText2: "Unity is strength, as is sharing knowledge and experiences. Our community is based on forming lasting supportive relationships among its members, to whom Pacchar provides constant support.",
    
    // Requirements
    requirementsTitle: "Requirements",
    requirementsText1: "Biochar is a simple process; for it to work efficiently, we must be willing to organize and prepare the residual biomass from the crop, collect it, and place it in a centralized location where it can dry to less than 20% moisture. In the case of very thick biomass, it is necessary to cut it into pieces of 15 centimeters or less.",
    requirementsText2: "The process works with two people, requires a space of 16 m2 (similar to a pickup truck parking space), and a source of water or residual liquids, such as animal urine.",
    requirementsText3: "Finally, your commitment to applying the biochar back to your crop!",
    
    // Workflow
    workflowTitle: "Workflow",
    workflowStep1Number: "1.",
    workflowStep1Title: "Design",
    workflowStep1Text: "Visit and Evaluation of each farm's conditions. Technical and economic feasibility study. Contract development.",
    workflowStep2Number: "2.",
    workflowStep2Title: "Implementation",
    workflowStep2Text: "Delivery of production equipment. Training in production, application, and dMRV system.",
    workflowStep3Number: "3.",
    workflowStep3Title: "Support",
    workflowStep3Text: "Advice on biochar and agronomy. Various compensations for storing carbon.",
    
    // Contact
    contactTitle: "We want to meet you",
    contactButton: "Contact Us"
  }
};

const Red = () => {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');
  const t = isEnglish ? texts.en : texts.es;

  return (
    <div className="">
      {/* Hero Section con imagen de fondo */}
      <motion.section 
        className="relative h-screen w-full flex items-center justify-center py-6 md:py-10 mt-3 md:mt-3 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={redBackgroundImage}
            alt="Red de Agricultores Background"
            fill
            className="object-cover brightness-[0.65] object-center"
            priority
          />
        </div>
        
        {/* Contenido superpuesto */}
        <div className="relative z-10 text-center max-w-5xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-16 font-title"
            variants={fadeInUp}
          >
            {t.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-white font-body max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.section>
      
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">

          {/* Por qué unirse */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-8 font-title text-center"
              variants={fadeInUp}
            >
              {t.whyJoinTitle}
            </motion.h2>
            
            {/* Imagen debajo del título */}
            <motion.div 
              className="w-full max-w-5xl mx-auto mb-8 relative rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[450px]"
              variants={fadeInUp}
            >
              <Image
                src={red2Image}
                alt="Agricultores de Pacchar"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <motion.p 
                className="text-lg text-gray-700 font-body mb-4"
                variants={fadeInUp}
              >
                {t.whyJoinText1}
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 font-body mb-4"
                variants={fadeInUp}
              >
                {t.whyJoinText2}
              </motion.p>
              <motion.p 
                className="text-xl text-green-700 font-body font-bold text-center mt-6"
                variants={fadeInUp}
              >
                {t.whyJoinText3}
              </motion.p>
            </div>
          </motion.div>

          {/* Nuestra Comunidad */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-8 font-title text-center"
              variants={fadeInUp}
            >
              {t.communityTitle}
            </motion.h2>
            
            {/* Imagen debajo del título */}
            <motion.div 
              className="w-full max-w-5xl mx-auto mb-8 relative rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[450px]"
              variants={fadeInUp}
            >
              <Image
                src={red3Image}
                alt="Comunidad de agricultores Pacchar"
                fill
                className="object-contain md:object-cover"
                priority
              />
            </motion.div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <motion.p 
                className="text-lg text-gray-700 font-body mb-4"
                variants={fadeInUp}
              >
                {t.communityText1}
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 font-body"
                variants={fadeInUp}
              >
                {t.communityText2}
              </motion.p>
            </div>
          </motion.div>

          {/* Requisitos */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-8 font-title text-center"
              variants={fadeInUp}
            >
              {t.requirementsTitle}
            </motion.h2>
            
            {/* Imagen debajo del título */}
            <motion.div 
              className="w-full max-w-5xl mx-auto mb-8 relative rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[450px]"
              variants={fadeInUp}
            >
              <Image
                src={red4Image}
                alt="Requisitos para biochar"
                fill
                className="object-contain md:object-cover"
                priority
              />
            </motion.div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <motion.p 
                className="text-lg text-gray-700 font-body mb-4"
                variants={fadeInUp}
              >
                {t.requirementsText1}
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 font-body mb-4"
                variants={fadeInUp}
              >
                {t.requirementsText2}
              </motion.p>
              <motion.p 
                className="text-xl text-green-700 font-body font-bold text-center mt-6"
                variants={fadeInUp}
              >
                {t.requirementsText3}
              </motion.p>
            </div>
          </motion.div>

          {/* Flujo de trabajo */}
          <motion.div className="mb-2" variants={fadeInUp}>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-8 font-title text-center"
              variants={fadeInUp}
            >
              {t.workflowTitle}
            </motion.h2>
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                {/* Paso 1: Diseño */}
                <motion.div 
                  className="w-full md:w-1/3 flex flex-col items-center"
                  variants={fadeInUp}
                >
                  <div className="bg-[#0a2342] text-white font-bold py-4 px-6 rounded-t-lg w-full text-center border-2 border-yellow-600 border-b-0">
                    <div className="text-3xl md:text-4xl font-bold font-title">{t.workflowStep1Number} {t.workflowStep1Title}</div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-b-lg w-full border-2 border-yellow-800 min-h-[200px]">
                    <p className="text-gray-800 text-lg md:text-xl font-body">
                      {t.workflowStep1Text}
                    </p>
                  </div>
                </motion.div>

                {/* Flecha 1 - Horizontal para desktop */}
                <div className="hidden md:flex items-center justify-center">
                  <FaArrowRight className="text-yellow-800 text-4xl" />
                </div>
                
                {/* Flecha 1 - Vertical para móvil */}
                <div className="flex md:hidden items-center justify-center my-4">
                  <FaArrowDown className="text-yellow-800 text-4xl" />
                </div>

                {/* Paso 2: Implementación */}
                <motion.div 
                  className="w-full md:w-1/3 flex flex-col items-center"
                  variants={fadeInUp}
                >
                  <div className="bg-[#0a2342] text-white font-bold py-4 px-6 rounded-t-lg w-full text-center border-2 border-yellow-600 border-b-0">
                    <div className="text-3xl md:text-4xl font-bold font-title">{t.workflowStep2Number} {t.workflowStep2Title}</div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-b-lg w-full border-2 border-yellow-800 min-h-[200px]">
                    <p className="text-gray-800 text-lg md:text-xl font-body">
                      {t.workflowStep2Text}
                    </p>
                  </div>
                </motion.div>

                {/* Flecha 2 - Horizontal para desktop */}
                <div className="hidden md:flex items-center justify-center">
                  <FaArrowRight className="text-yellow-800 text-4xl" />
                </div>
                
                {/* Flecha 2 - Vertical para móvil */}
                <div className="flex md:hidden items-center justify-center my-4">
                  <FaArrowDown className="text-yellow-800 text-4xl" />
                </div>

                {/* Paso 3: Acompañamiento */}
                <motion.div 
                  className="w-full md:w-1/3 flex flex-col items-center"
                  variants={fadeInUp}
                >
                  <div className="bg-[#0a2342] text-white font-bold py-4 px-6 rounded-t-lg w-full text-center border-2 border-yellow-600 border-b-0">
                    <div className="text-3xl md:text-4xl font-bold font-title">{t.workflowStep3Number} {t.workflowStep3Title}</div>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-b-lg w-full border-2 border-yellow-800 min-h-[200px]">
                    <p className="text-gray-800 text-lg md:text-xl font-body">
                      {t.workflowStep3Text}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Sección final con imagen de fondo */}
      <motion.section 
        className="relative w-full py-32 md:py-48 lg:py-64 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={equipoImage}
            alt="Equipo Pacchar"
            fill
            className="object-cover brightness-[0.5] object-center"
            priority
          />
        </div>
        
        {/* Contenido superpuesto */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-title"
            variants={fadeInUp}
          >
            {t.contactTitle}
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfn1NgE0t530pV52sHDUX75UAJcZizaUdYccEiIKfycCfFEGw/viewform?usp=sharing&ouid=102453094771251563669"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 md:px-12 md:py-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold text-xl md:text-2xl lg:text-3xl inline-block shadow-lg font-body"
            >
              {t.contactButton}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Red;