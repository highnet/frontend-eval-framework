export const validationLibraryComparison = {
  reactHookForm: `// React Hook Form with Zod
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Invalid email address'),
})

// Type automatically inferred from schema
type FormData = z.infer<typeof schema>

const { register, handleSubmit } = useForm<FormData>({
  resolver: zodResolver(schema)
})`,
  formik: `// Formik with Yup
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
})

// Manual type definition required
interface FormValues {
  name: string;
  email: string;
}

const formik = useFormik<FormValues>({
  validationSchema
})`,
};
