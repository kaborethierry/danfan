'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import useCart from '@/hooks/useCart';
import { formatPrice } from '@/utils/formatPrice';
import { buildQuickOrderUrl } from '@/lib/whatsapp';
import styles from './ProductDetail.module.css';

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const images = product.images || [product.image];
  const whatsappUrl = buildQuickOrderUrl(product.name, product.price * quantity);

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
  };

  const handleQuantityChange = (value) => {
    if (value < 1) return;
    setQuantity(value);
  };

  return (
    <div className={styles.productDetail}>
      {/* Galerie d'images */}
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <Image
            src={images[selectedImage]}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {images.length > 1 && (
          <div className={styles.thumbnails}>
            {images.map((img, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={img}
                  alt={`Vue ${index + 1}`}
                  fill
                  sizes="80px"
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Informations produit */}
      <div className={styles.info}>
        <div className={styles.header}>
          {product.category && (
            <Badge variant="success" className={styles.category}>
              {product.category === 'homme' ? 'Homme' : 'Femme'}
            </Badge>
          )}
          {product.featured && (
            <Badge variant="new" className={styles.newBadge}>
              Nouveauté
            </Badge>
          )}
          {product.soldout && (
            <Badge variant="soldout" className={styles.soldoutBadge}>
              Épuisé
            </Badge>
          )}
        </div>

        <h1 className={styles.name}>{product.name}</h1>

        <div className={styles.priceSection}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className={styles.oldPrice}>{formatPrice(product.oldPrice)}</span>
          )}
        </div>

        <div className={styles.divider} />

        <div className={styles.description}>
          <h3 className={styles.sectionTitle}>Description</h3>
          <p>{product.description}</p>
        </div>

        <ul className={styles.productSpecs}>
          <li><strong>Matière :</strong> 100% coton Faso Danfani</li>
          <li><strong>Origine :</strong> Made in Burkina Faso</li>
        </ul>

        {/* Sélecteur de quantité */}
        {!product.soldout && (
          <div className={styles.quantitySection}>
            <h3 className={styles.sectionTitle}>Quantité</h3>
            <div className={styles.quantitySelector}>
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className={styles.qtyBtn}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className={styles.qtyValue}>{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className={styles.qtyBtn}
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className={styles.actions}>
          {!product.soldout ? (
            <>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                className={styles.addToCartBtn}
              >
                Ajouter au panier
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                fullWidth
                onClick={() => window.open(whatsappUrl, '_blank')}
                className={styles.whatsappBtn}
              >
                <span className={styles.waIcon}>💬</span>
                Commander directement
              </Button>
            </>
          ) : (
            <Button variant="secondary" size="lg" fullWidth disabled>
              Produit épuisé
            </Button>
          )}
        </div>

        <div className={styles.notes}>
          <p className={styles.note}>
            📦 Livraison disponible sur Ouagadougou et en province
          </p>
          <p className={styles.note}>
            💳 Paiement à la livraison ou par Mobile Money
          </p>
        </div>
      </div>
    </div>
  );
}