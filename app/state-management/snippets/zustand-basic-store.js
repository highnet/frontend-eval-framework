export const zustandBasicStore = `import { create } from 'zustand'

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

export default useTodoStore`;
