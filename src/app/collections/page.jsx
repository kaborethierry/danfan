import Link from 'next/link';
import Image from 'next/image';
import { getCollections } from '@/lib/api';
import styles from './page.module.css';

export const metadata = {
  title: 'Collections — DanFaniment | Faso Danfani',
  description: 'Explorez toutes les collections de pagnes tissés DanFaniment.',
};

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <div className={styles.collectionsPage}>
      <header className={styles.collectionsHeader}>
        <h1 className={styles.collectionsTitle}>Nos Collections</h1>
        <p className={styles.collectionsSubtitle}>
          Admirez la beauté de la culture Burkinabè avec nos pagnes tissés et cousus par DanFaniment
        </p>
        <div className={styles.collectionsStripe} />
      </header>

      <section className={styles.collectionsGrid}>
        {collections.map(col => (
          <Link key={col.id} href={`/boutique?categorie=${col.slug}`} className={styles.collectionCard}>
            <div className={styles.collectionCardImg}>
              <Image
                src={col.image}
                alt={col.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.collectionOverlay} />
            </div>
            <div className={styles.collectionCardBody}>
              <h2 className={styles.collectionCardTitle}>{col.name}</h2>
              <p className={styles.collectionCardCount}>{col.count} produit{col.count > 1 ? 's' : ''}</p>
              <span className={styles.collectionCardLink}>Voir la collection →</span>
            </div>
          </Link>
        ))}
      </section>

      <section className={styles.collectionsValues}>
        <div className={styles.collectionsValuesGrid}>
          {[
            { titre: '100% Coton', desc: 'Faso Danfani, tissu authentique burkinabè' },
            { titre: 'Fait Main', desc: 'Tissé et cousu avec soin par nos artisans' },
            { titre: 'Made in BF', desc: 'Fierté nationale, savoir-faire local' },
          ].map((v, i) => (
            <div key={i} className={styles.valueCard}>
              <h3 className={styles.valueTitle}>{v.titre}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}