import React from 'react';
import { getDictionary } from '@/dictionaries';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang);
  return {
    title: params.lang === 'es' ? "Red de Carbono - Únete a la red" : "Carbon Network - Join the network"
  };
}

export default async function AlianzaPage({ params }) {
  const dict = await getDictionary(params.lang);
  
  return (
    <main className="min-h-screen mt-12">
      <div className="pt-24 md:pt-28 max-w-7xl mx-auto px-4 md:px-8 ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-8 text-center font-title">
          {params.lang === 'es' ? 'Únete a la Red de Carbono' : 'Join the Carbon Network'}
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 font-body">
            {params.lang === 'es' 
              ? 'Forma parte de nuestra red de productores de biochar y contribuye a la regeneración de suelos y la captura de carbono en Ecuador.' 
              : 'Join our network of biochar producers and contribute to soil regeneration and carbon capture in Ecuador.'}
          </p>
          <p className="text-lg text-gray-700 mb-6 font-body">
            {params.lang === 'es' 
              ? 'Al unirte a nuestra red, tendrás acceso a capacitación, tecnología y un mercado establecido para tus productos de biochar.' 
              : 'By joining our network, you will have access to training, technology, and an established market for your biochar products.'}
          </p>
          <div className="mt-10 mb-8 text-center">
            <a href="#contacto" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-xl hover:bg-green-700 transition-all duration-300 font-body">
              {params.lang === 'es' ? 'Contáctanos para más información' : 'Contact us for more information'}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
