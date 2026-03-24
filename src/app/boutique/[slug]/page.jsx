import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductBySlug, getProducts } from '@/lib/api';
import { buildQuickOrderUrl } from '@/lib/whatsapp';
import { formatPrice } from '@/utils/formatPrice';
import styles from './page.module.css';

export async function generateStaticParams() {
  const products = await getProducts({});
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — DanFaniment`,
    description: product.description,
    openGraph: { images: [{ url: product.image }] },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = await getProducts({ categorie: product.category, limit: 4 });
  const relatedFiltered = related.filter(p => p.slug !== slug);
  const waUrl = buildQuickOrderUrl(product.name, product.price);

  return (
    <div className={styles.productPage}>
      <nav className={styles.productBreadcrumb} aria-label="Fil d'Ariane">
        <Link href="/">Accueil</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/boutique">Boutique</Link>
        <span aria-hidden="true"> / </span>
        <span>{product.name}</span>
      </nav>

      <div className={styles.productDetail}>
        <div className={styles.productGallery}>
          <div className={styles.productMainImage}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        <div className={styles.productInfo}>
          <span className={styles.productBadge}>{product.category === 'homme' ? 'Homme' : 'Femme'}</span>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productPrice}>{formatPrice(product.price)}</p>
          <div className={styles.productDivider} />
          <p className={styles.productDescription}>{product.description}</p>

          <ul className={styles.productSpecs}>
            <li><strong>Matière :</strong> 100% coton Faso Danfani</li>
            <li><strong>Origine :</strong> Made in Burkina Faso</li>
          </ul>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.productBtnWa}
          >
            Commander via WhatsApp
          </a>
          <p className={styles.productWaNote}>
            Vous serez redirigé vers WhatsApp avec votre commande pré-remplie.
          </p>
        </div>
      </div>

      {relatedFiltered.length > 0 && (
        <section className={styles.productRelated}>
          <h2 className={styles.productRelatedTitle}>Vous aimerez aussi</h2>
          <ProductGrid products={relatedFiltered} />
        </section>
      )}
    </div>
  );
}