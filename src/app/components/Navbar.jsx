"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = ({ dict }) => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'es';
  
  // Determinar si estamos en la página principal o en otra página
  const isHomePage = pathname === `/${lang}` || pathname === '/' || pathname === `/${lang}/`;
  // If dict is not provided (during development/testing), use a default empty structure
  const navbarDict = dict?.navbar || {};
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);
  const [soilOpen, setSoilOpen] = useState(false);
  const [pirolysisOpen, setPirolysisOpen] = useState(false);
  const [nosotrosOpen, setNosotrosOpen] = useState(false);
  const [cfnOpen, setCfnOpen] = useState(false);
  const [mobileProductosOpen, setMobileProductosOpen] = useState(false);
  const [mobileSoilOpen, setMobileSoilOpen] = useState(false);
  const [mobilePirolysisOpen, setMobilePirolysisOpen] = useState(false);
  const [mobileNosotrosOpen, setMobileNosotrosOpen] = useState(false);
  const [mobileCfnOpen, setMobileCfnOpen] = useState(false);
  
  // References for dropdown menus
  const productosRef = useRef(null);
  const soilRef = useRef(null);
  const pirolysisRef = useRef(null);
  const nosotrosRef = useRef(null);
  const cfnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Effect to handle clicks outside the dropdown menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close Productos dropdown if click is outside
      if (productosRef.current && !productosRef.current.contains(event.target)) {
        setProductosOpen(false);
      }
      
      // Close Soil Admendments dropdown if click is outside
      if (soilRef.current && !soilRef.current.contains(event.target)) {
        setSoilOpen(false);
      }
      
      // Close Nosotros dropdown if click is outside
      if (nosotrosRef.current && !nosotrosRef.current.contains(event.target)) {
        setNosotrosOpen(false);
      }
      
      // Close CFN dropdown if click is outside
      if (cfnRef.current && !cfnRef.current.contains(event.target)) {
        setCfnOpen(false);
      }
    };
    
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para cerrar todos los menús desplegables
  const closeAllDropdowns = () => {
    setProductosOpen(false);
    setSoilOpen(false);
    setPirolysisOpen(false);
    setNosotrosOpen(false);
    setCfnOpen(false);
    setMobileProductosOpen(false);
    setMobileSoilOpen(false);
    setMobilePirolysisOpen(false);
    setMobileNosotrosOpen(false);
    setMobileCfnOpen(false);
  };

  const toggleMenu = () => {
    // Si estamos cerrando el menú, resetear todos los estados de los menús desplegables
    if (isOpen) {
      closeAllDropdowns();
    }
    setIsOpen(!isOpen);
  };
  
  // Función para manejar clics en enlaces de navegación
  const handleNavLinkClick = () => {
    closeAllDropdowns();
    // Si estamos en móvil, cerrar también el menú principal
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'bg-white/30 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-4 md:px-12 py-3 md:py-2 max-w-7xl mx-auto relative">
        <Link href="/" className="flex items-center">
          <Image 
            src={scrolled || !isHomePage ? "/photos/pacchar3.png" : "/photos/pacchar1.png"} 
            alt="Logo" 
            width={250} 
            height={74} 
            className="object-contain w-[220px] h-auto md:w-[220px] lg:w-[240px] transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 px-8 py-3 absolute right-0 z-10 mt-2">
          <Link href={`/${lang}/biochar`} onClick={handleNavLinkClick} className={`font-bold text-2xl hover:text-green-600 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full font-title ${scrolled || !isHomePage ? 'text-black' : 'text-white'}`}>{navbarDict.biochar || 'Biochar'}</Link>
          
          {/* Productos Dropdown */}
          <div className="relative group" ref={productosRef}>
            <button 
              className={`font-bold text-2xl hover:text-green-600 relative flex items-center gap-1 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 group-hover:after:w-full font-title ${scrolled || !isHomePage ? 'text-black' : 'text-white'}`}
              onClick={() => setProductosOpen(!productosOpen)}
            >
              {navbarDict.productos || 'Productos'}
              {productosOpen ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              )}
            </button>
            <div className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 origin-top ${productosOpen ? 'opacity-100 visible scale-y-100 translate-y-0' : 'opacity-0 invisible scale-y-75 -translate-y-4'}`}>
              
              {/* Nested Soil Admendments Dropdown */}
              <div className="relative" ref={soilRef}>
                <button 
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-bold text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSoilOpen(!soilOpen);
                  }}
                >
                  <span>{navbarDict.soil_admendments || 'Enmienda de Suelos'}</span>
                  {soilOpen ? <IoIosArrowUp className="text-lg" /> : <IoIosArrowDown className="text-lg" />}
                </button>
                
                <div className={`bg-gray-50 transition-all duration-300 overflow-hidden rounded-lg origin-top ${soilOpen ? 'max-h-60 scale-y-100 opacity-100' : 'max-h-0 scale-y-90 opacity-0'}`}>
                  <Link href={`/${lang}/productos/soil-admendments/combi`} onClick={handleNavLinkClick} className="block px-8 py-2 text-base font-medium text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.combi || 'COMBI'}</Link>
                  <Link href={`/${lang}/productos/soil-admendments/biochar`} onClick={handleNavLinkClick} className="block px-8 py-2 text-base font-medium text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.biochar_product || 'Biochar'}</Link>
                  <Link href={`/${lang}/productos/soil-admendments/active-compost`} onClick={handleNavLinkClick} className="block px-8 py-2 text-base font-medium text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.active_compost || 'Active Compost'}</Link>
                </div>
              </div>
              
              {/* Nested Pirolysis Tech Dropdown */}
              <div className="relative" ref={pirolysisRef}>
                <button 
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-bold text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPirolysisOpen(!pirolysisOpen);
                  }}
                >
                  <span>{navbarDict.pirolysis_tech || 'Pirolysis Tech'}</span>
                  {pirolysisOpen ? <IoIosArrowUp className="text-lg" /> : <IoIosArrowDown className="text-lg" />}
                </button>
                
                <div className={`bg-gray-50 transition-all duration-300 overflow-hidden rounded-lg origin-top ${pirolysisOpen ? 'max-h-60 scale-y-100 opacity-100' : 'max-h-0 scale-y-90 opacity-0'}`}>
                  <Link href={`/${lang}/productos/pirolysis-tech/artisan-pro`} onClick={handleNavLinkClick} className="block px-8 py-2 text-base font-medium text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">Artisan Pro</Link>
                  <Link href={`/${lang}/productos/pirolysis-tech/industrial`} onClick={handleNavLinkClick} className="block px-8 py-2 text-base font-medium text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">Industrial</Link>
                </div>
              </div>
              <Link href={`/${lang}/productos/co2-removal`} onClick={handleNavLinkClick} className="block px-4 py-3 text-lg font-bold text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.co2_removal || 'Compensación de CO2'}</Link>
            </div>
          </div>
          
          {/* CFN Dropdown */}
          <div className="relative group" ref={cfnRef}>
            <button 
              className={`font-bold text-2xl hover:text-green-600 relative flex items-center gap-1 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 group-hover:after:w-full font-title ${scrolled || !isHomePage ? 'text-black' : 'text-white'}`}
              onClick={() => setCfnOpen(!cfnOpen)}
            >
              {navbarDict.cfn || 'Red de Carbono'}
              {cfnOpen ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              )}
            </button>
            <div className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 origin-top ${cfnOpen ? 'opacity-100 visible scale-y-100 translate-y-0' : 'opacity-0 invisible scale-y-75 -translate-y-4'}`}>
              <Link href={`/${lang}/cfn/biochar-points`} onClick={handleNavLinkClick} className="block px-4 py-3 text-lg font-bold text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.biochar_points || 'Biochar Points'}</Link>
              <Link href={`/${lang}/cfn/join-network`} onClick={handleNavLinkClick} className="block px-4 py-3 text-lg font-bold text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.join_network || 'Únete a la red'}</Link>
            </div>
          </div>
          
          {/* Nosotros Dropdown */}
          <div className="relative group" ref={nosotrosRef}>
            <button 
              className={`font-bold text-2xl hover:text-green-600 relative flex items-center gap-1 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 group-hover:after:w-full font-title ${scrolled || !isHomePage ? 'text-black' : 'text-white'}`}
              onClick={() => setNosotrosOpen(!nosotrosOpen)}
            >
              {navbarDict.nosotros || 'Nosotros'}
              {nosotrosOpen ? (
                <IoIosArrowUp className="text-xl" />
              ) : (
                <IoIosArrowDown className="text-xl" />
              )}
            </button>
            <div className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 origin-top ${nosotrosOpen ? 'opacity-100 visible scale-y-100 translate-y-0' : 'opacity-0 invisible scale-y-75 -translate-y-4'}`}>
              <Link href={`/${lang}/nosotros/historia`} onClick={handleNavLinkClick} className="block px-4 py-3 text-lg font-bold text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.historia || 'Historia'}</Link>
              <Link href={`/${lang}/equipo`} onClick={handleNavLinkClick} className="block px-4 py-3 text-lg font-bold text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.equipo || 'Equipo'}</Link>
              <Link href={`/${lang}/nosotros/rainforest-enterprise`} onClick={handleNavLinkClick} className="block px-4 py-3 text-lg font-bold text-black hover:text-green-600 hover:bg-gray-50 transition-all duration-300 font-body">{navbarDict.rainforest_enterprise || 'Rainforest Enterprise'}</Link>
            </div>
          </div>
          
          <Link href={`/${lang === 'es' ? 'es/contacto' : 'en/contact'}`} onClick={handleNavLinkClick} className={`font-bold text-2xl hover:text-green-600 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full font-title ${scrolled || !isHomePage ? 'text-black' : 'text-white'}`}>{navbarDict.contacto || 'Contacto'}</Link>
          
          {/* Language Switcher */}
          <div className="flex items-center ml-4">
            <LanguageSwitcher currentLocale={lang || 'es'} scrolled={scrolled || !isHomePage} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className={`fixed md:relative right-4 top-[26px] md:top-auto z-50 w-12 h-12 flex items-center justify-center ${scrolled || !isHomePage ? 'text-black' : 'text-green-600'}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IoMdClose className={`w-12 h-12 transition-all duration-300 ${scrolled ? 'text-black' : 'text-green-600'}`} />
            ) : (
              <HiMenu className={`w-12 h-12 transition-all duration-300 ${scrolled ? 'text-black' : 'text-green-600'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed top-0 right-0 w-4/5 h-screen bg-white shadow-lg pt-24 px-6 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40 overflow-y-auto rounded-l-lg`}>
        {/* Language Switcher - Mobile */}
        <div className="py-4 border-b border-gray-200 flex justify-center mb-4">
          <div className="bg-blue-600 px-4 py-3 rounded-lg shadow-inner">
            <LanguageSwitcher currentLocale={lang || 'es'} scrolled={false} />
          </div>
        </div>
        
        <Link href={`/${lang}/biochar`} className="block text-black text-2xl font-bold py-4 border-b border-gray-200 transition-all duration-300 hover:pl-2 hover:text-green-600 font-title" onClick={handleNavLinkClick}>{navbarDict.biochar || 'Biochar'}</Link>
        
        {/* Mobile Productos Dropdown */}
        <div className="border-b border-gray-200">
          <button 
            className="flex items-center justify-between w-full text-black text-2xl font-bold py-4 transition-all duration-300 hover:pl-2 hover:text-green-600 font-title"
            onClick={() => setMobileProductosOpen(!mobileProductosOpen)}
          >
            <span>{navbarDict.productos || 'Productos'}</span>
            {mobileProductosOpen ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
          </button>
          
          {mobileProductosOpen && (
            <div className="pl-4">
              
              {/* Nested Soil Admendments Mobile */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-black text-xl font-bold py-3 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body"
                  onClick={() => setMobileSoilOpen(!mobileSoilOpen)}
                >
                  <span>{navbarDict.soil_admendments || 'Enmienda de Suelos'}</span>
                  {mobileSoilOpen ? <IoIosArrowUp className="text-lg" /> : <IoIosArrowDown className="text-lg" />}
                </button>
                
                {mobileSoilOpen && (
                  <div className="pl-4">
                    <Link href={`/${lang}/productos/soil-admendments/combi`} className="block text-black text-lg font-medium py-2 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.combi || 'COMBI'}</Link>
                    <Link href={`/${lang}/productos/soil-admendments/biochar`} className="block text-black text-lg font-medium py-2 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.biochar_product || 'Biochar'}</Link>
                    <Link href={`/${lang}/productos/soil-admendments/active-compost`} className="block text-black text-lg font-medium py-2 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.active_compost || 'Active Compost'}</Link>
                  </div>
                )}
              </div>
              
              {/* Nested Pirolysis Tech Mobile */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-black text-xl font-bold py-3 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body"
                  onClick={() => setMobilePirolysisOpen(!mobilePirolysisOpen)}
                >
                  <span>{navbarDict.pirolysis_tech || 'Pirolysis Tech'}</span>
                  {mobilePirolysisOpen ? <IoIosArrowUp className="text-lg" /> : <IoIosArrowDown className="text-lg" />}
                </button>
                
                {mobilePirolysisOpen && (
                  <div className="pl-4">
                    <Link href={`/${lang}/productos/pirolysis-tech/artisan-pro`} className="block text-black text-lg font-medium py-2 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>Artisan Pro</Link>
                    <Link href={`/${lang}/productos/pirolysis-tech/industrial`} className="block text-black text-lg font-medium py-2 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>Industrial</Link>
                  </div>
                )}
              </div>
              <Link href={`/${lang}/productos/co2-removal`} className="block text-black text-xl font-bold py-3 border-b border-gray-200 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.co2_removal || 'Compensación de CO2'}</Link>
            </div>
          )}
        </div>
        
        {/* Mobile CFN Dropdown */}
        <div className="border-b border-gray-200">
          <button 
            className="flex items-center justify-between w-full text-black text-2xl font-bold py-4 transition-all duration-300 hover:pl-2 hover:text-green-600 font-title"
            onClick={() => setMobileCfnOpen(!mobileCfnOpen)}
          >
            <span>{navbarDict.cfn || 'Red de Carbono'}</span>
            {mobileCfnOpen ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
          </button>
          
          {mobileCfnOpen && (
            <div className="pl-4">
              <Link href={`/${lang}/cfn/biochar-points`} className="block text-black text-xl font-bold py-3 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.biochar_points || 'Biochar Points'}</Link>
              <Link href={`/${lang}/cfn/join-network`} className="block text-black text-xl font-bold py-3 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.join_network || 'Únete a la red'}</Link>
            </div>
          )}
        </div>
        
        {/* Mobile Nosotros Dropdown */}
        <div className="border-b border-gray-200">
          <button 
            className="flex items-center justify-between w-full text-black text-2xl font-bold py-4 transition-all duration-300 hover:pl-2 hover:text-green-600 font-title"
            onClick={() => setMobileNosotrosOpen(!mobileNosotrosOpen)}
          >
            <span>{navbarDict.nosotros || 'Nosotros'}</span>
            {mobileNosotrosOpen ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
          </button>
          
          {mobileNosotrosOpen && (
            <div className="pl-4">
              <Link href={`/${lang}/nosotros/historia`} className="block text-black text-xl font-bold py-3 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.historia || 'Historia'}</Link>
              <Link href={`/${lang}/equipo`} className="block text-black text-xl font-bold py-3 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.equipo || 'Equipo'}</Link>
              <Link href={`/${lang}/nosotros/rainforest-enterprise`} className="block text-black text-xl font-bold py-3 transition-all duration-300 hover:pl-2 hover:text-green-600 font-body" onClick={handleNavLinkClick}>{navbarDict.rainforest_enterprise || 'Rainforest Enterprise'}</Link>
            </div>
          )}
        </div>
        
        <Link href={`/${lang === 'es' ? 'es/contacto' : 'en/contact'}`} className="block text-black text-2xl font-bold py-4 border-b border-gray-200 transition-all duration-300 hover:pl-2 hover:text-green-600 font-title" onClick={handleNavLinkClick}>{navbarDict.contacto || 'Contacto'}</Link>
        
        {/* Social Media Links */}
        <div className="mt-6 mb-20 border-t-2 border-blue-600 pt-6">
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.instagram.com/pacchar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-green-600 transition-colors duration-300"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/company/pacchar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-green-600 transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;