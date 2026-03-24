'use client';

import Image from 'next/image';
import useCart from '@/hooks/useCart';
import { formatPrice } from '@/utils/formatPrice';
import styles from './CartItem.module.css';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQty) => {
    if (newQty < 1) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQty);
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>{formatPrice(item.price)}</p>

        <div className={styles.quantity}>
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className={styles.qtyBtn}
            aria-label="Diminuer"
          >
            -
          </button>
          <span className={styles.qtyValue}>{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className={styles.qtyBtn}
            aria-label="Augmenter"
          >
            +
          </button>
        </div>

        <button
          onClick={() => removeItem(item.id)}
          className={styles.removeBtn}
          aria-label="Supprimer"
        >
          Supprimer
        </button>
      </div>

      <div className={styles.subtotal}>
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
}