import Team from './Team';

export default function TeamPage({ params }) {
  // Asegurarnos de que los parámetros se pasen correctamente
  console.log('Page params:', params);
  return <Team params={params} />;
}
