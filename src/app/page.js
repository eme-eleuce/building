import Image from "next/image";
import Hero from "./components/Hero";
import Head from "next/head";
import Section1 from "./components/Section1";

export default function Home() {
  return (
    <div> 

      <Head>
        <title>Pacchar</title>
        <meta name="description" content="Bienvenido a Pacchar" />
        <link 
         rel="icon" 
         href="/icon.png" 
         type="image/<generated>"
         sizes="32x32"/>
      </Head>
     <Hero/>
     <Section1/>
     
    </div>
  );
}
