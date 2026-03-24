'use client';

import { useState, useEffect } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.content}>
        <div className={styles.spinner} />
        <h1 className={styles.logo}>DanFaniment</h1>
        <p className={styles.tagline}>De la valeur à notre fierté</p>
      </div>
    </div>
  );
}