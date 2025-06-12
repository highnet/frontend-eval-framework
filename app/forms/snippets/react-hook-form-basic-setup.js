export const reactHookFormBasicSetup = `// Schema-first validation with type inference
const schema = z.object({ name: z.string().min(2) })
const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) })
const onSubmit = (data) => console.log(data)`;
