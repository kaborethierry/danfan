'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import useCart from '@/hooks/useCart';
import { formatPrice } from '@/utils/formatPrice';
import { buildQuickOrderUrl } from '@/lib/whatsapp';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWhatsAppOrder = () => {
    const url = buildQuickOrderUrl(product.name, product.price);
    window.open(url, '_blank');
  };

  return (
    <div className={styles.card}>
      <Link href={`/boutique/${product.slug}`} className={styles.imageLink}>
        <div className={styles.image}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
          {product.featured && <span className={styles.badge}>Nouveauté</span>}
        </div>
      </Link>

      <div className={styles.info}>
        <Link href={`/boutique/${product.slug}`} className={styles.nameLink}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <p className={styles.category}>{product.category === 'homme' ? 'Homme' : 'Femme'}</p>
        <p className={styles.price}>{formatPrice(product.price)}</p>

        <div className={styles.actions}>
          <button onClick={handleWhatsAppOrder} className={styles.whatsappBtn}>
            <span className={styles.waIcon}>💬</span>
            Commander
          </button>
          <button onClick={handleAddToCart} className={styles.cartBtn}>
            {added ? '✓ Ajouté' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  );
}