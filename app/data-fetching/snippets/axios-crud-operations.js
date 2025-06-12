export const axiosCrudOperations = `// All operations return data directly
const { data } = await axios.post('/api/todos', newTodo)
const { data } = await axios.put(\`/api/todos/\${id}\`, updates)
const { data } = await axios.patch(\`/api/todos/\${id}\`, { completed: true })
await axios.delete(\`/api/todos/\${id}\`)`;
