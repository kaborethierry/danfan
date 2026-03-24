'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Galerie DanFaniment 1',
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Galerie DanFaniment 2',
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Galerie DanFaniment 3',
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Galerie DanFaniment 4',
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Galerie DanFaniment 5',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section ref={sectionRef} className={styles.gallery}>
      <div className={styles.container}>
        {/* En-tête de la galerie */}
        <div className={styles.header}>
          <span className={styles.tag}>Notre Artisanat</span>
          <h2 className={styles.title}>Galerie d'Inspiration</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Découvrez la beauté et l'authenticité de nos créations en pagne tissé Faso Danfani
          </p>
        </div>

        {/* Grille d'images */}
        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`${styles.gridItem} ${styles[`item${index + 1}`]}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <button className={styles.viewBtn}>Voir plus</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour afficher l'image en grand */}
        {isModalOpen && selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.modalClose} onClick={closeModal}>
                ✕
              </button>
              <div className={styles.modalImageWrapper}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="90vw"
                  style={{ objectFit: 'contain' }}
                  className={styles.modalImage}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}