export const typescriptIntegrationComparison = {
  reactHookForm: `// Automatic type inference from Zod schema
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18)
})

// TypeScript type automatically inferred
type FormData = z.infer<typeof schema>
// FormData = { name: string; email: string; age: number }

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema)
})

// Full type safety with no manual type definitions`,
  formik: `// Manual interface definition required
interface FormValues {
  name: string;
  email: string;
  age: number;
}

const validationSchema = Yup.object({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  age: Yup.number().min(18).required()
})

const formik = useFormik<FormValues>({
  initialValues: {
    name: '',
    email: '',
    age: 0
  },
  validationSchema
})

// Manual synchronization between schema and interface`,
};
