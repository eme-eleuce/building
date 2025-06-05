import React from 'react';
import Red from '../../../components/Red';

export const metadata = {
  title: 'Red | Pacchar',
  description: 'Red de alianzas para la regeneración de suelos y la captura de carbono en Ecuador.',
};

export default function AlianzaPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      <Red />
    </main>
  );
}
