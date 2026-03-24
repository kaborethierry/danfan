import styles from './Badge.module.css';

export default function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const badgeClasses = [styles.badge, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
}