export const reactWithScssModules = `import styles from './Card.module.scss';

function Card({ title, children, onPrimary, badge }) {
  return (
    <div className={styles.card}>
      {badge && <span className={styles.badge}>{badge}</span>}
      
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      
      <div className={styles.content}>{children}</div>
      
      <div className={styles.actions}>
        <button 
          className={styles.primaryButton}
          onClick={onPrimary}
        >
          Primary Action
        </button>
      </div>
    </div>
  );
}

// Usage
<Card 
  title="Product Card" 
  badge="New"
  onPrimary={() => console.log('Primary clicked')}
>
  This card uses SCSS modules for scoped styling!
</Card>`;
