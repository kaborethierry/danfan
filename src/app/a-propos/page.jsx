import styles from './page.module.css';

export const metadata = {
  title: 'À propos — DanFaniment | Made in Burkina Faso',
  description: 'Découvrez l\'histoire, les valeurs et la mission de DanFaniment.',
};

export default function AProposPage() {
  const valeurs = [
    { titre: 'Authenticité', desc: 'Chaque pièce est tissée à la main dans la tradition du Faso Danfani.' },
    { titre: 'Fierté locale', desc: 'Nous valorisons le savoir-faire burkinabè et nos artisans locaux.' },
    { titre: 'Qualité', desc: '100% coton naturel, résistant, confortable et aux couleurs vives.' },
    { titre: 'Accessibilité', desc: 'Des tenues élégantes pour toutes les occasions et tous les budgets.' },
  ];

  return (
    <div className={styles.aboutPage}>
      <header className={styles.aboutHero}>
        <h1 className={styles.aboutHeroTitle}>Notre Histoire</h1>
        <p className={styles.aboutHeroSub}>De la valeur à notre fierté</p>
        <div className={styles.aboutStripe} />
      </header>

      <section className={styles.aboutStory}>
        <div className={styles.aboutStoryGrid}>
          <div className={styles.aboutStoryImage}>
            <img src="/images/about-atelier.jpg" alt="Atelier DanFaniment" />
          </div>
          <div className={styles.aboutStoryText}>
            <span className={styles.aboutTag}>Notre mission</span>
            <h2 className={styles.aboutStoryTitle}>DanFaniment — L&apos;élégance du Burkina</h2>
            <p>
              DanFaniment est née de la passion pour le tissu traditionnel Faso Danfani,
              ce coton tissé à la main qui incarne l&apos;identité burkinabè.
              Notre mission : rendre accessibles des tenues authentiques, modernes et fières
              de leur origine.
            </p>
            <p>
              Du style oversize au tailleur formel, chaque pièce est conçue avec soin
              pour mettre en valeur la richesse de notre culture.
              100% coton. 100% Burkinabè. Made in Burkina Faso by DanFaniment.
            </p>
            <div className={styles.aboutContacts}>
              <a href="tel:+22674504141" className={styles.aboutContactItem}>
                +226 74 50 41 41
              </a>
              <a href="mailto:danfaniment23@gmail.com" className={styles.aboutContactItem}>
                danfaniment23@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutValeurs}>
        <h2 className={styles.aboutValeursTitle}>Nos Valeurs</h2>
        <div className={styles.aboutValeursGrid}>
          {valeurs.map((v, i) => (
            <div key={i} className={styles.aboutValeurCard}>
              <span className={styles.aboutValeurNum}>0{i + 1}</span>
              <h3 className={styles.aboutValeurTitre}>{v.titre}</h3>
              <p className={styles.aboutValeurDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.aboutCta}>
        <h2 className={styles.aboutCtaTitle}>Découvrez nos collections</h2>
        <a href="/boutique" className={styles.aboutCtaBtn}>Voir la boutique</a>
      </section>
    </div>
  );
}