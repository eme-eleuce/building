import Industrial from '@/app/components/Industrial';

export const metadata = {
  title: 'Industrial | Pacchar',
  description: 'Sistema de pirólisis industrial para producción de biochar a gran escala. Ideal para empresas agrícolas, plantas de tratamiento de residuos y operaciones forestales.',
};

export default function IndustrialPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-12">
      <Industrial />
    </main>
  );
}
