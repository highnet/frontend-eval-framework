export const reactHookFormBasicSetup = `npm install react-hook-form @hookform/resolvers zod
// Schema-first validation with type inference
const schema = z.object({ name: z.string().min(2) })
const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) })
const onSubmit = (data) => console.log(data)`;
