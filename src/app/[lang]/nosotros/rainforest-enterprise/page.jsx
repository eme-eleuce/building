"use client";

import React from 'react';
import RainforestAlliance from '../../../components/RainforestAlliance';
import Footer from '../../../components/Footer';

export default function RainforestEnterprisePage({ params }) {
  return (
    <main className="flex min-h-screen flex-col">
      <RainforestAlliance />
      <Footer dict={{ footer: {} }} />
    </main>
  );
}
