import styles from './Features.module.css';

const features = [
  {
    icon: '🌿',
    title: '100% Coton',
    description: 'Tissu naturel, confortable et résistant, respectueux de votre peau.',
  },
  {
    icon: '✋',
    title: 'Fait Main',
    description: 'Tissé et cousu avec soin par nos artisans burkinabè.',
  },
  {
    icon: '🇧🇫',
    title: 'Made in Burkina',
    description: 'Fierté nationale, valorisation du savoir-faire local.',
  },
  {
    icon: '🎨',
    title: 'Couleurs Vibrantes',
    description: 'Teintures naturelles et motifs authentiques.',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Pourquoi DanFaniment</span>
          <h2 className={styles.title}>Notre Excellence</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}