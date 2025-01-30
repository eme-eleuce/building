import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const robotoMono = Roboto_Mono({
  subsets: ['latin'], // Subconjuntos de caracteres (opcional)
  weight: ['400'], // Pesos de la fuente
  variable: '--font-roboto-mono', // Variable CSS para usar la fuente
});

export const metadata = {
  title: "Pacchar",
  description: "Building",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
        className={robotoMono.className}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
