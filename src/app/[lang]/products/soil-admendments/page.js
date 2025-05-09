import React from 'react';
import SoilProducts from '../../../components/Soil-products';

export const metadata = {
  title: 'Productos para Enmienda de Suelos | Pacchar',
  description: 'Descubre nuestra línea de productos para enmienda de suelos: Pacchar Pure (Biochar), COMBI y Active Compost. Soluciones naturales para mejorar la calidad y fertilidad de su suelo.',
};

export default function SoilProductsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      <SoilProducts />
    </main>
  );
}
