import React from 'react';
import ActiveCompost from '../../../../components/ActiveCompost';

export const metadata = {
  title: 'Bioactive Compost | Pacchar',
  description: 'Compost de alta calidad rico en materia orgánica y microorganismos beneficiosos. Mejora la estructura del suelo y aporta nutrientes esenciales de forma inmediata.',
};

export default function ActiveCompostPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      <ActiveCompost />
    </main>
  );
}
