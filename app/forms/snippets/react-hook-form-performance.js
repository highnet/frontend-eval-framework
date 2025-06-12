export const reactHookFormPerformance = `// React Hook Form uses uncontrolled inputs
function MyForm() {
  const { register } = useForm()
  return <input {...register('email')} /> // No re-renders
}`;
