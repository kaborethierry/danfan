'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <img src="/images/about-image1.jpg" alt="Artisanat DanFaniment" />
            </div>
            <div className={styles.badge}>Made in Burkina Faso 🇧🇫</div>
          </div>

          <div className={styles.content}>
            <span className={styles.tag}>Notre Histoire</span>
            <h2 className={styles.title}>L'élégance du Faso Danfani</h2>
            <div className={styles.divider} />
            <p className={styles.text}>
              DanFaniment est née de la passion pour le tissu traditionnel Faso Danfani,
              ce coton tissé à la main qui incarne l'identité burkinabè. Chaque pièce
              est unique, façonnée avec amour par nos artisans locaux.
            </p>
            <p className={styles.text}>
              Notre mission : rendre accessibles des tenues authentiques, modernes et
              fières de leur origine. Du style oversize au tailleur formel, chaque
              création met en valeur la richesse de notre culture.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>100% Coton naturel</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Tissé à la main</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Made in Burkina Faso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}