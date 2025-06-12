export const reactComponentWithClassnames = `import './Card.css';

function Card({ title, children, onPrimary, badge, status }) {
  const cardClasses = [
    'card',
    status === 'success' && 'card-success'
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {badge && <span className="card-badge">{badge}</span>}
      
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      
      <div className="card-body">{children}</div>
      
      <div className="card-footer">
        <button className="btn btn-primary" onClick={onPrimary}>
          Primary Action
        </button>
      </div>
    </div>
  );
}

// Usage
<Card 
  title="Success Story" 
  badge="New"
  status="success"
  onPrimary={() => console.log('clicked')}
>
  Your order has been processed!
</Card>`;
