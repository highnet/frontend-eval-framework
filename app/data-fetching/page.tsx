import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { KeyDifferences } from "@/components/key-differences"
import { FetchApiExample } from "@/components/examples/fetch-api-example"
import { AxiosExample } from "@/components/examples/axios-example"
import { TanStackQueryExample } from "@/components/examples/tanstack-query-example"

export default function DataFetchingPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Data Fetching & Queries</h1>

      <p className="mb-4">This section deals with how your application requests and manages data from APIs, including both queries (reading data) and mutations (creating, updating, deleting data).</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>Handling asynchronous data requests, mutations, caching, revalidation, optimistic updates, and error management for API interactions.</p>
      </div>

      <Tabs defaultValue="fetch" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fetch">Fetch API</TabsTrigger>
          <TabsTrigger value="axios">Axios</TabsTrigger>
          <TabsTrigger value="react-query">TanStack Query</TabsTrigger>
        </TabsList>

        <TabsContent value="fetch" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Fetch API</h3>
          <p>The native JavaScript API for making network requests.</p>
          <p className="mb-2">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              MDN Web Docs - Fetch API
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Built-in to browsers, simple for basic requests, but requires manual handling of caching, loading states,
              and error handling.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <FetchApiExample />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">TypeScript Interface & Basic Setup:</h4>
              <CodeBlock
                language="typescript"
                code={`// Define Todo interface
interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}

// React state setup for managing todos
const [todos, setTodos] = useState<Todo[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const [mutationLoading, setMutationLoading] = useState<{ [key: string]: boolean }>({})
const [successMessage, setSuccessMessage] = useState<string | null>(null)`}
              />
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Fetching Data:</h4>
              <CodeBlock
                language="javascript"
                code={`// Basic fetch example
fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/await with error handling
const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
    if (!response.ok) {
      throw new Error('Failed to fetch todos')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error // Re-throw to handle in calling code
  }
}

// With loading states in React component
const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const loadTodos = async () => {
  setLoading(true)
  setError(null)
  try {
    const data = await fetchTodos()
    setTodos(data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}`}
              />
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Mutations (Create, Update, Delete):</h4>
              <CodeBlock
                language="javascript"
                code={`// Creating a new todo with state management
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
}`}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="axios" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Axios</h3>
          <p>A popular promise-based HTTP client for the browser and Node.js.</p>
          <p className="mb-2">
            <a
              href="https://github.com/axios/axios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Axios GitHub Repository
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Provides a more convenient API than `fetch`, with features like automatic JSON parsing, request/response
              interceptors, and better error handling.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <AxiosExample />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Installation & TypeScript Setup:</h4>
              <CodeBlock
                language="bash"
                code={`# Install axios
npm install axios
# or
pnpm add axios

# For TypeScript projects, types are included
# Define your data interfaces
interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}

interface ApiError {
  message: string
  status: number
}

// React state setup
const [todos, setTodos] = useState<Todo[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const [mutationLoading, setMutationLoading] = useState<{ [key: string]: boolean }>({})`}
              />
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Fetching Data:</h4>
              <CodeBlock
                language="javascript"
                code={`import axios from 'axios';

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
)`}
              />
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Mutations (Create, Update, Delete):</h4>
              <CodeBlock
                language="javascript"
                code={`import axios from 'axios';

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
}`}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="react-query" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">TanStack Query</h3>
          <p>
            A powerful data fetching and caching library for React (and other frameworks under TanStack). It handles
            server state, revalidation, optimistic updates, and more.
          </p>
          <p className="mb-2">
            <a
              href="https://tanstack.com/query/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              TanStack Query Official Documentation
            </a>
          </p>
          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Manages "server state" with intelligent caching, background re-fetching, and synchronization,
              significantly simplifying complex data flows.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <TanStackQueryExample />
          </div>
          
          <div className="space-y-4">          
            <div>
              <h4 className="font-medium mb-1">Installation & Dependencies:</h4>
              <CodeBlock
                language="bash"
                code={`# Install TanStack Query
npm install @tanstack/react-query
# or
pnpm add @tanstack/react-query

# Install DevTools for development (optional but recommended)
npm install @tanstack/react-query-devtools
# or  
pnpm add @tanstack/react-query-devtools

# TypeScript interfaces
interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}`}
              />
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Setup QueryProvider with DevTools:</h4>
              <CodeBlock
                language="jsx"
                code={`"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

export function QueryProvider({ children }) {
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000, // 1 minute
          gcTime: 10 * 60 * 1000, // 10 minutes (garbage collection time)
          retry: 3,
          refetchOnWindowFocus: false,
          refetchOnReconnect: true,
        },
        mutations: {
          retry: 1,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}`}
              />
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Using in Layout/App:</h4>
              <CodeBlock
                language="jsx"
                code={`// app/layout.tsx
import { QueryProvider } from "@/components/query-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {/* Your app components */}
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}`}
              />
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Component Usage:</h4>
              <CodeBlock
                language="jsx"
                code={`import { useQuery, useQueryClient } from '@tanstack/react-query';

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
}`}
              />
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Mutations with useMutation:</h4>
              <CodeBlock
                language="jsx"
                code={`import { useMutation, useQueryClient } from '@tanstack/react-query';

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
}`}
              />
            </div>

          </div>
        </TabsContent>
      </Tabs>



      <KeyDifferences 
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: "Fetch API: Manual State Management",
            description: "Native browser API requiring manual handling of loading, errors, and caching",
            badges: ["Native", "No dependencies", "Manual control"],
            codeExamples: [
              {
                label: "Basic Data Fetching",
                code: `const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const fetchTodos = async () => {
  setLoading(true)
  setError(null)
  try {
    const response = await fetch('/api/todos')
    if (!response.ok) throw new Error('Failed to fetch')
    const data = await response.json()
    setTodos(data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}`
              },
              {
                label: "Creating Data (Mutations)",
                code: `const createTodo = async (newTodo) => {
  setMutationLoading(prev => ({ ...prev, create: true }))
  try {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
    if (!response.ok) throw new Error('Failed to create')
    const created = await response.json()
    setTodos(prev => [created, ...prev]) // Manual state update
  } catch (error) {
    setError(error.message)
  } finally {
    setMutationLoading(prev => ({ ...prev, create: false }))
  }
}`
              }
            ],
            considerations: [
              "You want zero dependencies and native browser support",
              "Building simple applications with basic data needs",
              "You prefer manual control over caching and state",
              "Working with modern browsers only",
              "Team is comfortable with manual error handling and loading states"
            ]
          },
          {
            title: "Axios: Enhanced HTTP Client",
            description: "Feature-rich HTTP client with interceptors, automatic transforms, and better error handling",
            badges: ["Interceptors", "Auto-transforms", "Battle-tested"],
            codeExamples: [
              {
                label: "Setup with Interceptors",
                code: `import axios from 'axios'

// Global setup
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`
  }
  return config
})

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)`
              },
              {
                label: "Simplified Data Fetching",
                code: `const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)

