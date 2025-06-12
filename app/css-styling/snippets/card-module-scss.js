export const cardModuleScss = `// components/Card/Card.module.scss
@import '../../styles/variables';
@import '../../mixins/buttons';

.card {
  background: white;
  border-radius: $border-radius;
  box-shadow: $shadow-sm;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  position: relative;
  @include card-hover;
}

.header {
  margin-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.75rem;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.content {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 0.75rem;
}

.primaryButton {
  @include button-variant($primary-color);
}

.badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: $primary-color;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}`;
