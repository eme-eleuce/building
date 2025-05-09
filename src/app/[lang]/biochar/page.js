import React from 'react';
import Biochar from '../../components/Biochar';

export const metadata = {
  title: 'Biochar | Pacchar',
  description: 'Descubre la historia, proceso de fabricación y beneficios del biochar, una técnica ancestral reinventada con ciencia y tecnología moderna.',
};

export default function BiocharPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      <Biochar />
    </main>
  );
}