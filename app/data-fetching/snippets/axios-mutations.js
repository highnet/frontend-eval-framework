export const axiosMutations = `import axios from 'axios';
const [mutationLoading, setMutationLoading] = useState({})

// Creating a new todo with state management
const createTodo = async (newTodo) => {
  setMutationLoading(prev => ({ ...prev, create: true }))
  setError(null)
  
  try {
    const response = await axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
    
    // Update local state
    setTodos(prev => [response.data, ...prev])
    setSuccessMessage("Todo created successfully!")
    return response.data
  } catch (error) {
    const errorMessage = axios.isAxiosError(error) 
      ? error.response?.data?.message || error.message 
      : 'Failed to create todo'
    setError(errorMessage)
    throw error
  } finally {
    setMutationLoading(prev => ({ ...prev, create: false }))
  }
}

// Updating a todo
const updateTodo = async (id, updates) => {
  setMutationLoading(prev => ({ ...prev, [\`update-\${id}\`]: true }))
  
  try {
    const response = await axios.put<Todo>(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, updates)
    
    // Update local state
    setTodos(prev => prev.map(t => t.id === id ? response.data : t))
    return response.data
  } catch (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message
      : 'Failed to update todo'
    setError(errorMessage)
    throw error
  } finally {
    setMutationLoading(prev => ({ ...prev, [\`update-\${id}\`]: false }))
  }
}

// Partial update with PATCH
const patchTodo = async (id, updates) => {
  try {
    const response = await axios.patch<Todo>(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, updates)
    
    // Update local state
    setTodos(prev => prev.map(t => t.id === id ? { ...t, ...response.data } : t))
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Patch failed:', error.response?.data || error.message)
    }
    throw error
  }
}

// Deleting a todo
const deleteTodo = async (id) => {
  setMutationLoading(prev => ({ ...prev, [\`delete-\${id}\`]: true }))
  
  try {
    await axios.delete(\`https://jsonplaceholder.typicode.com/todos/\${id}\`)
    
    // Update local state
    setTodos(prev => prev.filter(t => t.id !== id))
    return { success: true }
  } catch (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message
      : 'Failed to delete todo'
    setError(errorMessage)
    throw error
  } finally {
    setMutationLoading(prev => ({ ...prev, [\`delete-\${id}\`]: false }))
  }
}`;
