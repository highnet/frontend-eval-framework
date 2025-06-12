export const reactHookFormInstallationSetup = `const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password too short')
})`;
