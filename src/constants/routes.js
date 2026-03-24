export const ROUTES = {
    HOME: '/',
    BOUTIQUE: '/boutique',
    COLLECTIONS: '/collections',
    ABOUT: '/a-propos',
    CONTACT: '/contact',
  };
  
  export const getProductRoute = (slug) => `/boutique/${slug}`;
  export const getCategoryRoute = (category) => `/boutique?categorie=${category}`;