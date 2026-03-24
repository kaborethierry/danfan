'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simuler l'envoi
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Restez Connecté</h2>
          <p className={styles.subtitle}>
            Recevez nos nouveautés et offres spéciales
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={styles.button}
            >
              {status === 'loading' ? '...' : "S'abonner"}
            </button>
          </form>
          
          {status === 'success' && (
            <p className={styles.success}>
              Merci pour votre abonnement !
            </p>
          )}
        </div>
      </div>
    </section>
  );
}