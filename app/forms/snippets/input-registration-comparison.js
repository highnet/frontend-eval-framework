export const inputRegistrationComparison = {
  reactHookForm: `// React Hook Form - Minimal boilerplate
<Input
  id="name"
  {...register('name')}
  className={errors.name ? 'border-red-500' : ''}
/>

<Input
  id="email"
  type="email"
  {...register('email')}
  className={errors.email ? 'border-red-500' : ''}
/>`,
  formik: `// Formik - Explicit prop binding
<Input
  id="name"
  name="name"
  type="text"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.name}
  className={formik.touched.name && formik.errors.name ? 'border-red-500' : ''}
/>

<Input
  id="email"
  name="email"
  type="email"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.email}
  className={formik.touched.email && formik.errors.email ? 'border-red-500' : ''}
/>`,
};
