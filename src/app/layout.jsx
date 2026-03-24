import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Loader from '@/components/layout/Loader';
import { CartProvider } from '@/context/CartContext';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'DanFaniment — Pagnes Faso Danfani',
  description: 'Vente de pagnes tissés 100% coton, confection de tenues. Made in Burkina Faso.',
  keywords: 'pagne, faso danfani, burkina faso, tissu, mode africaine',
  openGraph: {
    title: 'DanFaniment',
    description: 'De la valeur à notre fierté',
    url: 'http://localhost:3000',
    siteName: 'DanFaniment',
    images: [{ url: '/images/og-cover.jpg' }],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Loader />
          <Navbar />
          <main className={styles.mainContent}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}