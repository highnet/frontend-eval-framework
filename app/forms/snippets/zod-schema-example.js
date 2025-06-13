export const zodSchemaExample = `import { z } from 'zod'
// TypeScript-first schema definition
// By default, types are required unless specified as optional
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})`;
