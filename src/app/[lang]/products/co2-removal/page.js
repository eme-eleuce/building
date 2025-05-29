import React from 'react';
import CoRemoval from '@/app/components/Removal';

export const metadata = {
  title: 'CO2 | Pacchar',
  description: 'Programa de compensación de CO2 utilizando Pacchar Biochar para remover carbono de la atmósfera y generar ingresos adicionales.',
};

export default function Co2RemovalPage() {
  return (
    <main className="min-h-screen">
      <CoRemoval />
    </main>
  );
}