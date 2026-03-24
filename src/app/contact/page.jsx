'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ nom: '', email: '', sujet: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const waUrl = `https://wa.me/22674504141?text=${encodeURIComponent('Bonjour DanFaniment, je vous contacte depuis votre site.')}`;

  return (
    <div className={styles.contactPage}>
      <header className={styles.contactHero}>
        <h1 className={styles.contactHeroTitle}>Contactez-nous</h1>
        <p className={styles.contactHeroSub}>Nous sommes disponibles pour toute question ou commande</p>
        <div className={styles.contactStripe} />
      </header>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfoBlock}>
          <h2 className={styles.contactInfoTitle}>Nos coordonnées</h2>

          <div className={styles.contactInfoItem}>
            <span className={styles.contactInfoLabel}>Téléphone / WhatsApp</span>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.contactInfoValue}>
              +226 74 50 41 41
            </a>
          </div>

          <div className={styles.contactInfoItem}>
            <span className={styles.contactInfoLabel}>Email</span>
            <a href="mailto:danfaniment23@gmail.com" className={styles.contactInfoValue}>
              danfaniment23@gmail.com
            </a>
          </div>

          <div className={styles.contactInfoItem}>
            <span className={styles.contactInfoLabel}>Localisation</span>
            <span className={styles.contactInfoValue}>Burkina Faso</span>
          </div>

          <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.contactBtnWa}>
            Écrire sur WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <h2 className={styles.contactFormTitle}>Envoyer un message</h2>

          <div className={styles.contactFormRow}>
            <div className={styles.contactField}>
              <label htmlFor="nom" className={styles.contactLabel}>Nom complet</label>
              <input
                id="nom" name="nom" type="text"
                value={form.nom} onChange={handleChange}
                placeholder="Votre nom"
                required
                className={styles.contactInput}
              />
            </div>
            <div className={styles.contactField}>
              <label htmlFor="email" className={styles.contactLabel}>Email</label>
              <input
                id="email" name="email" type="email"
                value={form.email} onChange={handleChange}
                placeholder="votre@email.com"
                required
                className={styles.contactInput}
              />
            </div>
          </div>

          <div className={styles.contactField}>
            <label htmlFor="sujet" className={styles.contactLabel}>Sujet</label>
            <input
              id="sujet" name="sujet" type="text"
              value={form.sujet} onChange={handleChange}
              placeholder="Commande, renseignement, partenariat..."
              required
              className={styles.contactInput}
            />
          </div>

          <div className={styles.contactField}>
            <label htmlFor="message" className={styles.contactLabel}>Message</label>
            <textarea
              id="message" name="message" rows={6}
              value={form.message} onChange={handleChange}
              placeholder="Votre message..."
              required
              className={styles.contactTextarea}
            />
          </div>

          {status === 'success' && (
            <p className={styles.contactSuccessMsg}>Message envoyé ! Nous vous répondrons rapidement.</p>
          )}
          {status === 'error' && (
            <p className={styles.contactErrorMsg}>Une erreur est survenue. Veuillez réessayer ou nous contacter sur WhatsApp.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className={styles.contactBtnSubmit}
          >
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </div>
  );
}