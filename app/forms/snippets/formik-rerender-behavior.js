export const formikReRenderBehavior = `// Formik re-renders entire component on each change
function MyForm() {
  const formik = useFormik({ initialValues: { name: '' } })
  return <input value={formik.values.name} onChange={formik.handleChange} />
}`;
