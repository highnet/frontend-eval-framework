export const zodSchemaExample = `import { z } from 'zod'
// TypeScript-first schema definition
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})`;
