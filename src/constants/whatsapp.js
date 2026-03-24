export const WHATSAPP = {
    PHONE_NUMBER: '22674504141',
    DEFAULT_MESSAGE: 'Bonjour DanFaniment! Je vous contacte depuis votre site.',
  };
  
  export const getWhatsAppLink = (message = WHATSAPP.DEFAULT_MESSAGE) => {
    return `https://wa.me/${WHATSAPP.PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  };