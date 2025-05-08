import { getDictionary } from "@/dictionaries";
import Hero from "@/app/components/Hero";
import Section1 from "@/app/components/Section1";

export const metadata = {
  title: 'Pacchar | Biochar Solutions',
  description: 'Bienvenido a Pacchar',
};

export default async function Home({ params }) {
  const { lang } = params; // Destructuring to avoid the error
  const dict = await getDictionary(lang);
  
  return (
    <div>
      <Hero />
      <Section1 />
    </div>
  );
}
