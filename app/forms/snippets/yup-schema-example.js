export const yupSchemaExample = `import * as Yup from 'yup'
// Object-based schema definition  
const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()`;
