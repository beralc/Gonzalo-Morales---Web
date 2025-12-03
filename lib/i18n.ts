export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'es';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      works: 'Works',
      biography: 'Biography',
      contact: 'Contact',
      store: 'Store',
    },
    home: {
      title: 'Gonzalo Morales Sáurez',
      subtitle: 'Costa Rican Painter',
      years: '1945 - 2017',
      viewWorks: 'View Works',
      about: 'About the Artist',
    },
    works: {
      title: 'Works',
      bodegones: 'Still Life',
      retratos: 'Portraits',
      allWorks: 'All Works',
    },
    biography: {
      title: 'Biography',
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
    },
    store: {
      title: 'Store',
      prints: 'Art Prints',
      description: 'High-quality prints of Gonzalo Morales\' works',
      inquire: 'Inquire About Prints',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      works: 'Obras',
      biography: 'Biografía',
      contact: 'Contacto',
      store: 'Tienda',
    },
    home: {
      title: 'Gonzalo Morales Sáurez',
      subtitle: 'Pintor Costarricense',
      years: '1945 - 2017',
      viewWorks: 'Ver Obras',
      about: 'Sobre el Artista',
    },
    works: {
      title: 'Obras',
      bodegones: 'Bodegones',
      retratos: 'Retratos',
      allWorks: 'Todas las Obras',
    },
    biography: {
      title: 'Biografía',
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
    },
    store: {
      title: 'Tienda',
      prints: 'Impresiones de Arte',
      description: 'Impresiones de alta calidad de las obras de Gonzalo Morales',
      inquire: 'Consultar sobre Impresiones',
    },
  },
} as const;
