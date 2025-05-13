import Artisan from '@/app/components/Artisan';

export const metadata = {
  title: 'Artisan Pro | Pacchar',
  description: 'Sistema de pirólisis compacto para producción de biochar a pequeña escala. Ideal para agricultores, investigadores y emprendedores.',
};

export default function ArtisanPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      <Artisan />
    </main>
  );
}
