export const formikBasicSetup = `npm install formik yup
// Setup with validation schema
const formik = useFormik({
  initialValues: { name: '', message: '' },
  validationSchema: Yup.object({ name: Yup.string().required() })
})`;
