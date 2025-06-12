export const formikStateManagement = `// All form state in formik object
const formik = useFormik({
  initialValues: { name: '', email: '', message: '' },
  onSubmit: (values) => { /* submit */ }
})`;
