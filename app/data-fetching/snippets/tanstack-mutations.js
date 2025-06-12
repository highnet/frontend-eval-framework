export const tanstackMutations = `import { useMutation, useQueryClient } from '@tanstack/react-query';

// Mutation functions
const createTodo = async (newTodo) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo)
  })
  if (!response.ok) throw new Error('Failed to create todo')
  return response.json()
}

const updateTodo = async ({ id, ...updates }) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...updates })
  })
  if (!response.ok) throw new Error('Failed to update todo')
  return response.json()
}

const deleteTodo = async (id) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
    method: 'DELETE'
  })
  if (!response.ok) throw new Error('Failed to delete todo')
}

function TodoMutationExample() {
  const queryClient = useQueryClient()
  const [newTodoTitle, setNewTodoTitle] = useState("")

  // Create mutation with optimistic updates
  const createMutation = useMutation({
    mutationFn: createTodo,
    onMutate: async (variables) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['todos'] })
      
      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(['todos'])
      
      // Optimistically update with a temporary ID
      const optimisticTodo = { ...variables, id: Date.now() }
      queryClient.setQueryData(['todos'], old => 
        old ? [optimisticTodo, ...old] : [optimisticTodo]
      )
      
      return { previousTodos, optimisticTodo }
    },
    onSuccess: (data, variables, context) => {
      // Replace optimistic update with real data
      queryClient.setQueryData(['todos'], old =>
        old?.map(todo => 
          todo.id === context?.optimisticTodo.id ? data : todo
        ) ?? []
      )
      setNewTodoTitle("")
    },
    onError: (error, variables, context) => {
      // Rollback optimistic update
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos)
      }
    },
  })

  // Update mutation with optimistic updates
  const updateMutation = useMutation({
    mutationFn: updateTodo,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] })
      
      const previousTodos = queryClient.getQueryData(['todos'])
      
      // Optimistically update
      queryClient.setQueryData(['todos'], old =>
        old?.map(todo => 
          todo.id === variables.id ? { ...todo, ...variables } : todo
        )
      )
      
      return { previousTodos }
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos)
      }
    },
    onSettled: () => {
      // Optionally refetch after error or success
      // queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] })
      
      const previousTodos = queryClient.getQueryData(['todos'])
      
      // Optimistically remove
      queryClient.setQueryData(['todos'], old =>
        old?.filter(todo => todo.id !== id)
      )
      
      return { previousTodos }
    },
    onError: (err, id, context) => {
      // Rollback on error
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos)
      }
    },
  })

  return (
    <div className="space-y-4">
      {/* Create Todo */}
      <div className="flex gap-2">
        <input
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Enter new todo..."
        />
        <button 
          onClick={() => createMutation.mutate({
            title: newTodoTitle,
            completed: false,
            userId: 1
          })}
          disabled={createMutation.isPending || !newTodoTitle.trim()}
        >
          {createMutation.isPending ? 'Creating...' : 'Create Todo'}
        </button>
      </div>
      
      {/* Mutation status */}
      {createMutation.isError && (
        <div className="text-red-600">
          Error creating: {createMutation.error.message}
        </div>
      )}
      {updateMutation.isError && (
        <div className="text-red-600">
          Error updating: {updateMutation.error.message}
        </div>
      )}
      {deleteMutation.isError && (
        <div className="text-red-600">
          Error deleting: {deleteMutation.error.message}
        </div>
      )}
    </div>
  )
}`;
