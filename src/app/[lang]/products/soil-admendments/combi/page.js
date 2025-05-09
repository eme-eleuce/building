import React from 'react';
import Combi from '../../../../components/Combi';

export const metadata = {
  title: 'COMBI | Pacchar',
  description: 'La combinación perfecta de biochar y compost activo. Mejora rápidamente la calidad del suelo y promueve un crecimiento vegetal más vigoroso y saludable.',
};

export default function CombiPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      <Combi />
    </main>
  );
}
