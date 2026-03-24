import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Gallery from '@/components/sections/Gallery';
import ProductGrid from '@/components/products/ProductGrid';
import Newsletter from '@/components/sections/Newsletter';
import { getProducts } from '@/lib/api';
import styles from './page.module.css';

export default async function HomePage() {
  const featuredProducts = await getProducts({ limit: 6, featured: true });

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Gallery />
      <section className={styles.homeProducts}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nos Dernières Collections</h2>
          <p className={styles.sectionSubtitle}>
            Pagnes tissés 100% coton Faso Danfani
          </p>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      <Newsletter />
    </>
  );
}