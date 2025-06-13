export const scssVariablesMixinsShort = `// _variables.scss
$primary: #3b82f6;
@mixin button-variant($bg-color) {
  background-color: $bg-color;
  &:hover { 
    background-color: darken($bg-color, 10%);
  }
}`;
