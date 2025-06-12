export const fetchApiMutations = `// Creating a new todo with state management
const [mutationLoading, setMutationLoading] = useState({})

const createTodo = async (newTodo) => {
  setMutationLoading(prev => ({ ...prev, create: true }))
  setError(null)
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo)
    })
    
    if (!response.ok) {
      throw new Error('Failed to create todo')
    }
    
    const createdTodo = await response.json()
    // Update local state
    setTodos(prev => [createdTodo, ...prev])
    return createdTodo
  } catch (error) {
    console.error('Error creating todo:', error)
    setError(error.message)
    throw error
  } finally {
    setMutationLoading(prev => ({ ...prev, create: false }))
  }
}

// Updating a todo
const updateTodo = async (id, updates) => {
  setMutationLoading(prev => ({ ...prev, [\`update-\${id}\`]: true }))
  
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates)
    })
    
    if (!response.ok) {
      throw new Error('Failed to update todo')
    }
    
    const updatedTodo = await response.json()
    // Update local state
    setTodos(prev => prev.map(t => t.id === id ? updatedTodo : t))
    return updatedTodo
  } catch (error) {
    console.error('Error updating todo:', error)
    setError(error.message)
    throw error
  } finally {
    setMutationLoading(prev => ({ ...prev, [\`update-\${id}\`]: false }))
  }
}

// Deleting a todo
const deleteTodo = async (id) => {
  setMutationLoading(prev => ({ ...prev, [\`delete-\${id}\`]: true }))
  
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
      method: 'DELETE'
    })
    
    if (!response.ok) {
      throw new Error('Failed to delete todo')
    }
    
    // Update local state
    setTodos(prev => prev.filter(t => t.id !== id))
    return { success: true }
  } catch (error) {
    console.error('Error deleting todo:', error)
    setError(error.message)
    throw error
  } finally {
    setMutationLoading(prev => ({ ...prev, [\`delete-\${id}\`]: false }))
  }
}`;
