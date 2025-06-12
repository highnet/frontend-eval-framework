export const baseUiStyledButton = `import { clsx } from 'clsx';

const baseStyles = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2";
const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";

function MyButton() {
  return (
    <button className={clsx(baseStyles, primaryStyles)}>
      Base UI Button
    </button>
  );
}`;
