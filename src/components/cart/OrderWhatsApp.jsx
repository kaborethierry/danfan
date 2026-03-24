'use client';

import useCart from '@/hooks/useCart';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import styles from './OrderWhatsApp.module.css';

export default function OrderWhatsApp() {
  const { cartItems, totalPrice } = useCart();

  const handleOrder = () => {
    if (cartItems.length === 0) return;
    const url = buildWhatsAppUrl(cartItems);
    window.open(url, '_blank');
  };

  if (cartItems.length === 0) return null;

  return (
    <button onClick={handleOrder} className={styles.whatsappBtn}>
      <span className={styles.icon}>💬</span>
      Commander via WhatsApp
    </button>
  );
}