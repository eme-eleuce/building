
import Image from "next/image";
import { IoDocumentTextOutline } from "react-icons/io5";

const Section1 = () => {
  return (
    <section id="section1" className="w-full min-h-screen py-8">
    <h2 className="text-center text-5xl font-bold  mt-1 mb-8">Links</h2>
    <div className="flex flex-col items-center pb-10 space-y-8 px-5">
      {/* Primer Documento */}
      <div className="flex flex-col items-center p-3  border-4 border-gray-600 rounded-lg shadow-md bg-white w-full max-w-md md:max-w-xl">
        {/* Ícono de PDF */}
        <Image
                  src="/pachar-h.png"
                  alt="/"
                  width={300}
                  height={300}
                  className="w-[230px] h-[130px] lg:w-[270px] lg:h-[150px]"
                />
        <p className="text-center mb-4 font-bold">
              Sobre Nosotros / Nuestra Empresa
            </p>
        {/* Enlace a Google Drive */}
        <a
          href="https://drive.google.com/file/d/1_57rhCVYCaUvmmxsX2R5Wttzprik7IeP/view?usp=drivesdk" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#007f00] text-white px-4 py-2 rounded-lg hover:bg-[#00b200] transition-colors "
        >
          Haz click aquí
        </a>
      </div>

      {/* Segundo Documento */}
      <div className="flex flex-col items-center p-3 border-4 border-gray-600 rounded-lg shadow-md bg-white w-full max-w-md md:max-w-xl">
        {/* Ícono de PDF */}
        <IoDocumentTextOutline size={80} className=" mb-2 text-gray-800" />
        <p className="text-center mb-4 font-bold">
            Ficha técnica de Pacchar Biochar
            </p>
        {/* Enlace a Google Drive */}
        <a
          href="https://drive.google.com/file/d/1H06HcNyHEfWYC0m_tqurrbIAyqwvWZNl/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#007f00] text-white px-4 py-2 rounded-lg hover:bg-[#00b200] transition-colors "
        >
          Ver Documento
        </a>
      </div>
      <div className="flex flex-col items-center p-3 border-4 border-gray-600 rounded-lg shadow-md bg-white w-full max-w-md md:max-w-xl">
        {/* Ícono de PDF */}
        <Image
                  src="/image.png"
                  alt="/"
                  width={300}
                  height={300}
                  className="w-[260px] h-[90px] lg:w-[300px] lg:h-[100px]"
                />
        <p className="text-center mb-4 font-bold">
             Nuestros aliados de sostenibilidad 
            </p>
        {/* Enlace a Google Drive */}
        <a
          href="https://wayllaec.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#007f00] text-white px-4 py-2 rounded-lg hover:bg-[#00b200] transition-colors "
        >
          RAIN FOREST
        </a>
      </div>
    </div>
  </section>
  );
}

export default Section1