'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styles from './ProductFilter.module.css';

export default function ProductFilter({ categories, currentCat, currentTri }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'tous') {
      params.delete('categorie');
    } else {
      params.set('categorie', category);
    }
    router.push(`/boutique?${params.toString()}`);
  };

  const handleSortChange = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value === 'recent') {
      params.delete('tri');
    } else {
      params.set('tri', e.target.value);
    }
    router.push(`/boutique?${params.toString()}`);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.categories}>
        <button
          onClick={() => handleCategoryChange('tous')}
          className={`${styles.catBtn} ${!currentCat || currentCat === 'tous' ? styles.active : ''}`}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleCategoryChange(cat.slug)}
            className={`${styles.catBtn} ${currentCat === cat.slug ? styles.active : ''}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className={styles.sort}>
        <label htmlFor="sort" className={styles.label}>
          Trier par :
        </label>
        <select
          id="sort"
          value={currentTri || 'recent'}
          onChange={handleSortChange}
          className={styles.select}
        >
          <option value="recent">Plus récents</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>
    </div>
  );
}