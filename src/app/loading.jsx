export default function Loading() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: 'var(--spacing-md)'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '3px solid var(--color-border)',
          borderTopColor: 'var(--color-primary)',
          borderRadius: '50%',
          animation: 'rotateLoader 0.8s linear infinite'
        }} />
        <p style={{ color: 'var(--color-text-muted)' }}>Chargement...</p>
      </div>
    );
  }