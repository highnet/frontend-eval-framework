export const zustandComponentUsage = `// Basic usage - subscribes to entire store
function TodoList() {
  const { zustandTodos, toggleTodo, deleteTodo } = useTodoStore()
  
  return (
    <div className="space-y-2">
      {zustandTodos.map(todo => (
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
  const todos = useTodoStore((state) => state.zustandTodos)
  
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
const useTodos = () => useTodoStore((state) => state.zustandTodos)

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
  const { zustandTodos, addTodo } = useTodoStore(
    (state) => ({ zustandTodos: state.zustandTodos, addTodo: state.addTodo }),
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
}`;
