export const scssComponentUsage = `import styles from './Button.module.scss'

function Button({ variant = 'primary', children }) {
  return <button className={\`\${styles.btn} \${styles[variant]}\`}>
    {children}`;
