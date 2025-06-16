export const zustandBasicStore = `import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoStore {
  // State
  zustandTodos: Todo[]
  
  // Actions
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

// Create store with initial data and devtools
const useTodoStore = create<TodoStore>()(
  devtools(
    (set) => ({      // Initial state
      zustandTodos: [
        { id: 1, text: "Learn Zustand", completed: false },
        { id: 2, text: "Build a todo app", completed: true },
        { id: 3, text: "Compare state management", completed: false }
      ],

      // Actions
      addTodo: (text) => {        set((state) => ({
          zustandTodos: [
            { id: Date.now(), text, completed: false },
            ...state.zustandTodos
          ]
        }), false, 'addTodo') // Third parameter is action name for devtools},

  toggleTodo: (id) => {    set((state) => ({
      zustandTodos: state.zustandTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }), false, 'toggleTodo')
  },

  deleteTodo: (id) => {    set((state) => ({
      zustandTodos: state.zustandTodos.filter(todo => todo.id !== id)
    }), false, 'deleteTodo')
  }
}),
{
  name: '🐻 Zustand Store', // Name that appears in Redux DevTools
}
)

export default useTodoStore`;
