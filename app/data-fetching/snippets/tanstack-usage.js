export const tanstackUsage = `import { useQuery, useQueryClient } from '@tanstack/react-query';

// Query function
const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
  if (!response.ok) {
    throw new Error('Failed to fetch todos')
  }
  return response.json()
}

function TodoList() {
  const queryClient = useQueryClient()
  
  // useQuery hook with caching options
  const { 
    data: todos, 
    isLoading, 
    error, 
    isStale, 
    isFetching,
    refetch 
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 30000, // Consider data stale after 30 seconds
    gcTime: 300000,   // Keep in cache for 5 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  })

  const refetchTodos = () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
    // Alternative: refetch() - only refetches this specific query
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button onClick={refetchTodos}>
          Refetch Todos
        </button>
        {isFetching && <span>Fetching...</span>}
        {isStale && <span>Data is stale</span>}
      </div>
      
      {todos?.map(todo => (
        <div key={todo.id} className="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={todo.completed} 
            readOnly 
          />
          <span className={todo.completed ? 'line-through' : ''}>
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  )
}`;
