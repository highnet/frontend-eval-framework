export const axiosFetching = `import axios from 'axios';

// Basic GET request
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// With TypeScript and async/await
const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=8')
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message)
      // Access response data if available
      console.error('Response data:', error.response?.data)
    }
    throw error
  }
}

// Request interceptor for authentication
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`
  }
  return config
})

// Response interceptor for error handling
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)`;
