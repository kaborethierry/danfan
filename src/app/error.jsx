'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './error.module.css';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('[DanFaniment Error]', error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.icon}>!</div>
        <h2 className={styles.title}>Une erreur est survenue</h2>
        <p className={styles.message}>
          Quelque chose s&apos;est mal passé. Veuillez réessayer ou contacter DanFaniment.
        </p>
        <div className={styles.actions}>
          <button onClick={reset} className={styles.btnRetry}>
            Réessayer
          </button>
          <Link href="/" className={styles.btnHome}>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}