export const formApiComparison = {
  reactHookForm: `// Destructured API from useForm hook
const {
  register,           // Connect inputs to form
  handleSubmit,       // Form submission handler
  formState: {        // Form state object
    errors,           // Validation errors
    isSubmitting,     // Submission state
    isValid           // Form validity
  },
  reset,              // Reset form
  setValue,           // Set field value
  getValues          // Get current values
} = useForm<FormData>({
  resolver: zodResolver(schema),
  mode: 'onChange'
})`,
  formik: `// Single formik object with all methods and state
const formik = useFormik<FormValues>({
  initialValues: { name: '', email: '' },
  validationSchema,
  onSubmit: (values) => { /* submit logic */ }
})

// Access everything through formik object:
formik.values          // Current form values
formik.errors          // Validation errors
formik.touched         // Field touch state
formik.handleChange    // Change handler
formik.handleBlur      // Blur handler
formik.handleSubmit    // Submit handler
formik.isSubmitting    // Submission state
formik.isValid         // Form validity
formik.resetForm       // Reset form`
};
