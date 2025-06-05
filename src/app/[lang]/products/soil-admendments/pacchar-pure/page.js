import React from 'react';
import PaccharPure from '../../../../components/PaccharPure';

export const metadata = {
  title: 'Pacchar Biochar | Pacchar',
  description: 'Biochar de alta calidad para mejorar la fertilidad del suelo. Mejora la retención de agua y nutrientes, aumenta la actividad microbiana y secuestra carbono de forma estable.',
};

export default function PaccharPurePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      <PaccharPure />
    </main>
  );
}
