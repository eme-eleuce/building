import { NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// List of supported locales
export const locales = ['en', 'es'];
export const defaultLocale = 'es';

// Get the preferred locale from the request
function getLocale(request) {
  // Para asegurar que el español tenga mayor prioridad, podemos forzar el valor predeterminado
  // Si quieres que se respeten las preferencias del navegador, comenta la siguiente línea
  return defaultLocale; // Siempre devuelve español como idioma predeterminado
  
  // Código original comentado:
  /*
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get the best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locale = matchLocale(languages, locales, defaultLocale);
  return locale;
  */
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  
  // If there's no locale in the pathname
  if (pathnameIsMissingLocale) {
    // Get the preferred locale
    const locale = getLocale(request);
    
    // Create a new URL with the locale
    const newUrl = new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url);
    
    // Preserve the search params
    newUrl.search = request.nextUrl.search;
    
    // Redirect to the new URL
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Static files (e.g., images)
  // - Favicon
  // - Service worker
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sw.js).*)'],
};
