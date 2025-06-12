export const formikFormImplementation = `const formik = useFormik({
  initialValues: { email: '', password: '' },
  validationSchema,
  onSubmit: (values) => console.log(values)
})`;
