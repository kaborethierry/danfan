import ProductGrid from '@/components/products/ProductGrid';
import ProductFilter from '@/components/products/ProductFilter';
import { getProducts, getCategories } from '@/lib/api';
import styles from './page.module.css';

export const metadata = {
  title: 'Boutique — DanFaniment | Pagnes Faso Danfani',
  description: 'Découvrez tous nos pagnes tissés 100% coton, collections et tenues.',
};

export default async function BoutiquePage({ searchParams }) {
  // Next.js 15: searchParams doit être awaité
  const params = await searchParams;
  const categorie = params?.categorie || 'tous';
  const tri = params?.tri || 'recent';

  const [products, categories] = await Promise.all([
    getProducts({ categorie, tri }),
    getCategories(),
  ]);

  return (
    <div className={styles.boutiquePage}>
      <div className={styles.boutiqueHero}>
        <h1 className={styles.boutiqueHeroTitle}>Notre Boutique</h1>
        <p className={styles.boutiqueHeroSub}>
          Pagnes tissés 100% coton — Faso Danfani — Made in Burkina Faso
        </p>
        <div className={styles.boutiqueStripe} />
      </div>

      <div className={styles.boutiqueContainer}>
        <ProductFilter
          categories={categories}
          currentCat={categorie}
          currentTri={tri}
        />

        <p className={styles.boutiqueCount}>
          {products.length} produit{products.length > 1 ? 's' : ''} trouvé{products.length > 1 ? 's' : ''}
        </p>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className={styles.boutiqueEmpty}>
            <p>Aucun produit dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}