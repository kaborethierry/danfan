import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.pattern} />
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page introuvable</h2>
        <p className={styles.message}>
          Cette page n&apos;existe pas ou a été déplacée.
          Retournez à la boutique pour découvrir nos collections.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            Retour à l&apos;accueil
          </Link>
          <Link href="/boutique" className={styles.btnSecondary}>
            Voir la boutique
          </Link>
        </div>
      </div>
    </div>
  );
}