export const fetchErrorHandling = `try {
  const response = await fetch('/api/todos')
  if (!response.ok) throw new Error('Failed')
  const data = await response.json()
} catch (error) { console.error(error) }`;
