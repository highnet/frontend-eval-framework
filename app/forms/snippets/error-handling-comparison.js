export const errorHandlingComparison = {
  reactHookForm: `// Immediate error display on validation failure
const { register, formState: { errors } } = useForm({
  resolver: zodResolver(schema),
  mode: 'onChange'  // Validate on every change
})

// Simple error display - no touch state needed
{errors.name && (
  <p className="text-red-500 text-sm">
    {errors.name.message}
  </p>
)}

{errors.email && (
  <p className="text-red-500 text-sm">
    {errors.email.message}
  </p>
)}`,
  formik: `// Error display only after field is touched (blurred)
const formik = useFormik({
  validationSchema,
  validateOnMount: true
})

// Must check both touched AND errors
{formik.touched.name && formik.errors.name && (
  <p className="text-red-500 text-sm">
    {formik.errors.name}
  </p>
)}

{formik.touched.email && formik.errors.email && (
  <p className="text-red-500 text-sm">
    {formik.errors.email}
  </p>
)}`,
};
