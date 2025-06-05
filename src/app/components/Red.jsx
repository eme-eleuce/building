"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          {/* Sección principal */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-600 mb-6 font-title"
              variants={fadeInUp}
            >
              {t.title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 font-body max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              {t.subtitle}
            </motion.p>
          </motion.div>

          {/* Por qué unirse */}
          <motion.div className="mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-green-600 mb-6 font-title text-center"
              variants={fadeInUp}
            >
              {t.whyJoinTitle}
            </motion.h2>
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
              className="text-3xl md:text-4xl font-bold text-green-600 mb-6 font-title text-center"
              variants={fadeInUp}
            >
              {t.communityTitle}
            </motion.h2>
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
              className="text-3xl md:text-4xl font-bold text-green-600 mb-6 font-title text-center"
              variants={fadeInUp}
            >
              {t.requirementsTitle}
            </motion.h2>
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
          <motion.div className="mb-16" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-green-600 mb-6 font-title text-center"
              variants={fadeInUp}
            >
              {t.workflowTitle}
            </motion.h2>
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md flex justify-center">
              {/* Aquí se puede añadir un diagrama o pasos del flujo de trabajo */}
              <motion.p 
                className="text-lg text-gray-500 font-body italic"
                variants={fadeInUp}
              >
                {isEnglish ? "Workflow diagram coming soon" : "Diagrama de flujo próximamente"}
              </motion.p>
            </div>
          </motion.div>

          {/* Queremos conocerte */}
          <motion.div className="text-center" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-green-600 mb-6 font-title"
              variants={fadeInUp}
            >
              {t.contactTitle}
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Link 
                href={`/${pathname.includes('/en') ? 'en/contact' : 'es/contacto'}`}
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold text-xl inline-block shadow-lg font-body"
              >
                {t.contactButton}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Red;