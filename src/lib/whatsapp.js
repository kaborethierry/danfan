import { formatPrice } from '@/utils/formatPrice';

const PHONE_NUMBER = '22674504141';

export function buildWhatsAppUrl(items) {
  let message = 'Bonjour DanFaniment! Je souhaite commander:\n\n';
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Quantité: ${item.quantity}\n`;
    message += `   Prix: ${formatPrice(item.price * item.quantity)}\n\n`;
  });
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  message += `TOTAL: ${formatPrice(total)}\n\n`;
  message += 'Merci!';
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}

export function buildQuickOrderUrl(productName, price) {
  const message = `Bonjour DanFaniment! Je suis intéressé(e) par:\n\n${productName}\nPrix: ${formatPrice(price)}\n\nMerci!`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}