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
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section ref={sectionRef} className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Notre Artisanat</span>
          <h2 className={styles.title}>Galerie d&apos;Inspiration</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Découvrez la beauté et l&apos;authenticité de nos créations en pagne tissé Faso Danfani
          </p>
        </div>

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