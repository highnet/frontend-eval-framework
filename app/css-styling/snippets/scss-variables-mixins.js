export const scssVariablesMixins = `// styles/_variables.scss
$bg-color: #3b82f6;
$border-radius: 8px;
$shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
$shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);

// mixins/_buttons.scss
@mixin button-variant($bg-color) {
  background-color: $bg-color;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: $border-radius;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: darken($bg-color, 10%);
    transform: translateY(-1px);
  }
}

@mixin card-hover {
  &:hover {
    box-shadow: $shadow-md;
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
}`;
