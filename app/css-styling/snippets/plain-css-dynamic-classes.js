export const plainCssDynamicClasses = `function Card({ status }) {
  const cardClasses = ['card', status && \`card-\${status}\`]
    .filter(Boolean).join(' ')
  return <div className={cardClasses}>...</div>
}`;
