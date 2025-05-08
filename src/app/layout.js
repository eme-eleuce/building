import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ['latin'], // Subconjuntos de caracteres (opcional)
  weight: ['400'], // Pesos de la fuente
  variable: '--font-roboto-mono', // Variable CSS para usar la fuente
});

export const metadata = {
  title: "Pacchar | Biochar Solutions",
  description: "Building",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        {children}
      </body>
    </html>
  );
}
