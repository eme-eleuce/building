import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

const Section1 = () => {
  return (
    <section id="section1" className="w-full min-h-screen py-8">
      <h2 className="text-center text-5xl font-bold mt-1 mb-12 py-6">Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 pb-10 place-items-center">
        {/* Primer Documento */}
        <div className="flex flex-col items-center justify-between p-6 border-4 border-gray-600 rounded-lg shadow-md bg-white w-full max-w-2xl h-[300px]">
          <Image
            src="/pachar-h.png"
            alt="/"
            width={300}
            height={300}
            className="w-[250px] h-[150px] object-contain"
          />
          <p className="text-center mb-4 font-bold text-lg md:text-xl">
                Sobre Nosotros / Nuestra Empresa
          </p>
          <a
            href="https://drive.google.com/file/d/1_57rhCVYCaUvmmxsX2R5Wttzprik7IeP/view?usp=drivesdk" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#007f00] text-white px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl rounded-lg hover:bg-[#00b200] transition-colors"
          >
            Haz click aquí
          </a>
        </div>

        {/* Segundo Documento */}
        <div className="flex flex-col items-center justify-between p-6 border-4 border-gray-600 rounded-lg shadow-md bg-white w-full max-w-2xl h-[300px]">
          <IoDocumentTextOutline size={150} className="text-gray-800" />
          <p className="text-center mb-4 font-bold text-lg md:text-xl">
              Ficha técnica de Pacchar Biochar
          </p>
          <a
            href="https://drive.google.com/file/d/1H06HcNyHEfWYC0m_tqurrbIAyqwvWZNl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#007f00] text-white px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl rounded-lg hover:bg-[#00b200] transition-colors"
          >
            Ver Documento
          </a>
        </div>

        <div className="flex flex-col items-center justify-between p-6 border-4 border-gray-600 rounded-lg shadow-md bg-white w-full max-w-2xl h-[300px]">
          <Image
            src="/image.png"
            alt="/"
            width={300}
            height={300}
            className="w-[250px] h-[150px] object-contain"
          />
          <p className="text-center mb-4 font-bold text-lg md:text-xl">
               Nuestros aliados de sostenibilidad 
          </p>
          <a
            href="https://wayllaec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#007f00] text-white px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl rounded-lg hover:bg-[#00b200] transition-colors"
          >
            RAIN FOREST
          </a>
        </div>

        <div className="flex flex-col items-center justify-between p-6 border-4 border-gray-600 rounded-lg shadow-md bg-white w-full max-w-2xl h-[300px]">
          <MdMailOutline size={150} className="text-gray-800" />
          <p className="text-center mb-4 font-bold text-lg md:text-xl">
               Información de Contacto
          </p>
          <a
            href="https://drive.google.com/file/d/1I7KeiapbMn_TDemlphuwQ3oExJqTriyz/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#007f00] text-white px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl rounded-lg hover:bg-[#00b200] transition-colors"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section1