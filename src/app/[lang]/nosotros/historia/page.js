import React from 'react';
import History from '@/app/components/History';

export const metadata = {
  title: 'Historia | Pacchar',
  description: 'Descubre la trayectoria de Pacchar desde su fundación hasta nuestros días, y conoce nuestra visión para el futuro.',
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <History />
    </main>
  );
}