const fetchTodos = async () => {
  setLoading(true)
  try {
    const { data } = await axios.get('/api/todos')
    setTodos(data) // Automatic JSON parsing
  } catch (error) {
    const message = axios.isAxiosError(error) 
      ? error.response?.data?.message || error.message 
      : 'Failed to fetch'
    setError(message)
  } finally {
    setLoading(false)
  }
}`
              },
              {
                label: "CRUD Operations",
                code: `// Create
const { data } = await axios.post('/api/todos', newTodo)

// Update
const { data } = await axios.put(\`/api/todos/\${id}\`, updates)

// Partial update
const { data } = await axios.patch(\`/api/todos/\${id}\`, { completed: true })

// Delete
await axios.delete(\`/api/todos/\${id}\`)`
              }
            ],
            considerations: [
              "You need advanced features like request/response interceptors",
              "Working with complex API authentication flows",
              "You want automatic request/response transformations",
              "Team prefers a familiar, established library for CRUD operations",
              "Better error handling and debugging capabilities are important"
            ]
          },
          {
            title: "TanStack Query: Smart Data Management",
            description: "Intelligent caching, background updates, optimistic mutations, and automatic state management",
            badges: ["Smart caching", "Optimistic updates", "Auto-sync", "DevTools"],
            codeExamples: [
              {
                label: "Provider Setup",
                code: `import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}`
              },
              {
                label: "Automatic Data Fetching",
                code: `import { useQuery } from '@tanstack/react-query'

function TodoList() {
  const { 
    data: todos, 
    isLoading, 
    error, 
    isStale, 
    refetch 
  } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/todos').then(res => res.json()),
    staleTime: 30000, // Consider fresh for 30s
    refetchOnWindowFocus: false,
  })
  
  // No manual loading states needed!
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return <div>{/* Render todos */}</div>
}`
              },
              {
                label: "Optimistic Mutations",
                code: `import { useMutation, useQueryClient } from '@tanstack/react-query'

const queryClient = useQueryClient()

const createMutation = useMutation({
  mutationFn: (newTodo) => axios.post('/api/todos', newTodo),
  onMutate: async (newTodo) => {
    // Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: ['todos'] })
    
    // Snapshot previous value
    const previousTodos = queryClient.getQueryData(['todos'])
    
    // Optimistically update
    const optimisticTodo = { ...newTodo, id: Date.now() }
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
      )
    )
  },
  onError: (err, variables, context) => {
    // Rollback on error
    if (context?.previousTodos) {
      queryClient.setQueryData(['todos'], context.previousTodos)
    }
  }
})`
              }
            ],
            considerations: [
              "You need sophisticated caching and background updates",
              "Building data-heavy applications with frequent mutations",
              "Real-time synchronization and optimistic updates are important",
              "You want built-in loading states, error handling, and rollback logic",
              "Developer experience with automatic cache invalidation matters",
              "Complex data dependencies and server state management are required"
            ]
          }
        ]}
      />

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/forms">Previous: Forms</Link>
        </Button>
        <Button asChild>
          <Link href="/state-management">Next: State Management</Link>
        </Button>
      </div>
    </div>
  )
}
