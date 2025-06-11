import React from 'react';
import BiocharPoints from '@/app/components/Biochar-points';

export const metadata = {
  title: 'CFN | Pacchar'
};

export default function BiocharPointsPage({ params }) {
  return (
    <main className="flex min-h-screen flex-col justify-between pt-24 pb-12 w-full">
      <BiocharPoints />
    </main>
  );
}
