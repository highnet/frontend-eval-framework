export const formikBasicSetup = `// Setup with validation schema
const formik = useFormik({
  initialValues: { name: '', message: '' },
  validationSchema: Yup.object({ name: Yup.string().required() })
})`;
