import { Oswald, Quattrocento } from "next/font/google";
import "../globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getDictionary } from "@/dictionaries";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const quattrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quattrocento',
  display: 'swap',
});

export async function generateMetadata({ params }) {
  // Get the dictionary based on the current locale
  const { lang } = params; // Destructuring to avoid the error
  const dict = await getDictionary(lang);
  
  return {
    title: "Pacchar | Biochar Solutions",
    description: "Building",
    icons: {
      icon: '/favicon.ico',
      apple: '/favicon.ico',
      shortcut: '/favicon.ico'
    }
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = params; // Destructuring to avoid the error
  const dict = await getDictionary(lang);
  
  return (
    <div className={`${oswald.variable} ${quattrocento.variable}`}>
      <Navbar dict={dict} />
      <main>
        {children}
      </main>
      <Footer dict={dict} />
    </div>
  );
}
