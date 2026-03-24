'use client';

import { useEffect } from 'react';
import useCart from '@/hooks/useCart';
import CartItem from './CartItem';
import OrderWhatsApp from './OrderWhatsApp';
import { formatPrice } from '@/utils/formatPrice';
import styles from './CartSidebar.module.css';

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, totalPrice, clearCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h2 className={styles.title}>Mon Panier</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fermer">
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.empty}>
            <p>Votre panier est vide</p>
            <button onClick={onClose} className={styles.continueBtn}>
              Continuer mes achats
            </button>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                <span>Total</span>
                <span className={styles.totalPrice}>{formatPrice(totalPrice)}</span>
              </div>

              <div className={styles.actions}>
                <button onClick={clearCart} className={styles.clearBtn}>
                  Vider le panier
                </button>
                <OrderWhatsApp />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}