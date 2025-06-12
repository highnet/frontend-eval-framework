export const plainCssStyles = `/* styles/components.css */
:root {
  --primary-color: #3b82f6;
  --success-color: #10b981;
  --border-radius: 8px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover { background-color: #2563eb; }

.card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border: 1px solid #e5e7eb;
  position: relative;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-header { padding: 1.5rem 1.5rem 0.75rem; }
.card-title { margin: 0; font-size: 1.25rem; font-weight: 600; }
.card-body { padding: 1.5rem; }
.card-footer { padding: 0.75rem 1.5rem 1.5rem; display: flex; gap: 0.75rem; }

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}

.card-success { border-left: 4px solid var(--success-color); }`;
