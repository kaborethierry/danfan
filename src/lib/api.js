// src/lib/api.js
const mockProducts = [
    {
      id: '1',
      name: 'Pagne Faso Danfani Femme',
      slug: 'pagne-faso-danfani-femme',
      price: 15000,
      description: 'Pagne traditionnel tissé 100% coton, motif géométrique aux couleurs du Burkina.',
      image: '/images/products/product-1.jpg',
      category: 'femme',
      featured: true,
    },
    {
      id: '2',
      name: 'Pagne Homme Traditionnel',
      slug: 'pagne-homme-traditionnel',
      price: 12000,
      description: 'Pagne homme en coton tissé, parfait pour les cérémonies.',
      image: '/images/products/product-2.jpg',
      category: 'homme',
      featured: true,
    },
    {
      id: '3',
      name: 'Ensemble Tailleur Femme',
      slug: 'ensemble-tailleur-femme',
      price: 45000,
      description: 'Tailleur élégant en pagne tissé, coupe moderne.',
      image: '/images/products/product-3.jpg',
      category: 'femme',
      featured: true,
    },
    {
      id: '4',
      name: 'Chemise Homme Danfani',
      slug: 'chemise-homme-danfani',
      price: 25000,
      description: 'Chemise élégante en pagne tissé, coupe moderne.',
      image: '/images/products/product-4.jpg',
      category: 'homme',
      featured: false,
    },
  ];
  
  export async function getProducts({ limit, featured, categorie, tri } = {}) {
    let products = [...mockProducts];
    
    if (categorie && categorie !== 'tous') {
      products = products.filter(p => p.category === categorie);
    }
    
    if (featured) {
      products = products.filter(p => p.featured);
    }
    
    if (limit) {
      products = products.slice(0, limit);
    }
    
    if (tri === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (tri === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (tri === 'recent') {
      products.reverse();
    }
    
    return products;
  }
  
  export async function getProductBySlug(slug) {
    return mockProducts.find(p => p.slug === slug) || null;
  }
  
  export async function getCategories() {
    // Uniquement homme et femme
    return [
      { slug: 'homme', name: 'Homme' },
      { slug: 'femme', name: 'Femme' },
    ];
  }
  
  export async function getCollections() {
    const categories = await getCategories();
    return categories.map((cat, index) => ({
      id: index + 1,
      name: cat.name,
      slug: cat.slug,
      image: `/images/collections/collection-${index + 1}.jpg`,
      count: mockProducts.filter(p => p.category === cat.slug).length,
    }));
  }