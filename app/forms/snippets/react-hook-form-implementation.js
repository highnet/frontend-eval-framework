export const reactHookFormImplementation = `const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
})
const onSubmit = (data) => console.log(data)`;
