export const tailwindComponentStyling = `function Button({ variant = 'primary', children }) {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium'
  const variants = { primary: 'bg-blue-600 text-white hover:bg-blue-700' }
  return <button className={\`\${baseClasses} \${variants[variant]}\`}>
    {children}`;
