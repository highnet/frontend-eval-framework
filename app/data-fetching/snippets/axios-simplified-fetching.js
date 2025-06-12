export const axiosSimplifiedFetching = `const { data } = await axios.get('/api/todos')
setTodos(data) // Automatic JSON parsing

// Auto error handling with interceptors
axios.isAxiosError(error) // Built-in error detection`;
