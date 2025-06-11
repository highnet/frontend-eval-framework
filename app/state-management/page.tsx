"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { KeyDifferences } from "@/components/key-differences"
import { ContextApiExample } from "@/components/examples/context-api-example"
import { ReduxExample } from "@/components/examples/redux-example"
import { ZustandExample } from "@/components/examples/zustand-example"

export default function StateManagementPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-6">State Management</h1>
      
      <p className="mb-4">
        This section discusses how you will manage application-wide state that is shared across many components.
      </p>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What it addresses:</h2>
        <p>
          Centralizing and managing data that needs to be accessible by multiple components, 
          often across different parts of the component tree, ensuring consistency and reactivity.
        </p>
      </div>
      
      <Tabs defaultValue="context" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="context">Context API</TabsTrigger>
          <TabsTrigger value="redux">Redux Toolkit</TabsTrigger>
          <TabsTrigger value="zustand">Zustand</TabsTrigger>
        </TabsList>
        
        <TabsContent value="context" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Context API (React)</h3>
          <p>
            React's built-in way to pass data through the component tree without having to pass props 
            down manually at every level.
          </p>
          <p className="mb-2">
            <a 
              href="https://react.dev/learn/passing-props-with-context" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              React Docs - Context
            </a>
          </p>          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Good for small to medium-sized applications or for less frequently updated global state. 
              Can lead to re-renders for consuming components if not optimized.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <ContextApiExample />
          </div>
            <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">TypeScript Setup & Context Creation:</h4>
              <CodeBlock 
                language="typescript" 
                code={`"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react'

// Define your types
interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoContextType {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

// Create Context with null as default
const TodoContext = createContext<TodoContextType | null>(null)

// Custom hook for consuming context
const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  return context
}`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Provider Implementation:</h4>
              <CodeBlock 
                language="tsx" 
                code={`interface TodoProviderProps {
  children: ReactNode
}

function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React Context", completed: false },
    { id: 2, text: "Build a todo app", completed: true },
    { id: 3, text: "Compare state management", completed: false }
  ])

  // Wrap actions in useCallback to prevent unnecessary re-renders
  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }, [])

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }, [])

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [])

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  }), [todos, addTodo, toggleTodo, deleteTodo])

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Consuming Context in Components:</h4>
              <CodeBlock 
                language="tsx" 
                code={`// Todo item component
function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useTodoContext()
  
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-4 w-4"
      />
      <span className={\`flex-1 \${todo.completed ? 'line-through text-gray-500' : ''}\`}>
        {todo.text}
      </span>
      <button 
        onClick={() => deleteTodo(todo.id)}
        className="h-8 w-8 p-0"
      >
        Delete
      </button>
    </div>
  )
}

// Add todo form component
function AddTodoForm() {
  const { addTodo } = useTodoContext()
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-3 py-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  )
}

// Main component that uses the context
function TodoList() {
  const { todos } = useTodoContext()

  return (
    <div className="space-y-4">
      <AddTodoForm />
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

// Usage in App - Provider must wrap consuming components
export function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  )
}`} 
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="redux" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Redux Toolkit</h3>
          <p>
            A predictable state container for JavaScript apps. Redux Toolkit is the official, opinionated, 
            batteries-included toolset for efficient Redux development.
          </p>
          <p className="mb-2">
            <a 
              href="https://redux.js.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Redux Official Documentation
            </a>
            {" | "}
            <a 
              href="https://redux-toolkit.js.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Redux Toolkit Official Documentation
            </a>
          </p>          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              Provides a centralized store for global state, with a strict unidirectional data flow. 
              Best for complex applications with large and frequently changing state. Redux Toolkit simplifies boilerplate.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <ReduxExample />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Installation & Store Setup:</h4>
              <CodeBlock 
                language="bash" 
                code={`# Install Redux Toolkit and React Redux
npm install @reduxjs/toolkit react-redux
# or
pnpm add @reduxjs/toolkit react-redux

# TypeScript types are included with these packages`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Creating Slices with Redux Toolkit:</h4>
              <CodeBlock 
                language="typescript" 
                code={`// store/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [
    { id: 1, text: "Learn Redux Toolkit", completed: false },
    { id: 2, text: "Build a todo app", completed: true },
    { id: 3, text: "Compare state management", completed: false }
  ]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // Redux Toolkit uses Immer under the hood, so we can "mutate" state
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      state.todos.unshift(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

// Export actions
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

// Export reducer
export default todoSlice.reducer`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Store Configuration:</h4>
              <CodeBlock 
                language="typescript" 
                code={`// store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  // Redux DevTools are enabled by default in development
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Type-safe hooks for TypeScript
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Provider Setup:</h4>
              <CodeBlock 
                language="tsx" 
                code={`// app/layout.tsx or App.tsx
import { Provider } from 'react-redux'
import { store } from './store'

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}

// Or for a regular React app
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Using Redux in Components:</h4>
              <CodeBlock 
                language="tsx" 
                code={`// components/TodoItem.tsx
import { useAppSelector, useAppDispatch } from '../store'
import { toggleTodo, deleteTodo } from '../store/todoSlice'

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean }
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useAppDispatch()

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="h-4 w-4"
      />
      <span className={\`flex-1 \${todo.completed ? 'line-through text-gray-500' : ''}\`}>
        {todo.text}
      </span>
      <button 
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="h-8 w-8 p-0 text-red-500"
      >
        Delete
      </button>
    </div>
  )
}

// components/TodoList.tsx
import { useAppSelector } from '../store'

function TodoList() {
  const todos = useAppSelector(state => state.todos.todos)

  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {todos.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  )
}

// components/AddTodo.tsx  
import { useState } from 'react'
import { useAppDispatch } from '../store'
import { addTodo } from '../store/todoSlice'

function AddTodo() {
  const dispatch = useAppDispatch()
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text.trim()))
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-3 py-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  )
}`} 
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="zustand" className="space-y-4 mt-4">
          <h3 className="text-lg font-medium">Zustand</h3>
          <p>
            A small, fast, and scalable bear-necessities state-management solution for React.
          </p>
          <p className="mb-2">
            <a 
              href="https://github.com/pmndrs/zustand" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Zustand GitHub Repository
            </a>
          </p>          <div className="mb-4">
            <h4 className="font-medium mb-1">Concept:</h4>
            <p>
              A lightweight and flexible alternative, offering a simplified API inspired by Redux, 
              but with less boilerplate and often preferred for its ease of use and performance for mid-sized applications.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Interactive Demo:</h4>
            <ZustandExample />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Installation & Basic Store:</h4>
              <CodeBlock 
                language="bash" 
                code={`# Install Zustand
npm install zustand
# or
pnpm add zustand

# TypeScript types are included`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Creating a Zustand Store:</h4>
              <CodeBlock 
                language="typescript" 
                code={`import { create } from 'zustand'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoStore {
  // State
  todos: Todo[]
  
  // Actions
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

// Create store with initial data
const useTodoStore = create<TodoStore>((set) => ({
  // Initial state
  todos: [
    { id: 1, text: "Learn Zustand", completed: false },
    { id: 2, text: "Build a todo app", completed: true },
    { id: 3, text: "Compare state management", completed: false }
  ],

  // Actions
  addTodo: (text) => {
    set((state) => ({
      todos: [
        { id: Date.now(), text, completed: false },
        ...state.todos
      ]
    }))
  },

  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }))
  },

  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }
}))

export default useTodoStore`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Advanced Store with Middleware:</h4>
              <CodeBlock 
                language="typescript" 
                code={`import { create } from 'zustand'
import { subscribeWithSelector, devtools, persist } from 'zustand/middleware'

interface TodoStore {
  todos: Todo[]
  theme: 'light' | 'dark'
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
  toggleTheme: () => void
}

// Store with multiple middleware for persistence and devtools
const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      subscribeWithSelector((set, get) => ({
        todos: [],
        theme: 'light',
        
        addTodo: (text: string) => {
          set((state) => ({
            todos: [
              { id: Date.now(), text, completed: false },
              ...state.todos
            ]
          }), false, 'addTodo') // Third parameter is action name for devtools
        },
        
        toggleTodo: (id: number) => {
          set((state) => ({
            todos: state.todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          }), false, 'toggleTodo')
        },
        
        deleteTodo: (id: number) => {
          set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
          }), false, 'deleteTodo')
        },
        
        toggleTheme: () => {
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light'
          }), false, 'toggleTheme')
        }
      })),
      {
        name: 'todo-storage', // Unique name for localStorage
        partialize: (state) => ({ todos: state.todos }), // Only persist todos
      }
    ),
    {
      name: 'todo-store', // Name for Redux DevTools
    }
  )
)

// Subscribe to specific state changes
useTodoStore.subscribe(
  (state) => state.todos,
  (todos) => console.log('Todos updated:', todos),
  {
    equalityFn: Object.is, // Only re-run if array reference changes
    fireImmediately: true,
  }
)`} 
              />
            </div>
              <div>
              <h4 className="font-medium mb-1">Using Zustand in Components:</h4>
              <CodeBlock 
                language="tsx" 
                code={`// Basic usage - subscribes to entire store
function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useTodoStore()
  
  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <div key={todo.id} className="flex items-center gap-3 p-3 rounded-lg border">
          <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="h-4 w-4"
          />
          <span className={\`flex-1 \${todo.completed ? 'line-through text-gray-500' : ''}\`}>
            {todo.text}
          </span>
          <button 
            onClick={() => deleteTodo(todo.id)}
            className="h-8 w-8 p-0 text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

// Optimized usage - subscribe to specific parts only
function TodoStats() {
  // Only re-renders when todos array changes
  const todos = useTodoStore((state) => state.todos)
  
  const stats = useMemo(() => ({
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length
  }), [todos])

  return (
    <div className="flex gap-2">
      <span>Total: {stats.total}</span>
      <span>Completed: {stats.completed}</span>
      <span>Active: {stats.active}</span>
    </div>
  )
}

// Custom hooks for reusable store logic
const useAddTodo = () => useTodoStore((state) => state.addTodo)
const useTodos = () => useTodoStore((state) => state.todos)

function AddTodoForm() {
  const addTodo = useAddTodo()
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-3 py-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  )
}

// Using with shallow comparison for object selections
import { shallow } from 'zustand/shallow'

function TodoApp() {
  const { todos, addTodo } = useTodoStore(
    (state) => ({ todos: state.todos, addTodo: state.addTodo }),
    shallow // Prevents re-renders when other state changes
  )

  return (
    <div className="space-y-4">
      <AddTodoForm />
      <TodoList />
      <TodoStats />
    </div>
  )
}

// No provider needed - direct usage!
export default function App() {
  return <TodoApp />
}`} 
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>      <KeyDifferences 
        title="Code Differences You'll Actually Write"
        differences={[
          {
            title: "Context API: React's Built-in Solution",
            description: "Native React state sharing mechanism with manual optimization",
            badges: ["Built-in", "No dependencies", "Manual optimization"],
            codeExamples: [
              {
                label: "Context Setup",
                code: `// Context creation and provider
const TodoContext = createContext<TodoContextType | null>(null)

function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React Context", completed: false }
  ])
  
  const addTodo = useCallback((text: string) => {
    setTodos(prev => [{ id: Date.now(), text, completed: false }, ...prev])
  }, [])
  
  // Must memoize to prevent unnecessary re-renders
  const value = useMemo(() => ({
    todos, addTodo, toggleTodo, deleteTodo
  }), [todos, addTodo, toggleTodo, deleteTodo])
  
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

// Custom hook for consuming context
const useTodos = () => {
  const context = useContext(TodoContext)
  if (!context) throw new Error('useTodos must be used within TodoProvider')
  return context
}`
              },
              {
                label: "Component Usage",
                code: `function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useTodos()
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input 
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            type="checkbox" 
          />
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

// Must wrap entire app in provider
function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  )
}`
              }
            ],            considerations: [
              "You have simple to moderate state sharing needs",
              "Want to avoid external dependencies",
              "State updates are not frequent",
              "Working on smaller applications",
              "Team prefers staying within React ecosystem",
              "Need to manually optimize re-renders with useMemo/useCallback"
            ]
          },
          {
            title: "Redux Toolkit: Predictable State Container",
            description: "Centralized store with time-travel debugging and predictable updates",
            badges: ["Predictable", "DevTools", "Mature", "Boilerplate"],
            codeExamples: [
              {
                label: "Store Setup",
                code: `// Slice definition
const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [], filter: 'all' },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // Immer allows "mutations"
      state.todos.unshift({
        id: Date.now(),
        text: action.payload,
        completed: false
      })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(t => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    }
  }
})

// Store configuration
const store = configureStore({
  reducer: { todos: todoSlice.reducer },
  devTools: true
})`
              },
              {
                label: "Component Usage",
                code: `function TodoList() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(state => state.todos.todos)
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input 
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            type="checkbox" 
          />
          <span>{todo.text}</span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

// Provider setup required
function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}`
              }
            ],
            considerations: [
              "Building large, complex applications",
              "You need predictable state updates and debugging",
              "Time-travel debugging is valuable for development",
              "Team has experience with Redux patterns",
              "You need middleware for async actions (RTK Query)",
              "Want excellent developer tools and debugging capabilities"
            ]
          },
          {
            title: "Zustand: Lightweight & Flexible",
            description: "Minimal boilerplate with maximum flexibility and great performance",
            badges: ["Lightweight", "Flexible", "Modern", "Performant"],
            codeExamples: [              {
                label: "Store Creation",
                code: `// Simple store definition
const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  filter: 'all',
  
  // Actions
  addTodo: (text) => set((state) => ({
    todos: [{ id: Date.now(), text, completed: false }, ...state.todos]
  })),
  
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  
  setFilter: (filter) => set({ filter })
}))

// Custom hooks for computed values (avoids infinite loops)
const useFilteredTodos = () => {
  return useTodoStore((state) => {
    const { todos, filter } = state
    return filter === 'all' ? todos : todos.filter(t => 
      filter === 'completed' ? t.completed : !t.completed
    )
  })
}

// With middleware for persistence and devtools
const useTodoStore = create<TodoStore>()(
  devtools(
    persist((set, get) => ({ /* store definition */ }), {
      name: 'todo-storage'
    })
  )
)`
              },              {
                label: "Component Usage",
                code: `function TodoList() {
  // Subscribe to specific parts of store with computed selectors
  const todos = useFilteredTodos() // Custom hook with selector
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input 
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            type="checkbox" 
          />
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

// No provider needed - direct usage
function App() {
  return <TodoList />
}

// Custom hooks for reusability and avoiding infinite loops
const useFilteredTodos = () => {
  return useTodoStore((state) => {
    const { todos, filter } = state
    switch (filter) {
      case 'completed': return todos.filter(t => t.completed)
      case 'active': return todos.filter(t => !t.completed)
      default: return todos
    }
  })
}

const useAddTodo = () => useTodoStore(state => state.addTodo)`
              }
            ],
            considerations: [
              "You want minimal boilerplate and setup",
              "Building small to medium-sized applications",
              "Team values simplicity and developer experience",
              "You need flexible state patterns",
              "Performance and bundle size matter",
              "Want built-in TypeScript support without extra configuration"
            ]
          }
        ]}
      />
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/data-fetching">Previous: Data Fetching</Link>
        </Button>
        <Button asChild>
          <Link href="/">Next: Summary</Link>
        </Button>
      </div>
    </div>
  )
}
